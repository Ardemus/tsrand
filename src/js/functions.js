var Controls = {
	getClickEvent: function (input) {
		if (input.cssClass) {
			return 'Controls.setClicked("'+input.cssId+'")';
		} else {
			return 'cardClicked("'+input.cssId+'")';
		}
	},

	getNumericBoxes: function (type) {
		var minAdjustCall='Util.adjust("min", "'+type.minId+'", "'+type.maxId+'");';
		var maxAdjustCall='Util.adjust("max", "'+type.minId+'", "'+type.maxId+'");';
		var minHTML="<select id='"+type.minId+"' onchange='Util.adjust(\"min\", \""+type.minId+"\", \""+type.maxId+"\");'>";
		var maxHTML="<select id='"+type.maxId+"' onchange='Util.adjust(\"max\", \""+type.minId+"\", \""+type.maxId+"\");'>";
		for (var i=type.min; i<=type.max; i++) {
			var minSelected = "";
			var maxSelected = "";
			if (i == type.minDef) {
				minSelected = 'selected="selected"';
			}
			if (i == type.maxDef) {
				maxSelected = 'selected="selected"';
			}
			minHTML+="<option value='"+i+"' "+minSelected+">"+i+"</option>"
			maxHTML+="<option value='"+i+"' "+maxSelected+">"+i+"</option>"
		}
		minHTML+='</select></span>';
		maxHTML+='</select></span>';
		return minHTML+' - '+maxHTML;
	},

	/*getYesNoMaybeBox: function (id) {
		var toReturn='<span class="option"><select id="'+id+'" onchange="Options.saveOptions()">'
			+'<option value="0">No</option>'
			+'<option value=".5">Maybe</option>'
			+'<option value="1" selected="selected">Yes</option></select>'
			+'</span>';
		return toReturn;
	},*/

	setClicked: function (which) {
		setClass=which.substring(3); //Strip the "set" prefix
		if (document.getElementById(which).checked) {
			$(".card."+setClass).show();
			$("#"+which).parent().removeClass("disabled");
		} else {
			$(".card."+setClass).hide();
			$("#"+which).parent().addClass("disabled");
		}
		Controls.setListVisibilities();
		Options.saveOptions();
	},

	setListVisibilities: function () {
		for (var list in listSets) {
			var listId=list;
			if (document.getElementById(listId)) {
				var show=false;
				for (var set in listSets[list]) {
					var setId=set;
					show |= document.getElementById(setId).checked
				}
				if (show) {
					$("#"+listId).removeClass("hidden");
				} else {
					$("#"+listId).addClass("hidden");
				}
			}
		}
	},

	styleCard: function (which) {
		var select=$("#"+which);
		var label=$("label[for='"+which+"']");
		var val=select.val();
		select.parent().removeClass("disabled");
		label.removeClass("required");
		if (val=="No") {
			select.parent().addClass("disabled");
		} else if (val=="Yes") {
			label.addClass("required");
		}
	},

	toggleCodes: function () {
		if (document.getElementById("showCode").checked) {
			Util.getStyle(".setCode").style.display = "inline";
		} else {
			Util.getStyle(".setCode").style.display = "none";
		}
		Options.saveOptions();
	},

	toggleLevels: function () {
		if (document.getElementById("monsterLevels").checked) {
			Util.getStyle(".level").style.display = "inline";
		} else {
			Util.getStyle(".level").style.display = "none";
		}
		Options.saveOptions();
	},

	/*toggleLog: function () {
		if (document.getElementById("showLog").checked) {
			$("#log").removeClass("hidden");
		} else {
			$("#log").addClass("hidden");
		}
		Options.saveOptions();
	}*/
};

