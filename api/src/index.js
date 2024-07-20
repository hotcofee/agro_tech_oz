import app from "./app.js";
import { PORT } from './config/port.js'
import router from "./routes/router.js";

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})

app.use(router)