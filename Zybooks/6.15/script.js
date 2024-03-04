function drawTriangle(triangleSize) {

   for(let i=1; i<=triangleSize; i++){
      let string = ""
      for(let j=1; j<=i; j++){
         string += '*'
      }
      console.log(`${string}`)
   }
   
}

drawTriangle()