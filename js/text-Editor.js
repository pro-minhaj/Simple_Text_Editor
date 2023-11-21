const textField = document.getElementById('text-field');

document.getElementById('bold').addEventListener('click', function(){
    textField.classList.toggle('font-bold');
    this.classList.toggle('font-bold')
});

document.getElementById('italic').addEventListener('click', function(){
    textField.classList.toggle('italic');
    this.classList.toggle('font-bold')
});

document.getElementById('underline').addEventListener('click', function(){
    textField.classList.toggle('underline');
    this.classList.toggle('font-bold')
});

document.getElementById('text-left').addEventListener('click', function(){
    textField.style.textAlign = 'left';
});

document.getElementById('text-center').addEventListener('click', function(){
    textField.style.textAlign = 'center';
});

document.getElementById('text-right').addEventListener('click', function(){
    textField.style.textAlign = 'right';
});

document.getElementById('text-justify').addEventListener('click', function(){
    textField.style.textAlign = 'justify';
});

document.getElementById('font-size').addEventListener('click', function(){
    const fontSize = this.value;
    textField.style.fontSize = `${fontSize}px`;
});

document.getElementById('font-size').addEventListener('keyup', function(){
    const fontSize = this.value;
    textField.style.fontSize = `${fontSize}px`;
});

document.getElementById('color').addEventListener('input', function(){
    const color = this.value;
    textField.style.color = `${color}`;
});

// This one for Handle align Propertise 

let activeIndex = null;
const alignItems = document.getElementById('align-control');

function handleListClick(event) {
    const clickedItem = event.target;

    if (clickedItem.classList.contains('item-click')) {
        const currentIndex = Array.from(clickedItem.parentNode.children).indexOf(clickedItem);
        
        if (activeIndex !== null) {
        clickedItem.parentNode.children[activeIndex].classList.remove('font-bold');
        }

        clickedItem.classList.toggle('font-bold');
        activeIndex = clickedItem.classList.contains('font-bold') ? currentIndex : null;
    }
}

alignItems.addEventListener('click', handleListClick);