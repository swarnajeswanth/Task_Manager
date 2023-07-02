
const input=document.querySelector('#name');
const submit=document.querySelector('#submit');
const alert= document.querySelector('.alert');

submit.addEventListener('click',async (e)=>{
    e.preventDefault();
    if(input.value==''){
        alert.innerHTML="Task Field can't be Empty";
        alert.style.color="red";
        setTimeout(()=>alert.innerHTML="",3000);
    }
    else{
       const xhr=new XMLHttpRequest();
      await xhr.open('POST',`http://localhost:8000/?Task=${input.value}`);
       xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      await xhr.send();
      await location.reload();
    }
    
})