function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}


function calculator(a,b,operator){
    if(operator=="+"){
        return add(a,b);
    }
    if(operator=="-"){
        return sub(a,b);
    }
    if(operator=="*"){
        return mult(a,b);
    }
    if(operator=="/"){
        return div(a,b);
    }
}

function  operate(str){
    let arr=[];
    let trigO;
    for(let i=0 ; i<str.length; i++){
        if(str[i]=="+"){
            trigO="+";
        }else if(str[i]=="-"){
            trigO="-";
        }else if(str[i]=="/"){
            trigO="/";
        }else if(str[i]=="*"){
            trigO="*";
        }
    }

    arr=str.split(/[\+\-\*\/]/);
    
    return calculator(parseInt(arr[0]),parseInt(arr[1]),trigO);

}

let temp="";
function btn_func(e){
    
    let str = e.target.textContent;
    temp=temp+str;


    if(str=="="){
        
        temp=operate(temp);
        display.textContent=temp;
    }else if(str=="C"){
        temp=" ";
        display.textContent=temp;
    }else{
        display.textContent=temp;
    }

}


const display=document.querySelector("textarea");
const btns= document.querySelectorAll("button");

for(let i=0; i<btns.length;i++){
    btns[i].addEventListener("click",btn_func);
}


calculator(1,2,"/");
