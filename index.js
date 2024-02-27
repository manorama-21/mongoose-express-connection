mongoose = require('mongoose');
express =require('express');

app = express();
port = 3000;

app.listen(port,()=> {
    console.log(`successfuuly running: ${port}`)
})

mongoose.connect('mongodb://localhost:27017/Trapti').then(()=>
{
    console.log('connected')
}).catch((error)=>console.log(error));

empSchema= mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobile : {
        type: Number,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    salary : {
        type: Number,
        required: true
    },
    married : {
        type: Boolean,
        required: true
    }, 
    date : {
        type: Date,
        default: Date.now
    }
})

employee = new mongoose.model('employee',empSchema)
        
        // --- single entry--

// createEmp = new employee(
//     {
//         name: 'Trapti',
//         mobile: 9888456541,
//         location: 'Etawah',
//         salary: 30000,
//         married: true,
//     }
// )
// createEmp.save();

        

        // ---- multiple entry--

// createE1 = new employee(
//     {
//         name: 'Anjali',
//         mobile: 9888456541,
//         location: 'Mudera',
//         salary: 20000,
//         married: true,
//     })
// createE2 = new employee(
//     {
//         name: 'Pratibha',
//         mobile: 9268587748,
//         location: 'Jhunsi',
//         salary: 35000,
//         married: false,
//     })
// createE3 = new employee(
//     {
//         name: 'Jyoti',
//         mobile: 9888456541,
//         location: 'jalwa',
//         salary: 40000,
//         married: false,
//     })

// empD = employee.insertMany([createE1,createE2,createE3])
// console.log(empD)






        // ---async method single entry--
// createEmp = async()=>{
//     try
//     {createE =new employee(
//     {
//         name: 'Pushpa',
//         mobile: 9888456541,
//         location: 'Prayagraj',
//         salary: 30000,
//         married: true,
//     });

//     empD = await createE.save();}
//     catch(error){
//         console.log(error.message)
//     }
// console.log(`data inserted successfully`);
// }
// createEmp()


            // --read entries--

// readData = async()=> {
//     try{
//         data = await employee.find({married:true});
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// readData();


            // --read single entry--
// readData = async()=> {
//     try{
        // data = await employee.find({married:true}).select({name:1}).limit(3).sort({salary:-1});
        // console.log(data);

        // data = await employee.find({salary: {$gt: 35000}}),
        
        // data = await employee.find({$and: [{salary: {$gt: 35000}}],[{married: {$eq: true}}]
        // }),
        // console.log(data);

        // data = await employee.find( {salary: {$not: {$gt: 35000}}}),
        //     console.log(data);

//         data1 = await employee.find( {salary: {$not: {$gt: 35000}}}).countDocuments();   
//                     // --countDocument=how many entry read---
//         console.log(data1);
//         data2 = await employee.find( {salary: {$not: {$gt: 35000}}}),
//         console.log(data2);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// readData();


            // --update data--

// updateData = async(name)=>
// {
//     try{
//         data = await employee.updateOne({ name:name},
//             {$set: {name: "Sakshi"}})
//         console.log(data);
//     }
//     catch(error){console.log(error)}
// }
// updateData('Anjali')

           
            // --delete data---

deleteData = async(name)=>{
    try{
        data =await employee.deleteOne({name:name}),
        console.log(data);
    }
    catch(error){console.log(error)}
}
deleteData('Jyoti')
        
