const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()
app.use(cors())

const storage = multer.diskStorage({
  destination: 'public/images/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage, dest: 'public/images/' })

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }

  return res.status(200).send('File uploaded successfully.')
})

app.listen(3030, () => {
  console.log('Server is running on port 3030')
})