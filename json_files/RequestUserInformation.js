const axios  = require("axios");

module.exports = async (req, res) => {
   await axios.get(`http://localhost:4555/v1/user/${req.params.id}`).then((response)=> {
        res.status(200).send(response.data);
    }).catch(error=> {
        console.log(error.response.data);
    });
}