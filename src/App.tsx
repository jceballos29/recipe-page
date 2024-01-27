import './App.css';
import TopImage from '@/assets/images/image-omelette.jpeg';

function App() {
	return (
		<main>
			<div className='card'>
				<figure>
					<img src={TopImage} alt='Omelette' />
				</figure>
				<article>
					<header>
						<h1>Simple Omelette Recipe</h1>
						<p>
							An easy and quick dish, perfect for any meal. This
							classic omelette combines beaten eggs cooked to
							perfection, optionally filled with your choice of
							cheese, vegetables, or meats.
						</p>
					</header>
					<aside>
						<h2>Preparation time</h2>
						<ul>
							<li>
								<strong>Total:</strong> Approximately 10 minutes
							</li>
							<li>
								<strong>Preparation:</strong> 5 minutes
							</li>
							<li>
								<strong>Cooking:</strong> 5 minutes
							</li>
						</ul>
					</aside>
					<section>
						<h3>Ingredients</h3>
						<ul>
							<li>2-3 large eggs</li>
							<li>Salt, to taste</li>
							<li>Pepper, to taste</li>
							<li>1 tablespoon of butter or oil</li>
							<li>
								Optional fillings: cheese, diced vegetables, cooked
								meats, herbs
							</li>
						</ul>
					</section>
					<hr />
					<section>
						<h3>Instructions</h3>
						<ol>
							<li>
								<strong>Beat the eggs:</strong> In a bowl, beat the
								eggs with a pinch of salt and pepper until they are
								well mixed. You can add a tablespoon of water or milk
								for a fluffier texture.
							</li>
							<li>
								<strong>Heat the pan:</strong> Place a non-stick
								frying pan over medium heat and add butter or oil.
							</li>
							<li>
								<strong>Cook the omelette:</strong> Once the butter is
								melted and bubbling, pour in the eggs. Tilt the pan to
								ensure the eggs evenly coat the surface.
							</li>
							<li>
								<strong>Add fillings (optional):</strong> When the
								eggs begin to set at the edges but are still slightly
								runny in the middle, sprinkle your chosen fillings
								over one half of the omelette.
							</li>
							<li>
								<strong>Fold and serve:</strong> As the omelette
								continues to cook, carefully lift one edge and fold it
								over the fillings. Let it cook for another minute,
								then slide it onto a plate.
							</li>
							<li>
								<strong>Enjoy:</strong> Serve hot, with additional
								salt and pepper if needed.
							</li>
						</ol>
					</section>
					<hr />
					<section>
						<h3>Nutrition</h3>
						<p>
							The table below shows nutritional values per serving
							without the additional fillings.
						</p>
						<div className='table'>
							<div className='row'>
								<span>Calories</span>
								<strong>277kcal</strong>
							</div>
							<hr />
							<div className='row'>
								<span>Carbs</span>
								<strong>0g</strong>
							</div>
							<hr />
							<div className='row'>
								<span>Protein</span>
								<strong>20g</strong>
							</div>
							<hr />
							<div className='row'>
								<span>Fat</span>
								<strong>22g</strong>
							</div>
						</div>
					</section>
				</article>
			</div>
		</main>
	);
}

export default App;
