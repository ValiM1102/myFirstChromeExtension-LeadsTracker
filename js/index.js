const inputBtn = document.getElementById("input-btn")

let myLeads = []
const inputEl = document.querySelector("#input-el")
const unList = document.querySelector("#ul-el")
const delBtn = document.querySelector("#del-btn")

const leadsFromMyLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromMyLocalStorage){
    myLeads = leadsFromMyLocalStorage 
    render()
}

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render()
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = '' 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
})


function render(){
    let listItems = ""
    for (let i = 0; i<myLeads.length; i++){
        listItems += `
        <li class="list">
            <a href = '${myLeads[i]}' target = '_blank'>
                ${myLeads[i]}
            </a>
        </li>`
        
    }
    unList.innerHTML = listItems
   
}
