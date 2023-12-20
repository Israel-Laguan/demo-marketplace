'use client'
import { Image } from "@nextui-org/image";

const PaymentSection: React.FC = () => {
  return (
    <section className="bg-background text-text">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Accepted Payment Methods</h2>
        <p className="text-lg mb-8">
          At Quiet Lux, we offer a seamless and secure shopping experience. We accept a variety of payment methods,
          ensuring your convenience and satisfaction.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center">
            <Image
              alt="Credit Cards"
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent('Futuristic credit cards, simple, cards, futuristic, modern, minimalistic, tech, finance, digital, Sergey Kolesov')}`}
              width={120}
              height={80}
              className="object-cover"
            />
          </div>

          <div className="flex items-center">
            <Image
              alt="Bitcoin"
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent('Digital Bitcoin symbol, futuristic, modern, minimalistic, tech, finance, digital, Sergey Kolesov')}`}
              width={120}
              height={80}
              className="object-cover"
            />
          </div>

        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">How to Pay</h3>
          <p className="text-lg">
            To make a purchase, simply choose your desired items and proceed to checkout. During the checkout process,
            you can select your preferred payment method. Rest assured, your transactions are secure and confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;