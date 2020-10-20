const { number, string } = require('joi');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/eternus')
    .then(()=>console.log('Connected to MongoDb...'))
    .catch(err=>console.error('Could not connect to MongoDB...',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type:Date,default:Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course',courseSchema);


//CREATE
async function createCourse() 
{
    const course=new Course({
        name:'Angular ',
        author:'Mosh',
        tags:['angular','frontend'],
        isPublished: true
    });
    
    const result=await course.save();
    console.log(result);
}

//READ
async function getCourses(){
    const Courses=await Course.find()
        .find({author:'Mosh',isPublished:true})
        .limit(10)
        .sort({name:1})
        .select({name:1,tags:1});
    console.log(Courses);
}
getCourses();

//UPDATE
async function updateCourse(id){
	const course=await Course.findById(id);
	if(!course) return;
	
	course.isPublished=true;
	course.author='Rowling';
	
	const result=await course.save();
	console.log(result);
}

//DELETE
async function updateCourse(id){
	const result = await Course.deleteOne({_id:id});
	//const course=await Course.findByIdAndRemove(id);
	console.log(result);
}


