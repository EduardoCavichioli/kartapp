const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;

const USER_COLLECTION = 'users';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

let db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, (err, client) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log('Database connection ready');

  app.listen(PORT, () => {
    console.error(`Node : listening on port ${PORT}`);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

app.get('/api/users', (req, res) => {
  db.collection(USER_COLLECTION).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, error.message, 'Failed to get users.')
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post('/api/users', (req, res) => {
  let newUser = req.body;
  newUser.createDate = new Date();

  if (!req.body.name) {
    handleError(res, 'Invalid user input', 'Must provide a name.', 400);
  } else {
    db.collection(USER_COLLECTION).insertOne(newUser, (err, doc) => {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

app.post('/api/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    handleError(res, 'No login', 'Provide valid', 400);
  } else {
    let emailValue = req.body.email;
    let passValue = req.body.password;
    db.collection(USER_COLLECTION).findOne({ email: emailValue }, (err, doc) => {
      if (err) {
        handleError(res, err.message, 'Failed to find');
      } else {
        if (doc) {
          if (doc.password === passValue) {
            console.log(`Login success for user ${emailValue}`);
            res.status(201).json({ value: doc.name });
          } else {
            handleError(res, 'Invalid password', 'Invalid Password', 201);
          }
        } else {
          handleError(res, 'User not found', 'User not found', 201);
        }
      }
    });
  }
})

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

