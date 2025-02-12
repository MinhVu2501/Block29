import PlayerCard from "./PlayerCard.jsx";

function PlayerList({ players, setPlayers }) {
  return (
    <div>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} setPlayers={setPlayers} />
      ))}
    </div>
  );
}

export default PlayerList;
