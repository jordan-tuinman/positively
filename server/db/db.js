const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

const { formatUserData } = require('../formatter')

function getUser (id, db = database) {
  return db('users')
    .join('habits', 'users.id', 'habits.user_id')
    .select()
    .where('users.id', id)
    .then(formatUserData)
}

module.exports = {
  getUser
}