import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER = 3000;
  const [remainTime,setRemainTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL")
      setRemainTime(prev => prev - 10);
    },10)
    return () => {
      clearInterval(interval);
    }
  },[])

  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    },TIMER);
    return () => {
      console.log("Clear Timer")
      clearTimeout(timer)
    }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainTime} max={TIMER}/>
    </div>
  );
}
