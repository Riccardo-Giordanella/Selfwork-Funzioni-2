function conta(n){
    for(i = 0; i <= n; i++){

        if(i % 3 == 0){
            console.log(`Fizz`);

        }else if(i % 5 == 0){
            console.log(`Buzz`);

        }else if(i % 15 == 0){
            console.log(`FizzBuzz`);

        }
        console.log(i);

    }

}

conta(100)
