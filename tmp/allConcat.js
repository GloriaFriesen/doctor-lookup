var Doctor = require('./../js/doctor.js').doctorModule;

var verifyInfo = function(doctor) {
  if (doctor === undefined) {
    console.log("no 2nd address");
  } else {
    console.log("should be working");
  }
}

var displayDoctor = function(doctors) {
  for (var i = 0; i < doctors.length; i += 1) {
    try {
      $("#results").append('<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
                              '<div class="panel panel-default">' +
                                '<div class="panel-heading" role="tab" + id="heading' + i + '">' +
                                  '<h3 class="panel-title">' +
                                    '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '">' +
                                      doctors[i].profile.first_name + ' ' + doctors[i].profile.last_name +
                                    '</a>' +
                                  '</h3>' +
                                '</div>' +
                                '<div id="collapse' + i + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + i + '">' +
                                  '<div class="panel-body">' +
                                    '<h4>Specialty</h4>' +
                                      doctors[i].specialties[0].name +
                                    '<h4>Practice</h4>' +
                                      doctors[i].practices[0].name +
                                    '<h4>Location</h4>' +
                                      doctors[i].practices[0].visit_address.street + ', ' + doctors[i].practices[0].visit_address.street2 + ', ' + doctors[i].practices[0].visit_address.city + ', ' + doctors[i].practices[0].visit_address.state + ', ' + doctors[i].practices[0].visit_address.zip +
                                    '<h4>Bio</h4>' +
                                      doctors[i].profile.bio +
                                  '</div>' +
                              '</div>');
    } catch(e) {
      console.log(e.message);
    }
  }
};

$(document).ready(function() {
  var doctorObject = new Doctor();
  $('#search').click(function() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var state = $('#state').val();
    console.log(state);
    $('#firstName').val("");
    $('#lastName').val("");
    doctorObject.getDoctor(firstName, lastName, displayDoctor);
  });
});
