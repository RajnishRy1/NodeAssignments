const express =require('express');
const app= express();

var courses=['Node Js','Python', 'asp.net', 'react', 'sql'] ;

app.get('/api/courses',function(req,res)
{
    res.send(courses);  
});


const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port} ...`));