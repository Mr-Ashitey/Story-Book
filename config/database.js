if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://emma:<1234>@cluster0-zlsr6.mongodb.net/test?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/Story_Book'}
  }