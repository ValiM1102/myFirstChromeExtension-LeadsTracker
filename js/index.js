const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const unList = document.querySelector("#ul-el")




inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = 'input here' 
    render()
    
})

function render(){
    let listItems = ""
    for (let i = 0; i<myLeads.length; i++){

        listItems += `
        <li>
            <a href = '${myLeads[i]}' target = '_blank'>
                ${myLeads[i]}
            </a>
        </li>`
        
    }
    unList.innerHTML = listItems
   
}