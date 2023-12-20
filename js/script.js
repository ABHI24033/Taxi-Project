const hambergerIcon=document.getElementById("hambergerIcon");

function toggleHamberger(){
    hambergerIcon.classList.toggle('fa-xmark')
}

hambergerIcon.addEventListener("click",toggleHamberger);


