import  Express from "express";
import { Socket } from "socket.io";
import * as http from 'node:http';
const app = Express();
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
