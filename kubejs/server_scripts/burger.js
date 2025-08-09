ServerEvents.recipes((event) => {
  let burgers = [
    'croptopia:cheeseburger',
    'croptopia:hamburger',
    'croptopia:tofuburger',
    'farmersdelight:hamburger',
  ];

  for (let burger of burgers) {
    event.remove({
      output: burger,
    });
  }

  let incomplete_burger = 'delightfulcreators:incomplete_hamburger';

  //Sliced Bread
  event.recipes.create.cutting(['kubejs:sliced_bread'], 'minecraft:bread');

  //Hamburger
  event.recipes.create
    .sequenced_assembly(['croptopia:hamburger'], 'kubejs:sliced_bread', [
      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        'farmersdelight:beef_patty',
      ]),

      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        '#forge:salad_ingredients',
      ]),

      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        '#forge:tomatoes',
      ]),
    ])
    .transitionalItem(incomplete_burger)
    .loops(1);

  //Cheeseburger
  event.recipes.create
    .sequenced_assembly(['croptopia:cheeseburger'], 'croptopia:hamburger', [
      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        'croptopia:cheese',
      ]),
    ])
    .transitionalItem(incomplete_burger)
    .loops(1);

  //Tofu Burger
  event.recipes.create
    .sequenced_assembly(['croptopia:tofuburger'], 'kubejs:sliced_bread', [
      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        'croptopia:tofu',
      ]),

      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        '#forge:salad_ingredients',
      ]),

      event.recipes.createDeploying(incomplete_burger, [
        incomplete_burger,
        '#forge:onions',
      ]),
    ])
    .transitionalItem(incomplete_burger)
    .loops(1);
});
