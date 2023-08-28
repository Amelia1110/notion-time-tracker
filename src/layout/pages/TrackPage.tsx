import { CheckCircleFilled, DeleteOutlined, PauseOutlined, PlayCircleFilled} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

export default function TrackPage() {
    const [stopwatchOn, toggleStopwatch] = useState(false);
    const [startTime, setStartTime] = useState<Date>(new Date(2023, 0, 0, 0, 0, 0));
    const [time, setTime] = useState<Date>(new Date(2023, 0, 0, 0, 0, 0));
    const [pauseStart, setPauseStart] = useState<Date>(new Date(2023, 0, 0, 0, 0, 0));
    const [timePaused, setTimePaused] = useState(0);
    const [pauseOn, setPauseOn] = useState(false);
    const timerRef = useRef<any | null>(null);

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

        if (startTime.getTime() === time.getTime()) {
            setStartTime(new Date());
        } else {
            setPauseOn(false);
            const currentTime = new Date();
            setTimePaused(timePaused + currentTime.getTime() - pauseStart.getTime());
        }
    };

    const pauseStopwatch = () => {
        if (!pauseOn) {
            toggleStopwatch(false);
            setPauseOn(true);
            setPauseStart(new Date());

            if (timerRef.current !== null) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };

    // Start recording time once startTime changes
    useEffect(() => {
        if (startTime && stopwatchOn) {
            timerRef.current = window.setInterval(() => {
                setTime(findDiff());
            }, 1000);
        }

        function findDiff(): Date {
            const currentTime = new Date();

            const secDiff = startTime ? (currentTime.getTime() - startTime?.getTime()) / 1000 - (timePaused / 1000): undefined;

            return new Date(2023, 0, 0, 0, 0, secDiff);
        }

    }, [startTime, stopwatchOn, timePaused]);

    const stopStopwatch = (command: string) => {
        if (command === "Save") {
            // add something to save to database
        }

        toggleStopwatch(false);

        setStartTime(new Date(2023, 0, 0, 0, 0, 0))
        setTime(new Date(2023, 0, 0, 0, 0, 0));
        setTimePaused(0);
        
        if (timerRef.current !== null) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
    };
    
    const formatTime = () => {
        const hours = time?.getHours();
        const minutes = time?.getMinutes();
        const seconds = time?.getSeconds();
      
        const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
      
        if (hours ? hours > 0 : false) {
          return <h1 className="text-8xl">{`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}</h1>
        } else {
          return <h1 className="text-8xl">{`${formattedMinutes}:${formattedSeconds}`}</h1>
        }
    };

    return (
        <div className="h-[calc(100vh_-_42px)] grid place-content-center">
            {formatTime()}
            <div className="flex justify-center gap-5 items-center">
                <PauseOutlined className="text-xl" onClick={pauseStopwatch}/>
                {renderPlayPause()}
                <DeleteOutlined className="text-xl" onClick={() => stopStopwatch("Delete")}/>
            </div>
        </div>
    )
}