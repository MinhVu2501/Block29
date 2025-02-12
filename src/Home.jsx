import { useState, useEffect } from "react";
import { fetchPlayers } from "./puppy-bowl.jsx";
import PlayerList from "./PlayerList.jsx";
import SearchBar from "./SearchBar.jsx";
import PlayerForm from "./PlayerForm.jsx";

function Home() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    getPlayers();
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <PlayerForm setPlayers={setPlayers} />
      <PlayerList players={filteredPlayers} setPlayers={setPlayers} />
    </div>
  );
}

export default Home;
