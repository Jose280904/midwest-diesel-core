const inquiryForm = document.getElementById("core-inquiry-form");
const inquiryStatus = document.getElementById("inquiry-status");
const inquirySubmit = document.getElementById("inquiry-submit");

if (inquiryForm && inquiryStatus && inquirySubmit) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    inquiryStatus.textContent =
      "Your form passed validation. This is a preview only—" +
      "your inquiry has not been sent or saved.";
  });

  inquiryForm.addEventListener("input", () => {
    inquiryStatus.textContent = "";
  });

  inquirySubmit.disabled = false;
}