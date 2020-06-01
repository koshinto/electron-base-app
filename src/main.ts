import { app, App, BrowserWindow } from 'electron'
import path from 'path'

const isMac: boolean = process.platform === 'darwin'
const isDev: boolean = process.env.NODE_ENV === 'development' ? true : false
const fileURL: string = path.join(process.cwd(), '/public/index.html')

class MainWindow {
  private app: App
  private win: BrowserWindow | null = null

  constructor(app: App) {
    this.app = app
    this.app.on('ready', this.createWindow.bind(this))
    this.app.on('window-all-closed', this.windowAllClosed.bind(this))
    this.app.on('activate', this.activate.bind(this))
  }

  private createWindow() {
    this.win = new BrowserWindow({
      width: 1024,
      height: 768,
      webPreferences: {
        nodeIntegration: true
      }
    })
    this.win.on('closed', () => (this.win = null))
    if (isDev) {
      this.win.loadURL('http://localhost:8888/')
      this.win.webContents.openDevTools()
    } else {
      this.win.loadURL(`file:///${fileURL}`)
    }
  }

  private windowAllClosed() {
    if (!isMac) this.app.quit()
  }

  private activate() {
    if (this.win === null) this.createWindow()
  }
}

// Launch app
new MainWindow(app)
