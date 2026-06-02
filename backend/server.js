// server.js
import express from 'express'
import multer from 'multer'
import cors from 'cors'

const app = express()
app.use(cors()) // allow requests from your frontend

// Store uploaded files in "uploads/" folder
const upload = multer({ dest: 'uploads/' })

// Middleware to parse JSON bodies
app.use(express.json())

app.get('/67', (req, res) => {
    const name = req.query.name;
  res.send(`67 works and it is fast! YOUR NAME IS ${name}`)
})
app.get('/six-seven/:name', (req,res) => {
    const name = req.params.name ;
    res.send(`Hello ${ name }`)
})
// Endpoint to receive employment form
app.post('/api/employment', upload.single('resume'), (req, res) => {
  const { name, email, phone, teach, availability, message } = req.body
  const resumeFile = req.file

  console.log('Form data received:')
  console.log({ name, email, phone, teach, availability, message, resumeFile })

  // TODO: store this data in a database

  res.status(200).json({ message: 'Form received successfully!' })
})

app.listen(3000, '0.0.0.0' , () => {
  console.log('Server running on http://localhost:3000')
})
