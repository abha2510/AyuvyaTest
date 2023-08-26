
// 5. Write a program to check whether a string is palindrome or not.

let str="Ayuvya";
CheckPallindrome(str)

function CheckPallindrome(str){
    let rev_str="";
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i]
    }
    if(rev_str==str){
        console.log("Palindrome!")
    }else{
         console.log("Not Palindrome!")
    }
}
