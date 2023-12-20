import { subtitle } from '@/components/primitives';

const QuietLuxurySection: React.FC = () => {
  return (
    <div className="bg-background text-text py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className={subtitle({ fullWidth: true })}>
          Quiet Luxury, Silent Wealth
        </h2>
        <p className="text-secondaryText text-lg mt-4">
          Embrace the elegance of simplicity. Our collection represents a blend of refined taste and understated sophistication. Discover the art of quiet luxury and embody the essence of silent wealth.
        </p>
      </div>
    </div>
  );
};

export default QuietLuxurySection;