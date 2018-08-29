require('dotenv').config()
import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'
import path from 'path'

/**
|--------------------------------------------------
| ENVIRONMENT VARIABLES
|--------------------------------------------------
*/
const PORT = process.env.PORT || 3000


/**
|--------------------------------------------------
| APP DECLARATIONS
|--------------------------------------------------
*/
const app = express()
const hbs = handlebars.create({ defaultLayout: 'main.hbs' })


/**
|--------------------------------------------------
| MIDDLEWARE AND ENGINES
|--------------------------------------------------
*/
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, 'public')))

/**
|--------------------------------------------------
| ROUTING
|--------------------------------------------------
*/
app.get('/', (req, res) => {
  res.render('homepage')
})


app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Application is running at port ${PORT}`)
})