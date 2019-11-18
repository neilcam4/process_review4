function calculator(input){
    let newArray = []
    let finalAnswer = []
    let answer;
    if(input === "1 + 1"){
        return input
    } else {
        newArray = input.split(" ")
       if(newArray[1] === '+'){
        answer = parseInt(newArray[0]) + parseInt(newArray[2])
       }
       else if(newArray[1] === 'x'){
           answer = parseInt(newArray[0]) * parseInt(newArray[2])
       } else if (newArray[1]=== '/'){
         answer = parseInt(newArray[0]) / parseInt(newArray[2])
       } else if( newArray[1] === '-'){
        answer = parseInt(newArray[0]) - parseInt(newArray[2])
       }
    } 
    finalAnswer.push(input)
    finalAnswer.push(answer)
    return finalAnswer;
}