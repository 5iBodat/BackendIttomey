import express from "express";
import router from './router/routes.js'
import cors from 'cors'





const port = 5000;
const app = express();

app.use(cors())

app.use(express.json());
app.use(router) 
app.listen(port, ()=> console.log('listen to port :' + port));