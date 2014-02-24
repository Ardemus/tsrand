//Check if cache is updated, swap cache and reload if so.
if (window.applicationCache) {
	window.applicationCache.addEventListener('updateready', Util.onUpdateReady);  
	if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {  
	  Util.onUpdateReady();
	}
}



//Set language
var local;
var language = $.cookie("language") || "us";
if (language && LANG[language]) {
	local = {};
	for (var key in LANG.us) {
		local[key] = LANG[language][key] || LANG.us[key];
	}
}

//Used to determine whether a hero is 'strong.' Based on level 1 hero.
var heroStrengthThreshold=5;

var soloGame=false;

//		cardType(name, 				min,max,minDef,maxDef, side)
var cardTypes = [
	new CardType(local.Setting,			0,	7,	0,	1, "Dungeon"),
	new	CardType(local.Thunderstone,	1,	5,	1,	1, "Dungeon"),
	new	CardType(local.Monster,			1,	6,	3,	3, "Dungeon"),
	new CardType(local.Disease,			1,	1,	1,	1, "Dungeon"),
	new	CardType(local.Guardian,		0,	5,	0,	1, "Dungeon"),
	new	CardType(local.Trap,			0,	3,	0,	1, "Dungeon"),
	new	CardType(local.Treasure,		0,	3,	0,	1, "Dungeon"),
	new	CardType(local.Hero,			2,	8,	4,	4, "Village"),
	new	CardType(local.Village,			4,	12,	8,	8, "Village")
];

//Card type indices
var SETTING =		0,
	THUNDERSTONE =	1,
	MONSTER =		2,
	DISEASE =		3,
	GUARDIAN =		4,
	TRAP = 			5,
	TREASURE =		6,
	HERO =			7,
	VILLAGE =		8;

var cards=new Array();
for (var i=0; i<cardTypes.length; i++)
	cards[cardTypes[i].name]=new Array();

//Sets
var set={
	base: new Set(local.Base, "Base", "B", false),
	caverns: new Set(local.Caverns_of_Bane, "CavernsOfBane", "CB", true),
	doom: new Set(local.Doomgate_Legion, "DoomgateLegion", "DL", false),
	dragonspire: new Set(local.Dragonspire, "Dragonspire", "DS", false),
	heart: new Set(local.Heart_of_Doom, "HeartOfDoom", "HD", false),
	numenera: new Set(local.Numenera, "Numenera", "N", true),
	promo: new Set(local.Promo, "Promo", "P", false),
	root: new Set(local.Root_of_Corruption, "RootofCorruption", "RC", true),
    starter: new Set(local.Starter_Set, "StarterSet", "S", true),
	thorn: new Set(local.Thornwood_Siege, "ThornwoodSiege", "TS", false),
	towers: new Set(local.Towers_of_Ruin, "TowersOfRuin", "TR", true),
	wrath: new Set(local.Wrath_Of_The_Elements, "WrathOfTheElements", "WE", false)
};

var decks=new Array();

var listSets=new Array();

//iOS label fix
//via http://www.thewatchmakerproject.com/blog/how-to-fix-the-broken-ipad-form-label-click-issue/
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
	$(document).ready(function () {
		$('label[for]').click(function () {
			var el = $(this).attr('for');
			if ($('#' + el + '[type=radio], #' + el + '[type=checkbox]').attr('selected', !$('#' + el).attr('selected'))) {
				return;
			} else {
				$('#' + el)[0].focus();
			}
		});
	});
}

//Enables the yes/no/maybe tri-state boxes
$(document).ready(function() {
	$(".YesNoMaybe").click(function(event) {
		event.preventDefault();
		var id = $(this).attr('for');
		var select=$("#"+id);
		var label=$("label[for='"+id+"']");
		var val=select.val();
		select.parent().removeClass("disabled");
		label.removeClass("required");
		//alert(val);
		if (val=="Yes") {
			select.val("Maybe");
		} else if (val=="No") {
			select.val("Yes");
			label.addClass("required");
		} else {
			select.val("No");
			select.parent().addClass("disabled");
		}
		Options.saveOptions();
	})
});

//Disable text selection on elements with class noSelect
//Via http://chris-barr.com/entry/disable_text_selection_with_jquery/
$(function(){
	$.extend($.fn.disableTextSelect = function() {
		return this.each(function(){
/*
			if($.browser.mozilla){//Firefox
				$(this).css('MozUserSelect','none');
			}else if($.browser.msie){//IE
				$(this).bind('selectstart',function(){return false;});
			}else{//Opera, etc.
				$(this).mousedown(function(){return false;});
			}
*/
		});
	});
	$('.noSelect').disableTextSelect();//No text selection on elements with a class of 'noSelect'
});

//Set sizing
$(document).ready(function() {
	Util.resize();
});
$(window).resize(function(){
	Util.resize();
});

$(window).unload(function() {
  Options.saveOptions();
});
