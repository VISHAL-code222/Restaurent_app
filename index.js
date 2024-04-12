// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')

const app = express();
const port = 3009;

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3002'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


let reservations = [];


app.post('/api/reservation', (req, res) => {
  const name=req.body.name;
  const email=req.body.email;
  const phone=req.body.phone;
  const date=req.body.date;
  const time=req.body.time;
  const numberOfGuests=req.body.numberOfGuests;
  const message=req.body.message;


  const newReservation = {
    name,
    email,
    phone,
    date,
    time,
    numberOfGuests,
    message
  };

 
  reservations.push(newReservation);



  console.log("new reservations",newReservation)

  res.status(200).json({ message: 'Reservation submitted successfully' });
});


app.get('/api/reservation', (req, res) => {
  res.json(reservations);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



