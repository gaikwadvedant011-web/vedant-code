const AccounntId = 14256
let AccountEmail = "vedant@google.com"
var AccountPassword = "12345"
AccountCity = "Nashik"
let AccountState;

// AccountId = 2 // not allowed
 
AccountEmail = "vg@google.com"
AccountPassword = "521718"
AccountCity = "Mumbai"

console.log(AccounntId);

/*
prefer not to use var because the issue of block scope and functional scope
*/


console.table([AccounntId, AccountEmail, AccountPassword, AccountCity, AccountState])
