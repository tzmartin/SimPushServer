var SimPushServer = require('com.sp.simpushserver');
SimPushServer.start(9930);

var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({text:'Ping me at port 9930'});
win.add(label);
win.open();