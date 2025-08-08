ServerEvents.recipes((event) => {
  // Base tea recipes - nur die grundlegenden Tees definieren
  const baseTeas = [
    {
      name: 'green_tea',
      ingredients: Item.of('farmersrespite:green_tea_leaves', 4),
    },
    {
      name: 'yellow_tea',
      ingredients: Item.of('farmersrespite:yellow_tea_leaves', 4),
    },
    {
      name: 'black_tea',
      ingredients: Item.of('farmersrespite:black_tea_leaves', 4),
    },
    {
      name: 'rose_hip_tea',
      ingredients: Item.of('farmersrespite:rose_hips', 4),
    },
    {
      name: 'dandelion_tea',
      ingredients: [
        Item.of('minecraft:dandelion', 2),
        Item.of('#farmersrespite:tea_leaves', 2),
      ],
    },
    {
      name: 'purulent_tea',
      ingredients: [
        Item.of('minecraft:nether_wart', 2),
        Item.of('minecraft:fermented_spider_eye', 2),
      ],
    },
    {
      name: 'gamblers_tea',
      ingredients: [
        Item.of('farmersrespite:coffee_berries', 2),
        Item.of('minecraft:glow_berries', 2),
      ],
    },
    {
      name: 'coffee',
      ingredients: Item.of('farmersrespite:coffee_beans', 4),
    },
    {
      name: 'apple_cider',
      ingredients: [
        Item.of('minecraft:apple', 2),
        Item.of('minecraft:sugar', 2),
      ],
    },
    {
      name: 'melon_juice',
      ingredients: [
        Item.of('minecraft:melon_slice', 2),
        Item.of('minecraft:sugar', 2),
      ],
    },
    {
      name: 'hot_cocoa',
      ingredients: [
        Item.of('minecraft:cocoa_beans', 2),
        Item.of('minecraft:sugar', 2),
      ],
    },
  ];

  // Generiere alle Tee-Varianten automatisch
  baseTeas.forEach((baseTea) => {
    const teaFluid = `farmersrespite:${baseTea.name}`;
    const longTeaFluid = `farmersrespite:long_${baseTea.name}`;
    const strongTeaFluid = `farmersrespite:strong_${baseTea.name}`;

    // Normal tea recipe
    let ingredients = [Fluid.of('minecraft:water', 1000)];
    if (Array.isArray(baseTea.ingredients)) {
      ingredients = ingredients.concat(baseTea.ingredients);
    } else {
      ingredients.push(baseTea.ingredients);
    }

    event.recipes.create.mixing(Fluid.of(teaFluid, 1000), ingredients).heated();

    // Long tea recipes
    event.recipes.create.mixing(Fluid.of(longTeaFluid, 1400), [
      Fluid.of(teaFluid, 1000),
      Fluid.of('minecraft:milk', 400),
    ]);

    event.recipes.create.filling(longTeaFluid, [
      teaFluid,
      Fluid.of('minecraft:milk', 400),
    ]);

    // Strong tea recipes
    event.recipes.create.mixing(Fluid.of(strongTeaFluid, 1400), [
      Fluid.of(teaFluid, 1000),
      { fluidTag: 'forge:honey', amount: 400 },
    ]);

    event.recipes.create.filling(strongTeaFluid, [
      teaFluid,
      { fluidTag: 'forge:honey', amount: 400 },
    ]);
  });
});
