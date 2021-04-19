function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  var numErrors = 0;
  // Latitude Check
  var latitude = document.getElementById("latitude").value;
  if (isNaN(latitude) || parseInt(latitude) < -90 || parseInt(latitude) > 90) {
    document.getElementById("latitude_error").style.display = "inline-block";
    numErrors++;
  } else {
    document.getElementById("latitude_error").style.display = "none";
  }

  //Longitude Check
  var longitude = document.getElementById("longitude").value;
  if (
    isNaN(longitude) ||
    parseInt(longitude) < -180 ||
    parseInt(longitude) > 180
  ) {
    document.getElementById("longitude_error").style.display = "inline-block";
    numErrors++;
  } else {
    document.getElementById("longitude_error").style.display = "none";
  }
  if (numErrors > 0) {
    //Form Stop
    event.preventDefault();
    //Scroll to Error
    document.getElementsByClassName("error_message")[0].scrollIntoView();
  }
  //console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
