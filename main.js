const { app, BrowserView, BrowserWindow } = require('electron')
const path = require('path')

const { autoUpdater } = require('electron-updater') 
const log = require('electron-log')

log.transports.file.resolvePath = () => path.join(`C:/Users/nfurundzic/Desktop/svelte/fuki-autoupdate/logs`, 'logs/main.log')

log.info('Hello log')

function createWindow() {
    const win = new BrowserWindow( {
        width: 500,
        height: 500
    })
    win.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready', () => {
    createWindow()

    autoUpdater.checkForUpdatesAndNotify()
})


autoUpdater.on('update-available', () => {
    log('update-available')
})

autoUpdater.on('download-progress', () => {
    log('download-progress')
})

autoUpdater.on('update-downloaded', () => {
    log('update-downloaded')
})

autoUpdater.on('checking-for-update', () => {
    log('hecking-for-update')
})