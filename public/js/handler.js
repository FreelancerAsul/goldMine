//GLOBAL VARIABLES
var navControl = document.getElementById("navbar-controller");
var searchControl = document.getElementById("navbar-form");
var pageArray = document.getElementsByClassName("page");

//INITIALIZATION
function handlerInit() {
  if(window.attachEvent) {
    window.attachEvent('onresize', function(){
        windowResize();
    });
  }
  else if(window.addEventListener) {
    window.addEventListener('resize', function(){
        windowResize();
    }, true);
  }
  else {

  }
  windowResize();
  setPage();
}

//RESIZE FUNCTION
function windowResize() {

}

//MOBILE NAV
function toggleNav() {
	if(navControl.className === "responsive") {
		navControl.className = "";
	} else {
		navControl.className = "responsive";
	}
}

function toggleSearch() {
	if(searchControl.className === "responsive") {
		searchControl.className = "";
    setTimeout(function () {
      document.getElementById("navbar-brand").style.display = "inline";
    }, 800);
	} else {
		searchControl.className = "responsive";
    document.getElementById("navbar-brand").style.display = "none";
	}
}

//LOGIN CHECK
function toggleLogin(){
  if(uuid == 0)
  {
    if(loginControl.className === "toggle")
    {
      loginControl.className = ""
      easeDown()
    }
    else {
      loginControl.className = "toggle"
    }
  }
  else
  {
    window.location.hash = '#account:' + uuid;
  }
}
