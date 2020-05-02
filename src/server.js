import express, {json} from 'express'

const app = express();

//routes
import IndexRoutes from './routes/index.routes'
import AppointmentRoutes from './routes/appointment.routes'

//Settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(json());


//routes
app.use(IndexRoutes);
app.use('/appointment', AppointmentRoutes);

export default app;