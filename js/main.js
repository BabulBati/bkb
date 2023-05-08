window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding="0px";
  } else {
    document.getElementById("navbar").style.padding= "5px 0px";
  }
}

var btnContainer = document.getElementById("navbarNav");
var btns = btnContainer.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    
    this.className += " active";
  });
}


