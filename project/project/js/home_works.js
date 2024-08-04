const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const redSquare = document.querySelector('.child_block') 
const parentBlock = document.querySelector('.parent_block')
let redSquareLeft = 0
let redSquareBottom = 0
let parentBlockWidth = parentBlock.offsetWidth
let parentBlockHeight = parentBlock.offsetHeight
const reset = document.querySelector('#reset')
const start = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const seconds = document.querySelector('#seconds')
let stopper = false
let num = 0



    start.addEventListener('click', ()=>{
        if(!stopper){
            const interval = setInterval(() => {
                num++
                seconds.innerHTML = num
            }, 1000);
            stopper = true
            stopBtn.addEventListener('click', ()=>{
                clearInterval(interval)
                stopper = false
            })
        
            reset.addEventListener('click', ()=>{
                clearInterval(interval)
                num=0
                seconds.innerHTML = num
                stopper = false
            })
        }
    
    })







const regExp = /^[\w\W]{10,30}@(mail|gmail).(com|ru)$/


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

    console.log(redSquareLeft, redSquareBottom, parentBlockWidth, parentBlockHeight);
    if(redSquareLeft < parentBlockWidth - redSquare.offsetWidth && redSquareBottom === 0){
        redSquareLeft += 5
        redSquare.style.left = `${redSquareLeft}px`
    }else if(redSquareLeft === parentBlockWidth - redSquare.offsetWidth && redSquareBottom < parentBlockHeight - redSquare.offsetHeight){
        redSquareBottom += 5
        redSquare.style.top = `${redSquareBottom}px`
    }else if(redSquareLeft > 0 && redSquareBottom > 0){
        redSquareLeft -=5
        redSquare.style.left = `${redSquareLeft}px`
    }else if(redSquareLeft === 0 && redSquareBottom > 0){
        redSquareBottom -= 5
        redSquare.style.top = `${redSquareBottom}px`
    }


    requestAnimationFrame(moveBlock)
}

moveBlock()




