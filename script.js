const websiteWrapper = document.querySelector("#websiteWrapper");
const loaded = document.querySelector("#loaded");
const MenuBtn = document.querySelector("#MenuBtn");
const links = document.querySelector('#links');

function loadwebsite(){
    websiteWrapper.style.display = 'none';
    loaded.style.display = 'block';
    
    window.addEventListener("load", ()=>{
        websiteWrapper.style.display = 'block';
        loaded.style.display = 'none';
    })
}
loadwebsite();


/* -------- Faire apparaitre et disparaitre les liens sur petit ecran ------- */
MenuBtn.addEventListener('click', ()=>{
    links.style.display = (links.style.display === "flex") ? "none" : "flex";
});

window.addEventListener('click', (e)=>{
    console.log(links.style.display);
    if(e.target !== MenuBtn && e.target !== links && !links.contains(e.target)){
        if(links.style.display === 'flex'){
            links.style.display = 'none';
        }
    }
});


