'use client'

import React, { useState } from 'react';
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardBody } from '@nextui-org/card';

interface Apparel {
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
}

const ApparelSections: React.FC = () => {
  // Example card data with images
  const initialApparelData: Apparel[] = [
    { name: 'Comfy Lounge Set', description: 'A cozy lounge set for relaxation.', price: 59.99, discount: 15, imageUrl: 'https://image.pollinations.ai/prompt/A%20cozy%20lounge%20set%20for%20relaxation.,%20soft,%20people%20in%20leisure,%20cozy,%20minimalistic,%20neutral,%20modern,%20casual,%20creative,%20Igor%20Kublitskiy' },
    { name: 'Winter Wonderland Sweater', description: 'Stay warm with this festive sweater.', price: 44.99, imageUrl: 'https://image.pollinations.ai/prompt/Stay%20warm%20with%20this%20festive%20sweater.,%20festive,%20people%20in%20winter%20clothing,%20warm,%20playful,%20colorful,%20modern,%20casual,%20creative,%20Marie%20Liljegren' },
    { name: 'Classic Denim Jeans', description: 'Timeless denim jeans for everyday wear.', price: 34.99, imageUrl: 'https://image.pollinations.ai/prompt/Timeless%20denim%20jeans%20for%20everyday%20wear.,%20classic,%20people%20in%20casual%20wear,%20comfortable,%20simple,%20blue,%20modern,%20casual,%20classic,%20Laura%20Chouette' },
    { name: 'Athletic Performance Shorts', description: 'Optimize your workout with these shorts.', price: 29.99, imageUrl: 'https://image.pollinations.ai/prompt/Optimize%20your%20workout%20with%20these%20shorts.,%20sporty,%20people%20in%20athletic%20wear,%20energetic,%20bold,%20active,%20modern,%20athletic,%20dynamic,%20Julia%20Nagel' },
    { name: 'Casual Weekend Hoodie', description: 'Relax in style with this hoodie.', price: 39.99, imageUrl: 'https://image.pollinations.ai/prompt/Relax%20in%20style%20with%20this%20hoodie.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20neutral,%20modern,%20casual,%20classic,%20Tharindu%20Perera' },
    { name: 'Elegant Evening Dress', description: 'Dazzle in this elegant evening dress.', price: 89.99, imageUrl: 'https://image.pollinations.ai/prompt/Dazzle%20in%20this%20elegant%20evening%20dress.,%20elegant,%20people%20in%20formal%20wear,%20sophisticated,%20fancy,%20luxurious,%20modern,%20formal,%20chic,%20Dmitriy%20Baryshev' },
    { name: 'Casual Sneaker Collection', description: 'Step out in comfort and style.', price: 49.99, imageUrl: 'https://image.pollinations.ai/prompt/Step%20out%20in%20comfort%20and%20style.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20bold,%20modern,%20casual,%20classic,%20Tharindu%20Perera' },
    { name: 'Cozy Blanket Scarf', description: 'Wrap yourself in warmth and fashion.', price: 24.99, imageUrl: 'https://image.pollinations.ai/prompt/Wrap%20yourself%20in%20warmth%20and%20fashion.,%20cozy,%20people%20in%20winter%20clothing,%20warm,%20soft,%20colorful,%20modern,%20casual,%20creative,%20Marie%20Liljegren' },
    { name: 'Vintage Denim Jacket', description: 'Add a touch of vintage to your style.', price: 59.99, imageUrl: 'https://image.pollinations.ai/prompt/Add%20a%20touch%20of%20vintage%20to%20your%20style.,%20vintage,%20people%20in%20casual%20wear,%20retro,%20nostalgic,%20blue,%20modern,%20casual,%20classic,%20Yen%20Chen' },
    { name: 'Active Lifestyle Leggings', description: 'Embrace an active lifestyle with these leggings.', price: 32.99, imageUrl: 'https://image.pollinations.ai/prompt/Embrace%20an%20active%20lifestyle%20with%20these%20leggings.,%20sporty,%20people%20in%20athletic%20wear,%20energetic,%20bold,%20active,%20modern,%20athletic,%20dynamic,%20Julia%20Nagel' },
    { name: 'Stylish Sun Hat', description: 'Stay cool and stylish in the sun.', price: 19.99, imageUrl: 'https://image.pollinations.ai/prompt/Stay%20cool%20and%20stylish%20in%20the%20sun.,%20stylish,%20people%20in%20casual%20wear,%20sunshine,%20chic,%20vibrant,%20modern,%20casual,%20creative,%20Igor%20Kublitskiy' },
    { name: 'Minimalist Watch Collection', description: 'Elevate your look with simplicity.', price: 79.99, imageUrl: 'https://image.pollinations.ai/prompt/Elevate%20your%20look%20with%20simplicity.,%20minimalist,%20accessories,%20sleek,%20clean,%20modern,%20casual,%20classic,%20Laura%20Chouette' },
    { name: 'Summer Vibes T-Shirt', description: 'Feel the summer vibes with this tee.', price: 22.99, imageUrl: 'https://image.pollinations.ai/prompt/Feel%20the%20summer%20vibes%20with%20this%20tee.,%20summer,%20people%20in%20casual%20wear,%20colorful,%20vibrant,%20bold,%20modern,%20casual,%20creative,%20Tharindu%20Perera' },
    { name: 'Chic Leather Backpack', description: 'Upgrade your style with a chic backpack.', price: 69.99, imageUrl: 'https://image.pollinations.ai/prompt/Upgrade%20your%20style%20with%20a%20chic%20backpack.,%20chic,%20accessories,%20leather,%20modern,%20sleek,%20neutral,%20bold,%20classic,%20Dmitriy%20Baryshev' },
    { name: 'Sporty Sunglasses', description: 'Shield your eyes in style.', price: 18.99, imageUrl: 'https://image.pollinations.ai/prompt/Shield%20your%20eyes%20in%20style.,%20sporty,%20accessories,%20sunglasses,%20modern,%20bold,%20active,%20vibrant,%20classic,%20Tharindu%20Perera' },
    { name: 'Casual Canvas Shoes', description: 'Step out comfortably with canvas shoes.', price: 27.99, imageUrl: 'https://image.pollinations.ai/prompt/Step%20out%20comfortably%20with%20canvas%20shoes.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20neutral,%20modern,%20casual,%20classic,%20Laura%20Chouette' },
  ];

  const [apparelData, setApparelData] = useState<Apparel[]>(initialApparelData);

  // Titles and descriptions for each section
  const sectionTitles = ['Favorite Item', 'Season Sale', 'Shirts Collection', 'Accessories'];
  const sectionDescriptions = [
    'Discover our most loved items.',
    'Explore amazing deals for the season.',
    'Elevate your style with our latest shirts.',
    'Add the perfect finishing touch with our accessories.',
  ];

  // Divide the apparel data into four sections
  const sections = Array.from({ length: sectionTitles.length }, (_, index) => {
    const startIndex = index * 4;
    return apparelData.slice(startIndex, startIndex + 4);
  });

  const renderSection = (section: Apparel[], title: string, description: string) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4 overflow-x-auto">
        {section.map((item, index) => (
          <Card key={index} radius="lg" className="border-none max-w-[250px]">
            <Image alt={item.name} className="object-cover" height={200} src={item.imageUrl} width={250} />
            <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{item.discount ? 'Available with discount!' : 'Available soon.'}</p>
            </CardFooter>
            <CardBody>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg">${item.price}</span>
                {item.discount && (
                  <span className="text-red-500 line-through">${(item.price + item.discount).toFixed(2)}</span>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index}>{renderSection(section, sectionTitles[index], sectionDescriptions[index])}</div>
        ))}
      </div>
    </div>
  );
};

export default ApparelSections;