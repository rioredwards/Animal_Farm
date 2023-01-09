import './Animal.css';

export default function Animal(props) {
  const sound = new Audio(`${props.sound}.wav`);

  const playSound = () => {
    sound.volume = 0.5;
    sound.play();
  };

  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img onClick={playSound} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <p className="name">{props.name}</p>
      <p>{props.says}</p>
    </div>
  );
}
