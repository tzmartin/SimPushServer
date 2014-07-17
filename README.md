# Titanium SimPushServer

## Description

Titanium module to send mock remote notifications to the iOS simulator, using the [SimulatorRemoteNotifications](https://github.com/acoomans/SimulatorRemoteNotifications) library.

This module bypasses Apple's Push Service and embeds a mini server that listens for UDP packets containing JSON-formated payload.

**Note**: This module is receiving payloads (view logs), but crashing on ```didReceiveRemoteNotification```.  Needs further debugging.

### Usage

Download from the ```dist``` folder.

To access this module from JavaScript, you would do the following:

```
var SimPushServer = require("com.sp.simpushserver");
SimPushServer.start();

```

Then send a message from the command line to port ```9930```.

```
echo -n '{"foo":"bar"}' | nc -4u -w1 localhost 9930
``` 	

## Author

@tzmartin 

## License

MIT