var Game = {
	getGameSet: function () {
		//document.getElementById("log").value="";
		Options.getOptions();
		gameSet=new GameSet();
		gameSet.villageLimits = $("#villageLimits")[0].checked;
		Util.buildDecks();
		var gameRequirements=new Array();
		//Setup game requirements and get requirements from pre-selected cards
		for (var i = cardTypes.length -1; i >= 0; i -= 1) { //Doing this loop backwards because earlier card types depend on later requirements being defined
			gameRequirements[cardTypes[i].name]=new GameRequirements()
			var deck = gameSet.decks[cardTypes[i].name];
			for (var j = 0; j < deck.length; j += 1) {
				var card = deck[j];
				for (var k=0; card.requirements && k<card.requirements.length; k++) {
					var req = card.requirements[k];
					gameRequirements[req.type].add(req);
				}
			}
		}
		if ($("#monsterLevels")[0].checked) {
			gameRequirements[local.Monster].add(new Requirement(req_monster_level_1));
			gameRequirements[local.Monster].add(new Requirement(req_monster_level_2));
			gameRequirements[local.Monster].add(new Requirement(req_monster_level_3));
		}
		//Check which requirements are filled by pre-selected cards
		for (var i = 0; i < cardTypes.length; i += 1) {
			var type = cardTypes[i];
			var gameReqs = gameRequirements[type.name];
			var deck = gameSet.decks[type.name];
			for (var j = 0; j < deck.length; j += 1) {
				var card = deck[j];
				gameReqs.match(card);
			}
		}
		//Pick board side
		/*if ($("#randomBoard")[0].checked) {
			if (Math.random() < .5) {
				gameSet.board = { name: local.Wilderness, set: set.towers };
			} else {
				gameSet.board = { name: local.Dungeon, set: set.towers };
			}
		}*/
		
		//Pick remaining card types
		for (var i=0; i<cardTypes.length; i++) {
			var type=cardTypes[i];
			var deck=gameSet.decks[type.name];
			var gameReqs=gameRequirements[type.name];
			for (var j=0; deck.length<type.count && j<decks[type.name].length; j++) {
				var card = cards[type.name][decks[type.name][j]];
				if (!gameSet.roomFor(card)) {
					Util.log(card + " discarded because of village type limits");
					continue;
				}
				var keep = (gameReqs.count() === 0); //(j+gameReqs.count() < type.count); //False if not enough "free" slots left
				keep = (gameReqs.match(card) || keep); //True if the card matches a requirement. Note that we evaluate match is true before checking if keep is already true!
				keep = (keep||decks[type.name].length-j <= type.count-deck.length); //True if we're running out of cards
				if (keep) {
					deck.push(card);
					gameSet.incrementCount(card);
					for (var k=0; card.requirements && k<card.requirements.length; k++) {
						var req = card.requirements[k];
						gameRequirements[req.type].add(req);
					}
					if (card.execute) {
						card.execute();
					} 
				} else {
					Util.log(card + " discarded due to lack of space");
				}
			}
			deck.sort();
			if (gameReqs.count() > 0) {
				Util.log(type.name+" requirements:");
				Options.indent++;
				for (var j=0; j<gameReqs.reqs.length; j++) {
					var req = gameReqs.reqs[j];
					Util.log(req+" required "+req.qty+" more");
				}
				Options.indent--;
			}
		}
		//Util.log(gameRequirements);
		return gameSet;
	},

	quickd6: function () {
		var gameSets = [];
		for (var i = 0; i < 6; i += 1) {
			gameSets[i] = Game.getGameSet();
		}
		var outputWindow = window.open("", "quickd6", ""/*"height=400,width=600,location=0,menubar=0,status=0,toolbar=0"*/);
		
		var out = "<html><head><title>Thundermaster " + local.QuickD6 + "</title></head><body><center><table><tr>";
		for (var i = 0; i < 6; i += 1) {
			gs = gameSets[i];
			out += ("<td style='vertical-align:top;padding:10px;font-size:.8em;border:1px solid black;'>");
			out += ("<center><h1>" + (i + 1) + "</h1></center>");
			for (var j = 0; j < cardTypes.length; j++) {
				var type = cardTypes[j];
				var deck = gs.decks[type];
				if (deck.length > 0) {
					out += ("<div style='font-weight:bold;font-size:1.2em'>" + type + "</div>");
					for (var k = 0; k <deck.length; k++) {
						var card = deck[k],
							lvl = "";
						if (type === cardTypes[MONSTER] && $("#monsterLevels")[0].checked) {
							lvl = " Lvl " + card.level + " ";
						}
						out += ("<div style='margin-left:10px'>" + card.name + " <span style='font-style:italic;font-size:.6em;'>" + lvl + "(" + card.set.code + ")</span></div>");
					}
				}
			}
			/*if (gs.useSpecialDiseases) {
				out += ("<div style='font-weight:bold;font-size:1.2em'>Use Special Diseases</div>");
			}*/
			out += ("</td>");
		}
		outputWindow.document.write(out);
		outputWindow.document.close();
	},

	randomize: function () {
		var gameSet=Game.getGameSet();

		for (var i=0; i<cardTypes.length; i++) {
			var type = cardTypes[i];
			var deck = gameSet.decks[type.name];
			var listId = "#"+type.cssId+"List"
			var list = document.getElementById(type.cssId+"List");
			if (deck.length>0) {
				$(listId).removeClass("hidden");
				list.innerHTML="<li class='listHeader'>"+type.name+"</li>";
				for (var j=0; j<deck.length; j++) {
					var card = deck[j];
					var level = "";
					if (card.level) {
						level = "<span class='level'> Lvl " + card.level + "</span>";
					}
					list.innerHTML += "<li class='gameCard  " + card.set.cssClass + "'>" + card.name + level + "<span class='setCode'> "+card.set.code+"</span></li>";
				}
			} else
				$(listId).addClass("hidden");
		}
		document.getElementById("dungeonTypes").style.display = "block";
		document.getElementById("villageTypes").style.display = "block";
	}
};

