import React, { FunctionComponent } from "react";
import css from "./index.module.css";
import TextChat from "./text-chat";

const TextArea: FunctionComponent = () => {

  return (
    <div className={css.Container}>
      <TextChat />
    </div>
  )
}

export default TextArea;
