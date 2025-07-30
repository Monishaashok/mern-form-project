const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: String,
});
module.exports = mongoose.model('FormEntry', formSchema);
