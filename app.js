function bold() {
    document.execCommand('bold', true, null);
}

function underline() {
    document.execCommand('underline', true, null);
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
