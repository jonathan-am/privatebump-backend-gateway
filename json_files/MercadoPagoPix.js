/*
curl -X POST \
      'https://api.mercadopago.com/v1/payments'\
       -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: 0d5020ed-1af6-469c-ae06-c3bec19954bb' \,
       -H 'Authorization: Bearer TEST-4822362795943580-052616-a1a6b20b95392921fadc4e7b2861c294-574326922' \
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
                'Authorization': 'Bearer APP_USR-7720120362158303-112719-4738946f69e881d96b9421bd074e5b55-1569054020'
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
