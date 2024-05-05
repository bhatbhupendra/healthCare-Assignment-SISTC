const parallax_1 = document.getElementById("parallax_1");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax_1.style.backgroundPositionY = offset * 0.7 + "px";
});

document.getElementById("bmiForm").onsubmit = function () {
  // Get input values
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display result
  document.getElementById("reasultBMI").innerHTML =
    "Your BMI is: " + bmi.toFixed(2);

  return false; // Prevent form submission
};

function submitAppoinmentForm() {
  alert("The Appoinment is created !!");
}
