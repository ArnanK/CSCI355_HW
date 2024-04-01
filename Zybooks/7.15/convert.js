window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let convertButton = document.getElementById("convertButton")
   let errorMsg = document.getElementById("errorMessage")
   
   let cInput = document.getElementById("cInput")
   let fInput = document.getElementById("fInput")
   let weatherImg = document.getElementById("weatherImage")

   //ensures only one input
   cInput.addEventListener("input", ()=>{
      if(fInput.value != "" ){
         fInput.value = ""
      }
   })

   fInput.addEventListener("input", ()=>{
      if(cInput.value != "" ){
         cInput.value = ""
      }
   })

   //changes image and does conversion when button is clicked.
   convertButton.addEventListener("click", ()=>{
      let celsius = document.getElementById("cInput")
      let fahrenheit = document.getElementById("fInput")
      
      if(parseFloat(celsius.value) == NaN){

      }

      let convertValue
      //conversion
      celsiusCondition: if(celsius.value != ""){
         if(isNaN(parseFloat(celsius.value))){
            errorMsg.innerHTML = `${celsius.value} is not a number`
            break celsiusCondition
         }else{
            errorMsg.innerHTML = ""
            convertValue = convertCtoF(parseFloat(celsius.value))
            fahrenheit.value = convertValue
         }
         
      }
      else fahrenheitCondition: if(fahrenheit.value != ""){
         if(isNaN(parseFloat(fahrenheit.value))){
            errorMsg.innerHTML = `${fahrenheit.value} is not a number`
            break fahrenheitCondition
         }else{
            errorMsg.innerHTML = ""
            convertValue = convertFtoC(parseFloat(fahrenheit.value))
            celsius.value = convertValue
         }
      }

      //check for image change
      if(parseFloat(fahrenheit.value) >50){
         weatherImg.src = "warm.png"
      }else if(parseFloat(fahrenheit.value) >= 32 && parseFloat(fahrenheit.value) <= 50){
         weatherImg.src = "cool.png"
      }else if(parseFloat(fahrenheit.value) < 32){
         weatherImg.src = "cold.png"
      }

   })
   
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return (degreesCelsius * (9/5) + 32)
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return ((degreesFahrenheit - 32) * (5/9))
}
