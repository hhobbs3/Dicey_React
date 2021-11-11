import { useState, useEffect } from "react";
import axios from 'axios'

const LootRoll = () => {

    const [challenge, setChallenge] = useState("0-4");
	const [treasure_type, setTreasureType] = useState("i");
    const [id, setId] =useState('0');
    const [lootJson, setLootJson] = useState("");

	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = "https://bmv6vzzbuk.execute-api.us-east-1.amazonaws.com/dev";
		axios.get(apiUrl, lootJson).then((repos) => {
		const allRepos = repos.data;
		setAppState({ loading: false, repos: allRepos });
		});
	}, [setAppState]);

    const handleGet = (e) => {

        /*id = event['id']
        challenge = event['challenge']
        treasure_type*/
        const max = 100;
        const min = 0;
        //const roll = Math.floor(Math.random() * (max - min + 1) + min);
        const roll = 12;
        console.log()
        setId(String(treasure_type) + String(challenge) + String(roll));
        
		setLootJson(JSON.stringify({id, challenge, treasure_type}));
        console.log("treasure_type: " + treasure_type);
        console.log("challenge:" + challenge);
        console.log("roll: " + roll);
        console.log("id: " + id);
        console.log("lootJson: " + lootJson);
        
        e.preventDefault();
		const apiUrl = "https://bmv6vzzbuk.execute-api.us-east-1.amazonaws.com/dev";
        axios.get(apiUrl, lootJson)
          .then(function (response) {
              console.log("response" + JSON.stringify(response))
			  alert("Successfully received treasure table value")
          })
          .catch(function (error) {
              console.log(error)
			  alert("Failed to insert into treasure table")
          })

        console.log("treasure_type: " + treasure_type);
        console.log("challenge:" + challenge);
        console.log("roll: " + roll);
        console.log("id: " + id);
        console.log("lootJson: " + lootJson);
	}

    return (
        <div className="loot-roll">
            <div class="container-md">
		<form class="col-lg-6 offset-lg-3 " onSubmit={handleGet}>

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

		</form>
		<div>
			<button class="col-lg-6 offset-lg-3 " onClick={handleGet}>Roll for Treasure</button>
		</div>

	</div>

        </div>
     );
}
 
export default LootRoll;