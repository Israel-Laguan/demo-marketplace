const initialProducts = [
  {
    name: "Comfy Lounge Set",
    description: "A cozy lounge set for relaxation.",
    price: 59.99,
    discount: 15,
    images: [
      "https://image.pollinations.ai/prompt/A%20cozy%20lounge%20set%20for%20relaxation.,%20soft,%20people%20in%20leisure,%20cozy,%20minimalistic,%20neutral,%20modern,%20casual,%20creative,%20Igor%20Kublitskiy",
    ],
    quantity: 10,
    isHidden: false,
  },
  {
    name: "Winter Wonderland Sweater",
    description: "Stay warm with this festive sweater.",
    price: 44.99,
    images: [
      "https://image.pollinations.ai/prompt/Stay%20warm%20with%20this%20festive%20sweater.,%20festive,%20people%20in%20winter%20clothing,%20warm,%20playful,%20colorful,%20modern,%20casual,%20creative,%20Marie%20Liljegren",
    ],
    quantity: 15,
    isHidden: false,
  },
  {
    name: "Classic Denim Jeans",
    description: "Timeless denim jeans for everyday wear.",
    price: 34.99,
    images: [
      "https://image.pollinations.ai/prompt/Timeless%20denim%20jeans%20for%20everyday%20wear.,%20classic,%20people%20in%20casual%20wear,%20comfortable,%20simple,%20blue,%20modern,%20casual,%20classic,%20Laura%20Chouette",
    ],
    quantity: 20,
    isHidden: false,
  },
  {
    name: "Athletic Performance Shorts",
    description: "Optimize your workout with these shorts.",
    price: 29.99,
    images: [
      "https://image.pollinations.ai/prompt/Optimize%20your%20workout%20with%20these%20shorts.,%20sporty,%20people%20in%20athletic%20wear,%20energetic,%20bold,%20active,%20modern,%20athletic,%20dynamic,%20Julia%20Nagel",
    ],
    quantity: 12,
    isHidden: false,
  },
  {
    name: "Casual Weekend Hoodie",
    description: "Relax in style with this hoodie.",
    price: 39.99,
    images: [
      "https://image.pollinations.ai/prompt/Relax%20in%20style%20with%20this%20hoodie.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20neutral,%20modern,%20casual,%20classic,%20Tharindu%20Perera",
    ],
    quantity: 18,
    isHidden: false,
  },
  {
    name: "Elegant Evening Dress",
    description: "Dazzle in this elegant evening dress.",
    price: 89.99,
    images: [
      "https://image.pollinations.ai/prompt/Dazzle%20in%20this%20elegant%20evening%20dress.,%20elegant,%20people%20in%20formal%20wear,%20sophisticated,%20fancy,%20luxurious,%20modern,%20formal,%20chic,%20Dmitriy%20Baryshev",
    ],
    quantity: 5,
    isHidden: false,
  },
  {
    name: "Casual Sneaker Collection",
    description: "Step out in comfort and style.",
    price: 49.99,
    images: [
      "https://image.pollinations.ai/prompt/Step%20out%20in%20comfort%20and%20style.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20bold,%20modern,%20casual,%20classic,%20Tharindu%20Perera",
    ],
    quantity: 12,
    isHidden: false,
  },
  {
    name: "Cozy Blanket Scarf",
    description: "Wrap yourself in warmth and fashion.",
    price: 24.99,
    images: [
      "https://image.pollinations.ai/prompt/Wrap%20yourself%20in%20warmth%20and%20fashion.,%20cozy,%20people%20in%20winter%20clothing,%20warm,%20soft,%20colorful,%20modern,%20casual,%20creative,%20Marie%20Liljegren",
    ],
    quantity: 18,
    isHidden: false,
  },
  {
    name: "Vintage Denim Jacket",
    description: "Add a touch of vintage to your style.",
    price: 59.99,
    images: [
      "https://image.pollinations.ai/prompt/Add%20a%20touch%20of%20vintage%20to%20your%20style.,%20vintage,%20people%20in%20casual%20wear,%20retro,%20nostalgic,%20blue,%20modern,%20casual,%20classic,%20Yen%20Chen",
    ],
    quantity: 10,
    isHidden: false,
  },
  {
    name: "Active Lifestyle Leggings",
    description: "Embrace an active lifestyle with these leggings.",
    price: 32.99,
    images: [
      "https://image.pollinations.ai/prompt/Embrace%20an%20active%20lifestyle%20with%20these%20leggings.,%20sporty,%20people%20in%20athletic%20wear,%20energetic,%20bold,%20active,%20modern,%20athletic,%20dynamic,%20Julia%20Nagel",
    ],
    quantity: 15,
    isHidden: false,
  },
  {
    name: "Stylish Sun Hat",
    description: "Stay cool and stylish in the sun.",
    price: 19.99,
    images: [
      "https://image.pollinations.ai/prompt/Stay%20cool%20and%20stylish%20in%20the%20sun.,%20stylish,%20people%20in%20casual%20wear,%20sunshine,%20chic,%20vibrant,%20modern,%20casual,%20creative,%20Igor%20Kublitskiy",
    ],
    quantity: 20,
    isHidden: false,
  },
  {
    name: "Minimalist Watch Collection",
    description: "Elevate your look with simplicity.",
    price: 79.99,
    images: [
      "https://image.pollinations.ai/prompt/Elevate%20your%20look%20with%20simplicity.,%20minimalist,%20accessories,%20sleek,%20clean,%20modern,%20casual,%20classic,%20Laura%20Chouette",
    ],
    quantity: 10,
    isHidden: false,
  },
  {
    name: "Summer Vibes T-Shirt",
    description: "Feel the summer vibes with this tee.",
    price: 22.99,
    images: [
      "https://image.pollinations.ai/prompt/Feel%20the%20summer%20vibes%20with%20this%20tee.,%20summer,%20people%20in%20casual%20wear,%20colorful,%20vibrant,%20bold,%20modern,%20casual,%20creative,%20Tharindu%20Perera",
    ],
    quantity: 25,
    isHidden: false,
  },
  {
    name: "Chic Leather Backpack",
    description: "Upgrade your style with a chic backpack.",
    price: 69.99,
    images: [
      "https://image.pollinations.ai/prompt/Upgrade%20your%20style%20with%20a%20chic%20backpack.,%20chic,%20accessories,%20leather,%20modern,%20sleek,%20neutral,%20bold,%20classic,%20Dmitriy%20Baryshev",
    ],
    quantity: 12,
    isHidden: false,
  },
  {
    name: "Sporty Sunglasses",
    description: "Shield your eyes in style.",
    price: 18.99,
    images: [
      "https://image.pollinations.ai/prompt/Shield%20your%20eyes%20in%20style.,%20sporty,%20accessories,%20sunglasses,%20modern,%20bold,%20active,%20vibrant,%20classic,%20Tharindu%20Perera",
    ],
    quantity: 25,
    isHidden: false,
  },
  {
    name: "Casual Canvas Shoes",
    description: "Step out comfortably with canvas shoes.",
    price: 27.99,
    images: [
      "https://image.pollinations.ai/prompt/Step%20out%20comfortably%20with%20canvas%20shoes.,%20casual,%20people%20in%20casual%20wear,%20comfortable,%20easygoing,%20neutral,%20modern,%20casual,%20classic,%20Laura%20Chouette",
    ],
    quantity: 30,
    isHidden: false,
  },
];

export { initialProducts };
