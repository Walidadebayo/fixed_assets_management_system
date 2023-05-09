const {Router} = require('express')
const { login, getLogin } = require('../controller/userController')

const log = Router()
log.get("/", login)
log.post("/", getLogin)

module.exports = log;