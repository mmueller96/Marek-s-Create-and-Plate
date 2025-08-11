ServerEvents.recipes((event) => {
  let pizzas = [
    'croptopia:pizza',
    'croptopia:pineapple_pepperoni_pizza',
    'croptopia:cheese_pizza',
    'croptopia:supreme_pizza',
    'croptopia:anchovy_pizza',
  ];

  for (let pizza of pizzas) {
    event.remove({
      output: pizza,
    });
  }

  let incomplete_pizza = 'croptopiaandcreate:incomplete_pizza';

  //Pizza
  event.recipes.create
    .sequenced_assembly(['croptopia:pizza'], '#forge:dough', [
      event.recipes.createPressing(incomplete_pizza, [
        incomplete_pizza,
        '#forge:dough',
      ]),

      event.recipes.createFilling(incomplete_pizza, [
        incomplete_pizza,
        Fluid.of('delightfulcreators:tomato_sauce', 333),
      ]),

      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        'croptopia:cheese',
      ]),
    ])
    .transitionalItem(incomplete_pizza)
    .loops(1);

  //Cheese Pizza
  event.recipes.create
    .sequenced_assembly(['croptopia:cheese_pizza'], 'croptopia:pizza', [
      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        'croptopia:cheese',
      ]),
    ])
    .transitionalItem(incomplete_pizza)
    .loops(1);

  //Supreme Pizza
  event.recipes.create
    .sequenced_assembly(['croptopia:supreme_pizza'], 'croptopia:pizza', [
      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        'croptopia:bellpepper',
      ]),

      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        'croptopia:olive',
      ]),

      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        '#croptopia:meat_replacements',
      ]),
    ])
    .transitionalItem(incomplete_pizza)
    .loops(1);

  //Pineapple Pepperoni Pizza
  event.recipes.create
    .sequenced_assembly(
      ['croptopia:pineapple_pepperoni_pizza'],
      'croptopia:pizza',
      [
        event.recipes.createDeploying(incomplete_pizza, [
          incomplete_pizza,
          'croptopia:pineapple',
        ]),

        event.recipes.createDeploying(incomplete_pizza, [
          incomplete_pizza,
          'croptopia:pineapple',
        ]),

        event.recipes.createDeploying(incomplete_pizza, [
          incomplete_pizza,
          'croptopia:pepperoni',
        ]),
      ]
    )
    .transitionalItem(incomplete_pizza)
    .loops(1);

  //Anchovy Pizza
  event.recipes.create
    .sequenced_assembly(['croptopia:anchovy_pizza'], 'croptopia:pizza', [
      event.recipes.createDeploying(incomplete_pizza, [
        incomplete_pizza,
        'croptopia:anchovy',
      ]),
    ])
    .transitionalItem(incomplete_pizza)
    .loops(1);

  event.recipes.create.deploying('kubejs:raw_sucuk_pizza', [
    'createfood:raw_cheese_pizza',
    'kubejs:sucuk_slice',
  ]);

  event.recipes.create.deploying('kubejs:raw_michelles_lieblingspizza', [
    'kubejs:raw_sucuk_pizza',
    '#forge:cheeses',
  ]);

  event.smelting(
    'kubejs:raw_michelles_lieblingspizza',
    'kubejs:michelles_lieblingspizza'
  );
});
