//imports
const express = require('express');
require('dotenv').config({path: './db.env'});
const Persona = require('./database')

//inicialization
const app = express();
const PORT = process.env.PORT || 3000;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//server
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING", PORT);
})

require("./database");

app.post('/personas', async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.json(persona);
    } catch (error) {
        res.json(error);
    }
})
app.get('/personas', async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        res.json(error);
    }
})
app.get('/personas/:id', async (req, res) => {
    try {
        const persona = await Persona.findAll({
            where: {
                id_persona: req.params.id
            }
        });
        res.json(persona);
    } catch (error) {
        res.json(error);
    }
})
app.delete('/personas/:id', async (req, res) => {
    try {
        const persona = await Persona.destroy({
            where: {
                id_persona: req.params.id
            }
        });
        res.json(persona);
    } catch (error) {
        res.json(error);
    }
})
app.put('/personas/:id', async (req, res) => {
    try {
        const persona = await Persona.update(req.body,{
            where: {
                id_persona: req.params.id
            }
        });
        res.json(persona);
    } catch (error) {
        res.json(error);
    }
})




