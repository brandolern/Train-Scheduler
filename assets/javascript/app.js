$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC1G09__lZZHQE1hu8yfAOhhAk4dFYnnxQ",
        authDomain: "train-scheduler-eb328.firebaseapp.com",
        databaseURL: "https://train-scheduler-eb328.firebaseio.com",
        projectId: "train-scheduler-eb328",
        storageBucket: "train-scheduler-eb328.appspot.com",
        messagingSenderId: "1092815152813"
    }
    firebase.initializeApp(config);

    //Variable for database connection
    database = firebase.database();

    //Train varibles
    var trainName
    var trainDestination
    var firstTime
    var trainFreq
    var nextArrival
    var minutesAway

    //On click function for submit button
    $("#add-train").on("click", function (event) {
        event.preventDefault();

        trainName = $("#train-name").val().trim();
        trainDestination = $("#train-destination").val().trim();
        firstTime = $("#train-time").val().trim();
        trainFreq = $("#train-frequency").val().trim();

        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var remainder = diffTime % trainFreq;

        nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
        minutesAway = trainFreq - remainder;

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFreq,
            arrival: nextArrival,
            minutes: minutesAway
        };

        database.ref().push(newTrain);
    });


});