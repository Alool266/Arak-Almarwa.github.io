function showPopup() {
    setTimeout(function() {
      document.getElementById("popup").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  
  document.getElementById("dismiss-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  window.onload = function() {
    showPopup();
  };
  