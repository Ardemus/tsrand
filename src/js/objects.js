function Card(arg) {
	this.name=arg.name;
	this.set=arg.set;
	this.types=arg.types;
	if (!this.types)
		this.types="";
	this.light=arg.light;
	if (!this.light)
		this.light=false;
	this.strength=arg.strength;
	if (!this.strength)
		this.strength=false;
	this.attack=arg.attack;
	if (!this.attack)
		this.attack=false;
	this.destroysDisease=arg.destroysDisease;
	if (!this.destroysDisease)
		this.destroysDisease=false;
	this.magicAttack=arg.magicAttack;
	if (!this.magicAttack)
		this.magicAttack=false;
	this.removesMonstersFromHall=arg.removesMonstersFromHall;
	if (!this.removesMonstersFromHall)
		this.removesMonstersFromHall=false;
	this.destroysDisease=arg.destroysDisease;
	if (!this.destroysDisease)
		this.destroysDisease=false;
	this.level = arg.level;
	if (!this.level)
		this.level = false;
	this.requirements=arg.requirements;
	if (!this.requirements)
		this.requirements=[];
	this.execute = arg.execute;
	if (!this.execute)
		this.execute=false;
	this.is=function(what){
		if (this.types)
			return (this.types.indexOf(what)!=-1)
		else
			return false;
	}
	this.has=function(what){
		if (this[what])
			return this[what];
		else
			return false;
	}
	this.cssClass="card "+this.set.cssName;
	this.cssId="card"+Util.strip(this.name);
	this.toString=function(){return this.name;};
}

function CardType(name, min, max, minDef, maxDef, side) {
	this.name=name;
	this.cssId="type"+Util.strip(this.name);
	this.minId="min_"+this.cssId;
	this.min=min;
	this.minDef=minDef;
	this.maxId="max_"+this.cssId;
	this.max=max;
	this.maxDef=maxDef;
	this.side=side;
	this.toString=function() {return this.name};
}

function Condition(arg) {
	this.name=arg.name;
	if (!this.name)
		this.name="Condition missing name";
	this.type=arg.type;
	this.match=function(card) {
		if (card)
			return arg.match(card);
		else
			return false;
	}
	if (!this.match)
		this.match=function(){return true}

	this.toString=function(){return this.name;};
}

function GameRequirements() {
	this.reqs=new Array();
	this.add=function(req) {
		var matched=false;
		for (var i=0; i<this.reqs.length; i++) {
			if (this.reqs[i].name==req.name) {
				matched=true;
				this.reqs[i].qty=Math.max(this.reqs[i].qty, req.qty);
			}
		}
		if (!matched)
			this.reqs.push(Util.clone(req));
	}
	this.count=function() {
		var x=0;
		for (var i=0; i<this.reqs.length; i++)
			x+=this.reqs[i].qty;
		return x;
	}
	this.match=function(card) {
		var toReturn=false;
		for (var i=0; i<this.reqs.length; i++)
			if (this.reqs[i].qty>0 && this.reqs[i].match(card)) {
				toReturn=true;
				this.reqs[i].qty--;
				Util.log(card+" matched "+this.reqs[i]+"; "+this.count()+" matches remaining");
			}
		return toReturn;
	}
}

function GameSet() {
	this.decks=[];
	for (var i=0; i<cardTypes.length; i++) {
		var type=cardTypes[i];
		this.decks[type]=[];
		for (var key in cards[type])
			if(Util.cardRequired(cards[type][key])) {
				var card = cards[type][key];
				this.decks[type][this.decks[type].length]=card;
				if (card.execute) {
					card.execute();
				}
			}
	}
	this.toString=function(){
		return "toString not implemented on GameSet yet";
	}
	this.currentWeapons = 0;
	this.currentItems = 0;
	this.currentSpells = 0;
	this.currentVillagers = 0;
	this.villageLimits = false;
	this.limitWeapons = 3;
	this.limitItems = 2;
	this.limitSpells = 3;
	this.limitVillagers = 3;
	this.roomFor = function (card) {
		if (!this.villageLimits) {
			return true;
		}
		//Check items first; there's one item, flask of light, which probably shouldn't take a weapon stack
		if (card.types.match(/Item/)) {
			return this.checkType(this.currentItems, this.limitItems, card);
		} else if (card.types.match(/Weapon/)) {
			return this.checkType(this.currentWeapons, this.limitSpells, card);
		} else if (card.types.match(/Spell/)) {
			return this.checkType(this.currentSpells, this.limitVillagers, card);
		} else if (card.types.match(/Villager/)) {
			return this.checkType(this.currentVillagers, this.limitVillagers, card);
		} else {
			return true;
		}
	}
	this.checkType = function (current, limit, card) {
		if (current < limit) {
			return true;
		} else {
			return false;
		}
	}
	this.incrementCount = function(card) {
		if (card.types.match(/Item/)) {
			this.currentItems += 1;
		} else if (card.types.match(/Weapon/)) {
			this.currentWeapons += 1;
		} else if (card.types.match(/Spell/)) {
			this.currentSpells += 1;
		} else if (card.types.match(/Villager/)) {
			this.currentVillagers += 1;
		}
	}
}

function Requirement(cond, qty) {
	if (cond) {
		this.match=cond.match;
		this.name=cond.name;
		this.type=cond.type;
		this.qty=1;
		if (qty)
			this.qty=qty;
		this.toString=function(){return this.name;};
	}
}

function Set(name, cssName, code) {
	this.name=name;
	this.cssName=cssName;
	this.code=code;
	this.cssClass="set "+cssName;
	this.cssId="set"+Util.strip(this.cssName);
	this.toString=function(){return this.name;};
}

