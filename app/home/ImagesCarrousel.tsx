import { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";

interface ImagesCarrouselProps {
  images: string[];
  interval?: number;
}

const ImagesCarrousel: React.FC<ImagesCarrouselProps> = ({
  images,
  interval = 5000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="relative">
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`${index === currentImageIndex ? "block" : "hidden"}`}
        />
      ))}
      {images.length > 1 && (
        <div>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${
                index === currentImageIndex ? "bg-white" : "bg-white/70"
              } absolute bottom-4 z-50 rounded-full w-2 h-2 inline-block m-1`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImagesCarrousel;
