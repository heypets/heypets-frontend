import { useState } from "react";
import style from "./Snackbar.module.css";
import cn from "classnames";

interface SnackBarProps {
  text: string;
  textClose: string;
}

export default function SnackBar({ text, textClose }: SnackBarProps) {
  const [close, setClose] = useState(false);
  return close === false ? (
    <div className={cn("body_2", style["snack-bar"])}>
      {text}
      <div className={cn("sub_head_3")} onClick={() => setClose(true)}>
        {textClose}
      </div>
    </div>
  ) : (
    ""
  );
}
