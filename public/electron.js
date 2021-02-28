const electron = require("electron");
const { BrowserWindow, app } = electron;
const path = require("path");

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 950,
    height: 750,
    icon: '',
    title: 'Number partier'
  });
  mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
  mainWindow.on("closed", () => (mainWindow = null))
  mainWindow.setMenu(null)
  mainWindow.maximize()
  mainWindow.setSkipTaskbar(true)
}
app
  .on("ready", createWindow)
  .on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  })
  .on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
