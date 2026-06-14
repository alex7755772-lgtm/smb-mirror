const Database=require('better-sqlite3')
const db=new Database('./config/database.db')
db.exec(`CREATE TABLE IF NOT EXISTS jobs(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,source TEXT NOT NULL,destination TEXT NOT NULL,
schedule TEXT,schedule_label TEXT,realtime INTEGER DEFAULT 1,
mirror_delete INTEGER DEFAULT 0,enabled INTEGER DEFAULT 1,
created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS job_logs(
id INTEGER PRIMARY KEY AUTOINCREMENT,job_id INTEGER,job_name TEXT,
level TEXT DEFAULT 'info',message TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP);`)
for(const s of ['ALTER TABLE jobs ADD COLUMN enabled INTEGER DEFAULT 1','ALTER TABLE jobs ADD COLUMN mirror_delete INTEGER DEFAULT 0']){try{db.prepare(s).run()}catch{}}
module.exports=db
