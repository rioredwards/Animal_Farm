import './Main.css';
import { animals } from '../../data.js';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';

export default function Main() {
  const song = new Audio(`MooseBorne.wav`);

  const playSong = () => {
    song.volume = 0.5;
    song.loop = true;
    song.play();
  };

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <button onClick={playSong}>Play Song</button>;
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          top={animal.top}
          left={animal.left}
          sound={animal.sound}
        />
      ))}
    </main>
  );
}
