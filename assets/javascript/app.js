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


    //On click function for submit button
    $("#add-train").on("click", function (event) {
        event.preventDefault();

        var trainName = $("#train-name").val().trim();
        var trainDestination = $("#train-destination").val().trim();
        var firstTrain = $("#train-time").val().trim();
        var trainFreq = $("#train-frequency").val().trim();
        console.log(firstTrain)

        var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var remainder = diffTime % trainFreq;
        var minutesAway = trainFreq - remainder;
        var nextArrival = moment().add(minutesAway, "minutes").format('h:mm a');

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFreq,
            arrival: nextArrival,
            minutes: minutesAway
        };

        database.ref().push(newTrain);

        $("#train-name").val("");
        $("#train-destination").val("");
        $("#train-time").val("");
        $("#train-frequency").val("");
    });

    database.ref().on("child_added", function (childSnapshot) {

        var name = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var frequency = childSnapshot.val().frequency;
        var arrival = childSnapshot.val().arrival;
        var minutesAway = childSnapshot.val().minutes;

        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text(arrival),
            $("<td>").text(minutesAway)
        );

        $("#train-table > tbody").append(newRow);

    });


});