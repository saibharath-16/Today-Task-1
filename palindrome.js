let str=prompt("Enter text:");

let rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str.charAt(i);
}


if(str==rev){
    console.log('Its a Palindrome Number');
}else{console.log('It is not a palindrome Number');}

