cards[local.Thunderstone].push(new Card({
	name: local.Belac,
	set: set.towers
}));
cards[local.Thunderstone].push(new Card({
	name: local.Goron_Singlemind,
	set: set.caverns
}));
cards[local.Thunderstone].push(new Card({
	name: local.Mowtil_Djinni_Lich,
	set: set.caverns,
	requirements: [
		req_hero_magic_attack,
		req_hero_attack,
		req_village_magic_attack,
		req_village_attack
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Orseg,
	set: set.towers
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Agony,
	set: set.wrath
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Avarice,
	set: set.doom
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Blight,
	set: set.thorn
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Fate,
	set: set.heart
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Mystery,
	set: set.base
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Scorn,
	set: set.dragonspire
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stone_of_Terror,
	set: set.dragonspire
}));
cards[local.Thunderstone].push(new Card({
	name: local.Stramst,
	set: set.towers
}));
cards[local.Thunderstone].push(new Card({
	name: local.Xobmokt_Ichor_King,
	set: set.caverns
}));
cards[local.Thunderstone].push(new Card({
	name: local.King_Caelan,
	set: set.root,
	requirements: [
		req_village_mercenary
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Void_Apocalypse,
	set: set.worlds,
	requirements: [
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Heart_of_Doom,
	set: set.intoabyss,
	requirements: [
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Oblivion_Deathkeeper,
	set: set.intoabyss,
	requirements: [
	]
}));

cards[local.Thunderstone].push(new Card({
	name: local.The_Last_Doomknight,
	set: set.worlds,
	requirements: [
		req_village_light
	]
}));

cards[local.Trap].push(new Card({
	name: local.Trap_Death,
	set: set.wrath,
	requirements: [
		req_hero_thief
	]
}));
cards[local.Trap].push(new Card({
	name: local.Trap_Dire,
	set: set.wrath,
	requirements: [
		req_hero_thief,
		req_hero_cleric
	]
}));
cards[local.Trap].push(new Card({
	name: local.Trap_Draconic,
	set: set.dragonspire,
	requirements: [
		req_hero_thief,
	]
}));

cards[local.Guardian].push(new Card({
	name: local.Dark_Champion,
	set: set.wrath,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Dark_Champion,
	set: set.worlds,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Death_Sentinel,
	set: set.promo,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Night,
	set: set.dragonspire,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Revenge,
	set: set.promo,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Strength,
	set: set.promo,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Torment,
	set: set.dragonspire,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Virulence,
	set: set.thorn,
	requirements: [
		req_hero_destroys_disease
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Virulence,
	set: set.worlds,
	requirements: [
		req_hero_destroys_disease
	]
}));
cards[local.Guardian].push(new Card({
	name: local.The_Last_Doomknight,
	set: set.heart,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Mournwater_Witch,
	set: set.heart,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Unholy_Guardian,
	set: set.doom,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Archdruid,
	set: set.root,
	requirements: [
	]
}));

cards[local.Treasure].push(new Card({
	name: local.Amulet_Treasure,
	set: set.doom,
	requirements: [
	]
}));
cards[local.Treasure].push(new Card({
	name: local.Figurine_Treasure,
	set: set.dragonspire,
	requirements: [
	]
}));
cards[local.Treasure].push(new Card({
	name: local.Gem_Treasure,
	set: set.heart,
	requirements: [
	]
}));
cards[local.Treasure].push(new Card({
	name: local.Treasures_of_Caligin,
	set: set.caverns,
	requirements: [
	]
}));
cards[local.Treasure].push(new Card({
	name: local.Ulbrick_s_Treasure,
	set: set.doom,
	requirements: [
	]
}));
cards[local.Treasure].push(new Card({
	name: local.Treasures_of_Dun_Ordha,
	set: set.root,
	requirements: [
	]
}));

cards[local.Setting].push(new Card({
	name: local.Barrowsdale,
	set: set.dragonspire
}));
cards[local.Setting].push(new Card({
	name: local.Doomgate,
	set: set.dragonspire,
	execute: function() {
		cardTypes[MONSTER].count++;
	}
}));
cards[local.Setting].push(new Card({
	name: local.Dragonspire,
	set: set.dragonspire,
	execute: function() {
		cardTypes[THUNDERSTONE].count++;
		cardTypes[MONSTER].count++;
	}
}));
cards[local.Setting].push(new Card({
	name: local.Dreadwatch,
	set: set.dragonspire,
	requirements: [
		req_hero_destroys_disease
	]
}));
cards[local.Setting].push(new Card({
	name: local.Feayn_Swamp,
	set: set.dragonspire
}));
cards[local.Setting].push(new Card({
	name: local.Grimhold,
	set: set.dragonspire
}));
cards[local.Setting].push(new Card({
	name: local.Last_Refuge,
	set: set.heart,
	execute: function() {
		cardTypes[HERO].count -= 1;
		//+= 2 was appending 2; quick & dirty fix
		cardTypes[VILLAGE].count++;
		cardTypes[VILLAGE].count++;
	}
}));
cards[local.Setting].push(new Card({
	name: local.Mournwater_Swamp,
	set: set.heart
}));
cards[local.Setting].push(new Card({
	name: local.Rite_of_Banishing,
	set: set.heart,
	execute: function() {
		cardTypes[THUNDERSTONE].count = 7;
	}
}));
cards[local.Setting].push(new Card({
	name: local.Regian_Cove,
	set: set.dragonspire
}));
cards[local.Setting].push(new Card({
	name: local.Stormhold,
	set: set.promo
}));
cards[local.Setting].push(new Card({
	name: local.Thornwood_Forest,
	set: set.promo
}));

cards[local.Disease].push(new Card({
	name: local.Standard,
	set: set.base
}));
cards[local.Disease].push(new Card({
	name: local.Special,
	set: set.doom
}));
cards[local.Disease].push(new Card({
	name: local.Curses,
	set: set.towers
}));

//// Starter Set

cards[local.Thunderstone].push(new Card({
	name: local.Wraithlyn_Dragon_General,
	set: set.starter,
	requirements: [
		req_village_weapon,
		req_village_item,
		req_village_spell
	]
}));

cards[local.Disease].push(new Card({
	name: local.Diseases,
	set: set.starter
}));

//// Numenera

cards[local.Treasure].push(new Card({
	name: local.Treasures_of_Numenera,
	set: set.numenera,
	requirements: [
		req_village_weapon
	]
}));

cards[local.Thunderstone].push(new Card({
	name: local.Phylethis,
	set: set.numenera,
	requirements: [
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Sarrak,
	set: set.numenera,
	requirements: [
	]
}));
cards[local.Thunderstone].push(new Card({
	name: local.Convergence_Master,
	set: set.numenera,
	requirements: [
	]
}));

cards[local.Disease].push(new Card({
	name: local.Iron_Wind,
	set: set.numenera
}));

//// Worlds Collide

cards[local.Disease].push(new Card({
	name: local.Diseases,
	set: set.worlds
}));

/// Into the Abyss
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Revenge,
	set: set.intoabyss,
	requirements: [
	]
}));
cards[local.Guardian].push(new Card({
	name: local.Guardian_of_Strength,
	set: set.intoabyss,
	requirements: [
	]
}));
