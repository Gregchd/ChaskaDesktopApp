function connectSerialPort() {
    ipcRenderer.send('connectSerialPort');
    console.log('Connect button pressed');
}

function disconnectSerialPort() {
    ipcRenderer.send('disconnectSerialPort');
    console.log('Disconnect button pressed');
}

// Event Listeners
document.getElementById('connectBtn').addEventListener('click', connectSerialPort);
document.getElementById('disconnectBtn').addEventListener('click', disconnectSerialPort);


// let correct_port;
// const connectBtn = document.getElementById('connectBtn');
// const stopBtn = document.getElementById('off');
// connectBtn.onclick = getSerialPorts;

// async function getSerialPorts() {
//   const sp_list = await SerialPort.list().then((ports, err) => {
//     if (err) {
//       console.log("Error")
//       return
//     } else {
//       console.log("No Error")
//     }

//     if (ports.length === 0) {
//       console.log(ports.length);
//     }

//     return ports;
//   })

//   const serial_ports_list = sp_list.map(port => {
//     console.log(port);
//     return {
//       Port: port.path,
//       Creator: port.manufacturer
//     }
//   })

//   serial_ports_list.forEach(
//     function (port) {
//       if (port.Creator.includes('Arduino')) {
//         correct_port = port;
//       }
//       else
//         console.log("Arduino port not found.")
//     }
//   );
//   if (correct_port == null) correct_port = serial_ports_list[0];
//   serial_connection(correct_port.Port);

//   //return serial_ports_list;
// }


