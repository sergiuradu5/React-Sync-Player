import React, { PropsWithChildren, useState } from "react";

interface IPlayerContext {
  registerPlayer: (player: any) => void;
  removePlayer: (player: any) => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  changeCurrentTime: (value: number) => void;
}

const initContext: IPlayerContext = {
  registerPlayer: (player: any) => {},
  removePlayer: (player: any) => {},
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  togglePlay: () => {},
  changeCurrentTime: (value: number) => {},
};

export const PlayerContext = React.createContext<IPlayerContext>(initContext);

interface IPlayerContextProvider extends PropsWithChildren {}

export const PlayerContextProvider = (
  props: PropsWithChildren<IPlayerContextProvider>
) => {
  const [players, setPlayers] = useState<any>({});
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const registerPlayer = (player: any) => {
    if (!players.default) {
      setCurrentTime(0);
      setDuration(player.current?.duration);
    }
    setPlayers((prevVal: any) => {
      if (prevVal.default === undefined) {
        return { ...prevVal, default: player };
      }

      if (prevVal[player.current.id] === undefined) {
        player.current.id = Math.floor(Math.random() * 500);
        return { ...prevVal, [player.current.id]: player };
      } else return prevVal;
    });
  };

  const removePlayer = (player: any) => {
    setPlayers((prevVal: any) => {
      const newPlayers = { ...prevVal };
      delete newPlayers[player.id];
      return newPlayers;
    });
  };

  const togglePlay = () => {
    setIsPlaying((prevVal) => {
      const newVal = !prevVal;
      for (const id in players) {
        if (newVal) players[id].current.play();
        else players[id]?.current.pause();
      }
      return newVal;
    });
  };

  const changeCurrentTime = (value: number) => {
    setCurrentTime(value);
    for (const id in players) {
      if (players[id].current) players[id].current.currentTime = value;
    }
  };
  return (
    <PlayerContext.Provider
      value={{
        registerPlayer,
        isPlaying,
        togglePlay,
        removePlayer,
        currentTime,
        duration,
        changeCurrentTime,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
