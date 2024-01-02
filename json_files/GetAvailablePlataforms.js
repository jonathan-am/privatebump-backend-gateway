
module.exports = async function getAvailablePlataforms(req, res) {
    let plataforms = [
        // {
        //     "plataform_id": 1,
        //     "plataform_title": "Dupoc",
        //     "plataform_logo": "https://i.ibb.co/BghrLw7/dupoc.png",
        //     "plataform_url": "https://www.dupoc.com/affiliates/?btag=1594001"
        // },
        // {
        //     "plataform_id": 2,
        //     "plataform_title": "PlayPix",
        //     "plataform_logo": "https://i.ibb.co/vdshktb/playpixlogo.gif",
        //     "plataform_url": "https://playpix.com/affiliates/?btag=1601754_l252826"
        // },
        {
            "plataform_id": 3,
            "plataform_title": "MMAbet",
            "plataform_logo": "https://i.ibb.co/k4hSY3b/mmabetlogo.webp",
            "plataform_url": "https://afiliados.mmabet.com/visit/?bta=56115&brand=mmabet"
        },/*
        {
            "plataform_id": 4,
            "plataform_title": "5Ucom",
            "plataform_logo": "https://uploaddeimagens.com.br/images/004/685/426/original/5ulogo.png",
            "plataform_url": "https://5u.com/?id=32620429"
        },
        {
            "plataform_id": 5,
            "plataform_title": "NMSbet",
            "plataform_logo": "https://uploaddeimagens.com.br/images/004/685/486/original/logonms.png",
            "plataform_url": "https://nmsbet.com/?id=48955056"
        },
        {
            "plataform_id": 6,
            "plataform_title": "Leao.Bet",
            "plataform_logo": "https://i.ibb.co/z5cmTTT/leaologo.png",
            "plataform_url": "https://leaowebb.com/?id=63251357"
        },
        {
            "plataform_id": 7,
            "plataform_title": "136Bet",
            "plataform_logo": "https://i.ibb.co/Zd1KxhN/136betlogo.png",
            "plataform_url": "https://136bet.com/?id=57907480"
        },
        {
            "plataform_id": 8,
            "plataform_title": "WJCasino",
            "plataform_logo": "https://www.wjcasino.com/img/logo.e1d290c0.png",
            "plataform_url": "https://wjcasino.com/r/yJoveMcG"
        },
        {
            "plataform_id": 9,
            "plataform_title": "BoleKing",
            "plataform_logo": "https://pjz8q8-337-ppp.oss-accelerate.aliyuncs.com/siteadmin/upload/img/1690712182937755650.png",
            "plataform_url": "https://60be.com/?id=38472650"
        },*/
        {
            "plataform_id": 10,
            "plataform_title": "BKBet",
            "plataform_logo": "https://cdntoos.bkbet01.com/siteadmin/upload/img/1732362362456059906.png",
            "plataform_url": "https://bkbet.com/?id=36723518"
        },
        /*{
            "plataform_id": 11,
            "plataform_title": "BRABet",
            "plataform_logo": "https://www.brabet.com/favicon.4e633.ico",
            "plataform_url": "https://www.brabet.com/?agentid=169703267"
        },*/
        {
            "plataform_id": 12,
            "plataform_title": "VegasGold",
            "plataform_logo": "https://assets-global.website-files.com/645eede925bdf9d102b91317/647a34afe871a48ba10af7ce_logo_vegas_gold.webp",
            "plataform_url": "https://vegasgold.bet/?r=injiinih"
        }
    ]

    await res.status(200).send(plataforms);
}