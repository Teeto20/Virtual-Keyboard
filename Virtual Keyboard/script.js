let textContainer = document.querySelector(".textContainer");
let enterKey = document.querySelector(".enter");
let spaceKey = document.querySelector(".space");
let deleteKey = document.querySelector(".delete") 
let caps = document.querySelector(".capslock");
let allKeys = document.querySelectorAll(".key");
let isCaps = false;

enterKey.addEventListener('click', function() {
    let content = textContainer.innerText;
    let newContent = content +'\n';
    textContainer.innerText = newContent;
    console.log(newContent);
});

spaceKey.addEventListener('click', function() {
    let content = textContainer.innerText;
    let newContent = content +' '+'hello';
    textContainer.innerText = newContent;
    console.log(newContent);
});

deleteKey.addEventListener('click', function() {
    let content = textContainer.innerText;
    let newContent = content.slice(0, content.length-1);
    textContainer.innerText = newContent;
});

caps.addEventListener('click',function(){
    if(isCaps){
        caps.classList.remove("active");
        for(let key of allKeys){
            if(key.classList.length>1){
                
            }else{
                key.innerText = key.innerText.toLowerCase();
            }
        }
    } else{
        caps.classList.add("active");
        for(let key of allKeys){
            if(key.classList.length>1){
                
            }else{
                key.innerText = key.innerText.toUpperCase();
            }
        }
    }
    isCaps = !isCaps;
})
for(let key of allKeys){
    if(key.classList.length>1){
        
    }else{
        key.addEventListener("click",function(){
            textContainer.innerText += key.innerText;
        })
    }
}