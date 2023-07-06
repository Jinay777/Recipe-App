const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter  = require("./routes/user.js");
const recipesRouter  = require("./routes/recipes.js")

const app = express();

const PORT = 3001

app.use(express.json());
app.use(cors());


app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(console.log("DataBase Connected CONNECTED"));

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
