



export const Alert=( props={content:"Hello",color:"success"})=>{
    

    const  alert=document.getElementById("alert");

    const colors={
        "success":"background-color:#0f0 ; "
    }
    
    let a=setInterval(()=>{
        alert.innerHTML=('');
        clearInterval(a);
    },3000);
    alert.innerHTML=(`<div class=" alert "   >
        ${props?.content||""}
        <div class="timer-line ${props?.color} " ></div>
    </div>`);

}


