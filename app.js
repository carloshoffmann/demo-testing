const express = require('express');
const app = express();
 
app.get('/', function(req, res) {

  res.status(200).json({ name: 'CHE' });

});
 
if (!module.parent) {
	console.log("starting app on port 10010");
	app.listen(10010);

	
}


module.exports = app; 


