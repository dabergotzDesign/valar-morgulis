const btn = document.querySelector("button"),
    modal = document.querySelector(".modal");
let session = sessionStorage.getItem("warning_read");


sessionStorage.setItem("warning_read", "false");

btn.addEventListener("click", ()=>{
    sessionStorage.setItem("warning_read", "true");
    modal.style.display = "none";
});

if(session == "true") {
    modal.style.display = "none";
}


