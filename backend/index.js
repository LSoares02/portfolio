const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Routes = require("./routes/routes");

// Configuração do dotenv
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", Routes);

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API está funcionando!" });
});

// Iniciar o servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
