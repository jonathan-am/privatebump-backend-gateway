const axios = require("axios");

module.exports = async function getAdminCurrentGameDemo(req, res) {
    let gameList = [
        {
            "game_title": "Fortune Tiger",
            "game_id": 3001114,
            "game_pg_id": 126,
            "game_url": "https://mmabet.com/casino/game/1975368?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Mouse",
            "game_id": 3001046,
            "game_pg_id": 68,
            "game_url": "https://mmabet.com/casino/game/1975400?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Ox",
            "game_id": 3001090,
            "game_pg_id": 98,
            "game_url": "https://mmabet.com/casino/game/1975408?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Rabbit",
            "game_id": 420018912,
            "game_pg_id": 68,
            "game_url": "https://mmabet.com/casino/game/2087917?btag=CX-56115_446042"
        },
        {
            "game_title": "Piggy Gold",
            "game_id": 3001026,
            "game_pg_id": 39,
            "game_url": "https://mmabet.com/casino/game/1975446?btag=CX-56115_446042"
        },
        {
            "game_title": "Ganesha Gold",
            "game_id": 3001029,
            "game_pg_id": 42,
            "game_url": "https://mmabet.com/casino/game/1975383?btag=CX-56115_446042"
        },
        {
            "game_title": "Dragon Tiger Luck",
            "game_id": 3001043,
            "game_pg_id": 63,
            "game_url": "https://mmabet.com/casino/game/1975410?btag=CX-56115_446042"
        },
        {
            "game_title": "Wild Bandito",
            "game_id": 3001096,
            "game_pg_id": 104,
            "game_url": "https://mmabet.com/casino/game/1975419?btag=CX-56115_446042"
        },
        {
            "game_title": "Leprechaun Riches",
            "game_id": 3001039,
            "game_pg_id": 60,
            "game_url": "https://mmabet.com/casino/game/1975394?btag=CX-56115_446042"
        },
        {
            "game_title": "Phoenix Rises",
            "game_id": 3001061,
            "game_pg_id": 82,
            "game_url": "https://mmabet.com/casino/game/1975361?btag=CX-56115_446042"
        },
        {
            "game_title": "Candy Burst",
            "game_id": 3001095,
            "game_pg_id": 70,
            "game_url": "https://mmabet.com/casino/game/1975373?btag=CX-56115_446042"
        },
        {
            "game_title": "Buffalo Win",
            "game_id": 3001106,
            "game_pg_id": 108,
            "game_url": "https://mmabet.com/casino/game/1975423?btag=CX-56115_446042"
        },
    ];

    for (let i = 0; i < gameList.length; i++) {
        if (gameList[i].game_id == req.params.game_id) {
            try {
                await axios.post('https://go51.vip/api/platform/frontend/game-demo/launch', { "platformId": 24, "kind": 5, "gameCode": gameList[i].game_pg_id, "lang": "br", "currency": "BRL" }).then(async (response) => {
                    await res.status(200).send({ "game_url": response.data.data });
                }).catch((error) => { console.log(error) });
            } catch (error) {
                await res.status(500).send("error: " + error);
            }
        }
    }
};