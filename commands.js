// const { openConfig } = require('./config');

const commands = {
  'window:preferences': () => {
    // openConfig();
  },
  'window:reload': focusedWindow => {
    focusedWindow && focusedWindow.rpc.emit('reload');
  },
  'window:reloadFull': focusedWindow => {
    focusedWindow && focusedWindow.reload();
  },
  'window:devtools': focusedWindow => {
    if (!focusedWindow) {
      return;
    }
    const webContents = focusedWindow.webContents;
    if (webContents.isDevToolsOpened()) {
      webContents.closeDevTools();
    } else {
      webContents.openDevTools({ mode: 'detach' });
    }
  },
  'zoom:reset': focusedWindow => {
    focusedWindow && focusedWindow.rpc.emit('reset fontSize req');
  },
  'zoom:in': focusedWindow => {
    focusedWindow && focusedWindow.rpc.emit('increase fontSize req');
  },
  'zoom:out': focusedWindow => {
    focusedWindow && focusedWindow.rpc.emit('decrease fontSize req');
  }
};

exports.execCommand = (command, focusedWindow) => {
  const fn = commands[command];
  if (fn) {
    fn(focusedWindow);
  }
};