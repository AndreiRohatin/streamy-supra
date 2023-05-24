import React, { FunctionComponent, useRef, useState, useContext } from "react";
import cn from "classnames";
import Scrollbars from "react-custom-scrollbars";
import { ChatMessage, Context as RouletteContext } from "../../../../context/roulette";
import Button from "../../../../components/button";
import SendButton from "../../../../assets/send-text.svg"
import Text, { TextOptions } from "../../../../components/text";
import MessageInput from "../../../../components/message-input";
import css from "./index.module.css";

const TextChat: FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const { socket, sessionId, isRouletteStarted, chatMessages, handleSendChatMessage } = useContext(RouletteContext);

  const messageInputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLDivElement>) => {
    setValue(e.target.innerText);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { charCode } = e;
    if (charCode === 13) {
      e.preventDefault();
      handleSendMessage();

      return e.currentTarget.innerHTML = "";
    }
  };
  
  const handleSendMessage = () => {
    if (!value || value.trim() === "" || !socket || !sessionId) {
      return;
    }

    const message: ChatMessage = {
      id: socket.id,
      message: value.trim(),
      sessionId
    };

    handleSendChatMessage(message);

    setValue("");
  };

  return (
    <div className={css.Container}>
    <div style={{backgroundColor: "#24282D", paddingLeft: "30px", paddingBottom: "15px"}}>
    </div>
      <div className={css.MessagesContainer}>
      <Scrollbars universal autoHide>
        {isRouletteStarted && (
          <div className={cn(css.SearchingInfo, { [css.Found]: sessionId })}>
            <Text type={TextOptions.TEXT}>{ !sessionId ? "Searching for a partner..." : "Partner is found, start a conversation!"}</Text>
          </div>
        )}
        <div className={css.MessagesWrapper}>
          {chatMessages.map((m: ChatMessage, i) => {
            const isMe = m.id === socket?.id;
            
            return (
              <div className={css.Message} style={{textAlign: isMe ? "right" : "left"}} key={i}>
                <div className={isMe ? css.sent : css.received} >
                  <Text type={TextOptions.TEXT}>{m.message}</Text>
                </div>
              </div>
            );
          })} 
        </div>
      </Scrollbars>
      </div>
      <div className={css.MessageInputWrapper}>
        <MessageInput 
          ref={messageInputRef}
          value={value}
          placeholder="Type something..."
          onInput={handleInput}
          onKeyPress={handleKeyPress}
        />

        <SendButton style={{marginTop: "15px", marginRight: "10px"}} onClick={handleSendMessage}/>
      </div>
    </div>
  )
}

export default TextChat;
