const express = require("express");
const dotenv = require("dotenv");
const factory_transactionsAPI = require("./Routes/factoryTransactions");
const customer_transactionsAPI = require("./Routes/customerTransactions");
const customersAPI = require("./Routes/customers");
const factoryAPI = require("./Routes/factory");
const AstockAPI = require("./Routes/stockA");
const BstockAPI = require("./Routes/stockB");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use("/api/v1/factory-transactions", factory_transactionsAPI);
app.use("/api/v1/customer-transactions", customer_transactionsAPI);
app.use("/api/v1/customers", customersAPI);
app.use("/api/v1/stocksA", AstockAPI);
app.use("/api/v1/stocksB", BstockAPI);
app.use("/api/v1/factory", factoryAPI);

app.listen(5000, () => {
  console.log(`listening on port number 5000`);
});
