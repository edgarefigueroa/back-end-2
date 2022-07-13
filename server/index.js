const express = require("express");
const cors = require("cors");
const {getAllHouses,createHouse,deleteHouse,updateHouse} = require('./controller')
const app = express();

app.use(express.json());
app.use(cors());

//get endpoint to get all houses
app.get('/api/houses', getAllHouses)

//post endpoint to create a new houses
app.post('/api/houses', createHouse)

//delete endpoint to delete houses
app.delete('/api/houses/:id',deleteHouse)

//put endpoint to edit the houses
app.put('/api/houses/:id',updateHouse)

const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server runnin on ${SERVER_PORT}`))


//app.listen(4000, () => console.log("Server running on port 4000"));