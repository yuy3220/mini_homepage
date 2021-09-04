 function getTextFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain";
    input.onchange = function (event) {
      processFile(event.target.files[0]);
    };
    input.click();
  }

  function processFile(file) {
    var reader = new FileReader();
    reader.readAsText(file, "utf-8");

    reader.onload = function () {
      document.getElementById("secret-diary").innerText = reader.result;
      document.getElementById("secret-box").style.display = "block";
    };
  }