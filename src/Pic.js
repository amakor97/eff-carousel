import pic from "./pic.module.css";

export default function Pic({picData, onPicSelect}) {
  return (
    <img className={pic.pic} src={picData.path} onClick={onPicSelect}/>
  )
}