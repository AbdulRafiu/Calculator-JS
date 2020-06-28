function getNum(num){
    var input = document.getElementById("input");
    input.value += num
}

function clearInput(){
    input.value = ""
}

function getResult(){
    var input = document.getElementById("input");
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error"
    }
}