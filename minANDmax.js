
//2. Write a program to find the maximum and minimum number in an array.
// (arr = [21,34,45,5,2,354]). (time taken - 15 min)

let arr = [21,34,45,5,2,354];
MinAndMaxNumber(arr)

function MinAndMaxNumber(arr){
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
        if(min>arr[i]){
            min=arr[i]
        }
    }
    console.log(max)
    console.log(min)
}