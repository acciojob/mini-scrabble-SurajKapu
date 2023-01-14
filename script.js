//your code here
let input = document.getElementById("evaluatedText")
let letter_count = document.getElementById("letterCount")
  
input.onkeyup = display_count
  
  function display_count() {
    letter_count.innerText = input.value.length
  }