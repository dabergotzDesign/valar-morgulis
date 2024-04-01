const cards = document.querySelectorAll(".card");

cards.forEach( card => {
    
    card.addEventListener("click", ()=>{
        
        console.log(card.childNodes[3]);

        card.childNodes[3].classList.toggle("active");

    })

});