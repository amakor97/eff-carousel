export default function Btn({text, onEventHandler}) {
  return (
    <button onClick={onEventHandler}>{text}</button>
  );
}