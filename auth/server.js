const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.post("/auth" , async (req,res)=> {
    const key = req.body.key;

    if(key === "secretStuff"){
        res.status(200).send();

        return ;
    }

    res.status(403).send
})


app.listen(1337, ()=> {
    console.log(`Console Running at PORT 1337`);
})