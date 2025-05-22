function generateResume() {
  // Copy input values to output fields
  document.getElementById('outName').innerText = document.getElementById('name').value;
  document.getElementById('outEmail').innerText = document.getElementById('email').value;
  document.getElementById('outPhone').innerText = document.getElementById('phone').value;

  // Show only resume output
  document.getElementById('resumeOutput').style.display = 'block';
}

function downloadPDF() {
  const element = document.getElementById('resumeOutput');
  html2pdf().from(element).save();
}
//
