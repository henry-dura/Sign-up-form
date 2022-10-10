const button = document.querySelector('button');
const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');

button.addEventListener('click',(e)=>{
    if(pwd.value !== confirmPwd.value){
        alert('The password do not match');
        confirmPwd.value = '';
        e.preventDefault();
    }

})
