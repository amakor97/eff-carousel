import btn from "./btn.module.css";

export default function Btn({text, onEventHandler}) {
  return (
    <button className={btn.btn} onClick={onEventHandler}>{text}</button>
  );
}