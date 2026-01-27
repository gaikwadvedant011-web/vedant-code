// Stack (Primitive) , Heap (Non Primitive)

let myYoutubename = "codewithvedant"

let anothername = myYoutubename
anothername = "codewithved"

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ibl"
}

let usertwo = userone

usertwo.email = "vedant@google.com"
console.log(userone.email);
console.log(usertwo.email);

