
//Сортировка пузырьковая
const sortPrises = document.querySelector("#sortPrice");
const sortEdges = document.querySelector("#sortEdge");

sortPrises.onclick = priseSort;
sortEdges.onclick = edgeSort;

function priseSort(){
    let allProduct = document.querySelector(".tables");
    for (let i = 0; i < allProduct.children.length; i++){
        for (let j = i; j < allProduct.children.length; j++){
            if(+allProduct.children[i].getAttribute("data-prise") > +allProduct.children[j].getAttribute("data-prise")) {
                replacedNode = allProduct.replaceChild(allProduct.children[j], allProduct.children[i]);
                insertAfter(replacedNode, allProduct.children[i]);
            }
        }
    }
}
function edgeSort(){
    let allProduct = document.querySelector(".tables");
    for (let i = 0; i < allProduct.children.length; i++){
        for (let j = i; j < allProduct.children.length; j++){
            if(+allProduct.children[i].getAttribute("data-edge") > +allProduct.children[j].getAttribute("data-edge")) {
                replacedNode = allProduct.replaceChild(allProduct.children[j], allProduct.children[i]);
                insertAfter(replacedNode, allProduct.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




//Лайки
const LIKES = document.querySelectorAll(".like");
const likeTableAlert = document.querySelector(".likes-table")

for (const LIKE of LIKES){
    LIKE.addEventListener("click", () => {
        let checkActiveLikes = LIKE.classList.contains('like-active')
        if(checkActiveLikes === true){
            LIKE.classList.remove("like-active")
        }
        else{
            LIKE.classList.add("like-active")
            tableVisible()
        }
    })
}
function tableVisible() {
    setTimeout(() => likeTableAlert.style.display = 'none', 1000, likeTableAlert.style.display = 'flex');
}



// Прокрутка
const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", () => {
    const blockCheckpoint = document.querySelector("#scrollPoint");
    blockCheckpoint.scrollIntoView({
        block: "start", //Скролл к началу страницы
        behavior: "smooth" //Плавная прокрутка
    });
})

//Бургер
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar")

hamburger.addEventListener("click", () => {

    if(navMenu.style.display === 'flex'){
        navMenu.style.display = 'none'
    }
    else{
        navMenu.style.display = 'flex'
    }
})