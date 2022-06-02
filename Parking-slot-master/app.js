const express = require("express");
const app = express();
const connect = require('./src/config/db')
const userController = require('./src/controllers/user.controller')
const floorController = require('./src/controllers/floor.controller')
const spotController = require('./src/controllers/spot.controller')
const ticketController = require('./src/controllers/ticket.controller')

app.use(express.json())
app.use("/user", userController);
app.use("/floor", floorController);
app.use("/spot", spotController);
app.use("/ticket", ticketController)


const port = process.env.PORT || 3000;

const start = async () => {
  try {  
      await connect()   
      app.listen(port, () => {
        console.log(`Listening on Port ${port}`);
      });    
  } catch (err) {
    console.log({ Error: err.message });
  }
};
start()