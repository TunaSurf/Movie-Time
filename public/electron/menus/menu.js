// Packages
const { app, dialog, Menu } = require('electron');

// Utilities
// const { getConfig } = require('../config');
// const { icon } = require('../config/paths');
const viewMenu = require('./menus/view');
const fileMenu = require('./menus/file');
const editMenu = require('./menus/edit');
const windowMenu = require('./menus/window');
const helpMenu = require('./menus/help');
const darwinMenu = require('./menus/darwin');
const getCommandKeys = require('../commandKeys');
const { execCommand } = require('../commands');
const appName = app.getName();
const appVersion = app.getVersion();

let menu_ = [];
const commandKeys = getCommandKeys();

exports.createMenu = () => {
  const showAbout = () => {
    dialog.showMessageBox({
      title: `About ${appName}`,
      message: `${appName} ${appVersion}`,
      detail: 'Created by Chase Burgess\nCopyright © 2018'
      //icon will go here as well
    });
  };

  const menu = [
    ...(process.platform === 'darwin' ? [darwinMenu(commandKeys, execCommand, showAbout)] : [fileMenu(commandKeys, execCommand)]),
    editMenu(),
    viewMenu(),
    windowMenu(),
    helpMenu(showAbout)
  ];

  return menu;
  console.log(menu);
};

exports.buildMenu = template => {
  menu_ = Menu.buildFromTemplate(template);
  return menu_;
};