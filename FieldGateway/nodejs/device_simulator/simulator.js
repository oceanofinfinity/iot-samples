'use strict';
var request = require('request');

let deviceUri = '{device_address}'; // gateway default is localhost
let port = '{port}'; // gateway default is 8080 and set in gateway.json file for receiver.js module

setInterval(() => {
    var data = {
        deviceId : "Id",
        deviceName : "Name",
        deviceType : "Sensor",
        data : {
            obsTime : new Date().toLocaleString(),
            windSpeed : (Math.random() * (15 - 8) + 8).toString(),
            location : { latitude : '47.640568390488625' , longitude : '-122.1293731033802' }
        }
    };

    var options = {
        url: `http://{deviceUri}:{port}/messages`,
        method: 'POST',
        headers: {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log(options.body);
    request(options,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        });
    console.log('Sending Simulated Device Message.')
}, 2000);

