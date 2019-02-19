const express = require('express')
const app = express()
const morgan = require('morgan')
const mySQL = require('mysql')

app.use(morgan('combined'))

app.get('/user/:id', (req, res) =>
{
  const connection = mySQL.createConnection(
    {
      host : 'localhost',
      user : 'Nattudurai',
      password : '123456',
      database : 'TestUser'
    }
  )

  const userId = req.params.id
  const queryString = "select * from users where id = ?"

  connection.query(queryString, [userId], (err, rows, fields) =>
  {
    if (err)
    {
      res.sendStatus(500)

      return 
    }

    res.json(rows)
    
    //Custom Objects to return
    // const users = rows.map((row) =>
    // {
    //   return { firstname : row.firstname, lastname : row.lastname}
    // })
    // res.json(users)

  })

})

app.get("/", (req,res) =>
{
  console.log("Get request");
  res.send("Receive the request")
})

app.get("/users", (req,res) =>
{
  var user1 = { firstname: "Nattudurai", lastname: "Eswaramurthy"}
  var user2 = { firstname: "Priya", lastname: "Nattudurai"}

  res.json([user1, user2])

})

app.listen(3000, ()=>{

console.log("App is running and litening on port 3000");

})
