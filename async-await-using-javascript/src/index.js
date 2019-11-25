import "./styles.css";

document.querySelector("#GetUsers").addEventListener("click", getUserAsync);

async function getUserAsync() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  return data;
}

getUserAsync("yourUsernameHere")
  .then(data => {
    let output = "";
    data.forEach(({ login }) => {
      output += `<li> ${login} </li>`;
    });
    document.querySelector("#output").innerHTML = output;
  })
  .catch(err => {
    document.querySelector("#output").innerHTML = err;
  });
