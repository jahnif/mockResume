"use strict";

var bio = {
    "name": 'Rick Sanchez',
    "role": 'Web Developer',
    "contacts": {
        "email": "passmethebutter@fakeemail.com",
        "mobile": "123-456-7890",
        "github": "jahnif",
        "twitter": "@RickandMorty",
        "location": "Seattle, WA"
    },
    "skills": ["Graphic Design", "Javascript", "CSS", "HTML"],
    "welcomeMessage": "Welcome to my resume!",
    "bioPic": "images/meeSeeks.jpg",

    display: function() {

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts, #footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts, #footerContacts').append('<a href=mailto:' + bio.contacts.email + '>' + formattedEmail + '</a>');

        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts, #footerContacts').append('<a href=http://www.github.com/' + bio.contacts.github + '>' + formattedGithub + '</a>');

        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        $('#topContacts, #footerContacts').append('<a href=http://www.twitter.com/' + bio.contacts.twitter + '>' + formattedTwitter + '</a>');

        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts, #footerContacts').append('<a href=https://maps.google.com/maps?q=' + bio.contacts.location + '>' + formattedLocation + '</a>');

        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
        $('#header').append(formattedBioPic);

        var formattedWelcomeMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        var formattedSkillsStart = HTMLskillsStart.replace('%data%', bio.skills);
        $('#header').append(formattedSkillsStart);

        var skillset = [];
        for (var skill = 0; skill < bio.skills.length; skill++) {
            skillset.push('<li>' + bio.skills[skill] + '</li>');
        }
        $('#skills').append(skillset);
    }
};
bio.display();

var work = {
    "jobs": [{
        "title": "Web and Visual Media Strategist",
        "employer": "Freelancer",
        "location": "Seattle, WA",
        "dates": "November 2014 - Present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cupiditate, ea harum. Recusandae quia deserunt exercitationem unde consequuntur amet est libero nemo. Asperiores, temporibus, eius."
    }, {
        "title": "Legislative Assistant",
        "employer": "Washington State Legislature",
        "location": "Olympia, WA",
        "dates": "September 2012 - November 2014",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fugit, mollitia. Amet optio, deleniti ad, rerum, distinctio ut temporibus ipsum earum adipisci, molestiae maxime dolorum?"
    }],
    display: function() {
        var formattedEmployer;
        var formattedPosition;
        var formattedEmployerPosition;
        var formattedDates;
        var formattedCity;
        var formattedDuties;


        for (var job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(HTMLworkStart);

            formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            formattedPosition = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            formattedEmployerPosition = formattedEmployer + formattedPosition;
            $('.work-entry:last').append(formattedEmployerPosition);

            formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);

            formattedCity = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            $('.work-entry:last').append(formattedCity);

            formattedDuties = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedDuties);
        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Musings",
        "dates": "January - May 2015",
        "description": "My reflections on abstract art",
        "images": "images/abstractFireworks.jpg"
    }, {
        "title": "Musings2",
        "dates": "April - July 2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga saepe cupiditate sequi.",
        "images": "images/abstractDrip.jpg"
    }],
    display: function() {
        var formattedHTMLprojectTitle;
        var formattedtHTMLprojectDates;
        var formattedprojectDescription;
        var formattedprojectImage;
        for (var project = 0; project < projects.projects.length; project++ ) {
            $('#projects').append(HTMLprojectStart);

            formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedHTMLprojectTitle);

            formattedtHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedtHTMLprojectDates);

            formattedprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedprojectDescription);

            formattedprojectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
            $('.project-entry:last').append(formattedprojectImage);
        }
    }
};
projects.display();


var education = {
    "schools": [{
        "name": "University of Denver",
        "yearsAttended": 4,
        "location": "Denver",
        "degree": "BA",
        "majors": [
            "International Studies",
            " Spanish",
            " Studio Art"
        ],
        "dates": 2006,
        "url": "http://www.du.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development Nanodegree",
        "school": "Udacity",
        "date": "Ongoing",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {

        var formattedSchoolName;
        var formattedSchoolDegree;
        var formattedSchoolNameDegree;
        var formattedSchoolDates;
        var formattedSchoolLocation;
        var formattedSchoolMajor;

        var school;
        for (var school = 0; school < education.schools.length; school++) {
            $('#education').append(HTMLschoolStart);

            formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
            formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $('.education-entry:last').append(formattedSchoolNameDegree);

            formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(formattedSchoolDates);

            formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            $('.education-entry:last').append(formattedSchoolLocation);

            formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
            $('.education-entry:last').append(formattedSchoolMajor);

        }

        $('#education').append(HTMLonlineClasses);

        var formattedOnlineTitle;
        var formattedOnlineSchool;
        var formattedOnlineTitleSchool;
        var formattedOnlineDates;
        var formattedOnlineURL;

        var onlineClass;
        for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {

            $('#education').append(HTMLonlineClassesStart);

            formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineClass].title);
            formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineClass].school);
            formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $('.onlineClass-entry:last').append(formattedOnlineTitleSchool);

            formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineClass].date);
            $('.onlineClass-entry:last').append(formattedOnlineDates);

            formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineClass].url);
            $('.onlineClass-entry:last').append(formattedOnlineURL);

        }
    }
};
education.display();

//Map at bottom
$('#mapDiv').append(googleMap);


//Click Tracking
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});