let a=+(prompt("Enter the number:"))

let res=[];
if(a%2===0){
    a=a-1;

}
    
for(let i=0;i<a;i++){
    res.push(2*i+1);
}

let output=res.join(",")

console.log(output)