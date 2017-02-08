
//helper functions
var currentTab = "#annc";
var currentPage = "#announcements";
function toggleOn(on){
	$(this.currentTab).removeClass("active");
	$(on).addClass("active");
	this.currentTab = on;
}


$("#annc").on('click touchstart', function(){onAnnouncements();});
$("#teams").on('click touchstart', function(){onTeams()});
$("#sched").on('click touchstart', function(){onSchedule()});
$("#csl").on('click touchstart', function(){onCSL()});
$("#events").on('click touchstart', function(){onEvents()});
$("#staff").on('click touchstart', function(){onStaff()});



//announcements
function onAnnouncements(){
	toggleOn("#annc");
	$(this.currentPage).fadeOut();
	$("#announcements").fadeIn();
	this.currentPage = "#announcements";
	//toggle jekyll form
}

//intramurals
function onTeams(){
	toggleOn("#int");
	$(this.currentPage).fadeOut();
	$("#teamers").fadeIn();
	this.currentPage = "#teamers";
}

function onSchedule(){
	toggleOn("#int");
	//show jekyll form?
}

function onStandings(){
	toggleOn("#int");
	//show simple html/sql form
}

//CSL
function onCSL(){
	toggleOn("#csl");
	//toggle csl html/css
}

//EVENTS
function onEvents(){
	toggleOn("#events");
	//show jekyll form?
}

//STAFF
function onStaff(){
	toggleOn("#staff");
	//toggle simple html
}
