/**
 * Created by eunchul on 2017-04-05.
 */
var url = require('../url');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


/* MongoDB Connect Test */
exports.test= function(){
    MongoClient.connect(url.mongodb, function(err, db) {    //  url.mongodb = 'mongodb://localhost:27017/DB명';
        assert.equal(null, err);
        console.log("Connected correctly to server");
        db.close();
    });
}
/* Insert */
// collection Name = String
// contents = array
exports.insert = function(collectionName,contents, callback) {
    // Get the documents collection
    MongoClient.connect(url.mongodb, function(err, db) {
        var collection = db.collection(collectionName);
        // Insert some documents
        /* contents 가 배열이면, 여러행 추가(JSON구조여야함). */
        collection.insertMany(contents, function (err, result) {
            assert.equal(err, null);
            //assert.equal(3, result.result.n);
            //assert.equal(3, result.ops.length);
            //console.log("Inserted 3 documents into the document collection");
            callback(result);
        });
        db.close();
    });
}
/* Find */
// query = JSON;
exports.find = function(collectionName,query,  callback) {
    // Get the documents collection
    MongoClient.connect(url.mongodb, function(err, db) {
        var collection = db.collection(collectionName);
        // Find some documents
        collection.find(query).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    });
}