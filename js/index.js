const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.querySelector("#input-el")
const unList = document.querySelector("#ul-el")
const delBtn = document.querySelector("#del-btn")
const leadsFromMyLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const saveBtn = document.querySelector("#save-btn") 


if(leadsFromMyLocalStorage){
    myLeads = leadsFromMyLocalStorage 
    render(myLeads)
}

saveBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        cmyLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    
    
})

function render(leads){
    let listItems = ""
    for (let i = 0; i<leads.length; i++){
        listItems += `
        <li class="list">
            <a href = '${leads[i]}' target = '_blank'>
                ${leads[i]}
            </a>
        </li>`
        
    }
    unList.innerHTML = listItems
   
}

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = '' 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
})


