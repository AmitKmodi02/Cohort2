const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send("Hello bachoooooo");
    
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

// yaha app.listen me port ke alawa callback function bhi lagaya hai jisse server start hone ke baad ek message console me print ho jaye
// jaise hi server start kiya or mera server user ki request sunne ke liyu ready hai to ye callback execute hoga or  ye message console me print ho jayega
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
});


// what is API?
// API ka full form hota hai Application Programming Interface
// API ek aisa set of rules hota hai jo do software applications ko ek dusre se communicate karne deta hai
// API ek mediator ki tarah kaam karta hai jo ek application ke requests ko dusre application tak pahuchata hai or phir uske responses ko wapas pehla application tak le aata hai
// APIs ka use karke developers alag alag applications ke beech data exchange kar sakte hain or unke functionalities ko integrate kar sakte hain bina unke internal workings ko samjhe
// APIs web development me bahut important role play karti hain kyunki ye different services or platforms ko connect karne me madad karti hain, jaise ki social media integration, payment gateways, or third-party services

// What is REST API?
// REST API ka full form hota hai Representational State Transfer Application Programming Interface
// REST API ek architectural style hai jo web services ko design karne ke liye use hota hai
// REST API HTTP and HTTPS protocols ka use karke client-server communication ko enable karta hai iske alawa or koi Protocol use kiya ja rha hai wo Rest API nahi hota
// communication me data ko transfer karne ke liye REST API JSON (JavaScript Object Notation) format ka use karta hai, jo lightweight or easy to read hota hai
// REST API me resources ko identify karne ke liye URIs (Uniform Resource Identifiers) ka use hota hai
// REST API me CRUD (Create, Read, Update, Delete) operations ko perform karne ke liye HTTP methods ka use hota hai, jaise ki GET, POST, PUT, DELETE

// HTTP Methods:
// CLIENT OR SERVER KE BICH  KI COMMUNICATION  USKE HISAB SE HUMLOG METHOD CHOOSE KARTE HAIN
// GET: Ye method server se data retrieve karne ke liye use hota hai. Jab client ko kisi resource ki information chahiye hoti hai, to wo GET request bhejta hai.
// POST: Ye method server par naya resource create karne ke liye use hota hai. Jab client ko server par naya data bhejna hota hai, to wo POST request bhejta hai.
// Example: Jab aap kisi website par form fill karte hain or submit button dabate hain, to wo data server par bhejne ke liye POST request hoti hai. users ko post pe comment karne ke liye bhi POST request ka use hota hai.
// PUT: Ye method existing resource ko update karne ke liye use hota hai. Jab client ko server par maujood data ko modify karna hota hai, to wo PUT request bhejta hai.
// PATCH: Ye method bhi existing resource ko update karne ke liye use hota hai, lekin ye sirf resource ke kuch specific parts ko modify karta hai, poore resource ko nahi. Jab client ko server par maujood data ke kuch hisse ko badalna hota hai, to wo PATCH request bhejta hai.
// DELETE: Ye method server se resource delete karne ke liye use hota hai. Jab client ko kisi resource ko server se remove karna hota hai, to wo DELETE request bhejta hai.

// what is JSON?
// JSON ka full form hota hai JavaScript Object Notation
// JSON ek lightweight data-interchange format hai jo humans ke liye easy to read or write hota hai, or machines ke liye easy to parse or generate hota hai
// JSON primarily data ko represent karne ke liye use hota hai, especially web applications me client-server communication ke dauran
// JSON key-value pairs ka use karta hai jisme keys strings hoti hain or values different data types jaise ki strings, numbers, arrays, objects, booleans, or null ho sakti hain
// JSON ka syntax JavaScript object notation par based hota hai, lekin ye language-independent hai, isliye ye almost sabhi programming languages me use kiya ja sakta hai