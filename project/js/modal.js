// Modal
// removeEventListner
// scroll
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')


modal.onclick = (event) =>{
    if(event.target === modal){
        closeModal()
    }


}
const openModel = () =>{
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = ()=>{
    openModel()
}

modalCloseBtn.onclick = ()=>{
    closeModal()
}

let modalStopper = true

function popUp(){
    window.addEventListener('scroll',()=>{
        let documentHeight = document.documentElement.scrollHeight;
        let windowHeight = window.innerHeight;
        let scrollTop = window.scrollY;
        
        if(scrollTop + windowHeight >= documentHeight && modalStopper === true){
            openModel()
        }
    })

    modalCloseBtn.addEventListener('click', ()=>{
        modalStopper = false
    })

    modal.addEventListener('click', ()=>{
        modalStopper = false
    })
}




console.log(popUp())