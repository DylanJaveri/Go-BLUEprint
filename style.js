function myFunction(index) {
    var content = document.getElementById("content" + index);
    var btnText = document.getElementById("myBtn" + index);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.getElementById('businessButton').addEventListener('click', function() {
    const options = document.getElementById('options');
    options.classList.toggle('hidden');
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }