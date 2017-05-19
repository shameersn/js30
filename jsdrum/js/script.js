window.addEventListener('keydown',function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
   if(!audio) return;

   key.classList.add('golden');
   audio.currentTime = 0;
   audio.play();
});

function removeClass(){
    this.classList.remove('golden');
}
const keys = document.querySelectorAll(`.key`);
keys.forEach((key) => {
    key.addEventListener('transitionend',removeClass);
})
