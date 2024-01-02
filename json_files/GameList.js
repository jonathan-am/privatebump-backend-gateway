
module.exports = async function getGameList(req, res) {

    let gameList = [
        {
            "game_title": "Fortune Tiger",
            "game_id": 3001114,
            "image_url": "https://i.ibb.co/gMbBZbN/TIGRE.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975368?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Mouse",
            "game_id": 3001046,
            "image_url": "https://i.ibb.co/3p1X2My/rato.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975400?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Ox",
            "game_id": 3001090,
            "image_url": "https://i.ibb.co/brc2w1C/boi.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975408?btag=CX-56115_446042"
        },
        {
            "game_title": "Fortune Rabbit",
            "game_id": 420018912,
            "image_url": "https://i.ibb.co/k8yBppz/coelho.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/2087917?btag=CX-56115_446042"
        },
        {
            "game_title": "Piggy Gold",
            "game_id": 3001026,
            "image_url": "https://i.ibb.co/QHhKTWP/porco.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975446?btag=CX-56115_446042"
        },
        {
            "game_title": "Ganesha Gold",
            "game_id": 3001029,
            "image_url": "https://i.ibb.co/s9H3MF6/ganesha.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975383?btag=CX-56115_446042"
        },
        {
            "game_title": "Dragon Tiger Luck",
            "game_id": 3001043,
            "image_url": "https://i.ibb.co/BsBc61n/dagrao.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975410?btag=CX-56115_446042"
        },
        {
            "game_title": "Wild Bandito",
            "game_id": 3001096,
            "image_url": "https://i.ibb.co/WHZK7vk/bandito.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975419?btag=CX-56115_446042"
        },
        {
            "game_title": "Leprechaun Riches",
            "game_id": 3001039,
            "image_url": "https://i.ibb.co/pnx49qm/leprechaun.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975394?btag=CX-56115_446042"
        },
        {
            "game_title": "Phoenix Rises",
            "game_id": 3001061,
            "image_url": "https://i.ibb.co/V9tQHgn/phoenix.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975361?btag=CX-56115_446042"
        },
        {
            "game_title": "Candy Burst",
            "game_id": 3001095,
            "image_url": "https://i.ibb.co/3m6tyhT/bonanza.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975373?btag=CX-56115_446042"
        },
        {
            "game_title": "Buffalo Win",
            "game_id": 3001106,
            "image_url": "https://i.ibb.co/qrfhFYm/bufalo.webp",
            "percentage": 0,
            "game_url": "https://mmabet.com/casino/game/1975423?btag=CX-56115_446042"
        },
    ];

    /*

    0 - 7

    12 - 13

    15

    18 - 23

    horarioAtual == horarioPicos > 70%
    diasDaSemana == Sexta, sabado, domingo = 15%
                    segunda, terca, quarta, quinta = 5%
    diaDoMes == 29, 30, 31, 1 - 10, 19, 20 - 23 = 5%

    */
    const d = new Date();
    const horaAtual = d.getHours();
    const diaDaSemana = d.getDay();
    const diaDoMes = d.getDate();

    const percentage = ((horaAtual > 0 && horaAtual <= 7) || (horaAtual == 12 || horaAtual == 13) || (horaAtual == 15) || (horaAtual >= 18 && horaAtual <= 23)) ? 70 : 55;
    const percentPerSemana = (diaDaSemana == 0 || diaDaSemana == 5 || diaDaSemana == 6) ? 15 : 5;
    const percentPerMonth = ((diaDoMes >= 1 && diaDoMes < 10) || (diaDoMes >= 20 && diaDoMes <= 23) || (diaDoMes >= 29 && diaDoMes <= 31)) ? 5 : 0;
    const percentageFinal = percentage + percentPerSemana + percentPerMonth;

    gameList.map((v) => {
        v.percentage = percentageFinal + (Math.floor(Math.random() * 8));
    });

    await res.status(200).send(gameList);
};