const { BrowserWindow } = require('electron');
const path = require('path');
const Store = require('electron-store');

let configWin;

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

exports.setStore = () => {
  return store;
}

function createConfigWindow() {
  //Only open if not already opened
  if(!configWin){
    configWin = new BrowserWindow({
      title: 'Preferences',
      resizable: false
    });
    configWin.loadURL(`file://${path.join(__dirname, 'config.html')}`);
    configWin.on('closed', () => {
      configWin = null;
    });
  }
}

exports.openConfig = () => {
  return createConfigWindow();
}