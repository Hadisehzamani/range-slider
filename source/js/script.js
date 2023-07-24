let container = document.querySelector('.container')
let rangeInput = document.querySelector('#range')



rangeInput.addEventListener('mouseup', function(){
    let rangeValue = this.value
    container.style.filter = `brightness(${rangeValue}%)`
})