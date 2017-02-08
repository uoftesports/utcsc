//helper functions
var currentTab = "#annc";
var currentPage = "#announcements";
function toggleOn(on){
	$(this.currentTab).removeClass("active");
	$(on).addClass("active");
	this.currentTab = on;
}

if(window.location.hash){
	var hash = window.location.hash.substring(1);
	switch(hash){
		case 'teams':
			toggleOn("#int");
			$("#teamers").fadeIn();
			this.currentTab = "#int";
			this.currentPage = "#teamers";
			break;
		case 'schedule':
			toggleOn("#int");
			$("#schedulers").fadeIn();
			this.currentTab = "#int";
			this.currentPage = "#schedulers";
			break;
		case 'standings':
			toggleOn("#int");
			$("#standers").fadeIn();
			this.currentTab = "#int";
			this.currentPage = "#standers";
			break;
		case 'csl':
			toggleOn("#csl");
			$("#csle").fadeIn();
			this.currentTab = "#csl";
			this.currentPage = "#csle";
			break;
		case 'events':
			toggleOn("#events");
			$("#eventers").fadeIn();
			this.currentTab = "#events";
			this.currentPage = "#eventers";
			break;
		case 'staff':
			toggleOn("#staff");
			$("#staffers").fadeIn();
			this.currentTab = "#staff";
			this.currentPage = "#staffers";
			break;
	}
}else{
	//default
	$("#announcements").fadeIn();
	this.currentTab = "#annc";
	this.currentPage = "#announcements";;
}


$("#annc").on('click touchstart', function(){onAnnouncements();});
$("#teams").on('click touchstart', function(){onTeams()});
$("#sched").on('click touchstart', function(){onSchedule()});
$("#standings").on('click touchstart', function(){onStandings()});
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
	$(this.currentPage).fadeOut();
	$("#schedulers").fadeIn();
	this.currentPage = "#schedulers";
}

function onStandings(){
	toggleOn("#int");
	$(this.currentPage).fadeOut();
	$("#standers").fadeIn();
	this.currentPage = "#standers";
}

//CSL
function onCSL(){
	toggleOn("#csl");
	$(this.currentPage).fadeOut();
	$("#csle").fadeIn();
	this.currentPage = "#csle";
}

//EVENTS
function onEvents(){
	toggleOn("#events");
	$(this.currentPage).fadeOut();
	$("#eventers").fadeIn();
	this.currentPage = "#eventers";
}

//STAFF
function onStaff(){
	toggleOn("#staff");
	$(this.currentPage).fadeOut();
	$("#staffers").fadeIn();
	this.currentPage = "#staffers";
}
