var app = firebase.database();

function sum(numbers) {
  var total = 0

  numbers.forEach(function(number) {
    total += number
  })

  return total
}

function checkForTeam() {
  app.ref('teams').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('value', function(snapshot) {
    if (snapshot.exists()) {

      app.ref('contestants').on('value', function(contestantsSnapshot) {
        var contestants = contestantsSnapshot.val()

        var val = snapshot.val()
        var team = val[Object.keys(val)[0]]

        console.log(team)

        /*
          {{#each teamMembers as |teamMember|}}
            <div class="team-member">
            <h2>{{teamMember.name}}</h2>
            <ul>
              {{#each teamMember.scores as |score, index|}}
                <li>Week {{index}}: {{score}}</li>
              {{/each}}
            </ul>
            <h3>{{getTeamMemberTotal teamMember}}</h3>
          {{/each}}
        */

        
        var firstMemberScores = contestants[team.teamMembers[0].replace(/[^a-zA-Z]/g, '')].scores
        var secondMemberScores = contestants[team.teamMembers[1].replace(/[^a-zA-Z]/g, '')].scores
        var thirdMemberScores = contestants[team.teamMembers[2].replace(/[^a-zA-Z]/g, '')].scores
        var fourthMemberScores = contestants[team.teamMembers[3].replace(/[^a-zA-Z]/g, '')].scores
        var fifthMemberScores = contestants[team.teamMembers[4].replace(/[^a-zA-Z]/g, '')].scores

        var firstMemberTotal = sum(firstMemberScores)
        var secondMemberTotal = sum(secondMemberScores)
        var thirdMemberTotal = sum(thirdMemberScores)
        var fourthMemberTotal = sum(fourthMemberScores)
        var fifthMemberTotal= sum(fourthMemberScores)

        var teamScores = [firstMemberTotal, secondMemberTotal, thirdMemberTotal, fourthMemberTotal, fifthMemberTotal]
        var teamTotal = sum(teamScores)

        var firstMemberPhoto = contestants[team.teamMembers[0].replace(/[^a-zA-Z]/g, '')].photo
        var secondMemberPhoto = contestants[team.teamMembers[1].replace(/[^a-zA-Z]/g, '')].photo
        var thirdMemberPhoto = contestants[team.teamMembers[2].replace(/[^a-zA-Z]/g, '')].photo
        var fourthMemberPhoto = contestants[team.teamMembers[3].replace(/[^a-zA-Z]/g, '')].photo
        var fifthMemberPhoto = contestants[team.teamMembers[4].replace(/[^a-zA-Z]/g, '')].photo

        var userDisplayName = firebase.auth().currentUser.displayName

        $('.allScores').hide();
        $('.profile .sign-up').hide();
        
        // var templateSource = $('#teamMembers').html()
        // var compiledTemplate = Handlebars.compile(templateSource)
        // debugger
        
        // var generatedHtml = compiledTemplate(app.ref)
        // $('.profile .yourTeam').html(generatedHtml)
        
        $('.profile .yourTeam').html(
          '<h1>' + userDisplayName + '\'s Team' + '</h1>' +
          '<div class="team-member">' +
            '<img src="' + firstMemberPhoto +'">' +
            '<h2>' + team.teamMembers[0] + '</h2>' +
            '<ul>' + 
              '<li>' + '<span class="week">' + 'Week 1: ' + '</span>' + firstMemberScores[0] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 2: ' + '</span>' + firstMemberScores[1] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 3: ' + '</span>' + firstMemberScores[2] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 4: ' + '</span>' + firstMemberScores[3] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 5: ' + '</span>' + firstMemberScores[4] + '</li>' +
            '</ul>' +
            '<h3>' + 'Contestant Total: ' + firstMemberTotal + '</h2>' +
          '</div>' +
          '<div class="team-member">' +
            '<img src="' + secondMemberPhoto +'">' +
            '<h2>' + team.teamMembers[1] + '</h2>' +
            '<ul>' + 
              '<li>' + '<span class="week">' + 'Week 1: ' + '</span>' + secondMemberScores[0] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 2: ' + '</span>' + secondMemberScores[1] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 3: ' + '</span>' + secondMemberScores[2] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 4: ' + '</span>' + secondMemberScores[3] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 5: ' + '</span>' + secondMemberScores[4] + '</li>' +
            '</ul>' +
          '<h3>' + 'Contestant Total: ' + secondMemberTotal + '</h2>' + 
          '</div>' +
          '<div class="team-member">' +
            '<img src="' + thirdMemberPhoto +'">' +
            '<h2>' + team.teamMembers[2] + '</h2>' +
            '<ul>' + 
              '<li>' + '<span class="week">' + 'Week 1: ' + '</span>' + thirdMemberScores[0] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 2: ' + '</span>' + thirdMemberScores[1] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 3: ' + '</span>' + thirdMemberScores[2] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 4: ' + '</span>' + thirdMemberScores[3] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 5: ' + '</span>' + thirdMemberScores[4] + '</li>' +
            '</ul>' +
          '<h3>' + 'Contestant Total: ' + thirdMemberTotal + '</h2>' +  
          '</div>' +
          '<div class="team-member">' +
            '<img src="' + fourthMemberPhoto +'">' +
            '<h2>' + team.teamMembers[3] + '</h2>' +
            '<ul>' + 
              '<li>' + '<span class="week">' + 'Week 1: ' + '</span>' + fourthMemberScores[0] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 2: ' + '</span>' + fourthMemberScores[1] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 3: ' + '</span>' + fourthMemberScores[2] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 4: ' + '</span>' + fourthMemberScores[3] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 5: ' + '</span>' + fourthMemberScores[4] + '</li>' +
            '</ul>' +
          '<h3>' + 'Contestant Total: ' + fourthMemberTotal + '</h2>' +  
          '</div>' +
          '<div class="team-member">' +
            '<img src="' + fifthMemberPhoto +'">' +
            '<h2>' + team.teamMembers[4] + '</h2>' +
            '<ul>' + 
              '<li>' + '<span class="week">' + 'Week 1: ' + '</span>' + fifthMemberScores[0] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 2: ' + '</span>' + fifthMemberScores[1] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 3: ' + '</span>' + fifthMemberScores[2] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 4: ' + '</span>' + fifthMemberScores[3] + '</li>' +
              '<li>' + '<span class="week">' + 'Week 5: ' + '</span>' + fifthMemberScores[4] + '</li>' +
            '</ul>' +
          '<h3>' + 'Contestant Total: ' + fifthMemberTotal + '</h2>' +  
          '</div>' +
          '<div class="teamTotal">' +
            '<h2>' + 'Team Total: ' + teamTotal + '</h2>' +
          '</div>');

        $('.profile .yourTeam').show();
        $('.logOut').show();
      })

    } else {

      console.log('no team!')
      $('.profile .yourTeam').hide();
      $('.profile .sign-up').show();
    }
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    checkForTeam();
    $('.signUpHeader').hide();
    $('.logInContainer').hide();
    $('.registerContainer').hide();
    $('.allScores').hide();
    $('.profile').show();
  } else {
   $('.profile').hide();
   $('.signUpHeader').show();
   $('.allScores').hide();
   $('.logOut').hide();
      // No user is signed in.
    }
  });




