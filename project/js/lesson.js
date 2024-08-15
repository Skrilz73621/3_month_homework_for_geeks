const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.addEventListener('click', ()=>{
        if(regExp.test(phoneInput.value)){
            phoneSpan.innerHTML = 'OK'
            phoneSpan.style.color = 'green'
        }else{
            phoneSpan.innerHTML = 'NOT OK'
            phoneSpan.style.color = 'red'
        }
})

// tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

console.log(tabItems)

const hideTabContent = () =>{
    tabContentBlocks.forEach((item) =>{
        item.style.display = 'none'

    })

    tabItems.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) =>{
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


let q = 0

const changeTab = () =>{
    if(q < 5){
        hideTabContent()
        showTabContent(q)
        q++
    }else if (q >= 5){
        q = 0
        changeTab()
        console.log('фыросироф', q)
    }
}

const interval = setInterval(()=>{
    changeTab()
}, 1000)



tabParent.onclick = (event) =>{
    
    if(event.target.classList.contains('tab_content_item')){
        tabItems.forEach((item, index) =>{
            if(event.target === item){
                q = index
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


// converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const inputs = document.querySelectorAll('.conv')


inputs.forEach(element =>{
    element.addEventListener('input',()=>{
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload = () =>{
            const data = JSON.parse(request.response)
            
            if(element.id === 'usd'){

                somInput.value = (element.value * data.usd).toFixed(2)
                eurInput.value = (element.value * (data.usd / data.eur)).toFixed(2)
            }

            if(element.id === 'som'){

                usdInput.value = (element.value / data.usd).toFixed(2)
                eurInput.value = (element.value / data.eur).toFixed(2)
            }

            if(element.id === 'eur'){
                usdInput.value = (element.value * (data.eur/data.usd)).toFixed(2)
                somInput.value = (element.value * data.eur).toFixed(2)
            }
        }

    })
})







