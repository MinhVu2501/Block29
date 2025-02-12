import { useState } from "react";
import { createPlayer } from "./puppy-bowl.jsx";

function PlayerForm({ setPlayers }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = await createPlayer({ name, owner, team });
    setPlayers((prev) => [...prev, { ...newPlayer, isUserCreated: true }]);
    setName("");
    setOwner("");
    setTeam("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Puppy Name" required />
      <input value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Owner Name" required />
      <input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team Name" required />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