$('.login').on('click', function(){
	$('.signUpHeader').hide()
	$('.logInContainer').show()
})

$("#loginButton").on("click", function(){

  var email = $("#login-email").val();
  var password = $("#login-password").val();

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
    window.alert(errorMessage);

  });

});



$('.register').on('click', function(){
	$('.signUpHeader').hide()
	$('.registerContainer').show()
});

$("#registerButton").on("click", function() {

	var email = $("#email").val();
	var password = $("#password").val();

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert(errorMessage);
  });

});



$('.logOut').on('click', function(){
	console.log('logout')

	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
  }, function(error) {
   var errorMessage = error.message;

   window.alert(errorMessage);
	  // An error happened.
	});
});

$('.cancel').on('click', function(){
	$('.registerContainer').hide();
	$('.logInContainer').hide();
	$('.signUpHeader').show();
});






////////* Checkboxes */////


$("input[type='checkbox']").change(function(e){
  var checkBoxes = $("input[type='checkbox']");
  var checkedBoxes = $("input[type='checkbox']:checked");
  var checkedBoxesLength = checkedBoxes.length;

  if(checkedBoxesLength <= 4){
    checkBoxes.parents("label").removeClass("disabled");
    checkBoxes.prop("disabled", false);


    if($(this).is(":checked")){
      $(this).parents("label").addClass("checked");
    }else{
      $(this).parents("label").removeClass("checked"); 
    }

  }else{
    checkedBoxes.parents("label").addClass("checked");
    checkBoxes.not(":checked").parents("label").addClass("disabled");
    checkBoxes.not(":checked").prop("disabled", true);
  }
});


