import {useEffect, useState} from 'react';
export const useAudio = () =>{
    const [playing, setPlaying] =  useState(false);
    const [audio] =  useState(new Audio('http://streaming.tdiradio.com:8000/house.mp3'));

    const toogle = setPlaying(!playing);

    useEffect(()=>{
        playing ? audio.play() : audio.pause();
    });
    useEffect(()=>{
        audio.addEventListener('ended', () => setPlaying(false));
        return () => audio.removeEventListener('ended', () => setPlaying(false));
    });

    return [playing, toogle]
}