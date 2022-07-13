//temp database
const houses = require("./db.json");

let globalId = 4;

//exportable object
module.exports = {
  getAllHouses: (req, res) => {
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;
    let newHouse = {
      id: globalId,
      address,
      price:+price,
      imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    globalId++;
  },
  deleteHouse:(req,res) => {
    let {id} = req.params
    let index = houses.findIndex(house => +house.id === +id)
    if(index === -1){
        res.status(400).send(`user not found`)
    } else {
        houses.splice(index,1)
        res.status(200).send(houses)
    }
  },
  updateHouse:(req,res) => {
    let {id} = req.params
    let {type} = req.body
    let index = houses.findIndex(house => +house.id === +id)
    if(index === -1){
        res.status(400).send(`user not found`)
    } 
    else if(houses[index].price === 1000000 && type === 'plus') {
        res.status(400).send(`price cannot go higher than 1000000`)
    }
     else if(houses[index].price === 10000 && type === 'minus'){
        res.status(400).send(`cannot go below 1`)
    } else if( type === 'plus'){
        houses[index].price += 10000;
        res.status(200).send(houses)
    } else if( type === 'minus') {
        houses[index].price-=10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
  }
};