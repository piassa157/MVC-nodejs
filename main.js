import express from 'express'
import consing from 'consing'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/vies')

consing()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app)

app.listen(3000, function () {
    console.log('Running at 3000 port')
});


