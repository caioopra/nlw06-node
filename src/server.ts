import express from "express";

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (criar) uma informação 
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

// passa primeiro a rota; função que recebe request e response
app.get("/test", (request, response) => {
    // Requeste => entrando
    // Response => saindo
    return response.send("Olá NLW")
});

// browser por padrão recebe requisições GET
app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));