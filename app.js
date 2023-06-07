//import
const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const loginRouter = require('./routes/login.route');
const signupRouter = require('./routes/signup.route');
const dashboardRouter = require('./routes/dashboard.route');

//init
const app = express();

app.use(helmet());
app.use(session({
    secret: "this is my secret",
    saveUninitialized: true, //session initialize if empty or not

    cookie: {
        maxAge: 1000 * 60 * 60 * 24, //1 day to end cookie
        //secure: true  //if https only set cookie not for http
    },
    resave: false //session save if cookie expire

}));


app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));

// //routes
// app.use('/', (req, res) => {

//     console.log(req.session);
//     res.send("hello");
// })

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.use('/', dashboardRouter);
//server started
app.listen(8000, () => {
    console.log("server has been started at 8000");
})