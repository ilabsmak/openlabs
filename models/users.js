module.exports = {
	add_user: function(query){
	var pg = require('pg');
	var conString = "postgres://postgres:ilabsx@10.120.5.243/stuff";
	 pg.connect(conString, function(err, client, done) {
	 client.query("INSERT INTO users(email,first_name,last_name,password) values($1,$2,$3,$4)", [email,firstname,lastname,password],function(){ 
	   done();
		});
	
	console.log('Done');
	res.redirect('/users');
});
	}

	get_user: function(email){
		var pg = require('pg');
	    var conString = "postgres://postgres:ilabsx@10.120.5.243/stuff";
		 pg.connect(conString, function(err, client, done) {
		 var query1 = client.query("SELECT * FROM users WHERE email=$1 ;",[email]);
		 query1.on('row', function(row) {
            results.push(row);
        });

        
        query1.on('end', function() {
            client.end();
            return res.json(results);
        });






	}

	get_users: function(query){
		var pg = require('pg');
	    var conString = "postgres://postgres:ilabsx@10.120.5.243/stuff";
		 pg.connect(conString, function(err, client, done) {
		 var query1 = client.query("SELECT * FROM users ORDER BY id ASC;");
		 query1.on('row', function(row) {
            results.push(row);
        });

       
        query1.on('end', function() {
            client.end();
            return res.json(results);
        });



	}

	update_user: function(query,query) {
		var pg = require('pg');
	    var conString = "postgres://postgres:ilabsx@10.120.5.243/stuff";
		 pg.connect(conString, function(err, client, done) {
		 client.query("UPDATE items SET text=($1), complete=($2) WHERE id=($3)", [data.text, data.complete, id]);

	

	}

	delete_user: function(query) {
		var pg = require('pg');
	    var conString = "postgres://postgres:ilabsx@10.120.5.243/stuff";
		 pg.connect(conString, function(err, client, done) {
		 client.query("DELETE FROM items WHERE id=($1)", [id]);


	}
}