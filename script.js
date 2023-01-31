// let data =document.querySelector('.first')
let data =document.querySelector('.first1')
var news =''
let inp = document.querySelector('.input')
data.addEventListener('click',(e)=>{
    if(inp.value !==''){
        inp.value += e.target.value
    }
})
let data1=document.querySelector('.first2')
let data2=document.querySelector('.first3')
let data3=document.querySelector('.first4')
data1.addEventListener('click',(e)=>{
    if(inp.value !==''){
        inp.value += e.target.value
    }
})
data2.addEventListener('click',(e)=>{
    if(inp.value !==''){
        inp.value += e.target.value
    }
})
let dot =document.querySelector('.dot')
dot.addEventListener('click',(e)=>{
    if(inp.value !==''){
        inp.value += e.target.value
    }
})
data3.addEventListener('click',(e)=>{
    if(inp.value !==''){
        inp.value += e.target.value
    }
})

function func(e){
    let str =String(e)
    inp.value +=str
}
let add =document.querySelector('.add')
add.addEventListener('click',()=>{
    if(inp.value !=''){
        inp.value = eval(inp.value)
    }
})
let clear =document.querySelector('.clear')
clear.addEventListener('click',(e)=>{
    inp.value =''
})
