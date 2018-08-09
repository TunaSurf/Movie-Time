module.exports = (commandKeys) => {
  return {
    label: 'File',
    submenu: [
      {
        label: 'Preferences...',
        accelerator: commandKeys['window:preferences'],
        click() {
          execCommand('window:preferences');
        }
      },
      {
        label: 'Quit',
        role: 'close'
      }
    ]
  };
};