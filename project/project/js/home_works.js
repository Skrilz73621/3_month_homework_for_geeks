const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const redSquare = document.querySelector('.child_block') 
let redSquareLeft = 0

const regExp = /[a-z0-9]{10,30}@(mail|gmail).(com|ru)/


gmailButton.addEventListener('click', ()=>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})



const moveBlock = ()=>{
    if(redSquareLeft < 448){
        redSquareLeft++
        redSquare.style.left = `${redSquareLeft}px`
    }
    requestAnimationFrame(moveBlock)
}

moveBlock()

