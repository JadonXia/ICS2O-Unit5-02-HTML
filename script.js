//  This links my HTML button with JavaScript. An alert will appear when the button is clicked.
document.getElementById('button1').addEventListener('click', displayalert)
document.getElementById('button2').addEventListener('click', changeparagraph)

function displayalert () {
  alert('sike')
}

function changeparagraph () {
  document.getElementById('changeparagraph').style.fontSize='150%'
  document.getElementById('changeparagraph').style.color='red'
  document.getElementById('changeparagraph').style.fontFamily='fantasy'
}
