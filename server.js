const express = require("express");
const transactionsAPI = require("./Routes/transactions");
const customersAPI = require("./Routes/customers");
const stockAPI = require("./Routes/stock");

const app = express();
app.use(express.json());

app.use("/api/v1/transactions", transactionsAPI);
app.use("/api/v1/customers", customersAPI);
app.use("/api/v1/stocks", stockAPI);

app.listen(5000, () => {
  console.log(`listening on port number 5000`);
});
