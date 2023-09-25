const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#e3e3e3';
        body.style.color = '#202421';
        body.style.transition = '2s';
    }else{
        body.style.background = '#202421';
        body.style.color = '#e3e3e3';
        body.style.transition = '2s';
    }
})