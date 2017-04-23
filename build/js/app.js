(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4656cfb5d089f2cdbaa76d6c8bce366e";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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
    $('#firstName').val("");
    $('#lastName').val("");
    doctorObject.getDoctor(firstName, lastName, displayDoctor);
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
