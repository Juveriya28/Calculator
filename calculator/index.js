// (function(){
//     let screen=document.querySelector('.outputscreen');
//     let buttons=document.querySelector('.btn')
//     let clear=document.querySelector('.clear');
//     let equal=document.querySelector('.equal');

//     buttons.forEach(function(button)
//     {
//         button.addEventListener('click', function(e)
//         {
//             let value=e.target.dataset.num;
//             screen.value=screen.value+value;
//         })
//     });

// equal.addEventListener('click', function(e)
// {
//     if(screen.value ==='0')
//     {
//         screen.value='enter value';
//     }
//     else{
//         let answer= eval(screen.value);
//         screen.value=answer;
//     }
// });

// clear.addEventListener('click', function(e)
// {
//     screen.value='';
// })

// })();




let result=document.getElementById('inputext');
let calculate=(number)=>{
    result.value=result.value+number;
}
 let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Invalid")
    }
 }

 function clr(){
    result.value=" ";
 }

 function del()
 {
    result.value=result.value.slice(0,-1)
 }




