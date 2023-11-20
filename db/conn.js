const mongoose = require("mongoose");


                         // OLD
const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => {
    console.log(err);
  })

                     // NEW       
// const configOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const connectToDB = async () => {
//   const connectionUrl =
//     "mongodb+srv://abhaysharma3819:abhay790538@cluster0.fyrcg5y.mongodb.net/you?retryWrites=true&w=majority";
//     // "your-mongodb-url"; pasword me @ ki jgh pr ye %40 likhega some special case : / ? # [ ] @

//   mongoose
//     .connect(connectionUrl, configOptions)
//     .then(() => console.log("Database connected successfully!"))
//     .catch((err) =>
//       console.log(`Getting Error from DB connection ${err.message}`)
//     );
// };

// // export default connectToDB;
// connectToDB();