const checkBtn = document.getElementById("check-btn");


checkBtn.addEventListener("click", function() {
  const input = document.getElementById("text-input").value;

  if(input === "") {
    alert("Please input a value");
  }
})