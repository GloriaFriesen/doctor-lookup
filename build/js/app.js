(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4656cfb5d089f2cdbaa76d6c8bce366e";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(firstName, lastName, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + firstName + '&last_name=' + lastName + '&location=or-portland&gender=male&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    console.log(response.data);
    displayDoctor(response.data);
  }).fail(function(error) {
    $('.results').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
