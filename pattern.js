// 1.Write a Program to print an inverted right triangle star pattern. (time taken - 10min)
// *
// * *
// * * *
// * * * *
// * * * * *

let n=5;
TrianglePattern(n)
function TrianglePattern(n){
    for(let i=0;i<=n;i++){
        let res="";
        for(let j=0;j<i;j++){
            res+="*"+" "
        }
        console.log(res)
    }
}
