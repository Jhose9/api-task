import express,{Request,Response} from 'express';
import userRoute from './src/routes/api_task';
const app = express()
const port = 3000

app.use(express.json());
app.use("/v1/task",userRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))