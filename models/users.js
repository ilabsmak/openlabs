module.exports = {
	add_user: function(data){
		var pg = require('pg');
		var conString = "postgres://openlabs:none@139.162.202.237/openlabs";
		pg.connect(conString, function(err, client, done) {
			var handleError = function(err) {
				if(!err) return false;
				console.log(err);
				if(client){
					done(client);
				}
				return true;
			};

			if(handleError(err)){
				return false;
			}else{
				client.query("INSERT INTO users(hash,firstname,lastname,email,password,birthday,gender,profession,affiliation,country,bio) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", data,function(err, result){
					if(handleError(err)){
						console.log(err);
						return false;
					}else{
						done();
						return true;
					}
				});
			}
		});
	},

	get_user: function(email,callback){
		var pg = require('pg');
	    var conString = "postgres://openlabs:none@139.162.202.237/openlabs";
	    pg.connect(conString, function(err, client, done) {
	    	var handleError = function(err) {
				if(!err) return false;
				if(client){
					done(client);
				}
				return true;
			};

			if(handleError(err)){
				return false;
			}else{
		    	var query = client.query("SELECT * FROM users WHERE email=$1",[email]);
		    	query.on('row', function(row, result){
		    		result.addRow(row);
		    	});

	        	query.on('end', function(result){
	        		//client.end();
	        		console.log('Result rows: '+result.rows.length);
	        		callback(result);
	            	//return result.rows.length;
	        	});
	        }
        });
	},

	get_users: function(query){
		var pg = require('pg');
	    var conString = "postgres://openlabs:none@139.162.202.237/openlabs";
	    pg.connect(conString, function(err, client, done) {
	    	var query1 = client.query("SELECT * FROM users ORDER BY id ASC;");
	    	query1.on('row', function(row) {
	    		results.push(row);
        	});

	        query1.on('end', function() {
	            client.end();
	            return res.json(results);
	        });
	    });
	},

	update_user: function(query,query) {
		var pg = require('pg');
	    var conString = "postgres://openlabs:none@139.162.202.237/openlabs";
	    pg.connect(conString, function(err, client, done) {
	    	client.query("UPDATE items SET text=($1), complete=($2) WHERE id=($3)", [data.text, data.complete, id]);
	    });
	},

	delete_user: function(query) {
		var pg = require('pg');
	    var conString = "postgres://openlabs:none@139.162.202.237/openlabs";
	    pg.connect(conString, function(err, client, done) {
	    	client.query("DELETE FROM items WHERE id=($1)", [id]);
	    });
	},
}