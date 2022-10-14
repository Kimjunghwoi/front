import {useEffect, useRef, useState} from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


    // const [timer, setTimer] = useState(10);
    // const id = useRef<number>();
    //
    // const clear=()=>{
    //     window.clearInterval(id.current)
    // }




    // const remainingTime = useRef<number>();
    // const children = (remainingTime: number) => {
    //     const minutes = Math.floor((remainingTime % 3600) / 60)
    //     const seconds = remainingTime % 60
    //
    //     return `${minutes}:${seconds}`
    // }

    // useEffect(() => {
    //
    //     id.current = window.setInterval(() => {
    //         setTimer((time: number) => time - 1);
    //     }, 1000)
    //     return () => clear();
    // }, []);
    //
    // useEffect(()=>{
    //     if(timer===0){
    //         clear()
    //     }
    //
    // },[timer])

interface RenderTimeProps {
    remainingTime: number;
}

export default function App() {



    const onClickReset = () => {};
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleRemove = () => {
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        setIsPlaying(!isPlaying);
    };

    const renderTime = (props : RenderTimeProps ) => {
        const { remainingTime } = props;
        if (remainingTime === 0) {
            alert("END!!!!");
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };
    //todo:  RESET 구현 , duration 값 받아서 처리할 수 있게 구현...
    return (
        <div className="App">
            {/*<div>Time left : {timer}</div>*/}
            <CountdownCircleTimer

                isPlaying={isPlaying}
                duration={20}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ shouldRepeat: false, delay: 1})}
                >
                  {renderTime}
            </CountdownCircleTimer>
            <Stack spacing={2} direction="row">
                <Button onClick={handleRemove} variant="contained" color="error">
                    STOP
                </Button>
                <Button onClick={handleReset} variant="contained" color="info">RESET</Button>
            </Stack>
        </div>
    );
}