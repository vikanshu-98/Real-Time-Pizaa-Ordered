let display= document.getElementById('sideMenu');
let hidden = document.getElementById('closeMenu');
let list   = document.getElementById('list');
const axios = require('axios')

const initAdmin = require('./admin')

display.onclick=function(){
    list.style.visibility="visible";  
    list.style.right="0%";
}
hidden.onclick=function(){
    list.style.right="-50%";
} 

const alert = document.querySelector('#success-alert')
if(alert){
    setTimeout(()=>{
        alert.remove()
    },2000)
}
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach((Btn)=>{
    Btn.addEventListener('click',(e)=>{
        const object = JSON.parse(Btn.dataset.pizza)
        updateCart(object);
    })
})

 
function updateCart(object){
    var notyf = new Notyf( 
        {
            duration: 2000,
            position: {
            x: 'right',
            y: 'left',

            }
        } 
    );
    axios.post('/updateCart',object).then(function(response){
        console.log(response); 
        const element= document.getElementById('counter');
        element.innerText = response.data.totalQty;
         
        notyf.success('Items added to the cart');

    }).catch((err)=>{
        notyf.error('something went wrong');
    })
}


 
initAdmin()