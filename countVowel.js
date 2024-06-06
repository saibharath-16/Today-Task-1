// Program to find vowels and cons0nants in a String;

let str1="Coffee Break";
let str=str1.toLowerCase();
for(i=0;i<str.length;i++){
    if(str.charAt(i)==="a"||
    str.charAt(i)==="e"||
    str.charAt(i)==="i"||
    str.charAt(i)==="o"||
    str.charAt(i)==="u"
){
    console.log(str.charAt(i), "is a vowel in String");
}else{console.log(str.charAt(i), "is an consonants in String")
}
}
