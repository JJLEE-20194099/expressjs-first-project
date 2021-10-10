import { Low, JSONFile } from 'lowdb'

const db = new Low(new JSONFile('./db/db.json'))

db.data ||= {
    users: []
}

db.write()

export default db;