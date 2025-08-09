StartupEvents.registry('item', (event) => {
  event
    .create('pinacolada')
    .food((food) => {
      food.hunger(5);
      food.saturation(0.6);
    })
    .displayName('Piña Colada');
});

StartupEvents.registry('fluid', (event) => {
  event.create('pinacolada').thinTexture(0xf5cba0).displayName('Piña Colada');

  event.create('coconut_milk').thinTexture(0xf5e0c3).displayName('Kokosmilch');

  event.create('rum').thinTexture(0xf5cba0).displayName('Rum');
});
