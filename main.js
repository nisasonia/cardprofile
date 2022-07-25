const card = document.querySelector('.Card_card');
const ItemCard = document.querySelector('.Card_add i');

document.querySelector('.Card_add').addEventListener('click',()=>{
    card.classList.toggle("Card_on");
    if (ItemCard.classList.contains("fa-minus")){
        ItemCard.classList.replace("fa-minus", "fa-plus");
    }else{
        ItemCard.classList.replace("fa-minus", "fa-plus");
    }
})