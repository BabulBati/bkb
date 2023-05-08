window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding="0px";
  } else {
    document.getElementById("navbar").style.padding= "5px 0px";
  }
}




