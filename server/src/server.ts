import 'dotenv/config';
import express, {Request, Response} from 'express';

const app = express()
//const PORT:Number | undefined = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
    response.send("Hello TreNyce");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)  
})