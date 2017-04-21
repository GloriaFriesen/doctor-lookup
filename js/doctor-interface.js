var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors) {
  doctors.forEach(function(doctor) {
    $("#results").append("<p>" + doctor.profile.first_name + "</p>");
  });
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#search').click(function() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#firstName').val("");
    $('#lastName').val("");
    doctorObject.getDoctor(firstName, lastName, displayDoctor);
  });
});
