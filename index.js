const express = require('express')
const supabase=require('./config/supabase');
const bodyParser=require('body-parser');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
  
// const adminRouting = require('./routes/admin-routes/admin-routing');
// const jobRouting = require('./routes/job-routes/job-routing');
const userRouting = require('./Routes/user-routing');


app.use('/api',userRouting);

