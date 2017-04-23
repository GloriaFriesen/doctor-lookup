var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(firstName, lastName, displayDoctor) {
  debugger;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&last_name=' + lastName + '&location=or-portland&skip=0&limit=100&user_key=' + apiKey).then(function(response) {
    console.log(response);
    displayDoctor(response.data);
  }).fail(function(error) {
    console.log(error);
    $('#doctors').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
