import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
if (Meteor.isClient){

Template.signup.events({

    'submit form': function(event){
        event.preventDefault();
        console.log(event.target)
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        var nameVar = event.target.name.value;
	    var dobVar = event.target.dob.value;
        Accounts.createUser({
                    email: emailVar,
                    password: passwordVar,
                    name: nameVar,
                    dob: dobVar
                });
    }
});
Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        console.log(event.target)
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});

Template.Dashboard.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
}