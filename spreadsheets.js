var spreadUrl = 'https://docs.google.com/spreadsheets/d/1QFc4x29icCE_kbutA8WIkYTHrrZiTzHNZSfZT2RS0FY/pubhtml';

function init(){
	Tabletop.init( {key: spreadUrl,
					callback: showInfo})
}

function showInfo(data, tabletop){
	console.log(data);

	//teams
	for (var i = 0; i < data.Sheet1.elements.length; i++){
		var obj = data.Sheet1.elements[i];
		var toAdd = '<tr>';
		for (var key in obj){
			var attrName = key;
			var attrValue = obj[key];
			if (attrName.includes("Name") || attrName.includes("ID") || attrName.includes("Rank") || attrName.includes("Team") || attrName.includes("Campus")){
				toAdd += '<td>' + attrValue + '</td>';
			}
		}
		toAdd += '</tr>';
		
		if ((i+1) % 5 === 0){ //breaks
			toAdd += '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
		}
		document.getElementById("teamtable").innerHTML += toAdd;
	}

	//standings
	for (var i = 0; i < data.Sheet2.elements.length; i++){
		var obj = data.Sheet2.elements[i];
		var toAdd = '<tr>';
		for (var key in obj){
			var attrValue = obj[key];
			toAdd += '<td>' + attrValue + '</td>';
		}
		toAdd += '</tr>';
		document.getElementById("standtable").innerHTML += toAdd;
	}

	//schedule
	for (var i = 0; i < data.Sheet3.elements.length; i++){
		var obj = data.Sheet3.elements[i];
		var toAdd = '<tr>'
		for (var key in obj){
			if (i < 3){
				toAdd += '<td style="background-color:rgba(255, 0,29, 0.1)">' + obj[key] + '</td>'
			}else if (i >= 3 && i < 6) {
				toAdd += '<td style="background-color:rgba(0, 255, 72, 0.1)">' + obj[key] + '</td>'
			}else{
				toAdd += '<td>' + obj[key] + '</td>'
			}
			
		}
		toAdd += '</tr>';
		
		if ((i+1) % 3 === 0){ //breaks
			toAdd += '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
		}
		document.getElementById("schbody").innerHTML += toAdd;	
	}

	//stats
	for (var i = 0; i < data.Sheet5.elements.length; i++){
		var obj = data.Sheet5.elements[i];
		var toAdd = '<tr>'
		for (var key in obj){
			var attrValue = obj[key];
			if (!key.includes("SteamID")){
				toAdd += '<td>' + attrValue + '</td>';
			}
		}
		toAdd += '</tr>'

		if ((i+1) % 5 === 0){ //breaks
			toAdd += '<tr><td></td><td></td><td></td><td><td></td><td></td></td><td></td><td></td><td></td><td></td></tr>';
		}
		document.getElementById("statstable").innerHTML += toAdd;
	}

	//top stats
	for (var i = 0; i < data.Sheet6.elements.length; i++){
		var obj = data.Sheet6.elements[i];
		for (var key in obj){
			var attrValue = obj[key];
			if (key.includes("Kills")){
				document.getElementById("mostkills").innerHTML += attrValue + " ";
			}else if (key.includes("K/D")){
				document.getElementById("highestkd").innerHTML += attrValue + " ";
			}else if (key.includes("KPR")){
				document.getElementById("highestkpr").innerHTML += attrValue + " ";
			}else if (key.includes("Assists")){
				document.getElementById("mostassists").innerHTML += attrValue + " ";
			}else if (key.includes("%")){
				document.getElementById("highesths").innerHTML += attrValue + " ";
			}else if (key.includes("Deaths")){
				document.getElementById("mostdeaths").innerHTML += attrValue + " ";
			}
		}
	}
}

window.addEventListener('DOMContentLoaded', init);