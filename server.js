const express = require("express");
const dotenv = require("dotenv");
const transactionsAPI = require("./Routes/transactions");
const customersAPI = require("./Routes/customers");
const stockAPI = require("./Routes/stock");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use("/api/v1/transactions", transactionsAPI);
app.use("/api/v1/customers", customersAPI);
app.use("/api/v1/stocks", stockAPI);

app.listen(5000, () => {
  console.log(`listening on port number 5000`);
});
