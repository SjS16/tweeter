$('document').ready(function () {
    const textField = document.querySelector('.new-tweet .textarea');
    let counter = textField.parentElement.getElementsByClassName('counter')[0].innerText;
    textField.addEventListener('keyup', function() {
        const count = this.value.length;
        newCounter = counter - count;   
        this.parentElement.querySelector('.counter').innerText = newCounter;
        if (newCounter < 0) {
            this.parentElement.querySelector('.counter').style.color = 'red'; 
        } else if (newCounter > 0) {
            this.parentElement.querySelector('.counter').style.color = 'black';             
        }
    });
 });