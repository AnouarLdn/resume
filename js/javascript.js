document.addEventListener("DOMContentLoaded", function() {
    const cardimg = document.getElementsByClassName("cardimg");
    cardimg.addEventListener("mouseover"), (e) => {
        e.preventDefault();
        console.log("it works!!!");
    }
})
