var data = require("../data.json");

exports.addFriend = function(request, response) { 
	var newFriend = {"name": request.query.name, "description": request.query.description, "imageURL": "http://lorempixel.com/400/400people"}
	console.log("New Friend Added");
	data.friends.push(newFriend);
	response.render('index', data)
}
