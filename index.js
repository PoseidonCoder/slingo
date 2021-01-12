const { app, BrowserWindow } = require("electron")

app.on("ready", ()=> {
    const window = new BrowserWindow({
        width: 400,
        height: 125,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.setAlwaysOnTop(true, 'screen')
    window.setMenu(null)
    window.loadFile("public/index.html")
})