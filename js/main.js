firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	$('.signUpHeader').hide;
  	$('.logInContainer').hide();
  	$('.registerContainer').hide();
  	$('.profile').show();
    // User is signed in.
  } else {
  	$('.profile').hide();
  	$('.signUpHeader').show();
    // No user is signed in.
  }
});


$('.login').on('click', function(){
	console.log('login')
	$('.signUpHeader').hide()
	$('.logInContainer').show()
})

$("#loginButton").on("click", function() {

    var email = $("#login-email").val();
    var password = $("#login-password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(error.message)
  		window.alert(error.message);
  		// ...
	});  

	var user = firebase.auth().currentUser;
	var name, email, photoUrl, uid;

	if (user != null) {
  		name = user.displayName;
  		email = user.email;
  		photoUrl = user.photoURL;
  		uid = user.uid;  
	}

	console.log(name)
});


$('.register').on('click', function(){
	console.log('register')
	$('.signUpHeader').hide()
	$('.registerContainer').show()
})

$("#registerButton").on("click", function() {

	console.log('clicked')

	var email = $("#email").val();
	var password = $("#password").val();

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		
  		console.log('created')

  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// ...
	});
});


$('.logOut').on('click', function(){
	console.log('logout')

	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
		}, function(error) {
	  // An error happened.
	});
})

$('.cancel').on('click', function(){
	$('.registerContainer').hide();
	$('.logInContainer').hide();
	$('.signUpHeader').show();
})

