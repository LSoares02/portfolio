const express = require("express");
const router = express.Router();

// Rota de exemplo
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API está funcionando!",
  });
});

// Exportar o router
module.exports = router;
