var loggedIn = false;
var array = [];
function app() {
  if (loggedIn == true) {
    var pages = ["home", "Grade View", "Add Grade", "log out"];
    

    nav(pages);
  } else {
    initialElements();
    renderPage("login");
  }
}
function initialElements() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper"); 
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}
function nav(list) {
  for (var i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    const val = list[i];
    button.innerHTML = list[i];
    button.addEventListener("click", function () {
      renderPage(val);
    });
    document.body.querySelector(".nav").appendChild(button);
  }
}
function renderPage(page) {
  if (page === "login") {
    login();
  } else if (page === "home") {
    home();
  } else if (page === "Add Grade") {
    add();
  } else if (page === "Grade View") {
    view();
  } else if (page === "log out") {
    window.location.reload(false);
  }
}
function login() {
  var wrapper = document.querySelector(".wrapper");

  var username = document.createElement("input");
  username.id = "inputUser";
  username.placeholder = "Username";

  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.id = "inputPass";
  password.placeholder = "Password";

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "login";
  submitButton.className = "button";
  
  wrapper.innerHTML = "";
  wrapper.appendChild(username);
  wrapper.appendChild(password);
  wrapper.appendChild(submitButton);
  
  document.body.querySelector(".button").addEventListener("click", function () {
    if (usernameValid(inputUser) && passwordValid(inputPass)) {
      loggedIn = true;
      app();
     
      home();
    } else {
      if (!usernameValid(inputUser) && passwordValid(inputPass)) {
        window.alert(" wrong Username. do it again.");
      } else if (usernameValid(inputUser) && !passwordValid(inputPass)) {
        window.alert(" wrong Password. try again.");
      } else {
        window.alert(
          "type something. re-enter Username and Password."
        );
      }
    }
  });
  function usernameValid(ele) {
    if (ele.value == "teacherCool101") {
      return true;
    } else {
      return false;
    }
  }

  function passwordValid(ele) {
    if (ele.value == "StupidPassword345") {
      return true;
    } else {
      return false;
    }
  }
}
function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";

  var buttonA = document.createElement("h2");
  var buttonB = document.createElement("h2");
  buttonA.classList.add("fix");

  buttonA.innerHTML = "Add Grade";
  buttonA.addEventListener("click", function () {
    renderPage("add");
  });
  buttonB.innerHTML = "Grade View";
  buttonB.addEventListener("click", function () {
    grade();
  });
  document.body.querySelector(".wrapper").appendChild(buttonA);
  document.body.querySelector(".wrapper").appendChild(buttonB);

  var sub = document.createElement("div");
  sub.innerHTML = "Smile!";
}
function add() {
  var wrapper = document.querySelector(".wrapper");

  var student = document.createElement("textarea");
  student.id = "inputName";
  student.placeholder = "Student Name";

  var grade = document.createElement("input");
  grade.setAttribute("type", "number");
  grade.setAttribute("value", "Importance");
  grade.setAttribute("min", "0");
  grade.setAttribute("max", "100");
  grade.id = "inputGrade";
  grade.placeholder = "(0-100)";
  
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "enter";
  submitButton.className = "button";

  var noteInsight = document.createElement("h4");
  noteInsight.innerHTML = "write Studentname";
  noteInsight.id = "noteInsight";

  wrapper.innerHTML = "";
  wrapper.appendChild(noteInsight);
  wrapper.appendChild(student);
  wrapper.appendChild(grade);
  wrapper.appendChild(submitButton);
  
   document.body.querySelector(".button").addEventListener("click", function () {
    if (inputValid(inputName) && numberValid(inputGrade)) {
      submission();
      window.alert(
        "grade added."
      );
      add();
    } else {
      if (!inputValid(inputName) && numberValid(inputGrade)) {
        window.alert(
          "You did not write a grade."
        );
      } else if (inputValid(inputName) && !numberValid(inputGrade)) {
        window.alert("enter grade. didn't choose one");
      } else {
        window.alert(
          "type something."
        );
      }
    }
  });
   function submission() {
    var object = {
      name: inputName.value,
      grade: Number(inputGrade.value)
    };

    array.push(object);
  }

  function inputValid(ele) {
    if (ele.value !== "") {
      return true;
    } else {
      return false;
    }
  }

  function numberValid(ele) {
    if (!isNaN(ele.value) && ele.value >= 0 && ele.value < 101) {
      return true;
    } else {
      return false;
    }
  }
}

  
 function view() {
  var wrapper = document.querySelector(".wrapper");

  var sortBy = [
    {
      prop: "grade",
      direction: -1
    },
    {
      prop: "name",
      direction: 1
    }
  ]; 
   wrapper.innerHTML = "";


  for (var i = 0; i < array.length; i++) {
    var ele = document.createElement("div");
    ele.classList.add("borderBottom");
    ele.innerHTML =  array[i].grade + ":" + array[i].name;
    wrapper.appendChild(ele);
  }
}

app();