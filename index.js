const express = require('express')
const supabase=require('./config/supabase');
const bodyParser=require('body-parser');
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
  
// const adminRouting = require('./routes/admin-routes/admin-routing');
// const jobRouting = require('./routes/job-routes/job-routing');
const userRouting = require('./Routes/user-routing');
const postsRouting = require('./Routes/posts-routing');
const ticketRouting = require('./Routes/ticket-routing');
const updateRouting = require('./Routes/update-routing');
const notificationRouting = require('./Routes/notification-routing');


// api url : http://localhost:3000/api

app.use('/api',userRouting,postsRouting,ticketRouting,updateRouting,notificationRouting);

