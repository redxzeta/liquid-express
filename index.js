import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import liquidRoutes from "./routes/liquid.js";
const app = express();
app.use(cors());
app.use(
  express.json({
    limit: "20mb",
    extended: true,
  })
);
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);
app.use("/liquid", liquidRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` app listening on port ${PORT}!`));
