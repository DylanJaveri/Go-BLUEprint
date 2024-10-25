function myFunction(index) {
    var content = document.getElementById("content" + index);
    var btnText = document.getElementById("myBtn" + index);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
