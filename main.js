require('dotenv').config();

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const Store = require('electron-store');
const AppMenu = require('./menus/menu');

let win;

const store = new Store({
  defaults: {
    windowBounds: {
      position: {
        x: undefined,
        y: undefined
      },
      size: {
        width: 800,
        height: 600
      }
    }
  }
});

function createWindow() {
  let { size, position } = store.get('windowBounds');
  win = new BrowserWindow({ 
    width: size.width, 
    height: size.height,
    x: position.x,
    y: position.y,
    title: 'Movie Time',
    backgroundColor: '#EEEEEF',
    show: false  
  });

  win.on('resize', () => {
    let { width, height } = win.getBounds();
    store.set('windowBounds.size', { width, height });
  });

  win.on('move', () => {
      let { x, y } = win.getBounds();
      store.set('windowBounds.position', { x, y });
  });

  win.loadFile('index.html');

  win.on('ready-to-show', () => {
      win.show();
      win.focus();
  });
  
  win.on('closed', () => {
    win = null
  });

  const menu = AppMenu.createMenu();
  Menu.setApplicationMenu(AppMenu.buildMenu(menu));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});