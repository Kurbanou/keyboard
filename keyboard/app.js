const app = document.createElement('div');
app.id = 'app';
document.querySelector('body').appendChild(app);
const textDisplay = document.createElement('textarea');
textDisplay.className = 'textDisplay';
let flagShift = false;
let flagCapsLock = false;
let flagCtrl = false;
app.appendChild(textDisplay);
const keyboardInner = document.createElement('div');
keyboardInner.className = 'virtual-keyboard';
app.appendChild(keyboardInner);

const keys = [
    ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
  ];

keyboardCreate(keys);

function keyboardCreate (array){
    array.forEach((rows) => {
        const row = document.createElement('div');
        row.className = 'keyboard_row';
        keyboardInner.appendChild(row);
    
        rows.forEach((key) => {
            const btn = document.createElement('button');
            btn.className = 'keyboard_btn';
            if(key.length > 1){
                btn.className = 'functional_btn'
            }
            btn.innerHTML = key;
            btn.setAttribute('data-name', key);
            row.appendChild(btn);            
        });    
    });
}

if(keyboardInner) {
    const btns = document.querySelectorAll('.keyboard_btn');
    const functionalBtns = document.querySelectorAll('.functional_btn');

    if(functionalBtns){
        functionalBtns.forEach(element => {

            if(element.innerHTML === 'CapsLock'){
                element.addEventListener('click', function(){
                    flagCapsLock = !flagCapsLock;
                    element.classList.toggle('active');
                })
                


            }
            
        });
    }
    
    if(btns) {
       btns.forEach(element => {

        element.addEventListener('click', function(){
            if (flagCapsLock && !flagShift) {
                textDisplay.value += element.innerHTML.toUpperCase();
            } else if (!flagCapsLock && flagShift) {
                textDisplay.value += element.innerHTML.toUpperCase();
            } else if (flagCapsLock && flagShift) {
                textDisplay.value += element.innerHTML.toLowerCase();
            } else {
                textDisplay.value += element.innerHTML.toLowerCase();
            }
        })
       });
    }
}