$(".submitTeam").click(function(event){
  event.preventDefault();

  var checkedBoxes = $("input[type='checkbox']:checked");
  var checkedBoxesLength = checkedBoxes.length;

  if(checkedBoxes.length <=4){
    window.alert('You must pick 5 contestants!');
  }else{
      var picks = $("input[type='checkbox']:checked").map(function(){
        return $(this).val();
      }).get();

      console.log(picks);

      var name = $('input[name="name"]').val()

      var newTeam = app.ref('teams').push({
        teamMembers: picks,
        uid: firebase.auth().currentUser.uid,
        name: name
      })


      var user = firebase.auth().currentUser;

      user.updateProfile({
          displayName: name
      }).then(function() {
          console.log('Update successful')
      }, function(error) {
          console.log('An error happene')
      });

      $('.profile .sign-up').hide();
      $('.profile .yourTeam').show();
  }
});

////////////* Team Members *////////////////////

$('#scores').on('click', function(){
  console.log('scores')

  $('.allScores .scoresList').html('');

  $('.signUpHeader').hide();
  $('.profile').hide();
  $('.page .logOut').hide();
  $('.allScores').show();

  app.ref('contestants').on('value', function(contestantsSnapshot) {
    var contestants = contestantsSnapshot.val()

    app.ref('teams').on('value', function(teamsSnapshot) {
      teamsSnapshot.forEach(function(teamContainer) {
        var team = teamContainer.val()
        var teamMembers = team.teamMembers
        var teamName = team.name

        var teamTotal = calculateTeamScore(contestants, team)

        console.log(teamName, teamTotal)

        $('.allScores .scoresList').append(
          '<div class="allScoreTeam">' +
            '<h1>' + teamName  + '</h1>' +
            '<h2>' + teamTotal + '</h2>' +
           '</div>' 
          );

      })
    })
  })

});

function calculateTeamScore(contestants, team) {
   var firstMemberScores = contestants[team.teamMembers[0].replace(/[^a-zA-Z]/g, '')].scores
   var secondMemberScores = contestants[team.teamMembers[1].replace(/[^a-zA-Z]/g, '')].scores
   var thirdMemberScores = contestants[team.teamMembers[2].replace(/[^a-zA-Z]/g, '')].scores
   var fourthMemberScores = contestants[team.teamMembers[3].replace(/[^a-zA-Z]/g, '')].scores
   var fifthMemberScores = contestants[team.teamMembers[4].replace(/[^a-zA-Z]/g, '')].scores

   var firstMemberTotal = sum(firstMemberScores)
   var secondMemberTotal = sum(secondMemberScores)
   var thirdMemberTotal = sum(thirdMemberScores)
   var fourthMemberTotal = sum(fourthMemberScores)
   var fifthMemberTotal= sum(fourthMemberScores)

  var teamScores = [firstMemberTotal, secondMemberTotal, thirdMemberTotal, fourthMemberTotal, fifthMemberTotal]
  var teamTotal = sum(teamScores)

  return teamTotal
}


///////////////////////////////////////

$('#yourTeam').on("click", function(){

  var user = firebase.auth().currentUser;

  if (user) {
    $('.profile').show();
    $('.page .logOut').show();
    $('.allScores').hide();
    $('.signUpHeader').hide();
    $('.logInContainer').hide();
    $('.registerContainer').hide();
  } else {
    $('.signUpHeader').show();
    $('.allScores').hide();
  }
});


$('#signUp').on("click", function(){

    var user = firebase.auth().currentUser;

    if (user) {
    $('.profile').show();
    $('.page .logOut').show();
    $('.allScores').hide();
    $('.signUpHeader').hide();
    $('.logInContainer').hide();
    $('.registerContainer').hide();
  } else {
    $('.signUpHeader').show();
    $('.allScores').hide();
    $('.profile').hide();
    $('.registerContainer').hide();
    $('.logInContainer').hide();
  }
});

