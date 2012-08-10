cards[local.Monster].push(new Card({
	name: local.Abyssal,
	set: set.base,
	level: 2,
	requirements: [
		new Requirement(req_hero_cleric), 
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_wizard), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Abyssal_Darkspawn,
	set: set.heart,
	level: 2,
	requirements: [
		new Requirement(req_village_light_item)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Abyssal_Malformed,
	set: set.thorn,
	level: 2,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_fighter),
		new Requirement(req_village_food),
		new Requirement(req_village_light_item)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Abyssal_Thunderspawn,
	set: set.doom,
	level: 1,
	requirements: [
		new Requirement(req_hero_archer), 
		new Requirement(req_hero_cleric), 
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_wizard)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Bandit_Humanoid,
	set: set.dragonspire,
	level: 2,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Basilisk_Animal,
	set: set.heart,
	level: 2,
	requirements: [
		new Requirement(req_village_item),
		new Requirement(req_village_light_item),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Burnmarked_Fire,
	set: set.towers,
	level: 2,
	requirements: [
		new Requirement(req_disease_curses)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Centaur,
	set: set.thorn,
	level: 1,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_fighter)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Corvaxis_Avian,
	set: set.towers,
	level: 2,
	requirements: [
		new Requirement(req_village_weapon),
		new Requirement(req_village_item)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Cultist_Humanoid,
	set: set.doom,
	level: 2,
	requirements: [
		new Requirement(req_village_item),
		new Requirement(req_village_light),
		new Requirement(req_village_spell),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Dark_Enchanted,
	set: set.dragonspire,
	level: 2,
	requirements: [
		new Requirement(req_hero_archer),
		new Requirement(req_village_edged_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Doomknight_Humanoid,
	set: set.base,
	level: 2,
	requirements: [
		new Requirement(req_hero_fighter), 
		new Requirement(req_village_light), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Doppelganger_Humanoid,
	set: set.heart,
	level: 1,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_village_light), 
		new Requirement(req_village_spell),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Djinni_Efreet,
	set: set.towers,
	level: 3,
	requirements: [
		new Requirement(req_hero_light),
		new Requirement(req_hero_thief),
		new Requirement(req_hero_ranger),
		new Requirement(req_hero_fighter),
		new Requirement(req_hero_wizard),
		new Requirement(req_hero_cleric),
		new Requirement(req_village_edged_weapon),
		new Requirement(req_village_bow),
		new Requirement(req_village_spell)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Dragon,
	set: set.base,
	level: 3,
	requirements: [
		new Requirement(req_hero_attack), 
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_village_attack), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Dragon_Fire,
	set: set.towers,
	level: 3,
	requirements: [
		new Requirement(req_village_light),
		new Requirement(req_village_spell),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Dragon_Humanoid,
	set: set.promo,
	level: 3,
	requirements: [
		new Requirement(req_hero_archer), 
		new Requirement(req_hero_cleric), 
		new Requirement(req_hero_fighter), 
		new Requirement(req_hero_thief), 
		new Requirement(req_hero_wizard)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Dryad,
	set: set.heart,
	level: 3,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Elemental_Fire,
	set: set.dragonspire,
	level: 2,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_village_item),
		new Requirement(req_village_spell)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Elemental_Nature,
	set: set.wrath,
	level: 2,
	requirements: [
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_spell), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Elemental_Pain,
	set: set.wrath,
	level: 3,
	requirements: [
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_village_magic_attack)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Enchanted,
	set: set.base,
	level: 1,
	requirements: [
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_village_magic_attack)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Evil_Druid_Humanoid,
	set: set.doom,
	level: 2,
	requirements: [
		new Requirement(req_hero_cleric),
		new Requirement(req_disease_special),
		new Requirement(req_hero_destroys_disease)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Giant,
	set: set.dragonspire,
	level: 2,
	requirements: [
		new Requirement(req_hero_strength),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Golem,
	set: set.wrath,
	level: 3,
	requirements: [
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_hero_strength), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_strength)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Horde,
	set: set.wrath,
	level: 1,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Humanoid,
	set: set.base,
	level: 1,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Hydra_Dragon,
	set: set.dragonspire,
	level: 3,
	requirements: [
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Kobold_Humanoid,
	set: set.towers,
	level: 1,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Lizardfolk_Humanoid,
	set: set.heart,
	level: 1,
	requirements: [
		new Requirement(req_village_item),
		new Requirement(req_village_light_item)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Ogre_Humanoid,
	set: set.towers,
	level: 2,
	requirements: [
		new Requirement(req_hero_attack),
		new Requirement(req_hero_magic_attack),
		new Requirement(req_hero_weak),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Ooze,
	set: set.base,
	level: 1,
	requirements: [
		new Requirement(req_village_edged_weapon), 
		new Requirement(req_village_food), 
		new Requirement(req_village_nonedged_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Orc_Humanoid,
	set: set.dragonspire,
	level: 1,
	requirements: [
		new Requirement(req_village_mercenary),
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Raider_Humanoid,
	set: set.thorn,
	level: 2,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Siege,
	set: set.thorn,
	level: 2,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.Spider_Animal,
	set: set.heart,
	level: 2,
	requirements: [
	]
}));
cards[local.Monster].push(new Card({
	name: local.The_Swarm,
	set: set.doom,
	level: 1,
	requirements: [
		new Requirement(req_disease_special)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Doom,
	set: set.base,
	level: 1,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_village_spell), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Horde,
	set: set.towers,
	level: 1,
	requirements: [
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Lich,
	set: set.dragonspire,
	level: 1,
	requirements: [
		new Requirement(req_hero_attack),
		new Requirement(req_hero_cleric),
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_magic_attack),
		new Requirement(req_hero_wizard),
		new Requirement(req_village_attack),
		new Requirement(req_village_magic_attack),
		new Requirement(req_village_spell)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Plague,
	set: set.dragonspire,
	level: 2,
	requirements: [
		new Requirement(req_hero_destroys_disease)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Skeleton,
	set: set.towers,
	level: 1,
	requirements: [
		new Requirement(req_disease_curses),
		new Requirement(req_hero_destroys_disease)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Spectral,
	set: set.heart,
	level: 3,
	requirements: [
		new Requirement(req_village_food)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Spirit,
	set: set.base,
	level: 2,
	requirements: [
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_hero_strength), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_strength), 
		new Requirement(req_village_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Stormwraith,
	set: set.doom,
	level: 2,
	requirements: [
		new Requirement(req_hero_attack), 
		new Requirement(req_hero_magic_attack), 
		new Requirement(req_village_attack), 
		new Requirement(req_village_magic_attack), 
		new Requirement(req_village_spell)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Undead_Treefolk,
	set: set.towers,
	level: 3,
	requirements: [
		new Requirement(req_village_blunt_weapon)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Verminfolk_Animal,
	set: set.thorn,
	level: 1,
	requirements: [
		new Requirement(req_hero_destroys_disease),
		new Requirement(req_hero_fighter)
	]
}));
cards[local.Monster].push(new Card({
	name: local.Werewolf,
	set: set.promo,
	level: 2,
	requirements: [
		new Requirement(req_village_villager)
	]
}));
