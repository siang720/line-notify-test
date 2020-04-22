const express = require('express');
const router = express.Router();
const rp = require('request-promise');

router.get('/', async function(req, res, next) {
    const oauthToken = await rp({
        method: 'POST',
        uri: `https://notify-bot.line.me/oauth/token?grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.LINE_NOTIFY_CALLBACK_URL}&client_id=${process.env.LINE_NOTIFY_CLIENT_ID}&client_secret=${process.env.LINE_NOTIFY_CLIENT_SECRET}`,
        json: true
    });

    const notify = await rp({
        method: 'POST',
        url: 'https://notify-api.line.me/api/notify',
        auth: {
            'bearer': oauthToken.access_token
        },
        form: {
            message: '2020 iT邦幫忙鐵人賽'
        },
        json: true
    });

    return res.send("設定成功")
});

module.exports = router;