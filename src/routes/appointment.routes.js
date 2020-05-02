import {Router} from 'express'
const router = Router();

//Database Connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

//list
router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('appointment').find({}).toArray();
    res.json(result);
});

//insert
router.post('/', async (req, res) => {
    const db = await connect();
    const appointment = {
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        name: req.body.name,
        lastname: req.body.lastname,
        clientid: req.body.clientid,
        birthdate: req.body.birthdate,
        city: req.body.city,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        phonenumber: req.body.phonenumber

    };
    const result = await db.collection('appointment').insertOne(appointment);
    res.json(result.ops[0]);
});

//find
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('appointment').findOne({ _id: ObjectID(id) });
    res.json(result);
});

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    await db.collection('appointment').deleteOne({ _id: ObjectID(id) });
    res.json({
        message: `Appointment ${id} Deleted`,
        
    });
});

//update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const newAppointment = {
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        name: req.body.name,
        lastname: req.body.lastname,
        clientid: req.body.clientid,
        birthdate: req.body.birthdate,
        city: req.body.city,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        phonenumber: req.body.phonenumber
    };
    const db = await connect();
    await db.collection('appointment').updateOne({ _id: ObjectID(id) }, {$set: newAppointment });
    res.json({
        message: `Appointment ${id} Updated`
    });
});


export default router;