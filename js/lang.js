function changeLanguage(select) {
    if (select.value === "ar") {
        document.getElementById("content").setAttribute("dir", "rtl");
    } else {
        document.getElementById("content").setAttribute("dir", "ltr");
    }
}