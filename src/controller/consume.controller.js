const fetch = require('node-fetch');

const consumeURL = async (req, res, next) => {
    const { url_consulta } = req.body;

    const response = await fetch(url_consulta, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
    })
    .then(data => res.status(200).json({
        codigo: "001",
        mensaje: "Consumido correctamente",
        datos: data
    }))
    .catch(err => res.status(500).json({
        codigo: "000",
        mensaje: "Error al consumir",
        datos: err
    }));
    console.log(response);
    return response;
}

module.exports = {
    consumeURL
};