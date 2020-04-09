// Get the modal
var modal1 = document.getElementById("modal01");
var modal2 = document.getElementById("modal02");
var modal3 = document.getElementById("modal03");
var modal4 = document.getElementById("modal04");
var modal5 = document.getElementById("modal05");
var modal6 = document.getElementById("modal06");
var modal7 = document.getElementById("modal07");
var modal8 = document.getElementById("modal08");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
};
btn2.onclick = function() {
  modal2.style.display = "block";
};
btn3.onclick = function() {
  modal3.style.display = "block";
};
btn4.onclick = function() {
  modal4.style.display = "block";
};
btn5.onclick = function() {
  modal5.style.display = "block";
};
btn6.onclick = function() {
  modal6.style.display = "block";
};
btn7.onclick = function() {
  modal7.style.display = "block";
};
btn8.onclick = function() {
  modal8.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
span3.onclick = function() {
  modal3.style.display = "none";
};
span4.onclick = function() {
  modal4.style.display = "none";
};
span5.onclick = function() {
  modal5.style.display = "none";
};
span6.onclick = function() {
  modal6.style.display = "none";
};
span7.onclick = function() {
  modal7.style.display = "none";
};
span8.onclick = function() {
  modal8.style.display = "none";
};

// Change style of navbar on scroll
window.onscroll = function() {
  myFunction();
};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card w3-animate-top w3-white",
      ""
    );
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}



