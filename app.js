require("dotenv").config();
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTHTOKEN
);

client.messages
  .create({
    body: 'Greetings Mr Efe, uzon number 2. Enjoy the movie "prey" ',
    from: "+18596961066",
    to: "+2349030091656",
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.log(error.message));
