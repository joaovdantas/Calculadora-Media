const form = document.querySelector('#form')
const inputs = form.querySelectorAll('input')
const resultMessage = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()  
  
  let notes = []
  
  inputs.forEach(input => {
    notes.push(Number(input.value))
    input.value = ''
  })
  
  const sumNotes = notes.reduce((acc, note) => acc + note, 0)
  const media = sumNotes / notes.length 
  const result = media.toFixed(2);
  
  if(result >= 6){
   resultMessage.textContent = `O resulta é: ${result}
   Você foi Aprovado!`
   resultMessage.style.color = 'green'
   return ; 
  }
  
   resultMessage.textContent = `O resulta é: ${result}
   Você foi Reprovado!`
   resultMessage.style.color = 'red'
  
}) 