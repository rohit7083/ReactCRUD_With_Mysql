const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "reacttask",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/api/get", (req, res) => {
    const sqlGet = "Select * from crudop";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    })
})

app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO crudop (id, fname,lname,city ) VALUES(2,'pahersh','sona','nashik2')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("hello express ")

    // })
})


app.post("/api/post", (req, res) => {
    const { fname, lname, city } = req.body;
    const sqlInsert = "INSERT INTO crudop (fname,lname,city ) VALUES(?,?,?)";
    db.query(sqlInsert, [fname, lname, city], (error, result) => {
        if (error) {
            console.log(error);

        }
    })
})

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove =
        "DELETE from crudop where id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);

        }
    })
})


app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;

    const sqlGet = "Select * from crudop where id = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);

        }
        res.send(result);
    })
})


app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
const {fname,lname,city}=req.body;
    const sqlUpdate = 
    " UPDATE crudop SET fname=? ,lname=? , city=? where id = ?";
    db.query(sqlUpdate, [fname,lname,city,id], (error, result) => {
        if (error) {
            console.log(error);

        }
        res.send(result);
    })
})



app.listen(5000, () => {
    console.log("server is running on port 5000");
})