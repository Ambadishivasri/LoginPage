var app = document.getElementById("app");
function loginPage() {
    app.innerHTML = "\n  <div class=\"card\">\n    <div class=\"logo\">\n      <img src=\"logo.png\" alt=\"Schedula\"/>\n      <h1>Schedula</h1>\n      <span>PearlThoughts</span>\n      <p>Make your appointments seamless with Schedula.</p>\n    </div>\n\n    <input placeholder=\"Email or Mobile\"/>\n\n    <div class=\"password-wrap\">\n      <input type=\"password\" id=\"pwd\" placeholder=\"Password\"/>\n      <span class=\"toggle\" id=\"togglePwd\">Show</span>\n    </div>\n\n    <div class=\"options\">\n      <div class=\"remember\">\n        <input type=\"checkbox\" id=\"remember\"/>\n        <label for=\"remember\">Remember me</label>\n      </div>\n      <a id=\"forgot\">Forgot password?</a>\n    </div>\n\n    <button>Sign In</button>\n    <div class=\"google\">Sign in with Google</div>\n\n    <div class=\"switch\">No account? <a id=\"signup\">Sign up</a></div>\n  </div>";
    var toggle = document.getElementById("togglePwd");
    var pwd = document.getElementById("pwd");
    var signup = document.getElementById("signup");
    toggle.onclick = function () {
        var hidden = pwd.type === "password";
        pwd.type = hidden ? "text" : "password";
        toggle.textContent = hidden ? "Hide" : "Show";
    };
    signup.addEventListener("click", signupPage);
}
function signupPage() {
    app.innerHTML = "\n  <div class=\"card\">\n    <div class=\"logo\">\n      <img src=\"logo.png\" alt=\"Schedula\"/>\n      <h1>Schedula</h1>\n      <span>PearlThoughts</span>\n      <p>Make your appointments seamless with Schedula.</p>\n    </div>\n\n    <input placeholder=\"Full Name\"/>\n    <input placeholder=\"Email\"/>\n    <input placeholder=\"Phone\"/>\n\n    <div class=\"password-wrap\">\n      <input type=\"password\" id=\"spwd\" placeholder=\"Password\"/>\n      <span class=\"toggle\" id=\"stoggle\">Show</span>\n    </div>\n\n    <button>Create Account</button>\n    <div class=\"switch\">Have an account? <a id=\"login\">Sign in</a></div>\n  </div>";
    var toggle = document.getElementById("stoggle");
    var pwd = document.getElementById("spwd");
    var login = document.getElementById("login");
    toggle.onclick = function () {
        var hidden = pwd.type === "password";
        pwd.type = hidden ? "text" : "password";
        toggle.textContent = hidden ? "Hide" : "Show";
    };
    login.addEventListener("click", loginPage);
}
var bc = document.querySelector(".bubble-container");
for (var i = 0; i < 22; i++) {
    var b = document.createElement("span");
    var size = Math.random() * 40 + 20;
    b.style.width = b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = (Math.random() * 12 + 12) + "s";
    b.style.animationDelay = (Math.random() * 10) + "s";
    bc.appendChild(b);
}
loginPage();
