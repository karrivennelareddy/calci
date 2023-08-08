let operator="";
let op1="";
let op2="";
function append(x)
{
    if(operator==""){
    op1+=x;
    document.getElementById('result').value=op1;
    }
    else{
        op2+=x;
        document.getElementById('result').value=op2;
    }
}

function operation(op)
{
    operator=op;
}

function output(){
    let result;
    switch(operator)
    {
        case '+':result=parseInt(op1)+parseInt(op2);
        break;
        case '-':result=parseInt(op1)-parseInt(op2);
        break;
        case '*':result=parseInt(op1)*parseInt(op2);
        break;
        case '/':result=parseInt(op1)/parseInt(op2);
        break;
    }
    document.getElementById('result').value=result;
}

function reset(){
    operator="";
    op1="";
    op2="";
    document.getElementById('result').value='';
}



// let operator="";
// let firstnumber="";
// let secondnumber="";

// function append(number)
// {
//     if(operator==="")
// {
// firstnumber+=number;
// document.getElementById('result').value=firstnumber;
// }
// else{
//    secondnumber+=number;
// document.getElementById('result').value=secondnumber;
// }
// }
// function operation(op)
// {
//     operator=op;
// }
// function calciulate()
// {
//    let result;
//    switch(operator)
//    {
//     case '+':
//         result=parseInt(firstnumber)+parseInt(secondnumber);
//         break;
//     case '-':
//         result=parseInt(firstnumber)-parseInt(secondnumber);
//         break;
//     case '*':
//         result=parseInt(firstnumber)*parseInt(secondnumber);
//         break;
//      case '/':
//         result=parseInt(firstnumber)/parseInt(secondnumber);
//         break;
//    }
//    document.getElementById('result').value=result;
// }
// function clearresult()
// {
//     operator="";
//     firstnumber="";
//     secondnumber="";
//     document.getElementById('result').values="";
// }