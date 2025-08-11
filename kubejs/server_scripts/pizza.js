ServerEvents.recipes((event) => {
	let croptopia_pizzas = [
		'croptopia:pizza',
		'croptopia:pineapple_pepperoni_pizza',
		'croptopia:cheese_pizza',
		'croptopia:supreme_pizza',
		'croptopia:anchovy_pizza',
	];

	for (let pizza of croptopia_pizzas) {
		event.remove({
			output: pizza,
		});
	}

	event.remove({ type: 'create:automatic_shapeless' });

	event.recipes.create.filling('createfood:pizza_dough_tomato_sauce', [
		'createfood:pizza_dough',
		Fluid.of('delightfulcreators:tomato_sauce', 333),
	]);

	event.recipes.create.deploying('kubejs:raw_sucuk_pizza', ['createfood:raw_cheese_pizza', 'kubejs:sucuk_slice']);

	event.recipes.create.deploying('kubejs:raw_michelles_lieblingspizza', ['kubejs:raw_sucuk_pizza', '#forge:cheeses']);

	event.smelting('kubejs:michelles_lieblingspizza', 'kubejs:raw_michelles_lieblingspizza');
	event.smoking('kubejs:michelles_lieblingspizza', 'kubejs:raw_michelles_lieblingspizza');
	event.campfireCooking('kubejs:michelles_lieblingspizza', 'kubejs:raw_michelles_lieblingspizza');
});
