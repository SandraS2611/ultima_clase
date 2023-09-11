const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('lastClase', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

module.exports = { sequelize } 