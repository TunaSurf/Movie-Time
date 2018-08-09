module.exports = () => {
  let submenu = [
    { role: 'copy' },
    { role: 'paste' },
    { role: 'selectall' }
  ]

  if (process.platform === 'darwin') {
    submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [
          { role: 'startspeaking' },
          { role: 'stopspeaking' }
        ]
      }
    )
  }

  return {
    label: 'Edit',
    submenu
  };
};