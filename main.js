const show = () => {
    const form = document.querySelector("#signup")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display="block"
   
}

const hide = () => {
    const hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display="none"
}
function myFunction() {
    var x = document.getElementById("passw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }