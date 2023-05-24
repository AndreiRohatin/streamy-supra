import React, { FunctionComponent, useEffect, useRef } from "react";
import cn from "classnames";
import { VideoOptionsType, VIDEO_OPTIONS } from "../../consts/webrtc/VIDEO_TYPE";
import css from "./index.module.css";
interface IProps {
  type: VideoOptionsType;
  stream: MediaStream | null;
}

const Video: FunctionComponent<IProps> = (props) => {
  const { type, stream } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);


  return (
    <div className={cn(css.Container, { [css.ContainerLocal]: type === VIDEO_OPTIONS.LOCAL, [css.ContainerRemote]: type === VIDEO_OPTIONS.REMOTE })}>
      <video autoPlay playsInline controls={false} ref={videoRef} />
    </div>
  )
}

export default Video;
