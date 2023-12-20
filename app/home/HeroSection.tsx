import { title } from '../../components/primitives';

const HeroSection: React.FC = () => {
  return (
    <div
      className="py-16 px-4 rounded"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className={title({ size: 'lg' })}>
          Welcome to Quiet Lux!
        </h1>
        <p className="text-lg mt-4">
          Discover simple but luxurious wear that speaks volumes in silence.
        </p>
        <button
          className="mt-8 px-6 py-3 rounded-full bg-secondary hover:opacity-80 transition-opacity"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;