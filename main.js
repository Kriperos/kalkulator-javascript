function getValue(num) {
    let inp = document.getElementById('input').value
    inp += num
    document.getElementById('input').value = inp
}
function getSum(){
    let input = document.getElementById('input').value
    document.getElementById('input').value = eval(input)
}

function getClear(){
    let clean = document.getElementById('input').value
    document.getElementById('input').value = ""
}