const Joi=require('joi');
const express=require('express');
const app=express();
app.use(express.json());

const Movies=[
    {id:1,name:'Harry Potter'},
    {id:2,name:'Fast & Furious'},
    {id:3,name:'Expendables'},
    {id:4,name:'Avengers'},
]


//READ
app.get('/api/Movies',(req,res)=>{
    res.send(Movies);
});

//FIND
app.get('/api/Movies/:id',(req,res)=>{
const movie=Movies.find(c=>c.id===parseInt(req.params.id));
if(!movie) res.status(404).send('Movie not found!');
res.send(movie);
}); 

//CREATE
app.post('/api/Movies',(req,res)=>{
const movie={
    id:Movies.length+1,
    name:req.body.name
};
Movies.push(movie);
res.send(movie);
});


//UPDATE
app.put('/api/Movies/:id',(req,res)=>{
    const movie=Movies.find(c=>c.id===parseInt(req.params.id));
    if(!movie) res.status(404).send('Cannot Find the Movie!');
    movie.name=req.body.name;
    res.send(movie);
});

//DELETE
app.delete('/api/Movies/:id',(req,res)=>{
    const movie=Movies.find(c=>c.id===parseInt(req.params.id));
    if(!movie) res.status(404).send('Cannot Find the Movie!');

    const index=Movies.indexOf(movie);
    Movies.splice(index,1);
    res.send(movie);
});

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port} ...`));