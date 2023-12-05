function bold() {
    document.execCommand('bold', true, null);
}

function underline() {
    document.execCommand('underline', true, null);
}

function italic() {
    document.execCommand('italic', true, null);
}



function center() {
    document.querySelectorAll('.center').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign = 'center';
        });
    });
}

function left() {
    document.querySelectorAll('.left').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign = 'left';
        });
    });
}

function right() {
    document.querySelectorAll('.right').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign = 'right';
        });
    });
}

function justify() {
    document.querySelectorAll('.justify').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign = 'justify';
        });
    });
}

function fontColor() {

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function () {
        const selectedColor = colorPicker.value;
        document.execCommand('foreColor', false, selectedColor);
        document.body.removeChild(colorPicker);
    });
    colorPicker.click();
}

