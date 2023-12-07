const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");



let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", () => {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    console.log(tabs[0].url)
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++)
        listItems += `
            <li>
                <a target='_blank' href=${leads[i]}>
                    ${leads[i]}
                </a>
            </li>`
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear("myLeads");
    myLeads = [];
    render(myLeads);
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});












