// $('#main').append('Joseph');
// var awesomeThoughts = "I am Joseph and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME','FUN');
// $('body').append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%",'Joseph Peha');
var formattedRole = HTMLheaderRole.replace('%data%','Web Developer');
$('#header').append(formattedName);
$('#header').append(formattedRole);

var skills = ["graphic design", "javascript", "css", "HTML"];

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
	"skills" : skills,
	"welcome" : "Welcome to my resume!",
	"bioPic" : "http://images-cdn.moviepilot.com/image/upload/c_fill,h_281,w_500/t_mp_quality_gif/7-reasons-why-rick-and-morty-is-one-of-the-best-animated-shows-in-history-15f017a0-fbd7-450e-8f70-e1d7ff30d56a-gif-293719.jpg"
}

var work = {
	"position" : "Web and Visual Media Strategist",
	"employer" : "Freelancer",
	"city" : "Seattle"
}

var education = {
	"name" : "University of Hard Knocks",
	"yearsAttended" : 4,
	"schoolCity" : "Denver"
}

$('#main').append(bio.contacts.email).append("<br>");
$('#main').append(work["position"]).append("<br>").append(education.name);