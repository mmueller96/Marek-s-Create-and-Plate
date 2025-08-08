const NAMESPACE = 'myserver'; // <-- anpassen!
const ADVANCEMENT_ID = `${NAMESPACE}:plant_10_unique_crops`;

// Liste der Crop-Block-IDs, die als "gepflanzt" zählen.
// Du kannst Block-IDs hinzufügen/entfernen; benutze vollständige Namespaces.
const CROP_BLOCKS = [
  'forge:onions', // Zwiebeln (onions)
  'minecraft:carrots', // Karotten
  'minecraft:potatoes', // Kartoffeln
  'minecraft:beetroot', // Rüben
  'minecraft:nether_wart', // Netherwarze
  'minecraft:sweet_berry_bush', // Beeren
  'minecraft:cocoa', // Kakao (an Jungle Log)
  'minecraft:sugar_cane', // Zuckerrohr
  'minecraft:cactus', // Kaktus
  'minecraft:kelp', // Kelp (meeresalge) - gilt als "gepflanzt" wenn platziert
];
