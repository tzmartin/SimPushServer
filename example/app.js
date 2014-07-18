// Set up notifications

if ((Ti.Platform.name === 'iPhone OS')) {
	Ti.API.info('registering for push notifications');
  
	Ti.Network.registerForPushNotifications({
		types: [
			Ti.Network.NOTIFICATION_TYPE_BADGE,
			Ti.Network.NOTIFICATION_TYPE_ALERT,
			Ti.Network.NOTIFICATION_TYPE_SOUND
		],
		success  : function(e) { alert('device token success'); },
		error    : function(e) { alert('deviceTokenError: ' + JSON.stringify(e, null, 4)); },
		callback : function(e) { alert(e); }
	});
	
	var SimPushServer = require('com.sp.simpushserver');
  SimPushServer.start(9930);
	
} else {
	Ti.API.info('Not supported on Android');
}


// Set up UI

var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({text:'Ping me at port 9930'});
win.add(label);
win.open();