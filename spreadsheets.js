var spreadUrl = 'https://docs.google.com/spreadsheets/d/1QFc4x29icCE_kbutA8WIkYTHrrZiTzHNZSfZT2RS0FY/pubhtml';

function init(){
	Tabletop.init( {key: spreadUrl,
					callback: showInfo})
}

function showInfo(data, tabletop){
	console.log(data);
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
		
		if ((i+1) % 5 === 0){
			toAdd += '<tr><td></td><td></td><td></td><td></td><td></td></tr>';
		}
		document.getElementById("teamtable").innerHTML += toAdd;
	}

	for (var i = 0; i < data.Sheet2.elements.length; i++){
		var obj = data.Sheet2.elements[i];
		var toAdd = '<tr>';
		for (var key in obj){
			var attrName = key;
			var attrValue = obj[key];
			toAdd += '<td>' + attrValue + '</td>';
		}
		toAdd += '</tr>';
		document.getElementById("standtable").innerHTML += toAdd;
	}
}

window.addEventListener('DOMContentLoaded', init);