import { useEffect } from "react";

import HomeScreen from "pages/home-screen";
import { GamepadsProvider } from "contexts/GamepadsContext";
import Development from "components/utils/Development";

import * as homeActions from "store/home/actions";
import useActions from "hooks/useActions";

const App = () => {
  const [getSteamGames] = useActions([homeActions.getSteamGames]);

  useEffect(() => {
    getSteamGames();
  }, []);

  return (
    <GamepadsProvider>
      <Development>
        <HomeScreen />
      </Development>
      <div id="drawer-container" />
    </GamepadsProvider>
  );
};

export default App;
