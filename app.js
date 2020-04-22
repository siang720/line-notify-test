require('dotenv').config();
const express = require('express');
const app = express()
const lineNotifyRouter = require("./routes/line-notify")
const callback = require("./routes/callback")

app.use('/login/line_notify', lineNotifyRouter)
app.use('/', callback)
app.listen(3000);