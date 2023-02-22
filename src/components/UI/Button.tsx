import { Button as MuiButton, ButtonProps } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { PropsWithChildren } from "react";

interface IButtonProps extends ButtonProps {
  isPlaying: boolean;
}

export const PlayButton = (props: PropsWithChildren<IButtonProps>) => {
  const { children, isPlaying, ...restProps } = props;
  return (
    <MuiButton color="primary" variant="contained" {...restProps}>
      {!isPlaying ? <PlayArrowIcon /> : <PauseIcon />}
      {props.children}
    </MuiButton>
  );
};
