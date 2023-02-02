import './Button.css';

export default function Button() {
  const song = new Audio(`MooseBorne.wav`);

  const playSong = () => {
    song.volume = 0.5;
    song.loop = true;
    song.play();
  };

  return <button onClick={playSong}>Play Song</button>;
}
