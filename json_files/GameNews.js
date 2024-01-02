let gameNews = [];

module.exports  = async function getGameNews(req, res) {
    if(gameNews.length == 0) {
        for(let i = 0; i < 1500; i++) {
            gameNews.push({"id": i, "user": getUser(), "new": "Ganhou R$ "+Math.floor(Math.random() * 600)});
        }
        setInterval(clearGameNews, 1000 * 60  * 60);
    }
    await res.status(200).send(gameNews);
}

function clearGameNews() {
    if(gameNews.length > 0) {
        console.log("Limpando noticias...");
        gameNews = [];
        console.log("Resultado.. - "+gameNews);
    }
}

function getUser() {
    return "a"+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)
    +""+Math.floor(Math.random() * 10)+"*****";
}