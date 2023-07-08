const { app, BrowserWindow, screen } = require('electron')
// const path = require('path');  // 这里是需要打包本地路径文件时用的

let win = null;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  win = new BrowserWindow({
    width: Math.round(width * 0.8), // 设置宽度为屏幕宽度的80%
    height: Math.round(height * 0.8), // 设置高度为屏幕高度的80%
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true, // 允许在当前应用程序页面内打开链接
    },
  })

  win.loadURL('https://www.noiseblog.top') // 这里是打包任意网址，如需改为本地路径则需要删除这段或注解掉
  // const indexPath = path.join(__dirname, 'patch', 'index.html'); // 请确保将需要打包的文件夹命名为patch，并将index.html文件放置在其中
  // win.loadFile(indexPath);

  win.webContents.on('will-navigate', (event, url) => {
    event.preventDefault() // 阻止在新窗口中打开链接
    win.loadURL(url) // 在当前窗口中加载链接
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
