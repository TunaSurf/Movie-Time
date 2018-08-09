const { app, shell } = require('electron');

module.exports = (showAbout) => {
  const submenu = [
    {
      label: `${app.getName()} Website`,
      click() { shell.openExternal('https://ChaseBurgess.com') }
    }
  ];

  if (process.platform !== 'darwin') {
    submenu.push(
      { type: 'separator' },
      {
        role: 'about',
        click() {
          showAbout();
        }
      }
    );
  }
  
  return {
    role: 'help',
    submenu
  };
};