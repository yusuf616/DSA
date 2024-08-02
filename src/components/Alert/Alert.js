
let a=[]



export const Alert=( props={content:"",color:"success"})=>{
    

    const  alert=document.getElementById("alert");

   
    
    a.push(setInterval(()=>{
        const element=document.getElementById("alert-"+a[0])
        // alert.insertAdjacentHTML("beforeend","");
        element.remove();
        clearInterval(a[0]);
        a=a.slice(1,);
        // console.log(a);
    },3000));

    alert.insertAdjacentHTML("afterend",`<div class=" alert " id="alert-${a[a?.length-1]}"  style="top:${(a?.length-1)*50+10}px "  >
        ${props?.content||""}
        <div class="timer-line ${props?.color} " ></div>
    </div>`)
    // alert.innerHTML=(`<div class=" alert "  >
    //     ${props?.content||""}
    //     <div class="timer-line ${props?.color} " ></div>
    // </div>`);

}


