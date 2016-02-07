var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"email" : "passmethebutter@fakeemail.com",
		"cell" : "123-456-7890",
		"github" : "jahnif",
		"twitter" : "@RickandMorty",
		"location" : "Seattle, WA"
	},
	"skills" : ["Graphic Design", "Javascript", "CSS", "HTML"],
	"welcome" : "Welcome to my resume!",
	"bioPic" : "images/meeSeeks.jpg"
}

var work = {
	"jobs" : [
	{
		"position" : "Web and Visual Media Strategist",
		"employer" : "Freelancer",
		"location" : "Seattle, WA",
		"dates" : "November 2014 - Present",
		"duties" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cupiditate, ea harum. Recusandae quia deserunt exercitationem unde consequuntur amet est libero nemo. Asperiores, temporibus, eius."
	},
	{
		"position" : "Legislative Assistant",
		"employer" : "Washington State Legislature",
		"location" : "Olympia, WA",
		"dates" : "September 2012 - November 2014",
		"duties" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fugit, mollitia. Amet optio, deleniti ad, rerum, distinctio ut temporibus ipsum earum adipisci, molestiae maxime dolorum?"
	}
	]
}

var education = {
    "name": "University of Denver",
    "yearsAttended": 4,
    "schoolCity": "Denver",
    "majors": [
        "International Studies",
        " Spanish",
        " Studio Art"
    ],
    "graduationYear": 2006,
    "url" : "http://www.du.edu/"
}

var projects = {
	projects : [
		{
			title : "Musings",
			dates : "January - May 2015",
			description : "My reflections on abstract art",
			image : "images/abstractFireworks.jpg"
		},
		{
			title : "Musings2",
			dates : "April - July 2015",
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga saepe cupiditate sequi.",
			image : "images/abstractDrip.jpg",
		}
	]
}

var formattedName = HTMLheaderName.replace('%data%','Rick Sanchez');
var formattedRole = HTMLheaderRole.replace('%data%','Web Developer');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

function displayContactInfo() {

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.cell);
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

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace('%data%', bio.welcome);
	$('#header').append(formattedWelcomeMessage);

	var formattedSkillsStart = HTMLskillsStart.replace('%data%', bio.skills);
	$('#header').append(formattedSkillsStart);

	var formattedSkills = HTMLskills.replace('%data%',bio.skills);
	var skillset = [];
	for (skill in bio.skills) {
		skillset.push('<li>' + bio.skills[skill] + '</li>');
	}
	$('#skills').append(skillset);

}

displayContactInfo();

function displayWork() {for( job in work.jobs ) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedPosition = HTMLworkTitle.replace('%data%', work.jobs[job].position);
	var formattedEmployerPosition = formattedEmployer + formattedPosition;
	$('.work-entry:last').append(formattedEmployerPosition);
	
	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
	$('.work-entry:last').append(formattedDates);

	var formattedCity = HTMLworkLocation.replace('%data%', work.jobs[job].location);
	$('.work-entry:last').append(formattedCity);

	var formattedDuties = HTMLworkDescription.replace('%data%', work.jobs[job].duties);
	$('.work-entry:last').append(formattedDuties);
	}
}
displayWork();

projects.display = function () { for (project in projects.projects ) {
	$('#projects').append(HTMLprojectStart);

	var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
	$('.project-entry:last').append(formattedHTMLprojectTitle);

	var formattedtHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
	$('.project-entry:last').append(formattedtHTMLprojectDates);

	var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
	$('.project-entry:last').append(formattedprojectDescription);

	var formattedprojectImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
	$('.project-entry:last').append(formattedprojectImage);
	}
}

projects.display();

function displayEducation() {
	$('#education').append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace('%data%', education.name);
	$('.education-entry:last').append(formattedSchoolName);

	var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.graduationYear);
	$('.education-entry:last').append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schoolCity);
	$('.education-entry:last').append(formattedSchoolLocation);

	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.majors);
	$('.education-entry:last').append(formattedSchoolMajor);

}
displayEducation();

//Map at bottom
$('#mapDiv').append(googleMap);


//Click Tracking
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


// function inName(fullName) {	
// 	fullName = fullName.trim().split(" ");
// 	var lastName = fullName[1].toUpperCase();
// 	var firstName = fullName[0].slice(0,1).toUpperCase() + fullName[0].slice(1).toLowerCase();
// 	var revisedName = firstName + " " + lastName;
// 	return revisedName;
// }
// $('#main').append(internationalizeButton);
// $('button').click(function(){
// 	console.log(inName(formattedName));
// });

