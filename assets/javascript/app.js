$(document).ready(function () {

    var trainName
    var trainDestination
    var trainTime
    var trainFreq
    var nextArrival
    var minutesAway
    var currentTime = moment().format('LT');

    $("#add-train").on("click", function (event) {
        event.preventDefault();

        trainName = $("#train-name").val().trim();
        trainDestination = $("#train-destination").val().trim();
        trainTime = $("#train-time").val().trim();
        trainFreq = $("#train-frequency").val().trim();
        nextArrival = currentTime


    });
});