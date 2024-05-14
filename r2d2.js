let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if(styles.contains('decreaseMas')) {
            count-=10;
        } else if (styles.contains('increase')) {
            count++;
        } else if(styles.contains('increaseMas')) {
            count+=10;
        }  else {
            count = 0; 
        };
        if(count > 0) {
            value.style.color = '#00ff00ff';
        }
        if (count < 0) {
            value.style.color = '#ff0000ff';
        } 
        if(count === 0) {
            value.style.color = '#000';
        }
        value.textContent = count;
    });
});