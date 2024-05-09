// setting default count
let count = 0;

//selecting value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//looping through each button
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        //Changing color of text
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count;
    });
});