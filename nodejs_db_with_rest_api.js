var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/db01');

db.serialize(function() {

    db.run("CREATE TABLE IF NOT EXISTS example_tbl" +
    "(  id INTEGER PRIMARY KEY NOT NULL," +
    "   example_field CHAR(50) NOT NULL" +
    ")");
});

var express = require('express');
var restapi = express();

restapi.use(express.static(__dirname + '/app'));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

restapi.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", port " + server_port);
});