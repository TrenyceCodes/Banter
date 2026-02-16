import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import { userRoutes } from './routes/UserRoutes';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT:Number | undefined = Number(process.env.PORT);

//routes
app.use("/user", userRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}. http://localhost:3001/`);
})

