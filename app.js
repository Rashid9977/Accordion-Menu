var button = document.getElementsByClassName('accordion');
var arrow = document.getElementsByClassName('fa-circle-arrow-down')

for (var i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-circle-arrow-up");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }
}