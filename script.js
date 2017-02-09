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
		case 'sched':
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
		case 'stats':
			toggleOn("#int");
			$("#staters").fadeIn();
			this.currentTab = "#int";
			this.currentPage = "#staters";
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
		case 'history':
			toggleOn("#int");
			$("#matchhistory").fadeIn();
			this.currentTab = "#int";
			this.currentPage = "#matchhistory";
			break;
	}
}else{
	//default
	$("#announcements").fadeIn();
	this.currentTab = "#annc";
	this.currentPage = "#announcements";;
}


$("#annc").on('click touchstart', function(){openTab("#annc", "#announcements")});
$("#teams").on('click touchstart', function(){openTab("#int", "#teamers")});
$("#sched").on('click touchstart', function(){openTab("#int", "#schedulers")});
$("#standings").on('click touchstart', function(){openTab("#int", "#standers")});
$("#stats").on('click touchstart', function(){openTab("#int", "#staters")});
$("#csl").on('click touchstart', function(){openTab("#csl", "#csle")});
$("#events").on('click touchstart', function(){openTab("#events", "#eventers")});
$("#staff").on('click touchstart', function(){openTab("#staff", "#staffers")});
$("#history").on('click touchstart', function(){openTab("#int", "#matchhistory")});


function openTab(tab, page){
	toggleOn(tab);
	$(this.currentPage).fadeOut();
	setTimeout(function(){
		$(page).fadeIn();
	}, 400);
	this.currentPage = page;

}