var Options = {
	cookieName: "tsrandOptions",
	enableSaving: true,
	indent: 0,

	getOptions: function () {
		soloGame=document.getElementById("soloGame").checked;
		for (var i=0; i<cardTypes.length; i++) {
			var type = cardTypes[i];
			var min = document.getElementById(type.minId).value;
			var max = document.getElementById(type.maxId).value;
			if (min == max) {
				type.count = min;
			} else {
				if (min > max) {
					min ^= max; max ^= min; min ^= max; //XOR swap values
				}
				var range = max - min + 1; //Increase range by 1. E.g. 2-4 should have range 3, because you want 2 + (0, 1 or 2)
				var rand = Math.floor(Math.random()*range);
				type.count = rand*1 + min*1;
			}
		}
	},

	restoreOptions: function () {
		Util.log("Restoring cookie")
		Options.indent++;
		cookie=$.cookie(Options.cookieName);
		if (window.location.search.match(/config=/)) {
			cookie = decodeURIComponent(window.location.search.match(/config=([^&]*)/)[1]);
			$.cookie(Options.cookieName, cookie, { expires: 365 });
			if (window.history && history.pushState) {
				window.history.pushState({}, "", "."); //Try to clear the search without reloading the page
			} else {
				document.location.search = ""; //Clear the search and reload the page
			}
		}
		Util.log("Cookie loaded: "+cookie);
		if (cookie) {
			opt=JSON.parse(cookie);
			for (var id in opt) {
				Util.log("Loaded: "+id+" = "+opt[id]);
				if (document.getElementById(id)) {
					element=document.getElementById(id);
					if (opt[id].indexOf("chk")==0) {
						element.checked=(opt[id]=="chk:true");
					} else {
						element.value=opt[id];
					}
				}
			}
		}
		Options.indent--;
		for (var i in set) {
			Controls.setClicked(set[i].cssId);
		}
		for (var i=0; i<cardTypes.length; i++) {
			var type = cardTypes[i];
			var deck = cards[type.name];
			for (var j=0; j<deck.length; j++) {
				Controls.styleCard(deck[j].cssId);
			}
		}
		Controls.toggleCodes();
		Controls.toggleLevels();
		//Controls.toggleLog();
		$("#optionsFilterList input").each(function (i, el) {
			Controls.setClicked(el.id);
		});
		Options.enableSaving=true;
	},

	saveOptions: function () {
		//Small delay to make sure checkboxes have changed
		setTimeout(function () {
			//document.getElementById("log").value="";
			if (!Options.enableSaving) {
				return false;
			}
			Util.log("Saving cookie")
			var opt={}
			function save(id, def) {
				var formElement=document.getElementById(id);
				if (formElement) {
					if (formElement.type=="checkbox") {
						if (formElement.checked != def) {
							opt[id]="chk:"+formElement.checked;
						}
					}
					else if (formElement.value != def) {
						opt[id]=formElement.value;
					}
				}
			}
			save("soloGame", false);
			//save("showLog", false);
			save("showCode", true);
			//save("randomBoard", false);
			save("villageLimits", false);
			save("monsterLevels", true);
			for (var key in set) {
				var s = set[key];
				var id = s.cssId;
				save(id, true);
			}
			for (var i in cardTypes) {
				var type = cardTypes[i];
				save(type.minId, type.minDef);
				save(type.maxId, type.maxDef);
				for (var j in cards[type.name]) {
					var id=cards[type.name][j].cssId;
					save(id, "Maybe");
				}
			}
			Options.indent++;
			for (i in opt) {
				Util.log(i+": "+opt[i]);
			}
			Options.indent--;
			cookie=JSON.stringify(opt)
			Util.log("Cookie: "+cookie);
			$.cookie(Options.cookieName, cookie, { expires: 365 });
		},10);
		document.getElementById("shareConfig").style.display = "none";
		document.getElementById("shareConfigButton").style.display = "block";
	}
};

