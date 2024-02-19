// search input field
function debounce(func, delay){
    let timeOutId;
    return function(...args){
        clearTimeout(timeOutId)
        timeOutId=setTimeout(()=>{
            func(...args);
        },delay)
    }
}

const debounceSearch=debounce((query)=>{
    console.log(`searching for : ${query}`)
},3000)

const searchInput=document.getElementById("search-input",searchInput.addEventListener("input", (event)=>{
    debounceSearch(event.target.value)
}))