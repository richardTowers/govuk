import app from './app.js'

const port = process.env.PORT || 3000 
app.listen(port, null, () => console.log(`Listening on port ${port} 🚀`))