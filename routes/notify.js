const express = require('express')
const router = express.Router()
const rp = require('request-promise')
const access_token_array = [
  '0z6qfwmSo0Cxua3B9p1G3AH9TTRb7KdliBobdLmxImF',
  'x0Pcg6wiv5sipeR5ypMEtEPGUKYj782ahkG0G2YY1n4'
]

router.get('/', async function (req, res) {
  access_token_array.forEach(element => {
    rp({
      method: 'POST',
      url: 'https://notify-api.line.me/api/notify',
      auth: {
        bearer: element
      },
      form: {
        message: '推播測試'
      },
      json: true
    }).then(
      console.log('send successfully')
    )
  })
})

module.exports = router
