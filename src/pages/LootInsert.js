import { useState, useEffect } from "react";
import axios from 'axios'


function LootInsert () {

	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = "https://bmv6vzzbuk.execute-api.us-east-1.amazonaws.com/dev";
		axios.post(apiUrl, lootJson).then((repos) => {
		const allRepos = repos.data;
		setAppState({ loading: false, repos: allRepos });
		});
	}, [setAppState]);


	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const [challenge, setChallenge] = useState("0_4");
	const [treasure_type, setTreasureType] = useState("i");
	const [probability_min_val, setProbMin] = useState(0);
	const [probability_max_val, setProbMax] = useState(0);
	const [coin_type, setCoinType] = useState("cp");
	const [coin_dice_number, setCoinDiceNumber] = useState(0);
	const [coin_dice_size, setCoinDiceSize] = useState(0);
	const [valuable_value, setValuableValue] = useState(0);
	const [valuables_dice_number, setValuablesDiceNumber] = useState(0);
	const [valuables_dice_size, setValuablesDiceSize] = useState(0);
	const [primary_magic, setPrimaryMagic] = useState(0);
	const [primary_magic_dice_number, setPrimaryMagicDiceNumber] = useState(0);
	const [primary_magic_dice_size, setPrimaryMagicDiceSize] = useState(0);
	const [secondary_magic, setSecondaryMagic] = useState(0);
	const [secondary_magic_dice_number, setSecondaryMagicDiceNumber] = useState(0);
	const [secondary_magic_dice_size, setSecondaryMagicDiceSize] = useState(0);

	const [lootJson, setLootJson] = useState("");
	const [requestOptions, setRequestOptions] = useState("");

	var myHeaders = new Headers();


	const handleChange = (event) => {
        setLootJson(JSON.stringify({challenge, probability_min_val, probability_max_val,
		coin_type, coin_dice_number, coin_dice_size, valuable_value, valuables_dice_number,
		valuables_dice_size, primary_magic, primary_magic_dice_number, primary_magic_dice_size,
		secondary_magic, secondary_magic_dice_number, secondary_magic_dice_size}))
    }

    const handleSubmit = (e) => {
		setLootJson(JSON.stringify({challenge, treasure_type, probability_min_val, probability_max_val,
		coin_type, coin_dice_number, coin_dice_size, valuable_value, valuables_dice_number,
		valuables_dice_size, primary_magic, primary_magic_dice_number, primary_magic_dice_size,
		secondary_magic, secondary_magic_dice_number, secondary_magic_dice_size}))

        e.preventDefault()
		const apiUrl = "https://bmv6vzzbuk.execute-api.us-east-1.amazonaws.com/dev";
        axios.post(apiUrl, lootJson)
          .then(function (response) {
              console.log("response" + JSON.stringify(response))
			  alert("Successfully inserted into treasure table")
          })
          .catch(function (error) {
              console.log(error)
			  alert("Failed to insert into treasure table")
          })
	}

	const handleGet = (e) => {

        e.preventDefault()
		const apiUrl = "https://bmv6vzzbuk.execute-api.us-east-1.amazonaws.com/dev";
        axios.get(apiUrl)
          .then(function (response) {
              console.log("response" + JSON.stringify(response))
			  alert("Successfully inserted into Loot Table in AWS")
          })
          .catch(function (error) {
              console.log(error)
			  alert("Failed to insert into Loot Table in AWS")
          })
	}

  return (
  <>
	<div class="container-fluid p-5 bg-primary text-white text-center">
		<h1>Loot Insertion</h1>
		<p>Resize this responsive page to see the effect!</p>
	</div>

	<div class="col-lg-6 offset-lg-3 ">
		<p>Use this form to insert data into the Loot table found at <a href="https://console.aws.amazon.com/dynamodbv2/home?region=us-east-1#item-explorer?initialTagKey=&table=treasure ">Treasure Table</a> </p>

	</div>
	<div class="container-md">
		<form class="col-lg-6 offset-lg-3 " onSubmit={handleSubmit}>

			{/* Level Challenge */}
			<div class="mb-3">
			<label for="challenge" class="form-lable">Level Challenge :</label>
			<select id="challenge" class="me-auto" name="challenge"  onClick={(e) => setChallenge(e.target.value)}>
				<option value="0_4">0-4</option>
				<option value="5_10">5-10</option>
				<option value="11_16">11-16</option>
				<option value="17+">17+</option>
			</select>
			</div>

			{/* Type */}
			<label for="treasure_type" class="form-lable">Type :</label>
			<select id="treasure_type" name="treasure_type" onClick={(e) => setTreasureType(e.target.value)}>
				<option value="i">Individual</option>
				<option value="h">Hoard</option>
			</select>
			<br />

			{/* Probability Min */}
			<label>Probability Min :
				<input type="number" value={probability_min_val} min={0} onChange={(e) => setProbMin(e.target.value)} />
			</label> <br />

			{/* Probability Max */}
			<label>Probability Max :
				<input type="number" value={probability_max_val} min={0} onChange={(e) => setProbMax(e.target.value)} />
			</label> <br />

			{/* Coin Type */}
			<label for="coin_type" class="form-lable">Coin Type :</label>
			<select id="coin_type" name="coin_type" onClick={(e) => setCoinType(e.target.value)}>
				<option value="cp">Copper</option>
				<option value="sp">Silver</option>
				<option value="gp">Gold</option>
				<option value="pp">Platnum</option>
			</select>
			<br />

			{/* Dice Rolled for Coin Amount */}
			<label>Dice Rolled for Coin Amount :
				<input type="number" value={coin_dice_number} min={0} onChange={(e) => setCoinDiceNumber(e.target.value)} />
			</label> <br />

			{/* Dice Size for Coin Amount */}
			<label>Dice Size for Coin Amount :
				<input type="number" value={coin_dice_size} min={0} onChange={(e) => setCoinDiceSize(e.target.value)} />
			</label> <br />

			{/* Value of each Valuable Object */}
			<label>Value of each Valuable Object :
				<input type="number" value={valuable_value} min={0} onChange={(e) => setValuableValue(e.target.value)} />
			</label> <br />

			{/* Dice Rolled for Valuables */}
			<label>Dice Rolled for Valuables :
				<input type="number" value={valuables_dice_number} min={0} onChange={(e) => setValuablesDiceNumber(e.target.value)} />
			</label> <br />

			{/* Dice Size for Valuables */}
			<label>Dice Size for Valuables :
				<input type="number" value={valuables_dice_size} min={0} onChange={(e) => setValuablesDiceSize(e.target.value)} />
			</label> <br />

			{/* Primary Magic Item Table */}
			<label for="primary_magic" class="form-lable">Primary Magic Item Table :</label>
			<select id="primary_magic" name="primary_magic" onClick={(e) => setPrimaryMagic(e.target.value)}>
				<option value="0">0</option>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
				<option value="D">D</option>
				<option value="E">E</option>
				<option value="F">F</option>
				<option value="G">G</option>
				<option value="H">H</option>
				<option value="I">I</option>
			</select>
			<br />

			{/* Dice Rolled for Primary Magic */}
			<label>Dice Rolled for Primary Magic :
				<input type="number" value={primary_magic_dice_number} min={0} onChange={(e) => setPrimaryMagicDiceNumber(e.target.value)} />
			</label> <br />

			{/* Dice Size for Primary Magic */}
			<label>Dice Size for Primary Magic :
				<input type="number" value={primary_magic_dice_size} min={0} onChange={(e) => setPrimaryMagicDiceSize(e.target.value)} />
			</label> <br />

			{/* Secondary Magic Item Table */}
			<label for="secondary_magic" class="form-lable">Secondary Magic Item Table :</label>
			<select id="secondary_magic" name="secondary_magic" onClick={(e) => setSecondaryMagic(e.target.value)}>
				<option value="0">0</option>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
				<option value="D">D</option>
				<option value="E">E</option>
				<option value="F">F</option>
				<option value="G">G</option>
				<option value="H">H</option>
				<option value="I">I</option>
			</select>
			<br />

			{/* Dice Rolled for Primary Magic */}
			<label>Dice Rolled for Secondary Magic :
				<input type="number" value={secondary_magic_dice_number} min={0} onChange={(e) => setSecondaryMagicDiceNumber(e.target.value)} />
			</label> <br />

			{/* Dice Size for Primary Magic */}
			<label>Dice Size for Secondary Magic :
				<input type="number" value={secondary_magic_dice_size} min={0} onChange={(e) => setSecondaryMagicDiceSize(e.target.value)} />
			</label> <br />

			{/* Submit */}
			<input type="submit" />

		</form>

	</div>
	</>
  );
};

export default LootInsert;
