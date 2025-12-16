const getStudent =  (req,res) => {
    res.json({
        name:"Sudip",
        age:20,
        role:"student"
    });
};

const createStudent = (req,res) => {
    const {name, age} = req.body;

    res.json({
        message:"Student created",
        student:{
            name,
            age
        }
    });
};

module.exports ={
    getStudent,
    createStudent
};