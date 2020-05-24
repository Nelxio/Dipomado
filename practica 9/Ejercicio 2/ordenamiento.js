function realizar(){
    var input = prompt("Ingrese sus numeros separados por espacio");
    
    var inputArr = input.split(" ");
    
    
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
               let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
        
    for (let j = 0; j < len; j++){
    
            console.log(inputArr[j]);
    }
    }