const app = document.getElementById("app") as HTMLElement;

function loginPage(): void {
  app.innerHTML = `
  <div class="card">
    <div class="logo">
      <img src="logo.png" alt="Schedula"/>
      <h1>Schedula</h1>
      <span>PearlThoughts</span>
      <p>Make your appointments seamless with Schedula.</p>
    </div>

    <input placeholder="Email or Mobile"/>

    <div class="password-wrap">
      <input type="password" id="pwd" placeholder="Password"/>
      <span class="toggle" id="togglePwd">Show</span>
    </div>

    <div class="options">
      <div class="remember">
        <input type="checkbox" id="remember"/>
        <label for="remember">Remember me</label>
      </div>
      <a id="forgot">Forgot password?</a>
    </div>

    <button>Sign In</button>
    <div class="google">Sign in with Google</div>

    <div class="switch">No account? <a id="signup">Sign up</a></div>
  </div>`;

  const toggle = document.getElementById("togglePwd") as HTMLElement;
  const pwd = document.getElementById("pwd") as HTMLInputElement;
  const signup = document.getElementById("signup") as HTMLElement;

  toggle.onclick = () => {
    const hidden = pwd.type === "password";
    pwd.type = hidden ? "text" : "password";
    toggle.textContent = hidden ? "Hide" : "Show";
  };

  signup.addEventListener("click", signupPage);
}

function signupPage(): void {
  app.innerHTML = `
  <div class="card">
    <div class="logo">
      <img src="logo.png" alt="Schedula"/>
      <h1>Schedula</h1>
      <span>PearlThoughts</span>
      <p>Make your appointments seamless with Schedula.</p>
    </div>

    <input placeholder="Full Name"/>
    <input placeholder="Email"/>
    <input placeholder="Phone"/>

    <div class="password-wrap">
      <input type="password" id="spwd" placeholder="Password"/>
      <span class="toggle" id="stoggle">Show</span>
    </div>

    <button>Create Account</button>
    <div class="switch">Have an account? <a id="login">Sign in</a></div>
  </div>`;

  const toggle = document.getElementById("stoggle") as HTMLElement;
  const pwd = document.getElementById("spwd") as HTMLInputElement;
  const login = document.getElementById("login") as HTMLElement;

  toggle.onclick = () => {
    const hidden = pwd.type === "password";
    pwd.type = hidden ? "text" : "password";
    toggle.textContent = hidden ? "Hide" : "Show";
  };

  login.addEventListener("click", loginPage);
}

const bc = document.querySelector(".bubble-container") as HTMLElement;

for (let i = 0; i < 22; i++) {
  const b = document.createElement("span");
  const size = Math.random() * 40 + 20;
  b.style.width = b.style.height = size + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = (Math.random() * 12 + 12) + "s";
  b.style.animationDelay = (Math.random() * 10) + "s";
  bc.appendChild(b);
}

loginPage();
