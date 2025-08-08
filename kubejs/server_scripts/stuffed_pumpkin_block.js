ServerEvents.recipes((event) => {
  event.remove({ output: 'farmersdelight:stuffed_pumpkin_block' });

  event.recipes.create
    .sequenced_assembly(
      ['farmersdelight:stuffed_pumpkin_block'],
      'minecraft:pumpkin',
      [
        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          ['delightfulcreators:incomplete_stuffed_pumpkin', '#forge:rice']
        ),

        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          ['delightfulcreators:incomplete_stuffed_pumpkin', 'minecraft:potato']
        ),

        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          [
            'delightfulcreators:incomplete_stuffed_pumpkin',
            'minecraft:brown_mushroom',
          ]
        ),

        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          ['delightfulcreators:incomplete_stuffed_pumpkin', '#forge:onions']
        ),

        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          ['delightfulcreators:incomplete_stuffed_pumpkin', '#forge:berries']
        ),

        event.recipes.createDeploying(
          'delightfulcreators:incomplete_stuffed_pumpkin',
          ['delightfulcreators:incomplete_stuffed_pumpkin', '#forge:vegetables']
        ),
      ]
    )
    .transitionalItem('delightfulcreators:incomplete_stuffed_pumpkin')
    .loops(1);
});
