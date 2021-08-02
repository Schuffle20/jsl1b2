// UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

// const showmodal = document.querySelector('showmodal');

//Event Listener

togglebtn.addEventListener('click', ()=>{
   document.body.classList.toggle('shownav');
});

openbtn.addEventListener('click',()=>{
   console.log('hi')
   modal.classList.add('showmodal');
});

closebtn.addEventListener('click',()=>{
   modal.classList.remove('showmodal');
});

// Hide Modal on outside click
window.addEventListener('click', (e)=>{
   // e.target == this ; can only be used with regular function
   console.log(e.target);

   if(e.target === modal){
      modal.classList.remove('showmodal');
   }
});

// window.addEventListener('click', (e)=> e.target == modal ? modal.classList.remove('showmodal') : false );
