var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(doctors) {
  $("#results").show();
  doctors.forEach(function(doctor) {
    $("#results").append('<div class="panel panel-default">' +
                              '<div class="panel-heading">' +
                                '<h3 class="panel-title">' + doctor.profile.first_name + ' ' + doctor.profile.last_name +
                                '</h3>' +
                              '</div>' +
                              '<div class="panel-body">' +
                                '<h4>Specialty</h4>' +
                                  doctor.specialties[0].name +
                                '<h4>Practice</h4>' +
                                  doctor.practices[0].name +
                                '<h4>Location</h4>' +
                                  doctor.practices[0].visit_address.street + ', ' + doctor.practices[0].visit_address.street2 + ', ' + doctor.practices[0].visit_address.city + ', ' + doctor.practices[0].visit_address.state + ', ' + doctor.practices[0].visit_address.zip +
                                '<h4>Bio</h4>' +
                                  doctor.profile.bio +
                              '</div>' +
                            '</div>');
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
