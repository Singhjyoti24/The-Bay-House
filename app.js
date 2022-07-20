// const card = document.querySelector('#card1');
const cards = document.querySelectorAll('.card');

for(let i=0;i<cards.length;i++){
    let randomNumber = Math.floor(Math.random() * cards.length);
    cards[i].addEventListener('click', function(){
        const c1 = cards[i];
        const c2 = cards[randomNumber];
        const ans = c1.innerHTML;
        c1.innerHTML = c2.innerHTML;
        c2.innerHTML = ans;
    });
}
