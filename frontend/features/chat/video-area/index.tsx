import React, { FunctionComponent, useContext } from "react";
import Video from "../../../components/video";
import { VIDEO_OPTIONS } from "../../../consts/webrtc/VIDEO_TYPE";
import { IDeviceSettings } from "../../../lib/webrtc/WebRtcController";
import { Context as RouletteContext } from "../../../context/roulette";
import Camera from "../../../assets/video.svg";
import CameraOff from "../../../assets/no-video.svg";
import Microphone from "../../../assets/microphone.svg";
import MicrophoneOff from "../../../assets/no-microphone.svg";
import css from "./index.module.css";

interface IProps {
  deviceSettings: IDeviceSettings;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  onToggleCamera(): void;
  onToggleMicrophone(): void;
  onStart(): void;
}

const VideoArea: FunctionComponent<IProps> = (props) => {
  const { deviceSettings, localStream, remoteStream, onToggleCamera, onToggleMicrophone, onStart } = props;

  const { sessionId, isRouletteStarted, handleStop, handleNext } = useContext(RouletteContext);

  return (
    <>
      <div style={{position: "absolute", left: "10px", bottom: "10px", width: "30vh", height: "auto", zIndex: 100, margin: "2px solid red"}}>
        <Video 
          type={VIDEO_OPTIONS.LOCAL} 
          stream={localStream}
        />
      </div>
      <div className={css.Container}>
        <Video type={VIDEO_OPTIONS.REMOTE} stream={remoteStream} />
        <div className={css.buttonDiv}>
          <div className={css.Controls}>
          {deviceSettings.hasMicrophoneAccess ? (
            <Microphone onClick={() => onToggleMicrophone && onToggleMicrophone()} />
          ) : (
            <MicrophoneOff onClick={() => onToggleMicrophone && onToggleMicrophone()} />
          )}
          {deviceSettings.hasCameraAccess ? (
            <Camera onClick={() => onToggleCamera && onToggleCamera()} />
          ) : (
            <CameraOff onClick={() => onToggleCamera && onToggleCamera()} />
          )}
          </div>
          {isRouletteStarted ? (
            <div style={{marginLeft: "100%"}}>
              <button className={css.endButton} onClick={handleStop}>{sessionId ? "Disconnect" : "Stop"}</button>
              <button className={css.endButton} style={{backgroundColor: !sessionId ? "grey": "#3498db"}} onClick={handleNext} disabled={!sessionId}>Next</button>
            </div>
          ) : (
            <button className={css.endButton} style={{backgroundColor: "#3498db"}} onClick={onStart}>Start</button>
          )}
        </div>
      </div>
    </>
  )
}

export default VideoArea;
