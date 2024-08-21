// const checkBtn = document.getElementById("check-btn");

// checkBtn.addEventListener("click", function () {
//   event.preventDefault(); //mencegah reload halaman
//   const input = document.getElementById("text-input").value;
//   const result = document.getElementById("result");
//   const reverseInput = input.split("").reverse().join("");

//   if (input === "") {
//     alert("Please input a value");
//     return;
//   }
//   if (input.length === 1) {
//     result.innerText = `${input} is a palindrom`;
//   } else if (input === reverseInput) {
//     result.innerText = `${input} is a palindrom`;
//   } else {
//     result.innerText = `${input} is not a palindrom`;
//   }
// });

const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");
  result.style.textAlign = "center";
  if (input === "") {
    alert("Please input a value");
    return;
  }

  const p = document.createElement("p");
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, ""); // Mengabaikan case dan karakter non-alphanumeric
  const reversedInput = cleanedInput.split("").reverse().join(""); // Membalik string

  if (cleanedInput === reversedInput) {
    p.innerText = `${input} is a palindrome`;
  } else {
    p.innerText = `${input} is not a palindrome`;
  }

  result.innerHTML = ""; // Menghapus konten sebelumnya
  result.appendChild(p);
});
