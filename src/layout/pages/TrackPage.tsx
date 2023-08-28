import { CheckCircleFilled, DeleteOutlined, PauseOutlined, PlayCircleFilled} from "@ant-design/icons";
import { useRef, useState } from "react";

export default function TrackPage() {
    const [stopwatchOn, toggleStopwatch] = useState(false);
    const [time, setTime] = useState(0);
    const timerRef = useRef<number | null>(null);

    const renderPlayPause = () => {
        if (stopwatchOn) {
            return (
                <CheckCircleFilled className="text-2xl text-red-700" onClick={() => stopStopwatch("Save")}/>
            )
        } else {
            return (
                <PlayCircleFilled className="text-2xl" onClick={startStopwatch}/>
            )
        }
    }

    const startStopwatch = () => {
        toggleStopwatch(true);
        timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 1); // Increment time by 1 second
        }, 1000);
    };

    const stopStopwatch = (command: string) => {
        if (command === "Save") {
            // add something to save to database
        }

        toggleStopwatch(false);
        if (command !== "Pause") setTime(0);
        
        if (timerRef.current !== null) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
    };
    
    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
      
        const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
      
        if (hours > 0) {
          return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        } else {
          return `${formattedMinutes}:${formattedSeconds}`;
        }
    };

    return (
        <div className="h-[calc(100vh_-_42px)] grid place-content-center">
            <h1 className="text-8xl">{formatTime(time)}</h1>
            <div className="flex justify-center gap-5 items-center">
                <PauseOutlined className="text-xl" onClick={() => stopStopwatch("Pause")}/>
                {renderPlayPause()}
                <DeleteOutlined className="text-xl" onClick={() => stopStopwatch("Delete")}/>
            </div>
        </div>
    )
}