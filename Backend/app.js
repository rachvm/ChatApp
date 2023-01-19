import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import chatRouter from './routes/index.js'

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/chat", chatRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});