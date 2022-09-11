const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); // for the body parsing mechanism

let tasks = ['sample task'];

app.get('/',(req,res)=>{

    let tasklists = tasks.map(t=>`<li>${t}</li>'`).join('\n');
    res.send(`
    <html>
    <head></head>
    <body>
    <form action="/" method = 'post'>
        <input type="text" id="input" name = 'newtask'/>
        <button id="button">Click me</button>
    </form>
    
    <ul>
        ${tasklists}
    </ul>
    </body>
</html>


    `)
});


app.post('/',(req,res)=>{
tasks.push(req.body.newtask);
res.redirect('/');
})


app.listen(3000,(req,res)=>{
   
    console.log('http://localhost:3000')
})

