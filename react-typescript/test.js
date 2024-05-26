let num1 = [4,3,2,1];


function numto(num){
    
    let str = "";

    for(let i = 0;  i < num.length; i++){
        str += num[i];
    }


    const num2 = parseInt(str) + 1;
    const arr = [];

     const num3 = num2.toString();
   for(let i = 0; i < num3.length; i++){
        arr.push(parseInt(num3[i]));
   }
 return arr;
}

numto(num1)