var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(firstName, lastName, city, state, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&last_name=' + lastName + '&location=' + state + '-' + city + '&skip=0&limit=100&user_key=' + apiKey).then(function(response) {
    if (response.data.length < 1) {
      $('#results').html("<h4>No doctors were found using your search criteria, please try again.</h4>");
    } else {
      displayDoctor(response.data);
    }
  }).fail(function(error) {
    $('#results').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
