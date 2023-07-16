//Node.JS y Express API Ejemplo
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

//Conexión usando en cosola el comando: node . y recibes el mensaje en consola 
app.listen(PORT, () => console.log(`Activo en el puerto http://localhost${PORT}`))

//Rutas Get y Post
app.get("/cars", (req, res) => {
    res.status(200).send({
        cars: "🚗",
        type: "sedan"
    })
});

app.post("/cars/:id", (req, res) => {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) {
        res.status(418).send({ message: "No escribiste el tipo de auto!" });
    }
    res.send({
        cars: `🚗 ${type} and ID of ${id}`,
    });
});

//Usa ThunderClient para conectarte a la API