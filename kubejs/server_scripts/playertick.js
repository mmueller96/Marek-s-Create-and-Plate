PlayerEvents.tick((event) => {
  const { player } = event;

  if (player.age % 20 != 0) return;

  const chefsApron = "kubejs:chefs_apron";
  if (player.chestArmorItem.id === chefsApron) {
    let potionEffects = player.potionEffects;
    potionEffects.add("minecraft:speed", 200, 0, false, false);
  }
});
