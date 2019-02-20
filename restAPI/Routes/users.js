
const mySQL = require('mysql')
const express = require('express')
const router = express.Router()

const connection = mySQL.createConnection(
    {
      host : 'localhost',
      user : 'root',
      password : 'XXXXXXXX',
      database : 'MySample'
    }
  )

  router.get('/user/:id', (req, res) =>
{
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

router.get("/", (req,res) =>
{
  console.log("Get request");
  res.send("Receive the request")
})

router.get("/users", (req,res) =>
{
  const queryString = "select * from users"
  connection.query(queryString,(err,results, fields)=>{
    if (err)
    {
      res.sendStatus(500)

      return 
    }

    res.json(results)
  })


})

module.exports = router