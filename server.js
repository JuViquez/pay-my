var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var config = require("./config")

var USERS_COLLECTION = "users";
var BUSINESS_COLLECTION = "business";
var BILLS_COLLECTION = "bills";
var BILL_LINES_COLLECTION = "bill_lines"


var app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(config.connectionString, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/users"
 *    GET: finds all users
 */

app.get("/api/users", function(req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});

/*  "/api/business"
 *    GET: finds all business
 */

app.get("/api/business", function(req, res) {
    db.collection(BUSINESS_COLLECTION).find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get business.");
      } else {
        res.status(200).json(docs);
      }
    });
  });

/*  "/api/bills"
 *    POST: creates a new bill  
 *    
 */

app.post("/api/bills", function(req, res) {
  function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
  var newBill = req.body;
  newBill.pin = pad(Math.floor(Math.random() * 9999).toString(),4);
  newBill.state = 'pending';
  db.collection(BillS_COLLECTION).insertOne(newBill, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new bill.");
    } else {
      delete doc.ops[0].pin;
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/bills/:id"
 *    POST: authenticates bill pin
 *    PUT: updates bill by id
 */
app.post("/api/bills/:id", function(req, res) {
  db.collection(BillS_COLLECTION).findOne({ _id: new ObjectID(req.params.id), pin: req.body.pin }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Authentication failed.");
    } else {
        delete doc.ops[0].pin;
        res.status(201).json(doc.ops[0]);
    }
  });
});

app.put("/api/bills/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(BILLS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update contact");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});


/*  "/api/bills/lines"
 *    GET: find bill line by bill id
 *    PUT: update bill line by id
 *    DELETE: deletes contact by id
 */

app.get("/api/bills/lines/:id", function(req, res) {
  db.collection(BILL_LINES_COLLECTION).findOne({ bill_id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get bill line");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/bills/lines/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(BILL_LINES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update bill line");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.post("/api/bills/lines", function(req, res) {
    var newBillLine = req.body;
    newBillLine.state = 'pending';
    newBillLine.total = newBillLine.price * newBillLine.amount;
    db.collection(BILL_LINES_COLLECTION).insertOne(newBillLine, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new bill line.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  });