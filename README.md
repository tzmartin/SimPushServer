# Titanium SimPushServer

## Description

Titanium module to send mock remote notifications to the iOS simulator, using the [SimulatorRemoteNotifications](https://github.com/acoomans/SimulatorRemoteNotifications) library.

This module bypasses Apple's Push Service and embeds a mini server that listens for UDP packets containing JSON-formated payload.

**Note**: This module is receiving payloads (view logs), but crashing on ```didReceiveRemoteNotification```.  Needs further debugging.

### Build

Download the compiled version from the ```dist``` folder or compile your own using ```./build.py``` from the root directory.

### Usage

To access this module from JavaScript, you would do the following:

```
var SimPushServer = require("com.sp.simpushserver");
SimPushServer.start(9930);

```

Then send a message from the command line to port ```9930```.

```
echo -n '{"foo":"bar"}' | nc -4u -w1 localhost 9930
``` 	

## Additional info

Refer to [SimulatorRemoteNotifications](https://github.com/acoomans/SimulatorRemoteNotifications) library for additional details.

### Author

TZ Martin, Semantic Press - [@tzmartin](http://twitter.com/tzmartin) 

### License

The MIT License (MIT)

Copyright (c) 2014 [TZ Martin](http://twitter.com/tzmartin)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
