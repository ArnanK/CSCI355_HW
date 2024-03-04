// Your solution goes here 
function isStrongPassword(password){
    if(password.length < 8) return false

    if(password.includes("password")) return false

    let count=0
    for(let i=0; i<password.length; i++){
        if(!(password[i]>= '0' && password[i] <= '9' ) && password[i] == password[i].toUpperCase()) count++
    }
    console.log(count)
    if(count==0) return false

    return true

}

