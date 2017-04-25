var Doctor = require('./../js/doctor.js').doctorModule;

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
                                    '<img src=' + doctors[i].profile.image_url + '>' +
                                    '<h4>Specialty</h4>' +
                                      doctors[i].specialties[0].name +
                                    '<h4>Practice</h4>' +
                                      doctors[i].practices[0].name +
                                    '<h4>Location</h4>' +
                                      doctors[i].practices[0].visit_address.street + ', ' + doctors[i].practices[0].visit_address.city + ', ' + doctors[i].practices[0].visit_address.state + ', ' + doctors[i].practices[0].visit_address.zip +
                                    '<h4>NPI</h4>' +
                                      doctors[i].npi +
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
  $(".js-example-placeholder-single").select2({
    placeholder: "State",
    allowClear: true
  });

  $('#search').submit(function() {
    $("#loading").show();
    event.preventDefault();
    $('#results').empty();
    var firstName = $('#firstName').val().replace(" ", "-");
    var lastName = $('#lastName').val().replace(" ", "-");
    var city = $('#city').val().toLowerCase().replace(" ", "-");
    var state = $('#state').val();
    $('#firstName').val("");
    $('#lastName').val("");
    $('#city').val("");
    doctorObject.getDoctor(firstName, lastName, city, state, displayDoctor);
  });
});
