import './Main.css';
import { animals } from '../../data.js';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import Button from '../Button/Button.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Button />
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
