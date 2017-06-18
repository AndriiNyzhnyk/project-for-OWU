function showText(el) {
    if(el.previousElementSibling.clientHeight === 185) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "Сховати текст";
    } else {
        el.previousElementSibling.style.height = "185px";
        el.innerHTML = "Читати далі ...";
    }
}