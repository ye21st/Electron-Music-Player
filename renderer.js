// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('message', 'From Renderer')

    ipcRenderer.on('Reply', (event, arg) => {
        console.log(arg)

        let msg = document.getElementById('msg');
        msg.innerHTML = arg
    })
})
