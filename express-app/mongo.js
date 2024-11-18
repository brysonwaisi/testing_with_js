require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const noteSchema = new mongoose.Schema({
      content: String,
      important: Boolean,
    })

    const Note = mongoose.model('Note', noteSchema)

    Note.find({}).then((result) => {
      result.forEach((note) => {
        console.log(note)
      })
      mongoose.connection.close()
    })
  })
