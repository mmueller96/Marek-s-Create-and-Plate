StartupEvents.registry('item', (event) => {
  event
    .create('sliced_bread')
    .food((food) => {
      food.hunger(5);
      food.saturation(0.6);
    })
    .displayName('Aufgeschnittenes Brot');
});
