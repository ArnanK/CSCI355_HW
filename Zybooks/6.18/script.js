// Put your solution here
function divideArray(nums){
    let odd = []
    let even = []
    

    for(num of nums){
        if(num%2==0)even.push(num)
        else odd.push(num)
    }

    odd.sort((a,b) => a-b)
    even.sort((a,b) => a-b)

    console.log("Even numbers:")
    if(even.length == 0) console.log("None")
    else{
        for(num of even){
            console.log(num)
        }
    }

    console.log("Odd numbers:")
    if(odd.length == 0) console.log("None")
    else{
        for(num of odd){
            console.log(num)
        }
    }

}
