import express from 'express';
import {readFileSync} from "fs";
let visits ={visits: {item1:0, item2:0}};
const data = JSON.parse(readFileSync('./prod.json', 'utf-8'));

const app = express();
const PORT =8080;
const server = app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`) 
});

app.get('/items', (req,res)=>{
    res.json({items: data, cant: data.length});
    visits.visits.item1 = visits.visits.item1 + 1;
});

app.get('/items-random', (req, res)=>{
    res.json(data [Math.floor(Math.random() * data.length)]);
    visits.visits.item2 = visits.visits.item2 + 1;
});

app.get('/visitas', (req,res)=>{
    res.json(visits)
})

