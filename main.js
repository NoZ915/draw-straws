var listArray = []

var clickToInput = function () {
  const drawStrawsContent = $("#draw-straws-content").val()
  const printList = $("#print-list")
  const newLI = document.createElement("li")


  if (drawStrawsContent.length != "") {
    newLI.append(drawStrawsContent)
    printList.append(newLI)
    document.getElementById("draw-straws-content").value = ""
    listArray.push(drawStrawsContent)
    console.log(listArray)
  } else {
    alert("請輸入內容")
  }
}

var clickToStart = function () {
  const numberOfWinner = $("#number-of-winner").val()
  const printWinner = $("#print-winner")
  const button = $(".disabled-button")

  if (numberOfWinner <= listArray.length) {
    for (var i = 0; i < numberOfWinner; i++) {
      const newLI = document.createElement("li")
      const randomNumber = parseInt(Math.random() * (listArray.length - 1))

      newLI.append(listArray[randomNumber])
      printWinner.append(newLI)
      listArray.splice(randomNumber, 1)
    }
    button.attr("disabled", true)
  } else {
    alert("抽出數量不要大於抽籤內容！")
  }
}

var clearIt = function () {
  window.location.reload()
}