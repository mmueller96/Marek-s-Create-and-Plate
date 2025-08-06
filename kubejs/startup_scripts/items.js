StartupEvents.registry("item", (event) => {
  event
    .create("chefs_apron")
    .displayName("Chef’s Schürze")
    .maxStackSize(1)
    .glow(true)
    .food((food) => {
      food.effect("speed", 200, 1, 1.0);
    });
});
