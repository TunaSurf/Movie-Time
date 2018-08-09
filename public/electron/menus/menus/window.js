module.exports = () => {
  let submenu = [
    { role: 'minimize' },
    { role: 'close' }
  ]

  if (process.platform === 'darwin') {
    submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ]
  }

  return {
    role: 'window',
    submenu
  };
};