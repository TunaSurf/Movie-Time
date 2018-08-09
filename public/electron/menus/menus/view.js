module.exports = () => {
  let submenu = [
    { role: 'resetzoom' },
    { role: 'zoomin' },
    { role: 'zoomout' },
    { type: 'separator' },
    { role: 'togglefullscreen' }
  ]

  if (process.env.NODE_ENV !== 'production') {
    submenu.unshift(
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' }
    )
  }

  return {
    label: 'View',
    submenu
  };
};