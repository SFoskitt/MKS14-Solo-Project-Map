(function(){

	window.app = {
		scoreInfo:[],
		server: '127.0.0.1:3000',
		init: function(){

		},
		send: function(data){
		// 	$.ajax({
		// 	  url: app.server,
		// 	  type: 'POST',
		// 	  data: JSON.stringify(data),
		// 	  contentType: 'application/json',
		// 	  success: function (data) {
		// 	  	app.fetch()
		// 	    console.log('chatterbox: Message sent');
		// 	  },
		// 	  error: function (data) {
		// 	    console.error('chatterbox: Failed to send message');
		// 	  }
		// 	});
		},

		map: function(){
			var map = L.map('map').setView([30.2697005,-97.7425659], 15);

			L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
				type: 'map',
				ext: 'jpg',
				attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				subdomains: '1234'
			}).addTo(map);

			var marker = L.marker([30.2697005,-97.7425659]).addTo(map);
		},

		fetch: function(){
			$.ajax({
			  url: app.server,
			  type: 'GET',
			  // data: {'order': '-restname'},
			  contentType: 'application/json',
			  success: function (data) {
			  	console.log(data);
			    
			  	// app.populateMarkers(data)
			  	// app.populateZips(data)
			  
			  },
			  error: function (data) {
			    console.error('chatterbox: Failed to retrieve');
			  }
			});
		},

		populateMarkers: function(data){
			// app.clearMessages()

			// for (var i=0;i<data.results.length;i++){
			//     	if (data.results[i].roomname===$("#roomSelect option:selected").text()){
			//     		app.addMessage(data.results[i])
			//     	}
			//     }
		},

		clearMessages: function(message){
			// $("#chats").empty()
		},

		addMessage: function(message){
			// var user = message.username
			// var chat = "<div class='chat'><div class='username "+user+"'>"+user+"</div><div class='text'>"+message.text+"</div></div>"
			// $("#chats").append(chat)
		},

		populateZips:function(data){
			  var rooms=[]

			    for (var i=0;i<data.results.length;i++){
			    	rooms.push(data.results[i].roomname)
			    }
			    
			    for (var i=0;i<rooms.length;i++){
		    		if (app.existingRooms.indexOf(rooms[i]) ===-1){
				    	app.addRoom(rooms[i])
				    	app.existingRooms.push(rooms[i])		    		
		    		}
			    }

		},

		addFriend: function(context){
			var classHolder=$(context).attr('class').split(" ")
			$("."+classHolder[1]).addClass("friend")
		},

		zipHandler: function(e){
			var zip = window.location.href.split('username=')[1];
			var message = {
				username: userName.slice(0,-1),
				text:$("#message").val(),
				roomname:$("#roomSelect option:selected").text()
			}
			app.send(message)
			e.preventDefault()
		}
	}

app.map()
// setInterval(function(){app.fetch()},3000)

	$(document).ready(function(){

		// $(document).on('click', '.username', function(){
		// 	var context=this
		// 	app.addFriend(context)
		// })

		$(".submit").click(function(){
			app.zipHandler();
			console.log("should go to zipHandler");
		})

		$("#roomSelect").change(function(){
				app.fetch()
			});
		
	})

})();



