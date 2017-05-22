function togglePanel(){
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active');
}
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => panel.addEventListener('click',togglePanel));
panels.forEach((panel) => panel.addEventListener('transitionend',toggleActive));