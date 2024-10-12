function toggleBox(clickedBoxId) {
    
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {

        if (box.id === clickedBoxId) {
            box.classList.toggle('expanded');
        } else {
            box.classList.remove('expanded');
        }

    });
}

function applyStyles(boxId) {

    const box = document.getElementById(boxId);

    const colorSelect = document.getElementById(`color${boxId.slice(-1)}`);

    const sizeSelect = document.getElementById(`size${boxId.slice(-1)}`);

    if (colorSelect.value) {
        box.style.borderColor = colorSelect.value;
        box.style.backgroundColor = colorSelect.value + '80'; 
    }

    if (sizeSelect.value) {
        box.style.height = sizeSelect.value;
    }
}

document.querySelectorAll('.box').forEach(box => {

    box.addEventListener('click', (event) => {

        if (!event.target.matches('select')) {
            toggleBox(box.id);
        }

    });

    const colorSelect = box.querySelector('.color-select');

    const sizeSelect = box.querySelector('.size-select');

    colorSelect.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
    
    sizeSelect.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    colorSelect.addEventListener('change', () => applyStyles(box.id));

    sizeSelect.addEventListener('change', () => applyStyles(box.id));
});
