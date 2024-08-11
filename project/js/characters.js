const request = new XMLHttpRequest()
request.open('GET', '../data/characters.json')
request.setRequestHeader('Content-type','application/json')
request.send()


request.onload = () =>{
    const data = JSON.parse(request.response)
    console.log(data)
    document.querySelectorAll('.name').forEach((item, index) => item.innerHTML = data[index].name)
    document.querySelectorAll('.charBio').forEach((item, index) => item.innerHTML = data[index].bio)
    document.querySelectorAll('.photo').forEach((item,index) => item.src = data[index].photo)
}


