ServerEvents.recipes((event) => {
  let incomplete_meat_skewer = 'kubejs:incomplete_meat_skewer';

  //meat_skewer
  event.recipes.create
    .sequenced_assembly(['kubejs:meat_skewer'], 'minecraft:stick', [
      event.recipes.createDeploying(incomplete_meat_skewer, [
        incomplete_meat_skewer,
        'minecraft:porkchop',
      ]),

      event.recipes.createDeploying(incomplete_meat_skewer, [
        incomplete_meat_skewer,
        'croptopia:bellpepper',
      ]),

      event.recipes.createDeploying(incomplete_meat_skewer, [
        incomplete_meat_skewer,
        'minecraft:porkchop',
      ]),

      event.recipes.createDeploying(incomplete_meat_skewer, [
        incomplete_meat_skewer,
        '#forge:onions',
      ]),

      event.recipes.createDeploying(incomplete_meat_skewer, [
        incomplete_meat_skewer,
        'minecraft:porkchop',
      ]),
    ])
    .transitionalItem(incomplete_meat_skewer)
    .loops(1);
});
