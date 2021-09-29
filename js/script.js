const c1 = document.querySelector('.arrowl');
const c2 = document.querySelector('.arrowr');
const car = document.querySelector('.carts');
let con = 0;
c1.addEventListener('click', (e) => {
    if (con == 0) {
        con = -4000
    }
    else{
        con += 1000
    car.style.transform =`translateX(${con}px)`
    console.log(con);
    }
    
})
c2.addEventListener('click', (e) => {
    if (con == -3000) {
        con = 1000
    }
    else{
        con += -1000
    car.style.transform =`translateX(${con}px)`
    console.log(con);
    }
    
})














































// Артём 
// л
// о
// х
