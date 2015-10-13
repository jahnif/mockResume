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
	"workHistory" : [
	{
		"position" : "Web and Visual Media Strategist",
		"employer" : "Freelancer",
		"city" : "Seattle",
		"dates" : {
			startDate : "September 2012",
			endDate : "November 2014"
		}
	}
	,
	{
		"position" : "Legislative Assistant",
		"employer" : "Washington State Legislature",
		"city" : "Olympia",
		"dates" : {
			startDate : "November 2014",
			endDate : "Present"
		}
	}
	]
}

var education = {
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
}

var projects = {
	projects : [
		{
		title : "Musings",
		dates : {
			startDate : "January 2015",
			endDate : "March 2015"
		},
		description : "My reflections on abstract art",
		images : {
			pic1 : "images/abstractFireworks.jpg",
			pic2 : "images/abstractDrip.jpg"
		}
		}
	]
}

var formattedName = HTMLheaderName.replace('%data%','Joseph Peha');
var formattedRole = HTMLheaderRole.replace('%data%','Web Developer');

// var formattedSkills = HTMLskillsStart.replace('%data%', bio.skills);

$('#header').append(formattedName);
$('#header').append(formattedRole);
// $('#header').append(formattedSkills);
if (3 > 2) {
	$('#header').append('foo');
};