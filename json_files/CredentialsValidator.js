const axios = require("axios");

module.exports = async (req, res) => {
    await axios.get("http://localhost:4555/v1/sessions/" + req.headers.sessionid).then((response) => {
        //vou pensar em alguma coisa
    }).catch(error => {
        console.log(error.message);
        res.status(401).send({ "result": "User Unauthorized" });
    });
}