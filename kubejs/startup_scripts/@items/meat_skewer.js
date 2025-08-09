StartupEvents.registry('item', (event) => {
  event
    .create('incomplete_meat_skewer')
    .displayName('Unvollständiger Fleischspieß');

  event
    .create('meat_skewer')
    .food((food) => {
      food.hunger(11);
      food.saturation(0.5);
    })
    .displayName('Fleischspieß');
});
