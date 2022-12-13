export{}
var credential ={
    "user" : "admin",
    "password" : "pass@123"
}
var submitfrom = (arg:validcredential) =>{
 console.log(arg.user);
 console.log(arg.password);
}
submitfrom(credential)

interface validcredential {
    user : string,
    password: string,
}
