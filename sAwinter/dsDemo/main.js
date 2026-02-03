let btn = document.querySelectorAll('.loginIcon');
let holderText = document.querySelectorAll('.holder-text');
btn.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        holderText[index].style.display = 'flex';
    });
    button.addEventListener('mouseleave', () => {
        holderText[index].style.display = 'none';
    });
});