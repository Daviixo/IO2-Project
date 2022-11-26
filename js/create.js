function sendinfo(){

    try {
            
        var firebaseConfig = {
        apiKey: "AIzaSyCQMF6gSC6eB-zNstpjjUfjDR7Gfdhpgpk",
        authDomain: "myrestaurant-158ca.firebaseapp.com",
        projectId: "myrestaurant-158ca",
        databaseURL: "https://myrestaurant-158ca-default-rtdb.firebaseio.com/",
        storageBucket: "myrestaurant-158ca.appspot.com",
        messagingSenderId: "742839422891",
        appId: "1:742839422891:web:35e07e3bb2f208242b8cee",
        measurementId: "G-TN5243W30T"
    };

    firebase.initializeApp(firebaseConfig);

    var messagesRef = firebase.database()
        .ref('Collected Data');

    document.getElementById('contactForm')
        .addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();

        // Get values
        var name = getInputVal('name');
        var email = getInputVal('email');

        saveMessage(name, email);
        document.getElementById('contactForm').reset();

        alert('Data sent! :D')

    }

    // Function to get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    // Save message to firebase
    function saveMessage(name, email) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
        });
    }
        
    } catch (error) {
        
        alert('An error occurred: ' + error)

    }

}