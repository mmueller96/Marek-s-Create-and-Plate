StartupEvents.registry('item', (event) => {
  event
    .create('bruschetta')
    .food((food) => {
      food.hunger(5);
      food.saturation(0.6);
    })
    .displayName('Bruschetta');
});
