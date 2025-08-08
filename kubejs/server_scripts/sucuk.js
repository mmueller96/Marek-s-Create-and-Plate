ServerEvents.recipes((event) => {
  event.recipes.create.milling('farmersdelight:minced_beef', 'minecraft:beef');
  event.recipes.create
    .mixing('kubejs:sucuk', ['farmersdelight:minced_beef', 'croptopia:salt'])
    .heated();
  event.recipes.create.cutting('kubejs:sucuk_slice', 'kubejs:sucuk');
});
