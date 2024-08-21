const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const p = document.createElement("p");


checkBtn.addEventListener("click", function() {
    event.preventDefault(); //mencegah reload halaman
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if(input === "") {
    alert("Please input a value");
  }
  if(input.length === 1) {
    p.innerText = `${input} is a palindrome`;
    result.appendChild(p);
  }
})