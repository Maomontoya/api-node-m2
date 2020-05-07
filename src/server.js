import express, {json} from 'express'

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

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