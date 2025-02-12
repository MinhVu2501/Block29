import { Link } from "react-router-dom";
import { deletePlayer } from "./puppy-bowl.jsx";

function PlayerCard({ player, setPlayers }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      const success = await deletePlayer(player.id);
      if (success) {
        setPlayers((prev) => prev.filter((p) => p.id !== player.id));
      }
    }
  };

  return (
    <div>
      <h3>{player.name}</h3>
      <Link to={`/player/${player.id}`}>See Details</Link>
      {player.isUserCreated && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default PlayerCard;
