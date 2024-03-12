let btn = document.getElementById('searchClassBtn')
btn.addEventListener("click", function () {
    
    let classSearched = document.getElementById('searchClass').value
    classSearched = classSearched.toLowerCase()
    let classes = document.getElementsByClassName(classSearched)
    console.log(classes)
    alert('Confira os resultados no console!')
})

function darkMode(){ 
    document.getElementById('exercicios').classList.toggle('dark')
    if(document.getElementById('exercicios').classList.contains('dark')){
        document.getElementsByClassName('dark-ex-6-7')[0].innerHTML = "dark mode is ON!"
        let btn = document.getElementById('dark-mode-btn')
        btn.innerHTML = "Light Mode!"
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
    } else {
        document.getElementsByClassName('dark-ex-6-7')[0].innerHTML = "dark mode is OFF!"
        let btn = document.getElementById('dark-mode-btn')
        btn.innerHTML = "Dark Mode!"
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        
    }
}



function addElement() {
    let container = document.getElementById('addedElements')
    let paragraph = document.getElementById('addElement').value
    let createParagraph = document.createElement('p')
    createParagraph.appendChild(document.createTextNode(paragraph))
    container.appendChild(createParagraph)
    
}

function clearParagraphs(){
    let container = document.getElementById('addedElements')
    let elements = document.querySelectorAll('#addedElements p')
    for(let i = 0; i < elements.length; i++){
        container.removeChild(elements[i])
    }
}


function changeType(){
    let el = document.querySelector('#inputToChange')
    let newAttribute = document.querySelector('#attribute').value
    el.setAttribute('type', newAttribute)
}



function removeAttributeOfInput(){
    
    let el = document.querySelector('#inputToChange')
    let removedAttribute = document.querySelector('#attribute').value
    console.log(removedAttribute)
    el.removeAttribute(removedAttribute)
}

