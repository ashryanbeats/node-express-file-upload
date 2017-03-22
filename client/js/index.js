const form = document.querySelector("#form");
const status = document.querySelector("#status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.set("pic", form.children["file-input"].files[0]);

  const httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "/api/upload");
  httpRequest.send(formData);

  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        form.reset();
        status.textContent = "Uploaded!";
        clearTextContent();
      }
      else {
        console.log(httpRequest.status);
        status.textContent = `Problem: ${httpRequest.status}`;
        clearTextContent();
      }
    }
  }
});

function clearTextContent() {
  setTimeout(() => status.textContent = "", 2000);
}
