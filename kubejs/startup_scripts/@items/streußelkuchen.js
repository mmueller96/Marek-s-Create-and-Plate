StartupEvents.registry('item', (event) => {
  event
    .create('streusel_cake')
    .food((food) => {
      food.hunger(5);
      food.saturation(0.6);
    })
    .displayName('Streuselkuchen');
});
