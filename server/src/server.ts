import express, {Request, Response} from 'express';

const app = express()
const PORT:Number = 3001;

app.get("/", (request: Request, response: Response) => {
    response.send("Hello TreNyce");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)  
})