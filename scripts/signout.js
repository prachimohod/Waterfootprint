function confirmSignOut() {
    var confirmation = confirm("Are you sure you want to sign out?");
    if (confirmation) {
      // If the user confirms, redirect to sign out page
      window.location.href = "signout_process.php"; // Replace with your sign out process file
    }
  }