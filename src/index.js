import app from "./app.js"
import { connectDB } from "./db.js";

app.listen(5000)
connectDB();
console.log('Servicio en puerto', 5000)