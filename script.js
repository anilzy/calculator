
let string = "";

let buttons = document.querySelectorAll('.btn, .squreroot');
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.getAttribute('data-value');

    if (value === "=") {
      try {
        string = eval(string);
        document.getElementById('display').value = string;
      } catch {
        document.getElementById('display').value = "Error";
      }
    }

    else if (value === "AC") {
      string = "";
      document.getElementById('display').value = string;
    }

    else if (value === "DEL") {
      string = string.slice(0, -1);
      document.getElementById('display').value = string;
    }

    else if (event.target.classList.contains("squreroot")) {
      string = Math.sqrt(eval(string)).toString();
      document.getElementById('display').value = string;
    }

    else {
      string += value;
      document.getElementById('display').value = string;
    }
  });
});
