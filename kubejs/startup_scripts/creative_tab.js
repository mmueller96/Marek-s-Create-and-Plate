StartupEvents.registry('creative_mode_tab', (event) => {
  event
    .create('marek_create_plate')
    .displayName("Marek's Create & Plate")
    .icon(() => 'kubejs:chefs_apron')
    .content(() => ['kubejs:chefs_apron']);
});
