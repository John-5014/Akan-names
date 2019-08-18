function validateform(){
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var gender = document.getElementsByName("gender");
  var century = document.getElementById("century");

  if (day == "" || day == null) {
    alert("Day is required");
  } else {
    if (!isNaN(day)) {
      if (day <= 0 || day > 31) {
        alert("day is invalid");
      } else {
        alert(day);
      }
    } else {
      alert("Number required");
    }
  }

  if (month == "" || month == null) {
    alert("month is required");
  } else {
    if (!isNaN(month)) {
      if (month <= 0 || month > 12) {
        alert("month is invalid");
      } else {
        alert(month);
      }
    } else {
      alert("Number required");
    }
  }

  if (century == "" || century == null) {
    alert("century is required");
  } else {
    if (!isNaN(century)) {
      if (century <= 0 || century > 21) {
        alert("century is invalid");
      } else {
        alert(century);
      }
    } else {
      alert("Number required");
    }
  }


  if (year == "" || year == null) {
    alert("year is required");
  } else {
    if (!isNaN(year)) {
      if (year <= 0 || year > 2045) {
        alert("year is invalid");
      } else {
        alert(year);
      }
    } else {
      alert("Number required");
    }
  }

  if (gender[0].checked === false && gender[1].checked === false) {
    alert("select gender");
  } else {
    for(i = 0; i < gender.length; i++){
      if(gender[i].checked) {
        alert(gender[i].value);
      }
    }
  }









}