var Render = {
	cardList: function (type) {
		listSets[type.cssId]=new Array();
		var toReturn="<li class='listHeader' id='"+type.cssId+"'>"+type.name+" <span class='typeOptions'>";
		toReturn += Controls.getNumericBoxes(type);
		toReturn += "</span></li>";
		cards[type.name].sort(function (a, b) {
			return a.name > b.name ? 1 : -1;
		});
		for (var i=0; i<cards[type.name].length; i++) {
			var card = cards[type.name][i];
			var set = card.set.cssId;
			var c = card.cssClass;
			var id = card.cssId;
			listSets[type.cssId][set]=true;
			toReturn += "<li class='"+c+" button noSelect'><select id='"+id+"' onchange='Options.saveOptions()' checked='checked'><option value='No'>No</option><option value='Maybe' selected='selected'>Maybe</option><option value='Yes'>Yes</option></select><label for='"+id+"' class='YesNoMaybe'>"+card+"<span class='setCode'> "+card.set.code+"</span></label></li>";
		}
		return toReturn;
	},

	setList: function () {
		var toReturn, key, s, c, id;
		toReturn="<li class='listHeader' id='listHeaderSet'>"+ local.Set +"</li>";
		toReturn+="<li class='setTypeHeader'>" + local.Thunderstone_Advance + "</li>";
		for (key in set) {
			s = set[key];
			if (!s.advance) {
				continue;
			}
			c = s.cssClass;
			id = s.cssId;
			toReturn += "<li class='" + c + " button noSelect'><input type='checkbox' id='" + id + "' onclick='" + Controls.getClickEvent(s) + "' checked='checked'><label for='"+id+"'>"+s+"<span class='setCode'> "+s.code+"</span></label></li>";
		}
		toReturn+="<li class='setTypeHeader'>" + local.Thunderstone + "</li>";
		for (key in set) {
			s = set[key];
			if (s.advance) {
				continue;
			}
			s = set[key];
			c = s.cssClass;
			id = s.cssId;
			toReturn += "<li class='" + c + " button noSelect'><input type='checkbox' id='" + id + "' onclick='" + Controls.getClickEvent(s) + "' checked='checked'><label for='"+id+"'>"+s+"<span class='setCode'> "+s.code+"</span></label></li>";
		}
		return toReturn;
	}
};

