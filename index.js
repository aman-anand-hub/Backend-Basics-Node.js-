require("dotenv").config();
const userRoutes = require("./Routes/user.routes.js");
const currencyRoutes = require("./Routes/currency.routes.js");
const blogRoutes = require("./Routes/blog.routes.js");
const { verifyAuth } = require("./Middlewares/verifyAuth.js");

const express= require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT= 8082;

const DB_URL = "mongodb://127.0.0.1:27017";

mongoose
  .connect(`${DB_URL}`)
  .then(() => console.log("DB connected at ", DB_URL))
  .catch((e) => console.log("DB is not connected ", e));

app.use(verifyAuth);

app.use("/users", userRoutes);
app.use("/currency", currencyRoutes);

app.use("/blogs", blogRoutes);

app.use("*", (req,res) => {
  res.send("Could not match any route, his the default route.");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});