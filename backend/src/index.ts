import express from "express";
import cors from "cors";
import countryRoute from "./routes/country";

const app = express();
const PORT = 5000;

app.use(cors());

app.use("/country", countryRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
