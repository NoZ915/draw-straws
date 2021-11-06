clickToInput = function () {
  const drawStrawsContent = $("#drawStrawsContent").val()
  const printList = $("#printList")
  const newLI = document.createElement("li")
  newLI.append(drawStrawsContent)
  printList.append(newLI)
  document.getElementById("drawStrawsContent").value = ""
}
console.log("hi")