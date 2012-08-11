req_monster_level_1 = new Condition({
	name: "req_monster_level_1",
	type: local.Monster,
	match: function (card) {
		return (card.level && card.level === 1);
	}
});
req_monster_level_2 = new Condition({
	name: "req_monster_level_2",
	type: local.Monster,
	match: function (card) {
		return (card.level && card.level === 2);
	}
});
req_monster_level_3 = new Condition({
	name: "req_monster_level_3",
	type: local.Monster,
	match: function (card) {
		return (card.level && card.level === 3);
	}
});
req_disease_curses=new Condition({
	name: "req_disease_curses",
	type: local.Disease,
	match: function(card) {
		if (card.name === local.Curses) {
			return true;
		} else {
			return false;
		}
	}
});
req_disease_special=new Condition({
	name: "req_disease_special",
	type: local.Disease,
	match: function(card) {
		if (card.name === local.Special) {
			return true;
		} else {
			return false;
		}
	}
});
req_hero_archer=new Condition({
	name: "req_hero_archer",
	type:local.Hero,
	match: function(card) {
		return card.is("Archer")
	}
});

req_hero_attack=new Condition({
	name: "req_hero_attack",
	type:local.Hero,
	match: function(card) {
		return (card.has("attack"))
	}
});

req_hero_cleric=new Condition({
	name: "req_hero_cleric",
	type:local.Hero,
	match: function(card) {
		return card.is("Cleric")
	}
});

req_hero_destroys_disease=new Condition({
	name: "req_hero_destroys_disease",
	type:local.Hero,
	match: function(card) {
		return card.has("destroysDisease")
	}
});

req_hero_fighter=new Condition({
	name: "req_hero_fighter",
	type:local.Hero,
	match: function(card) {
		return card.is("Fighter")
	}
});

req_hero_light = new Condition({
	name: "req_hero_light",
	type: local.Hero,
	match: function(card) {
		return (card.has("light"))
	}
});

req_hero_magic_attack=new Condition({
	name: "req_hero_magic_attack",
	type:local.Hero,
	match: function(card) {
		return (card.has("magicAttack"))
	}
});

req_hero_ranger=new Condition({
	name: "req_hero_ranger",
	type:local.Hero,
	match: function(card) {
		return (card.is("Ranger"))
	}
});

req_hero_strength=new Condition({
	name: "req_hero_strength",
	type:local.Hero,
	match: function(card) {
		return (card.has("strength") >= heroStrengthThreshold)
	}
});

req_hero_thief=new Condition({
	name: "req_hero_thief",
	type:local.Hero,
	match: function(card) {
		return card.is("Thief")
	}
});

req_hero_weak=new Condition({
	name: "req_hero_weak",
	type: local.Hero,
	match: function(card) {
		return (card.has("strength") < heroStrengthThreshold)
	}
});

req_hero_wizard=new Condition({
	name: "req_hero_wizard",
	type:local.Hero,
	match: function(card) {
		return card.is("Wizard")
	}
});

req_village_attack=new Condition({
	name: "req_village_attack",
	type:local.Village,
	match: function(card) {
		return (card.has("attack"))
	}
});

req_village_blunt_weapon=new Condition({
	name: "req_village_blunt_weapon",
	type:local.Village,
	match: function(card) {
		return (card.is("Weapon") && card.is("Blunt"))
	}
});

req_village_bow=new Condition({
	name: "req_village_bow",
	type:local.Village,
	match: function(card) {
		return (card.is("Bow"))
	}
});

req_village_edged_weapon=new Condition({
	name: "req_village_edged_weapon",
	type:local.Village,
	match: function(card) {
		return (card.is("Weapon") && card.is("Edged"))
	}
});

req_village_polearm_weapon=new Condition({
	name: "req_village_polearm_weapon",
	type:local.Village,
	match: function(card) {
		return (card.is("Weapon") && card.is("Polearm"))
	}
});

req_village_food=new Condition({
	name: "req_village_food",
	type:local.Village,
	match: function(card) {
		return card.is("Food")
	}
});

req_village_item=new Condition({
	name: "req_village_item",
	type:local.Village,
	match: function(card) {
		return card.is("Item")
	}
});

req_village_light=new Condition({
	name: "req_village_light",
	type:local.Village,
	match: function(card) {
		return (card.has("light"))
	}
});

req_village_light_item=new Condition({
	name: "req_village_light_item",
	type:local.Village,
	match: function(card) {
		return ((card.has("light")) && card.is("Item"))
	}
});

req_village_magic_attack=new Condition({
	name: "req_village_magic_attack",
	type:local.Village,
	match: function(card) {
		return (card.has("magicAttack"))
	}
});

req_village_mercenary=new Condition({
	name: "req_village_mercenary",
	type:local.Village,
	match: function(card) {
		return (card.is("Mercenary"))
	}
});

req_village_nonedged_weapon=new Condition({
	name: "req_village_nonedged_weapon",
	type:local.Village,
	match: function(card) {
		return (card.is("Weapon") && !card.is("Edged"))
	}
});

req_village_spell=new Condition({
	name: "req_village_spell",
	type:local.Village,
	match: function(card) {
		return card.is("Spell")
	}
});

req_village_spell_magic_attack=new Condition({
	name: "req_village_spell_magic_attack",
	type:local.Village,
	match: function(card) {
		return ((card.has("magicAttack")) && card.is("Spell"))
	}
});

req_village_strength=new Condition({
	name: "req_village_strength",
	type:local.Village,
	match: function(card) {
		return (card.has("strength"))
	}
});

req_village_villager=new Condition({
	name: "req_village_villager",
	type:local.Village,
	match: function(card) {
		return (card.is("Villager"))
	}
});

req_village_weapon=new Condition({
	name: "req_village_weapon",
	type:local.Village,
	match: function(card) {
		return card.is("Weapon")
	}
});

req_village_weapon_edged_weighs_lt_3=new Condition({
	name: "req_village_weapon_edged_weighs_lt_3",
	type:local.Village,
	match: function(card) {
		return (
			(card.is("Weapon")) &&
			(card.is("Edged")) &&
			(card.weight >= 3)
		)
	}
});