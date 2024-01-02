var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    cors = require('cors');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const getGameList = require('./json_files/GameList');
const getGameInfo = require('./json_files/GameInfo');
const GameNews = require('./json_files/GameNews');
const getUserInformation = require('./json_files/RequestUserInformation');
const registerNewUser = require('./json_files/RequestRegisterNewUser');
const requestLoginUser = require('./json_files/RequestLoginUser');
const generatePix = require('./json_files/MercadoPagoPix');
const axios = require('axios');
const getCurrentGameInfo = require('./json_files/GetCurrentGameInfo');
const getAdminCurrentGameDemo = require('./json_files/GetAdminCurrentGameDemo');
const getAvailablePlataforms = require('./json_files/GetAvailablePlataforms');

var options = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/certificate_old.crt'),
};

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.post('/v1/user/login', async (req, res) => {
    console.log(req.body);
    await requestLoginUser(req, res);
});

app.post('/v1/user', async (req, res) => {
    console.log(req.body);
    await registerNewUser(req, res);
});

app.get('/v1/user/:id', async (req, res) => {
    await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
        //vou pensar em alguma coisa
        getUserInformation(req, res);
    }).catch(error => {
        console.log(error.message);
        res.status(401).send({ "result": "User Unauthorized" });
    });
});

app.post('/v1/payment', async (req, res) => {
    await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
        //vou pensar em alguma coisa
        if (response.data.userType === "DEFAULT") {
            generatePix(req, res);
        } else {
            res.status(400).send({ "result": "Already Customer user." });
        }
    }).catch(error => {
        console.log(error.message);
        res.status(401).send({ "result": "User Unauthorized" });
    });
});

app.get('/game/list', async (req, res) => {
    try {
        // await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then(async (response) => {
        //vou pensar em alguma coisa
        // if (response.data.userType === "DEFAULT" || response.data.userType === "CUSTOMER" || response.data.userType === "ADMIN") {
        await getGameList(req, res);
        // } else {
        // res.status(402).send({ "result": "This user dont have access to this content." });
        // }
        // }).catch(error => {
        // console.log(error.message);
        // res.status(401).send({ "result": "User Unauthorized" });
        // });
    } catch (error) {
        console.log(error);
    }
});

///currentgame/info/${game_id}

app.get('/plataforms', async (req, res) => {
    try {
        // await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
        // if (response.data.userType === "DEFAULT" || response.data.userType === "CUSTOMER" || response.data.userType === "ADMIN") {
        getAvailablePlataforms(req, res);
        // } else {
        // res.status(402).send({ "result": "This user dont have access to this content." });
        // }
        // }).catch(error => {
        // console.log(error.message);
        // res.status(401).send({ "result": "User Unauthorized" });
        // });
    } catch (error) {
        console.log(error);
    }
});

app.get('/currentgame/info/:game_id', async (req, res) => {
    try {
        if (req.headers.sessionid === undefined || req.headers.sessionid === null) {
            getCurrentGameInfo(req, res);
        } else {
            await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
                // vou pensar em alguma coisa
                if (response.data.userType === "DEFAULT" || response.data.userType === "CUSTOMER") {
                    getCurrentGameInfo(req, res);
                } else if (response.data.userType === "ADMIN") {
                    getAdminCurrentGameDemo(req, res);
                } else {
                    res.status(402).send({ "result": "This user dont have access to this content." });
                }
            }).catch(error => {
                console.log(error.message);
                res.status(401).send({ "result": "User Unauthorized" });
            });
        }
    } catch (error) {
        console.log(error);
    }
});

app.get('/game/info/:game_id', async (req, res) => {
    try {
        // await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
        //     //vou pensar em alguma coisa
        //     if (response.data.userType === "DEFAULT" || response.data.userType === "CUSTOMER" || response.data.userType === "ADMIN") {
        getGameInfo(req, res);
        //     } else {
        //         res.status(402).send({ "result": "This user dont have access to this content." });
        //     }
        // }).catch(error => {
        //     console.log(error.message);
        //     res.status(401).send({ "result": "User Unauthorized" });
        // });
    } catch (error) {
        console.log(error);
    }
});

app.get('/game/news', async (req, res) => {
    try {
        // if(req.headers.sessionid===undefined || req.headers.sessionid===null) {
        await GameNews(req, res);
        // }else {
        //     await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then(async (response) => {
        //         //vou pensar em alguma coisa
        //         if (response.data.userType === "DEFAULT" || response.data.userType === "CUSTOMER" || response.data.userType === "ADMIN") {
        //             await GameNews(req, res);
        //         } else {
        //             res.status(402).send({ "result": "This user dont have access to this content." });
        //         }
        //     }).catch(error => {
        //         console.log(error);
        //         res.status(401).send({ "result": "User Unauthorized" });
        //     });
        // }
    } catch (error) {
        console.log(error);
    }
});

app.post('/v1/notification/payment', async (req, res) => {
    try {
        axios.post("http://localhost:4555/v1/webhook/payment", req.body).then(async (response) => {
            //vou pensar em alguma coisa
            console.log(req.body.action);
            res.status(200).send();
        }).catch(error => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
});

var server = https.createServer(options, app).listen(3303, function () {
    console.log("Express server listening on port " + 3303);
});

// app.listen(3302, ()=>{console.log("reading http at port - 3302")});