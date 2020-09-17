const { app, ipcMain, Menu, Tray, BrowserWindow } = require("electron");

const path = require("path");
const icon = path.join(__dirname, "icon.png");
const shell = require("electron").shell;

app.dock.hide();

let tray = undefined;
let window = undefined;

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow();
};

const showWindow = () => {
  const position = getWindowPosition();
  window.setPosition(position.x, position.y, false);
  window.show();
};

const getWindowPosition = () => {
  const windowBounds = window.getBounds();
  const trayBounds = tray.getBounds();
  const x = Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2);
  const y = Math.round(trayBounds.y + trayBounds.height + 4);
  return { x, y };
};

const contextMenu = Menu.buildFromTemplate([{ label: "Quit", role: "quit" }]);

const createTray = () => {
  tray = new Tray(icon);

  tray.on("click", (event) => {
    toggleWindow();
  });

  tray.on("drag-enter", (event) => {
    showWindow();
  });

  tray.on("right-click", (event) => tray.popUpContextMenu(contextMenu));
};

const createWindow = () => {
  window = new BrowserWindow({
    width: 500,
    height: 300,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
  });

  window.loadURL("https://minimum-mac-app.bubbleapps.io/version-test");
  window.on("blur", () => window.hide());

  // window.openDevTools();
};

app.on("ready", () => {
  createTray();
  createWindow();
});

app.on("certificate-error", function (event, webContents, url, error, certificate, callback) {
  event.preventDefault();
  callback(true);
});

app.on("web-contents-created", (e, contents) => {
  contents.on("new-window", (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  });
});

ipcMain.on("show-window", () => {
  showWindow();
});
