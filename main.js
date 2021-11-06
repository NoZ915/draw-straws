var listArray = []

var clickToInput = function () {
  const drawStrawsContent = $("#drawStrawsContent").val()
  const printList = $("#printList")
  const newLI = document.createElement("li")


  if(drawStrawsContent.length != ""){
    newLI.append(drawStrawsContent)
    printList.append(newLI)
    document.getElementById("drawStrawsContent").value = ""
    listArray.push(drawStrawsContent)
    console.log(listArray)
  }else{
    alert("請輸入內容")
  }
}

var clickToStart=function(){
  const numberOfWinner = $("#numberOfWinner").val()
  const printWinner = $("#printWinner")
  const button = $(".button")

  if (numberOfWinner<=listArray.length){
    for(var i=0; i < numberOfWinner; i++){
      const newLI = document.createElement("li")
      const randomNumber = parseInt(Math.random()*(listArray.length-1))

      newLI.append(listArray[randomNumber])
      printWinner.append(newLI)
      listArray.splice(randomNumber,1)
    }
    button.attr("disabled", true)
  }else{
    alert("抽出數量不要大於抽籤內容！")
  }
}

var clearIt = function(){
  const button = $(".button")
  const printList = $("#printList")
  const printWinner = $("#printWinner")

  button.attr("disabled", false)
  printList.empty()
  printWinner.empty()
  document.getElementById("numberOfWinner").value = ""
}

// var winnerArray = []
// var clickToStart=function(){
//   const numberOfWinner = $("#numberOfWinner").val()
//   const printWinner = $("#printWinner")

//   if (numberOfWinner<=listArray.length){
//     for(var i=0; i < numberOfWinner; i++){
//       const randomNumber = parseInt(Math.random()*(listArray.length-1))
//       if($.inArray(randomNumber, winnerArray) === -1){
//         const newLI = document.createElement("li")
//         winnerArray.push(randomNumber)
//         newLI.append(listArray[randomNumber])
//         printWinner.append(newLI)
//       }else{
//         i--
//       }
//     }
    
//   }else{
//     alert("抽出數量不要大於抽籤內容！")
//   }

//   for(var j=0; j<=listArray.length; j++){
//     if($.inArray(LI, listArray) === -1){
//       listArray.push(LI)
//       console.log("HI")
//     }
//   }
// }