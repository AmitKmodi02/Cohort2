const express =require("express");

const app = express();


const notes =[
    // {
    //     // These r the properties of note object
    //     title:'test title 1',
    //     description:'test desc 1'
    // },
    // {
    //     title:'test title 2',
    //     description:'test decs 2'
    // }
]

// API create krne ke liye app.POST ka use krte hain
// Client ke side se ya fronteend se kuch v data aaya hai to hum req se use access kr skte hain
// par by default express.js req.body ko nhi padh pata hai
// isliye hume ek middleware use krna pdta hai jiska naam hai express.json()
// ye middleware req.body me jo data aayega usko json format me convert kr dega jisse hum use easily access kr skte hain


app.use(express.json()); //req.body me jo data aayega usko access krne ke liye ye middleware lagaya hai

// jab bhi client ke side se /notes pe POST request aayegi to ye callback function execute hoga

// Hm ek mini task create kr rhe hai jisme user apne notes ko server pe bhej skta hai or delete kr ske update kr ske yahi hmlog create kar rhe hai

app.post("/notes",(req,res) =>{

    console.log(req.body);
    
    notes.push(req.body); // jo bhi data client ke side se aayega usko notes array me push kr denge

    res.send("note created successfully");
})


//


// 2.AB user chahtra hai ki server pe jo notes create kiye hai use wo dekh ske to uske liye hm ek GET API create krenge

// yaha API ka name same hai but method alag hai pehle POST tha ab GET hai

// yaha par jab bhi client ke side se /notes pe GET request aayegi to ye callback function execute hoga
// or res.send me hum notes array ko client ke side bhej denge

// yaha ek new API create kiya hai jiska naam /notes hai or method GET hai

app.get("/notes",(req,res)=>{
    res.send(notes); // notes array ko client ke side bhej denge
})

app.listen(3000,() =>{
    console.log("server is running on the port 3000 ");
    
})