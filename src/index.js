const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "public")));
app.use(cors({ origin: CORS_ORIGIN }));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(PORT, () => {
  console.log(
    `[index] Servidor rodando na porta ${PORT}\n[ENV] ${process.env.ENV}`,
  );
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

const routes = require("./routes");
app.use(routes);