var Util = {
	shortUrls: [],
	
	adjust: function (how, minId, maxId) {
		var min = document.getElementById(minId);
		var max = document.getElementById(maxId);
		if (min.value > max.value) {
			if (how == "min") {
				max.value=min.value;
			} else {
				min.value=max.value;
			}
		}
		Options.saveOptions();
	},

	buildDeck: function (type) {
		var toReturn=new Array();
		var source = cards[type.name];
		for (var i=0; i<source.length; i++) {
			if (Util.validate(source[i])) {
				toReturn[toReturn.length]=i;
			}
		}
		Util.fisherYates(toReturn);
		return toReturn;
	},

	buildDecks: function () {
		for (var i=0; i<cardTypes.length; i++) {
			var type=cardTypes[i];
			decks[type.name]=Util.buildDeck(type);
		}
	},

	cardRequired: function (which) {
		var id=which.cssId;
		return $("#"+id).val()=="Yes"
	},

	clone: function (obj) {
		//Clone object
		//Via http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone
		if (obj == null || typeof(obj) != 'object') {
			return obj;
		}
		var temp = new obj.constructor(); // changed (twice)
		for(var key in obj) {
			temp[key] = Util.clone(obj[key]);
		}
		return temp;
	},

	fisherYates: function ( myArray ) {
		//Fisher-Yates shuffle
		//Via http://sedition.com/perl/javascript-fy.html
	  var i = myArray.length;
	  if ( i == 0 ) { return false; }
	  while ( --i ) {
		 var j = Math.floor( Math.random() * ( i + 1 ) );
		 var tempi = myArray[i];
		 var tempj = myArray[j];
		 myArray[i] = tempj;
		 myArray[j] = tempi;
	   }
	},
	
	getConfigUrl: function () {
		var protocol = document.location.protocol,
			host = document.location.host,
			path = document.location.pathname,
			config = encodeURIComponent($.cookie(Options.cookieName));
		
		return protocol + "//" + host + path + "?config=" + config;
	},
	
	getStyle: function (which) {
		var styleSheet = document.styleSheets[0];
		var rules = styleSheet.cssRules;
		if (styleSheet.rules)
			rules = styleSheet.rules;
		for (var i in rules) {
			if (rules[i].selectorText === which)
				return rules[i];
		}
	},
	
	getQRCodeUrl: function (url, size) {
		//http://chart.apis.google.com/chart?cht=qr&chs=500x500&choe=UTF-8&chld=H&chl=http%3A%2F%2Fwww.asmor.com
		if (!size) {
			size = "150x150";
		}
		target = encodeURIComponent(url);
		return "http://chart.apis.google.com/chart?cht=qr&chs=" + size + "&choe=UTF-8&chld=H&chl=" + target;
	},

	isAppropriateForSinglePlayer: function (card) {
		return !card.removesMonstersFromHall;
	},

	localizeUI: function () {
		document.getElementById("randomizeButton").innerHTML=local.Randomize;
		document.getElementById("quickd6Button").innerHTML=local.QuickD6;
		document.getElementById("showCodeLabel").innerHTML=local.ShowCode;
		//document.getElementById("randomBoardText").innerHTML=local.RandomBoard;
		document.getElementById("villageLimitsLabel").innerHTML=local.VillageLimits;
		document.getElementById("soloGameLabel").innerHTML=local.Solo_Game;
		//document.getElementById("showLogLabel").innerHTML=local.Show_Debug_Information;
		document.getElementById("instructions").innerHTML=local.Instructions;
		document.getElementById("requiredKeyLabel").innerHTML=local.Required;
		document.getElementById("allowedKey").innerHTML=local.Allowed;
		document.getElementById("disallowedKey").innerHTML=local.Disallowed;
		/*document.getElementById("diseaseSelectIfRequired").innerHTML=local.If_Required;
		document.getElementById("diseaseSelectMaybe").innerHTML=local.Maybe;
		document.getElementById("diseaseSelectYes").innerHTML=local.Yes;*/
		document.getElementById("selectedLanguage").src="images/flag/"+language+".png";
	},

	log: function (s) {
		// return false;
		/*if (document.getElementById("showLog").checked) {
			for (logi=0; logi<Options.indent; logi++) {
				document.getElementById("log").value+="\t";
			}
			document.getElementById("log").value+=s+"\n";
		}*/
		if (window.console && console.log) {
			console.log(s);
		}
	},

	onUpdateReady: function () {
		window.applicationCache.swapCache();
		if (confirm('A new version of Thundermaster is available. Load it?')) {
			window.location.reload();
		}
	},
	
	resize: function () {
		width=$("body").width();
		margins=6; //3px margin on each side
		//Note minWidth also needs to be set in the CSS!
		minWidth=320; //minimum width *per column* required before it can be side-by-side
		maxWidth=639+margins;
		if (width>minWidth*2) {
			//Render each at half-width, side-by-side
			$(".container").width(width/2-margins+"px");
			$("#spacerTop").width(Math.max(0, width/2-maxWidth)+"px");
			$("#spacerBottom").hide();
		} else {
			$(".container, #log").width(width-margins+"px");
			spacerWidth = (width-maxWidth)/2;
			$("#spacerTop").width(Math.max(0, spacerWidth)+"px");
			$("#spacerBottom").show().width(Math.max(0, spacerWidth)+"px");
		}
	},

	setLanguage: function (l) {
		$.cookie("language", l, { expires: 365 });
		window.location.reload();
	},

	shareConfig: function () {
		var url = Util.getConfigUrl();
		document.getElementById("shareConfigButton").style.display = "none";
		Util.shorten(url, Util.shareConfigDisplay);
	},
	
	shareConfigDisplay: function (response) {
		if (response.status_code === 200) {
			var shortUrl = response.data.url;
			document.getElementById("shareConfigQR").src = shortUrl + ".qrcode";
			document.getElementById("shareConfigBox").value = shortUrl;
			document.getElementById("shareConfig").style.display = "block";
		}
	},
	
	shorten: function (url, callback) {
		var api_key = "R_693d31ce6d7ae3a4eec10c44b82f0302",
			api_login = "asmor",
			api_url = "api.bit.ly",
			wait = "Request sent...";
		if (!Util.shortUrls[url]) {
			Util.shortUrls[url] = wait;
			$.getJSON("http://"+api_url+"/v3/shorten?longUrl="+encodeURIComponent(url)+"&login="+api_login+"&apiKey="+api_key+"&callback=?", Util.shortenCallbackWrapper(url, callback));
		} else if (Util.shortURLs[url] !== wait) {
			callback(Util.shortURLs[url]);
		}
	},
	
	shortenCallbackWrapper: function (url, callback) {
		return function (response) {
			if (response.status_code === 200) {
				Util.shortUrls[url] = response;
			} else {
				Util.shortUrls[url] = null;
			}
			callback(response);
		}
	},
	
	strip: function (input) {
		var invalidChars=/[^-A-Za-z0-9-_.]/g;
		return input.replace(invalidChars,'');
	},

	validate: function (card) {
		var toReturn = ((document.getElementById(card.cssId).value=="Maybe")
			&& (document.getElementById(card.set.cssId).checked));
		toReturn=toReturn&&(!soloGame || Util.isAppropriateForSinglePlayer(card));
		return toReturn;
	}
};

