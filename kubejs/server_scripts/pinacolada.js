ServerEvents.recipes((event) => {
  event.recipes.create.mixing(Fluid.of('kubejs:pinacolada', 1000), [
    Fluid.of('kubejs:coconut_milk', 333),
    Fluid.of('croptopiaandcreate:pineapple_juice', 333),
    Fluid.of('kubejs:rum', 333),
    'minecraft:ice',
  ]);

  event.recipes.create.mixing(Fluid.of('kubejs:rum', 1000), [
    'croptopia:molasses',
    Fluid.of('minecraft:water', 1000),
  ]);

  event.recipes.create.filling('kubejs:pinacolada', [
    'minecraft:glass_bottle',
    Fluid.of('kubejs:pinacolada', 250),
  ]);

  event.recipes.create.compacting(
    [
      Item.of('croptopiaandcreate:biomass').withChance(0.25),
      Fluid.of('kubejs:coconut_milk', 1000),
    ],
    'croptopia:coconut'
  );
});
