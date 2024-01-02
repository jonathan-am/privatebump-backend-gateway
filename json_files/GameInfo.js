const axios = require("axios");

module.exports = async function getGameInfo(req, res) {
    await axios.get(`http://localhost:4555/game/info/${req.params.game_id}`).then( (response)=> {
        console.log(response.data);
        res.status(200).send(response.data);
    }).catch(error=> {
        console.log(error.response.data);
    });
}