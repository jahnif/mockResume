// $('#main').append('Joseph');
// var awesomeThoughts = "I am Joseph and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME','FUN');
// $('body').append(funThoughts);

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"email" : "john.doe@fakeemail.com",
		"cell" : "123-456-7890",
		"github" : "jahnif",
		"twitter" : "@justanothertwitteraccount",
		"location" : "Seattle"
	},
	"skills" : ["graphic design", "javascript", "css", "HTML"],
	"welcome" : "Welcome to my resume!",
	"bioPic" : "http://images-cdn.moviepilot.com/image/upload/c_fill,h_281,w_500/t_mp_quality_gif/7-reasons-why-rick-and-morty-is-one-of-the-best-animated-shows-in-history-15f017a0-fbd7-450e-8f70-e1d7ff30d56a-gif-293719.jpg"
}

var work = {
	"jobs" : [
	{
		"position" : "Web and Visual Media Strategist",
		"employer" : "Freelancer",
		"location" : "Seattle",
		"dates" : "November 2014 - Present",
		"duties" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cupiditate, ea harum. Recusandae quia deserunt exercitationem unde consequuntur amet est libero nemo. Asperiores, temporibus, eius."
	},
	{
		"position" : "Legislative Assistant",
		"employer" : "Washington State Legislature",
		"location" : "Olympia",
		"dates" : "September 2012 - November 2014",
		"duties" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fugit, mollitia. Amet optio, deleniti ad, rerum, distinctio ut temporibus ipsum earum adipisci, molestiae maxime dolorum?"
	}
	]
}

var education = [{
    "name": "University of Denver",
    "yearsAttended": 4,
    "schoolCity": "Denver",
    "majors": [
        "International Studies",
        "Spanish",
        "Studio Art"
    ],
    "graduationYear": 2006,
    "url" : "http://www.du.edu/"
}]

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

var formattedName = HTMLheaderName.replace('%data%','Joseph Peha');
var formattedRole = HTMLheaderRole.replace('%data%','Web Developer');

// var formattedSkills = HTMLskillsStart.replace('%data%', bio.skills);

$('#header').append(formattedName);
$('#header').append(formattedRole);

function displayContactInfo() {
	// if ( bio.skills.length > 0 ) {
	// 	$('#header').append(bio.skills);
	// };
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.cell);
	$('#header').append(formattedMobile);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#header').append(formattedEmail);
}

displayContactInfo();

function displayWork() {for( job in work.jobs ) {
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedPosition = HTMLworkTitle.replace('%data%', work.jobs[job].position);
	var formmatedEmployerPosition = formattedEmployer + formattedPosition;
	$('.work-entry:last').append(formmatedEmployerPosition);
	
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

