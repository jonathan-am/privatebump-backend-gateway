const axios = require("axios");

module.exports = async function requestLoginUser(req, res){
    await axios.post(`http://localhost:4555/v1/user/login`, req.body).then( (response)=> {
        console.log(response.data);
        res.status(200).send(response.data);
    }).catch(error=> {
        console.log(error.response.data);
    });
}