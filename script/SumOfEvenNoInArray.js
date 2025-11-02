//exercise3 Sum of even number 1 to 50

function SumOfEvenNumber(arr){
    let sum=0;
    for (let i = 0; i<=arr.length; i++){
        if (arr[i] %2 == 0) { //check if the no. is even
            sum += arr[i] //add even no. to sum
        }
    }
    return sum; //return the total sum of even no.
}
//example
const num= [1,2,5,4,7,6,10]
console.log(SumOfEvenNumber(num));//output 22


