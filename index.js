let menu = document.querySelector("#menu");

let content = document.querySelector(".content_2");

menu.addEventListener(("click"), () => {
    // console.log("clicked");
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
})