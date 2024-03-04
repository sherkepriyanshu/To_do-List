let addForm = document.addfrm;
let text = addForm.add;
let ul = document.getElementsByClassName('todos');
let searchtext = document.querySelector('.search input');
               
console.log(ul);
console.log(ul[0]);
let addItem = (item)=>
{
let str =`<li class="list-group-item d-flex justify-content-between align-items-center bg-info-subtle">
<span>${item}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
ul[0].innerHTML+=str;
};
//e = event object
addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let item = text.value;
    if(item.length>0)
    {
    addItem(item);
    text.value = "";
    }
    
    
});



ul[0].addEventListener("click",(e)=>
{
if(e.target.nodeName === 'I'){
    e.target.parentElement.remove();
}


});


let searchlist =(text)=>{
 let listItems = ul[0].children;
 //chiildren return array of html collection
 //foreach does not work on it

 for(let li of listItems)

 {
    if (li.innerText.toLowerCase().indexOf(text)==-1)
    {
        li.classList.add("filtered");
    }
else{
    li.classList.remove("filtered");
}

 }
};


searchtext.addEventListener("keyup",(e)=>{
    let text = searchtext.value;
    searchlist(text.toLowerCase().trim());
});
