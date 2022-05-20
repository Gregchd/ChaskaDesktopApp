let { ipcRenderer } = require('electron');

function minimizeWindow() {
    ipcRenderer.send('minimizeWindow');
}
function maximizeWindow() {
    ipcRenderer.send('maximizeWindow');
}
function unmaximizeWindow() {
    ipcRenderer.send('unmaximizeWindow');
}
function closeWindow() {
    ipcRenderer.send('closeWindow');
}

// Event Listeners
document.getElementById('min-button').addEventListener('click', minimizeWindow);
document.getElementById('max-button').addEventListener('click', maximizeWindow);
document.getElementById('restore-button').addEventListener('click', unmaximizeWindow);
document.getElementById('close-button').addEventListener('click', closeWindow);

// TODO: MAKE THE MIDDLE BUTTON TOGGLE BETWEEN MAXIMIZE AND UNMAXIMAZE
//  function handleWindowControls() {
//      // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
//      toggleMaxRestoreButtons();
//      win.on('maximize', toggleMaxRestoreButtons);
//      win.on('unmaximize', toggleMaxRestoreButtons);
//      function toggleMaxRestoreButtons() {
//          if (win.isMaximized()) {
//              document.body.classList.add('maximized');
//          } else {
//              document.body.classList.remove('maximized');
//          }
//      }
//  }


