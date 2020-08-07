document.addEventListener(DOMContentLoaded, function() {
    const me_myself_and_I = document.getElementsByClass("me_myself_and_I");
    me_myself_and_I.addEventListener("mouseover"), (e) => {
        e.preventDefault();
        console.log("it works!!!");

    }
})
