const codeElement = document.querySelector("#kode");

function onButtonSend() {
  let text = codeElement.value;
  if (text.length <= 6) {
    alert("Kode minimal 6 karakter!");
    codeElement.value = "";
    return;
  }
  console.log(text);
  window.location.href = `${text}.html`;
}

codeElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (codeElement.value.length > 0) {
      onButtonSend();
    }
  }
});
