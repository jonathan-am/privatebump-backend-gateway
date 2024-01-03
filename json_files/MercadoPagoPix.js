/*
curl -X POST \
      'https://api.mercadopago.com/v1/payments'\
       -H 'Content-Type: application/json' \
       -d '{
  "additional_info": {},
  "application_fee": null,
  "binary_mode": false,
  "campaign_id": null,
  "capture": false,
  "coupon_amount": null,
  "description": "Produto Digital",
  "differential_pricing_id": null,
  "external_reference": "MP0001",
  "installments": 0,
  "metadata": null,
  "payer": {
    "entity_type": "individual",
    "type": "customer",
    "email": "test_user_123@testuser.com",
    "identification": {
      "type": "CPF",
      "number": "95749019047"
    }
  },
  "payment_method_id": "Pix",
  "token": "",
  "transaction_amount": 10
}'
*/

const axios = require("axios");
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

module.exports = async function generatePix(req, res) {
    await axios.get(`http://localhost:4555/v1/user/${req.body.id}`).then( async (response) => {
        const user = response.data;

        let data = {
            "transaction_amount": 9.9,
            "description": "Private Bump - Customer",
            "payment_method_id": "pix",
            "external_reference": user.id,
            "payer": {
                "email": user.email,
                "identification": {
                    "type": "CPF",
                    "number": user.id
                }
            }
        };

        let config = {
            url: "https://api.mercadopago.com/v1/payments",
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'X-Idempotency-Key': uuidv4(),
                'Authorization': ''
            },
            data: data
        }

        await axios(config).then((response) => {
            let result = {
                linkToPay: response.data.point_of_interaction.transaction_data.qr_code
            }
            console.log(result);
            res.status(201).send(result);
        }).catch(error => {
            console.log(error.response);
        })
    }).catch(error => {
        console.log(error.response.data);
    });
}
