StartupEvents.registry("creative_mode_tab", (event) => {
  event
    .create("marek_create_plate")
    .displayName("Marek's Create & Plate")
    .icon(() => "marek_create_plate:chefs_apron")
    .content(() => ["marek_create_plate:chefs_apron"]);
});
