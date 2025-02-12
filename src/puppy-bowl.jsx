const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft";

export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
};

export const fetchPlayerById = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(`Error fetching player ${playerId}:`, error);
  }
};

export const createPlayer = async (playerData) => {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (error) {
    console.error("Error creating player:", error);
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error(`Error deleting player ${playerId}:`, error);
  }
};

