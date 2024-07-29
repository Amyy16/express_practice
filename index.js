const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const mystudents = [
    {id: 1, name: "amara", age: 19, email: "amara@gmail.com"},
    {id: 2, name: "amara", age: 16, email: "amara@gmail.com"},
    {id: 3, name: "amara", age: 12, email: "amara@gmail.com"},
    {id: 4, name: "amara", age: 15, email: "amara@gmail.com"}
];
app.use(express.json())
// get all students
app.get("/students", (req, res) =>{
    res.json(mystudents)
})

// add student
app.post("/add", (req, res) =>{
    const student = req.body;
    mystudents.push(student);
    res.status(201).json({
        message: 'Student added successfully',
        student: student
    });
    // res.send(`student has been added with details ${body}`);
    console.log(student);
});
// get student by id
app.get("/students/:id", (req, res) =>{
    const params = req.params.id;
    console.log(params);
    res.json(params);
})
app.put("/update/:id", (req, res) =>{
    const student = req.body;

})


app.listen(PORT, (req, res) => {
    console.log(`app is running on ${PORT}`);
})