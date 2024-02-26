

// App.tsx
import Flag from './Flag';

export default function App() {
  const handleFlagClick = (color: string) => {
    alert(`Color: ${color}, País: Ecuador`);
  };

  return (
    <div className='firstContainer'>
      <Flag onClick={handleFlagClick} />
    </div>
  );
}
