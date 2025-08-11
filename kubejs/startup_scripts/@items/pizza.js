StartupEvents.registry('item', (event) => {
	event.create('raw_michelles_lieblingspizza').displayName("Rohe Michelle's Lieblingspizza");

	event.create('raw_sucuk_pizza').displayName('Rohe Sucuk Pizza');

	event
		.create('michelles_lieblingspizza')
		.food((food) => {
			food.hunger(20);
			food.saturation(2);
		})
		.displayName("Michelle's Lieblingspizza");

	event
		.create('sucuk_pizza')
		.food((food) => {
			food.hunger(20);
			food.saturation(2);
		})
		.displayName('Sucuk Pizza');

	event
		.create('sucuk_slice')
		.food((food) => {
			food.hunger(1);
			food.saturation(0.1);
		})
		.displayName('Sucuk Slice');

	event
		.create('sucuk')
		.food((food) => {
			food.hunger(3).saturation(0.3);
		})
		.displayName('Sucuk');
});
