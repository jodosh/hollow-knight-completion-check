/* Huge thanks to ManicJamie for his HKTranslator: https://github.com/ManicJamie/HKTranslator */

const MAP = {
  "Tutorial_01": "King's Pass",
  "Town": "Dirtmouth",
  "Room_shop": "Dirtmouth: Sly's Shop",
  "Room_Sly_Storeroom": "Dirtmouth: Sly's Shop Basement",
  "Room_Town_Stag_Station": "Dirtmouth: Stag Station",
  "Room_mapper": "Dirtmouth: Iselda's Shop",
  "Room_Bretta": "Dirtmouth: Bretta's Room",
  "Room_Bretta_Basement": "Dirtmouth: Bretta's Room Basement",
  "Room_Ouiji": "Dirtmouth: Jiji's Hut",
  "Room_Jinn": "Dirtmouth: Jinn's Hut",
  "Room_Tram_RG": "Upper Tram",
  "Room_Tram": "Lower Tram",
  "Crossroads_01": "Forgotten Crossroads: Well",
  "Crossroads_02": "Forgotten Crossroads: Outside Temple of the Black Egg",
  "Crossroads_03": "Forgotten Crossroads: Outside Stag Station",
  "Crossroads_04": "Forgotten Crossroads: Gruz Mother",
  "Crossroads_05": "Forgotten Crossroads: Central Grub",
  "Crossroads_06": "Forgotten Crossroads: Outside Ancestral Mound",
  "Crossroads_07": "Forgotten Crossroads: Gruzzer Vertical Room",
  "Crossroads_08": "Forgotten Crossroads: Aspid Arena",
  "Crossroads_09": "Forgotten Crossroads: Brooding Mawlek Boss",
  "Crossroads_10": "Forgotten Crossroads: False Knight Arena",
  "Crossroads_11_alt": "Forgotten Crossroads: Greenpath Entrance",
  "Crossroads_12": "Forgotten Crossroads: Corridor to Acid Grub",
  "Crossroads_13": "Forgotten Crossroads: Goam Mask Shard",
  "Crossroads_14": "Forgotten Crossroads: Outside Myla",
  "Crossroads_15": "Forgotten Crossroads: Corridor to Tram",
  "Crossroads_16": "Forgotten Crossroads: Above Lever",
  "Crossroads_18": "Forgotten Crossroads: Fungal Wastes Entrance",
  "Crossroads_19": "Forgotten Crossroads: Before Gruz Mother",
  "Crossroads_21": "Forgotten Crossroads: Outside False Knight",
  "Crossroads_22": "Forgotten Crossroads: Glowing Womb Arena",
  "Crossroads_25": "Forgotten Crossroads: Brooding Mawlek Entrance",
  "Crossroads_27": "Forgotten Crossroads: Outside Tram",
  "Crossroads_30": "Forgotten Crossroads: Hot Spring",
  "Crossroads_31": "Forgotten Crossroads: Spike Grub",
  "Crossroads_33": "Forgotten Crossroads: Cornifer",
  "Crossroads_35": "Forgotten Crossroads: Acid Grub",
  "Crossroads_36": "Forgotten Crossroads: Brooding Mawlek Middle",
  "Crossroads_37": "Forgotten Crossroads: Vessel Fragment",
  "Crossroads_38": "Forgotten Crossroads: Grubfather",
  "Crossroads_39": "Forgotten Crossroads: Corridor Right of Temple of the Black Egg",
  "Crossroads_40": "Forgotten Crossroads: Corridor Right of Central Grub",
  "Crossroads_42": "Forgotten Crossroads: Right of Mask Shard",
  "Crossroads_43": "Forgotten Crossroads: Corridor to Elevator",
  "Crossroads_45": "Forgotten Crossroads: Myla",
  "Crossroads_46": "Forgotten Crossroads: Tram",
  "Crossroads_47": "Forgotten Crossroads: Stag Station",
  "Crossroads_48": "Forgotten Crossroads: Husk Guard Grub",
  "Crossroads_49": "Forgotten Crossroads: Elevator",
  "Crossroads_52": "Forgotten Crossroads: Goam Journal",
  "Crossroads_ShamanTemple": "Forgotten Crossroads: Ancestral Mound",
  "Room_Mender_House": "Forgotten Crossroads: Menderbug House",
  "Room_Charm_Shop": "Forgotten Crossroads: Salubra's Shop",
  "Room_ruinhouse": "Forgotten Crossroads: Rescue Sly Hut",
  "Room_temple": "Forgotten Crossroads: Inside Temple of the Black Egg",
  "Fungus1_01": "Greenpath: Entrance",
  "Fungus1_01b": "Greenpath: Waterfall Bench",
  "Fungus1_02": "Greenpath: First Hornet Sighting",
  "Fungus1_03": "Greenpath: Storerooms",
  "Fungus1_04": "Greenpath: Hornet",
  "Fungus1_05": "Greenpath: Outside Thorns",
  "Fungus1_06": "Greenpath: Cornifer",
  "Fungus1_07": "Greenpath: Outside Hunter",
  "Fungus1_08": "Greenpath: Hunter",
  "Fungus1_09": "Greenpath: Sheo Gauntlet",
  "Fungus1_10": "Greenpath: Acid Bridge",
  "Fungus1_11": "Greenpath: Above Fog Canyon",
  "Fungus1_12": "Greenpath: Massive Moss Charger Corridor",
  "Fungus1_13": "Greenpath: Whispering Root",
  "Fungus1_14": "Greenpath: Thorns of Agony",
  "Fungus1_15": "Greenpath: Outside Sheo",
  "Fungus1_16_alt": "Greenpath: Stag Station",
  "Fungus1_17": "Greenpath: Moss Charger Corridor",
  "Fungus1_19": "Greenpath: Above Sanctuary Bench",
  "Fungus1_20_v02": "Greenpath: Vengefly King",
  "Fungus1_21": "Greenpath: Outside Hornet",
  "Fungus1_22": "Greenpath: Outside Stag Station",
  "Fungus1_25": "Greenpath: Corridor to Lake of Unn",
  "Fungus1_26": "Greenpath: Lake Of Unn",
  "Fungus1_29": "Greenpath: Massive Moss Charger",
  "Fungus1_30": "Greenpath: Below Toll Bench",
  "Fungus1_31": "Greenpath: Toll",
  "Fungus1_32": "Greenpath: Moss Knight Arena",
  "Fungus1_34": "Greenpath: Stone Sanctuary Entrance",
  "Fungus1_35": "Greenpath: Stone Sanctuary",
  "Fungus1_36": "Greenpath: Stone Sanctuary Mask Shard",
  "Fungus1_37": "Greenpath: Stone Sanctuary Bench",
  "Fungus1_Slug": "Greenpath: Unn",
  "Room_nailmaster_02": "Greenpath: Sheo",
  "Room_Slug_Shrine": "Greenpath: Lake of Unn Bench",
  "Deepnest_01": "Fungal Wastes: Deepnest Fall",
  "Fungus2_01": "Fungal Wastes: Queen's Station",
  "Fungus2_02": "Fungal Wastes: Queen's Station Stag",
  "Fungus2_03": "Fungal Wastes: Outside Queen's Station",
  "Fungus2_04": "Fungal Wastes: Below Shrumal Ogres",
  "Fungus2_05": "Fungal Wastes: Shrumal Ogres",
  "Fungus2_06": "Fungal Wastes: Outside Leg Eater",
  "Fungus2_07": "Fungal Wastes: Shrumal Warrior Acid Bridge",
  "Fungus2_08": "Fungal Wastes: Outside Elder Hu",
  "Fungus2_09": "Fungal Wastes: Cloth Corridor",
  "Fungus2_10": "Fungal Wastes: Left Of Pilgrim's Way",
  "Fungus2_11": "Fungal Wastes: Right of Bouncy Mushroom Grub",
  "Fungus2_12": "Fungal Wastes: Mantis Corridor",
  "Fungus2_13": "Fungal Wastes: Bretta Bench",
  "Fungus2_14": "Fungal Wastes: Mantis Village",
  "Fungus2_15": "Fungal Wastes: Mantis Lords",
  "Fungus2_17": "Fungal Wastes: Above Mantis Village",
  "Fungus2_18": "Fungal Wastes: Cornifer",
  "Fungus2_19": "Fungal Wastes: Right Of Spore Shroom",
  "Fungus2_20": "Fungal Wastes: Spore Shroom",
  "Fungus2_21": "Fungal Wastes: Pilgrim's Way",
  "Fungus2_23": "Fungal Wastes: Dashmaster",
  "Fungus2_26": "Fungal Wastes: Leg Eater",
  "Fungus2_28": "Fungal Wastes: Shrumal Warrior Loop",
  "Fungus2_29": "Fungal Wastes: Fungal Core Upper",
  "Fungus2_30": "Fungal Wastes: Fungal Core Lower",
  "Fungus2_31": "Fungal Wastes: Mantis Lords Rewards",
  "Fungus2_32": "Fungal Wastes: Elder Hu",
  "Fungus2_33": "Fungal Wastes: Whispering Root near Fog Canyon",
  "Fungus2_34": "Fungal Wastes: Willoh",
  "Fungus3_01": "Fog Canyon: Upper West Tall",
  "Fungus3_02": "Fog Canyon: Lower West Tall",
  "Fungus3_03": "Fog Canyon: Queen's Gardens Acid Entrance",
  "Fungus3_24": "Fog Canyon: Corridor to Overgrown Mound",
  "Fungus3_25": "Fog Canyon: Cornifer",
  "Fungus3_25b": "Fog Canyon: Corridor to Cornifer",
  "Fungus3_26": "Fog Canyon: East Tall",
  "Fungus3_27": "Fog Canyon: Corridor to Archives",
  "Fungus3_28": "Fog Canyon: Charm Notch",
  "Fungus3_30": "Fog Canyon: Lifeblood",
  "Fungus3_35": "Fog Canyon: Millibelle",
  "Fungus3_44": "Fog Canyon: Overgrown Mound Entrance",
  "Fungus3_47": "Fog Canyon: Teacher's Archives Entrance",
  "Fungus3_archive": "Fog Canyon: Teacher's Archives Bench",
  "Fungus3_archive_02": "Fog Canyon: Uumuu Arena",
  "Room_Fungus_Shaman": "Fog Canyon: Overgrown Mound",
  "Cliffs_01": "Howling Cliffs: Main",
  "Cliffs_02": "Howling Cliffs: Gorb",
  "Cliffs_03": "Howling Cliffs: Stag Nest",
  "Cliffs_04": "Howling Cliffs: Joni's Dark Passage",
  "Cliffs_05": "Howling Cliffs: Joni's Charm Room",
  "Cliffs_06": "Howling Cliffs: Grimm Lantern",
  "Fungus1_28": "Howling Cliffs: Baldur's Shell",
  "Room_nailmaster": "Howling Cliffs: Nailmaster Mato",
  "Mines_01": "Crystal Peak: Desolate Dive Entrance",
  "Mines_02": "Crystal Peak: Dark Entrance",
  "Mines_03": "Crystal Peak: Spike Grub",
  "Mines_04": "Crystal Peak: Conveyor Belts Entrance",
  "Mines_05": "Crystal Peak: Above Spike Grub",
  "Mines_06": "Crystal Peak: Deep Focus Gauntlet",
  "Mines_07": "Crystal Peak: Platform Dark Room to Resting Grounds",
  "Mines_10": "Crystal Peak: Dirtmouth Elevator Exit",
  "Mines_11": "Crystal Peak: Left Of Crystal Guardian",
  "Mines_13": "Crystal Peak: Top Corridor",
  "Mines_16": "Crystal Peak: Grub Mimic",
  "Mines_17": "Crystal Peak: Corridor to Spike Grub",
  "Mines_18": "Crystal Peak: Crystal Guardian Bench",
  "Mines_19": "Crystal Peak: Grub Crushers",
  "Mines_20": "Crystal Peak: East Tall",
  "Mines_23": "Crystal Peak: Hallownest Crown Whispering Root",
  "Mines_24": "Crystal Peak: Hallownest Crown Grub",
  "Mines_25": "Crystal Peak: Hallownest Crown Climb",
  "Mines_28": "Crystal Peak: Outside Crystallized Mound",
  "Mines_29": "Crystal Peak: Dark Bench Room",
  "Mines_30": "Crystal Peak: Cornifer",
  "Mines_31": "Crystal Peak: Crystal Heart Gauntlet",
  "Mines_32": "Crystal Peak: Enraged Guardian Arena",
  "Mines_33": "Forgotten Crossroads: Crystal Peak Dark Toll",
  "Mines_34": "Crystal Peak: Hallownest Crown Peak",
  "Mines_35": "Crystal Peak: Crystallized Mound",
  "Mines_36": "Crystal Peak: Deep Focus Room",
  "Mines_37": "Crystal Peak: Chest Crushers",
  "Abyss_02": "Ancient Basin: Broken Bridge",
  "Abyss_03": "Ancient Basin: Tram",
  "Abyss_04": "Ancient Basin: Fountain",
  "Abyss_05": "Ancient Basin: Palace Grounds",
  "Abyss_17": "Ancient Basin: Cloth",
  "Abyss_18": "Ancient Basin: Corridor to Broken Vessel",
  "Abyss_19": "Ancient Basin: Broken Vessel Grub",
  "Abyss_20": "Ancient Basin: Simple Key",
  "Abyss_21": "Ancient Basin: Monarch Wings",
  "Abyss_22": "Ancient Basin: Hidden Station",
  "Abyss_06_Core": "The Abyss: Main/Core Area",
  "Abyss_08": "The Abyss: Lifeblood Core Room",
  "Abyss_09": "The Abyss: Lighthouse Climb",
  "Abyss_10": "The Abyss: Shade Cloak",
  "Abyss_12": "The Abyss: Abyss Shriek Room",
  "Abyss_15": "The Abyss: Birthplace",
  "Abyss_16": "The Abyss: Corridor to Lighthouse",
  "Abyss_Lighthouse_room": "The Abyss: Inside Lighthouse",
  "Crossroads_46b": "Resting Grounds: Tram",
  "Crossroads_50": "Resting Grounds: Blue Lake",
  "RestingGrounds_02": "Resting Grounds: Xero",
  "RestingGrounds_04": "Resting Grounds: Dream Nail Entrance",
  "RestingGrounds_05": "Resting Grounds: Whispering Root",
  "RestingGrounds_06": "Resting Grounds: Corridor Below Xero",
  "RestingGrounds_07": "Resting Grounds: Seer",
  "RestingGrounds_08": "Resting Grounds: Spirit's Glade",
  "RestingGrounds_09": "Resting Grounds: Stag Station",
  "RestingGrounds_10": "Resting Grounds: Crypts",
  "RestingGrounds_12": "Resting Grounds: Grey Mourner Bench",
  "RestingGrounds_17": "Resting Grounds: Dreamshield Room",
  "Room_Mansion": "Resting Grounds: Grey Mourner Room",
  "Ruins2_10": "Resting Grounds: Elevator",
  "Abyss_03_c": "Kingdom's Edge: Tram",
  "Deepnest_East_01": "Kingdom's Edge: Left of The Hive",
  "Deepnest_East_02": "Kingdom's Edge: Above The Hive",
  "Deepnest_East_03": "Kingdom's Edge: Entrance",
  "Deepnest_East_04": "Kingdom's Edge: Bardoon",
  "Deepnest_East_06": "Kingdom's Edge: Outside Nailmaster Oro",
  "Deepnest_East_07": "Kingdom's Edge: Whispering Root",
  "Deepnest_East_08": "Kingdom's Edge: Great Hopper King's Idol",
  "Deepnest_East_09": "Kingdom's Edge: Corridor Outside Colosseum of Fools",
  "Deepnest_East_10": "Kingdom's Edge: Markoth Arena",
  "Deepnest_East_11": "Kingdom's Edge: Below Camp Bench",
  "Deepnest_East_12": "Kingdom's Edge: Hornet Sentinel Corridor",
  "Deepnest_East_13": "Kingdom's Edge: Camp Bench",
  "Deepnest_East_14": "Kingdom's Edge: Below Nailmaster Oro",
  "Deepnest_East_14b": "Kingdom's Edge: Quick Slash Room",
  "Deepnest_East_15": "Kingdom's Edge: Lifeblood Room",
  "Deepnest_East_16": "Kingdom's Edge: Nailmaster Oro Scarecrow",
  "Deepnest_East_17": "Kingdom's Edge: 420 Geo Rock",
  "Deepnest_East_18": "Kingdom's Edge: Left of Markoth",
  "Deepnest_East_Hornet": "Kingdom's Edge: Hornet Sentinel Arena",
  "GG_Lurker": "Kingdom's Edge: Pale Lurker Arena",
  "Room_Colosseum_01": "Kingdom's Edge: Colosseum of Fools Entrance",
  "Room_Colosseum_02": "Kingdom's Edge: Colosseum of Fools Bench",
  "Room_Colosseum_Bronze": "Colosseum of Fools: Trial of the Warrior Arena",
  "Room_Colosseum_Gold": "Colosseum of Fools: Trial of the Fool Arena",
  "Room_Colosseum_Silver": "Colosseum of Fools: Trial of the Conqueror Arena",
  "Room_Colosseum_Spectate": "Kingdom's Edge: Colosseum Spectators",
  "Room_nailmaster_03": "Kingdom's Edge: Nailmaster Oro Room",
  "Room_Wyrm": "Kingdom's Edge: Cast-Off Shell",
  "Abyss_01": "City of Tears: Broken Elevator",
  "Crossroads_49b": "City of Tears: Elevator to Forgotten Crossroads",
  "Room_nailsmith": "City of Tears: Nailsmith",
  "Ruins_Bathhouse": "City of Tears: Pleasure House Bench",
  "Ruins_Elevator": "City of Tears: Pleasure House Elevator",
  "Ruins_House_01": "City of Tears: Guarded Grub Room",
  "Ruins_House_02": "City of Tears: Gorgeous Husk Room",
  "Ruins_House_03": "City of Tears: Emilitia Room",
  "Ruins1_01": "City of Tears: Pilgrim's Way Entrance",
  "Ruins1_02": "City of Tears: Quirrel Bench",
  "Ruins1_03": "City of Tears: Rafters",
  "Ruins1_04": "City of Tears: Outside Nailsmith",
  "Ruins1_05": "City of Tears: Grub Above Lemm",
  "Ruins1_05b": "City of Tears: Lemm Room",
  "Ruins1_05c": "City of Tears: Rancid Egg Above Lemm",
  "Ruins1_06": "City of Tears: Corridor to City Storerooms",
  "Ruins1_09": "City of Tears: Soul Twister Arena",
  "Ruins1_17": "City of Tears: Whispering Root",
  "Ruins1_18": "City of Tears: Corridor to Watcher's Spire",
  "Ruins1_23": "City of Tears: Soul Sanctum Entrance",
  "Ruins1_24": "City of Tears: Soul Master Arena",
  "Ruins1_25": "City of Tears: Soul Sanctum Right Elevators",
  "Ruins1_27": "City of Tears: Hollow Knight Fountain",
  "Ruins1_28": "City of Tears: City Storerooms",
  "Ruins1_29": "City of Tears: City Storerooms Stag Station",
  "Ruins1_30": "City of Tears: Soul Sanctum Spell Twister Room",
  "Ruins1_31": "City of Tears: Toll Bench Cornifer",
  "Ruins1_31b": "City of Tears: Shade Soul Arena",
  "Ruins1_32": "City of Tears: Soul Master Rewards Room",
  "Ruins2_01": "City of Tears: Watcher's Spire Second Floor",
  "Ruins2_01_b": "City of Tears: Watcher's Spire First Floor",
  "Ruins2_03": "City of Tears: Watcher's Spire Fourth Floor",
  "Ruins2_03b": "City of Tears: Watcher's Spire Third Floor",
  "Ruins2_04": "City of Tears: Right Hub",
  "Ruins2_05": "City of Tears: Above King's Station",
  "Ruins2_06": "City of Tears: King's Station",
  "Ruins2_07": "City of Tears: Grub Below King's Station",
  "Ruins2_08": "City of Tears: King's Station Stag Station",
  "Ruins2_09": "City of Tears: King's Station Vessel Fragment",
  "Ruins2_10b": "City of Tears: Right Elevator",
  "Ruins2_11": "City of Tears: The Collector Arena",
  "Ruins2_11_b": "City of Tears: Tower of Love",
  "Ruins2_Watcher_Room": "City of Tears: Lurien Elevator",
  "Hive_01": "The Hive: Entrance",
  "Hive_02": "The Hive: Whispering Root",
  "Hive_03": "The Hive: Outside Grub",
  "Hive_03_c": "The Hive: Outside Shortcut",
  "Hive_04": "The Hive: Mask Shard Room",
  "Hive_05": "The Hive: Hive Knight Arena",
  "GG_Pipeway": "Royal Waterways: Flukemunga Corridor",
  "GG_Waterways": "Royal Waterways: Junk Pit",
  "Room_GG_Shortcut": "Royal Waterways: Fluke Hermit Room",
  "Waterways_01": "Royal Waterways: Entrance",
  "Waterways_02": "Royal Waterways: Main Bench",
  "Waterways_03": "Royal Waterways: Tuk Room",
  "Waterways_04": "Royal Waterways: Hidden Grub Room",
  "Waterways_04b": "Royal Waterways: Mask Shard Room",
  "Waterways_05": "Royal Waterways: Dung Defender Arena",
  "Waterways_06": "Royal Waterways: Corridor to Broken Elevator",
  "Waterways_07": "Royal Waterways: Left of Isma's Grove",
  "Waterways_08": "Royal Waterways: Outside Flukemarm",
  "Waterways_09": "Royal Waterways: Cornifer",
  "Waterways_12": "Royal Waterways: Flukemarm Arena",
  "Waterways_13": "Royal Waterways: Isma's Grove",
  "Waterways_14": "Royal Waterways: Kingdom's Edge Acid Corridor",
  "Waterways_15": "Royal Waterways: Dung Defender's Cave",
  "Abyss_03_b": "Deepnest: Tram",
  "Deepnest_01b": "Deepnest: Upper Cornifer",
  "Deepnest_02": "Deepnest: Outside Grub Mimics",
  "Deepnest_03": "Deepnest: Left of Hot Spring",
  "Deepnest_09": "Deepnest: Distant Village Stag Station",
  "Deepnest_10": "Deepnest: Distant Village",
  "Deepnest_14": "Deepnest: Failed Tramway Bench",
  "Deepnest_16": "Deepnest: Top of Lower Cornifer",
  "Deepnest_17": "Deepnest: Garpede Corridor Below Cornifer",
  "Deepnest_26": "Deepnest: Failed Tramway Lifeblood",
  "Deepnest_26b": "Deepnest: Tram Pass Room",
  "Deepnest_30": "Deepnest: Hot Spring",
  "Deepnest_31": "Deepnest: Nosk Corridor",
  "Deepnest_32": "Deepnest: Nosk Arena",
  "Deepnest_33": "Deepnest: Zote Arena",
  "Deepnest_34": "Deepnest: First Devout",
  "Deepnest_35": "Deepnest: Outside Galien",
  "Deepnest_36": "Deepnest: Grub Mimics",
  "Deepnest_37": "Deepnest: Corridor to Tram",
  "Deepnest_38": "Deepnest: Vessel Fragment Challenge Room",
  "Deepnest_39": "Deepnest: Whispering Root",
  "Deepnest_40": "Deepnest: Galien Arena",
  "Deepnest_41": "Deepnest: Midwife Room",
  "Deepnest_42": "Deepnest: Outside Mask Maker",
  "Deepnest_44": "Deepnest: Sharp Shadow Room",
  "Deepnest_45_v02": "Deepnest: Weaver's Den",
  "Deepnest_Spider_Town": "Deepnest: Beast's Den",
  "Fungus2_25": "Deepnest: Lower Cornifer",
  "Room_Mask_Maker": "Deepnest: Mask Maker Room",
  "Room_spider_small": "Deepnest: Brumm Room",
  "Deepnest_43": "Queen's Gardens: Corridor To Deepnest",
  "Fungus1_23": "Queen's Gardens: First Loodle Corridor",
  "Fungus1_24": "Queen's Gardens: Cornifer Room",
  "Fungus3_04": "Queen's Gardens: Before Petra Arena",
  "Fungus3_05": "Queen's Gardens: Petra Arena",
  "Fungus3_08": "Queen's Gardens: Lower Petra Corridor",
  "Fungus3_10": "Queen's Gardens: Main Arena",
  "Fungus3_11": "Queen's Gardens: Whispering Root",
  "Fungus3_13": "Queen's Gardens: Outside Stag Station",
  "Fungus3_21": "Queen's Gardens: Corridor to Traitor Lord",
  "Fungus3_22": "Queen's Gardens: Upper Grub Room",
  "Fungus3_23": "Queen's Gardens: Traitor Lord Arena",
  "Fungus3_34": "Queen's Gardens: Entrance from Fog Canyon",
  "Fungus3_39": "Queen's Gardens: Moss Prophet Room",
  "Fungus3_49": "Queen's Gardens: Traitor's Child Grave",
  "Fungus3_40": "Queen's Gardens: Stag Station",
  "Fungus3_48": "Queen's Gardens: Outside White Lady",
  "Fungus3_50": "Queen's Gardens: Toll Bench",
  "Room_Queen": "Queen's Gardens: White Lady Room",
  "White_Palace_01": "White Palace: Entrance",
  "White_Palace_02": "White Palace: First Kingsmould",
  "White_Palace_03_hub": "White Palace: Main Hub",
  "White_Palace_04": "White Palace: Left of Main Hub",
  "White_Palace_05": "White Palace: Saw Room",
  "White_Palace_06": "White Palace: Balcony",
  "White_Palace_07": "White Palace: Lamp Pogo Room",
  "White_Palace_08": "White Palace: Pale King's Workshop",
  "White_Palace_09": "White Palace: Throne Room",
  "White_Palace_11": "White Palace: Outside",
  "White_Palace_12": "White Palace: Spike Drop Room",
  "White_Palace_13": "White Palace: Thorn Jump Room",
  "White_Palace_14": "White Palace: Hell Corridor",
  "White_Palace_15": "White Palace: Caged Lever Room",
  "White_Palace_16": "White Palace: Saw Climb Room",
  "White_Palace_17": "White Palace: Path of Pain, Lever",
  "White_Palace_18": "White Palace: Path of Pain, Entrance",
  "White_Palace_19": "White Palace: Path of Pain, Vertical",
  "White_Palace_20": "White Palace: Path of Pain, Final",
  "Dream_Final_Boss": "Temple of the Black Egg: Radiance Room",
  "Room_Final_Boss_Atrium": "Temple of the Black Egg: Bench Room",
  "Room_Final_Boss_Core": "Temple of the Black Egg: Hollow Knight Room",
  "Grimm_Divine": "Dirtmouth: Divine's Tent",
  "Grimm_Main_Tent": "Dirtmouth: Grimm's Tent",
  "Grimm_Nightmare": "Dream: Nightmare King Room",
  "Dream_01_False_Knight": "Dream: Failed Champion Room",
  "Dream_02_Mage_Lord": "Dream: Soul Tyrant Room",
  "Dream_03_Infected_Knight": "Dream: Lost Kin Room",
  "Dream_04_White_Defender": "Dream: White Defender Room",
  "Dream_Abyss": "Dream: Abyss",
  "Dream_Backer_Shrine": "Dream: Outside Shrine of Believers",
  "Dream_Guardian_Hegemol": "Dream: Herrah Room",
  "Dream_Guardian_Lurien": "Dream: Lurien Room",
  "Dream_Guardian_Monomon": "Dream: Monomon Room",
  "Dream_Mighty_Zote": "Dream: Grey Prince Zote Room",
  "Dream_Nailcollection": "Dream: Dreamnail Room",
  "Dream_Room_Believer_Shrine": "Dream: Shrine of Believers",
  "GG_Atrium": "Godhome: Atrium",
  "GG_Atrium_Roof": "Godhome: Roof",
  "GG_Blue_Room": "Godhome: Lifeblood Room",
  "GG_Land_Of_Storms": "Godhome: Land of Storms",
  "GG_Mighty_Zote": "Godhome: Zote Eternal Ordeal",
  "GG_Unlock_Wastes": "Godhome: Godtuner Room",
  "GG_Workshop": "Godhome: Hall of Gods"
};

export default MAP;