import './Main.css';
import { animals } from '../../data.js';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
