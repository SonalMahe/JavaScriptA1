//exercise3 Sum of even number 1 to 50

function SumOfEvenNumber(numbers){
    let sum=0;
    for (let i = 1; i<=50; i++)
        if (i%2==0) {
            sum+= i
            return sum;
        }
}
console.log(SumOfEvenNumber(numbers));