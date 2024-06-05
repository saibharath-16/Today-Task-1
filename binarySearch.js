let arr=[2,45,35,12,1];
let key=12;
arr.sort();
console.log(arr);
key=12;
function binary(arr,key){
    let min=arr[0];
    let max=arr[4];
    while(min<max){
        let mid=(min+max)/2;
        if(arr[mid]==key){
            return mid;
        }
        if(arr[mid]<key){
            min=mid+1;
        }else{
            max=mid-1;
        }
    }
}
let res=binary(arr,key);
console.log(res);