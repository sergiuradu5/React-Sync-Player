import React, { useEffect, useRef } from "react";
import { Controller } from "../../../../types/Controller";

type Props = {
  onLoadedData?: (e: any) => void;
  controllerRef?: Controller;
  videoUrl: string;
};

export const Player = (props: Props) => {
  const videoRef = useRef<any>(undefined);
  let { onLoadedData, videoUrl, controllerRef } = props;

  // const defaultOnLoadedDataHandler = (e: any) => {
  //   console.log("defaultOnLoadedDataHandler", videoRef.current);
  //   controllerRef?.registerPlayer(videoRef.current);
  // };

  // onLoadedData = onLoadedData ?? defaultOnLoadedDataHandler;

  useEffect(() => { 
    console.log('gets in useEffect', controllerRef)
    console.log(controllerRef);
    controllerRef?.registerPlayer(videoRef.current);
  }, [controllerRef])

  return (
    <video
      onLoadedData={onLoadedData ?? undefined}
      ref={videoRef}
      width="100%"
      height="100%"
      controls={false}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default Player;
