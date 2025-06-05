document.getElementById('products').addEventListener('change', function() {
    var selectedValue = this.value;
    console.log('Selected Value:', selectedValue);  // Debugging line

    var targetDiv = document.getElementById(selectedValue);
    
    if (targetDiv) {
        console.log('Found target div:', targetDiv);  // Debugging line
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('No matching div found');  // Debugging line
    }
});


  function toggleMenu() {
    document.querySelector('.options').classList.toggle('show');
  }
function handleCountryChange() {
    const select = document.getElementById("country-code");
    const customFields = document.getElementById("custom-code-fields");
    const finalCode = document.getElementById("final-country-code");

    if (select.value === "custom") {
      customFields.style.display = "block";
      finalCode.value = ""; // Clear until user inputs
    } else {
      customFields.style.display = "none";
      finalCode.value = select.value;
    }
  }

  // Capture final custom code before submit
  document.querySelector("form").addEventListener("submit", function (e) {
    const select = document.getElementById("country-code");
    const finalCode = document.getElementById("final-country-code");

    if (select.value === "custom") {
      const country = document.getElementById("custom-country").value;
      const code = document.getElementById("custom-code").value;
      if (!country || !code) {
        e.preventDefault();
        alert("Please enter both custom country and code.");
        return;
      }
      finalCode.value = `${country} (${code})`;
    }
  });