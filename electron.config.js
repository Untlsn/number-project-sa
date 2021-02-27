const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app
  .on('ready', createWindow)
  .on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  .on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })
