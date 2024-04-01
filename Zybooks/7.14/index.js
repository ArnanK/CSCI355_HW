function parseScores(scoresString) {
   // TODO: Compete the function
   let scores = scoresString.split(" ")
   return scores;
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let distArray = [0,0,0,0,0]
   for(let i=0; i<scoresArray.length; i+=1){
      if(scoresArray[i] >= 90){
         distArray[0] += 1
      }else if(scoresArray[i] >= 80 && scoresArray[i] <=89){
         distArray[1] += 1
      }else if(scoresArray[i] >= 70 && scoresArray[i] <=79){
         distArray[2] += 1
      }
      else if(scoresArray[i] >= 60 && scoresArray[i] <=69){
         distArray[3] += 1
      }
      else if(scoresArray[i] <=59){
         distArray[4] += 1
      }
   }
   return distArray;
}

function setTableContent(userInput) {
   // TODO: Compete the function
   let firstRow = document.getElementById("firstRow")
   let thirdRow = document.getElementById("thirdRow")

   let array = buildDistributionArray(parseScores(userInput))
   let heights = []
   for(let i=0; i<array.length; i+=1){
      heights[i] = array[i]*10
   }

   console.log(heights)
   let A = document.createElement("td")
   let B = document.createElement("td")
   let C = document.createElement("td")
   let D = document.createElement("td")
   let F = document.createElement("td")

   let Adiv = document.createElement("div")
   Adiv.className = "bar0"
   Adiv.style.height = `${heights[0]}px`
   
   let Bdiv = document.createElement("div")
   Bdiv.className = "bar1"
   Bdiv.style.height = `${heights[1]}px`
   
   let Cdiv = document.createElement("div")
   Cdiv.className = "bar2"
   Cdiv.style.height = `${heights[2]}px`
   
   let Ddiv = document.createElement("div")
   Ddiv.className = "bar3"
   Ddiv.style.height = `${heights[3]}px`
   
   let Fdiv = document.createElement("div")
   Fdiv.className = "bar4"
   Fdiv.style.height = `${heights[4]}px`

   console.log(Bdiv.style.height)

   A.appendChild(Adiv)
   B.appendChild(Bdiv)
   C.appendChild(Cdiv)
   D.appendChild(Ddiv)
   F.appendChild(Fdiv)

   firstRow.appendChild(A)
   firstRow.appendChild(B)
   firstRow.appendChild(C)
   firstRow.appendChild(D)
   firstRow.appendChild(F)

   let An = document.createElement("td")
   let Bn = document.createElement("td")
   let Cn = document.createElement("td")
   let Dn = document.createElement("td")
   let Fn = document.createElement("td")

   An.appendChild(document.createTextNode(array[0]))
   Bn.appendChild(document.createTextNode(array[1]))
   Cn.appendChild(document.createTextNode(array[2]))
   Dn.appendChild(document.createTextNode(array[3]))
   Fn.appendChild(document.createTextNode(array[4]))
   thirdRow.appendChild(An)
   thirdRow.appendChild(Bn)
   thirdRow.appendChild(Cn)
   thirdRow.appendChild(Dn)
   thirdRow.appendChild(Fn)
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");

