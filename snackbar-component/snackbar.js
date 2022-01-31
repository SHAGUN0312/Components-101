const action = document.querySelectorAll('button');
const baselineSnackbar = document.querySelector('.snackbar__baseline')
const leadingSnackbar = document.querySelector('.snackbar__leading');
const stackedSnackbar = document.querySelector('.snackbar__stacked');

action.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        const currBtn = btn.innerText;
        if(currBtn == 'Baseline'){
            setDisplay(baselineSnackbar);
        }
        else if(currBtn == 'Leading'){
            setDisplay(leadingSnackbar);
        }
        else if(currBtn == 'Stacked'){
            setDisplay(stackedSnackbar);
        }
    })
})

const setDisplay= snackbar => {
    snackbar.style.display = 'inline-flex';
    setTimeout(() => {
        snackbar.style.display = "none";
    }, 2000);
}


