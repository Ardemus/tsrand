allCards=new Array();
var dungeonListHTML="";
var villageListHTML="";
var cardListHTML="";
for (var i=0; i<cardTypes.length; i++) {
	var type=cardTypes[i];
	if (type.side=="Dungeon")
		dungeonListHTML += '<ul id="'+type.cssId+'List" class="cardList dungeon"></ul>';
	else
		villageListHTML += '<ul id="'+type.cssId+'List" class="cardList village"></ul>';
	cardListHTML += Render.cardList(type);
}
document.getElementById("dungeonTypes").innerHTML = dungeonListHTML;
document.getElementById("villageTypes").innerHTML = villageListHTML;
document.getElementById("filterSetList").innerHTML = Render.setList();
document.getElementById("filterCardList").innerHTML = cardListHTML;

Options.restoreOptions();
Util.localizeUI();