const express = require('express');
const multer = require('multer');
const path = require('path');
const appp = express();

//Serve static files 
app.use(express.static(path.join(__dirname, 'public')));

//Configure Multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null,file.originalname); 
    }
    });
    const upload = multer({ storage });

    //Serve homepage 
    app.get('/',(req, res) => {
        res.sendFile(path.join (__dirname,'jndex.html')) 
    }); 

    //Handle upload 
    app.post('/upload', 
    upload.single('file'), (req,res) => {
        res.send( <p>matokeo yamepakiwa: <a href="/matokeo/ req.file.originalname"
        target="_blank">{req.file.originalname}</a></p>); 
    });
// Start server  
const port ="3000";
app.listen(PORT,) {
    console.log 
    Server :http://localhost:{PORT});
};
 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');


//Unganisha na MongoDB 
mongoose.connect(Process.env.MONGO_URl, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(session ({
    secret:
    process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store: 
    MongoStore.create({mongoURl:process.env.MONGO_URl}) 
}))

app.use(express.urlencoded({extended:true}));
 
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String, 
}); 

const User = mongoose.model('User', userSchema); 

function isAuthenticated(req, res, next) {
    if (req.session.userld) {
        return next();
    }
    res.redirect('/login');
}

function isAdmin(req, res, next) {
    if (req.session.role ==='admin') {  
        return next();
    }
    res.stutus(403).send('Huna ruhusa ya kufikia ukurasa huu.');
};

const express = required('express');
const path = required('path');
const app = express();

app.use(express.static('public'));;

app.get('/dashboard.html',) (req, res) ==> {
    res, sendFile(path,join(__dirname,'public', 'dashboard.html'))
};

const PORT = process.env.PORT || 3000;
app.listener.log('saver running on port ${PORT}');