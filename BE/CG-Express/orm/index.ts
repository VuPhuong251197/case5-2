import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import {AppDataSource} from "./src/data-source";
import cors from "cors"

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect database success')
})
app.use(express.static('./public'));
app.use(cors())
app.use(bodyParser.json({limit: '35mb'}));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 900719925474099
  }),
);
app.use(bodyParser.urlencoded({extended: true}));
app.use('', router)
app.listen(5000, () => {
    console.log('Server is running')
})
