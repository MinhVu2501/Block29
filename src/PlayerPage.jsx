import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPlayerById } from "./puppy-bowl.jsx";

function PlayerPage() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      const data = await fetchPlayerById(playerId);
      setPlayer(data);
    };
    getPlayer();
  }, [playerId]);
  

  if (!player) return <p>Loading...</p>;

return (
  <div>
    <h1>{player.name}</h1>
    <img 
          src={player.imageUrl} 
          alt={player.name} />
    <p>Owner: {player.owner}</p>
    <p>Team: {player.team?.name || "No Team"}</p>
  </div>
);

}

export default PlayerPage;
