//Express code for creating an express server

// Dependencies
// =============================================================
var express = require("express");
var path = require("path"); 

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Guest (DATA)
// =============================================================
var guests = [
    {
      routeName: "guest1",
      name: "Guest1",
      phone: 1111111111,
      email: "guest1@email.com"
    }
  ];
  
  // Routes
  // =============================================================
  
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all guests
  app.get("/api/guests", function(req, res) {
    return res.json(guests);
  });
  
  // Displays a single guest, or returns false
  app.get("/api/guests/:guest", function(req, res) {
    var chosen = req.params.guest;
  
    console.log(chosen);
  
    for (var i = 0; i < guests.length; i++) {
      if (chosen === guests[i].routeName) {
        return res.json(guests[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Guests - takes in JSON input
  app.post("/api/guests", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newGuest = req.body;
  
    // Using a RegEx Pattern to remove spaces from newguest
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newGuest);
  
    guests.push(newGuest);
  
    res.json(newGuest);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });