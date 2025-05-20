import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud-app"
})


app.get('/users', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result)
    })
})

app.get('/get_users/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM user WHERE `id`= ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result)
    })
})

app.post('/user', (req, res) => {
    const sql = "INSERT INTO user (`name`, `lastName`, `email`, `age`) VALUES (?,?,?,?)";
    const values = [
        req.body.name,
        req.body.lastName,
        req.body.email,
        req.body.age
    ]
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: 'something went wrong' + err })
        return res.json({ success: 'user created' })
    })
})

app.put('/edit_user/:id', (req, res) => {
    const id = req.params.id
    const sql =
        "UPDATE user SET `name`=?, `lastName`=?, `email`=?, `age`=? WHERE id=?"
    const values = [
        req.body.name,
        req.body.lastName,
        req.body.email,
        req.body.age,
        id
    ]
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: 'something went wrong' + err })
        return res.json({ success: 'user created' })
    })
})


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM user WHERE id=?";
    const values = [id]
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: 'something went wrong' + err })
        return res.json({ success: 'user created' })
    })
})

const port = 5000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

