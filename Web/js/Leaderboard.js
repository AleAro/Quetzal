async function fetchTopPlayers() {
  try {
    const leaderboard_response = await fetch(
      `${API_BASE_URL}/stats/top10`,
      {
        method: "GET",
      }
    );

    const topPlayers = await leaderboard_response.json();
    const leaderboardTable = document
      .getElementById("leaderboardTable")
      .getElementsByTagName("tbody")[0];

    topPlayers.forEach((player, index) => {
      const row = leaderboardTable.insertRow();

      const rankCell = row.insertCell();
      const userNameCell = row.insertCell();
      const finishedRunsCell = row.insertCell();

      rankCell.innerHTML = index + 1;
      userNameCell.innerHTML = player.user_name;
      finishedRunsCell.innerHTML = player.finished_runs;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchTopPlayers();
