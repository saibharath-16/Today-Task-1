//Write a function to find duplicate elements in an array;

let arr=["HTML",
    "JavaScript",
    "Java",
    "HTML",
    "Css",
    "Java",
    "JavaScript",
    "DSA"];

  
        for(let i=0;i<=arr.length;i++){
            for(let j=i+1;j<=arr.length;j++){
                if(arr[j]===arr[i]){
                    console.log(arr[i]);
                }
            }
        }
        

  
