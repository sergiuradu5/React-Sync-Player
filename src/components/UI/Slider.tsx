import { Box, Slider, styled, Typography } from "@mui/material";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

interface ITimeSlider {
  duration: number;
  currentTime: number;
  onChangeCurrentTime: (value: number) => void;
}

export const TimeSlider = (props: ITimeSlider) => {
  const { duration, currentTime, onChangeCurrentTime } = props;

  function formatDuration(value?: number) {
    if (value === undefined) {
      return ``;
    }
    if (value === 0) {
      return `0:00`;
    }
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={currentTime}
        min={0}
        step={0.1}
        max={duration}
        onChange={(_, value) => onChangeCurrentTime(value as number)}
        sx={{
          color: "primary",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 4,
            height: 4,
            "&:before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px primary`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(currentTime)}</TinyText>
        <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
      </Box>
    </Box>
  );
};
