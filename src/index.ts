import app from './app.js'

const port = process.env.PORT || 3000 
app.listen(port, undefined, () => console.log(`Listening on port ${port} 🚀`))