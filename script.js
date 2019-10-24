var db = firebase.firestore();

db.collection("display").doc("registration")
    .onSnapshot(function (doc) {
        var id = doc.data().id;
        db.collection("attendees").doc(id).get()
            .then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data().name);
                    document.getElementById("name").innerHTML = "" + doc.data().name;
                    document.getElementById("seat").innerHTML = "" + doc.data().seat;
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
    });
