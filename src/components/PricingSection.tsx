import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  highlighted = false,
  delay
}) => {
  return (
    <motion.div 
      className={`card p-6 md:p-8 border ${
        highlighted ? 'border-primary relative' : 'border-gray-100'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-primary' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-gray-800">₹{price}</span>
          <span className="text-gray-500 ml-1">/km</span>
        </div>
        <p className="text-sm text-gray-500">Base price + distance based charge</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#book"
        className={`btn block text-center ${
          highlighted ? 'btn-primary' : 'btn-outline'
        }`}
      >
        Book Now
      </a>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const pricingTiers = [
    {
      title: "Standard Delivery",
      description: "For regular packages up to 5kg",
      price: "15",
      features: [
        "Same-day delivery within city",
        "Real-time tracking",
        "Up to 5kg weight limit",
        "Insurance up to ₹1,000",
        "Cash on delivery option"
      ]
    },
    {
      title: "Express Delivery",
      description: "Priority handling for urgent deliveries",
      price: "25",
      features: [
        "Priority handling & routing",
        "Delivery within 4 hours",
        "Up to 10kg weight limit",
        "Insurance up to ₹5,000",
        "Dedicated delivery agent"
      ],
      highlighted: true
    },
    {
      title: "Heavy Package",
      description: "For larger items between 10-50kg",
      price: "40",
      features: [
        "Specialized handling equipment",
        "Two delivery personnel",
        "Up to 50kg weight limit",
        "Insurance up to ₹10,000",
        "Scheduled delivery window"
      ]
    }
  ];

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-4 py-1 rounded-full mb-3">
            Pricing
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Transparent & Affordable Rates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the delivery option that best suits your needs. All prices include GST.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              description={tier.description}
              price={tier.price}
              features={tier.features}
              highlighted={tier.highlighted}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Need a custom delivery solution?</h4>
            <p className="text-gray-600 mb-3">
              For bulk orders, regular deliveries, or special requirements, contact us for custom pricing tailored to your needs.
            </p>
            <a href="https://wa.me/919391332253" className="text-primary font-medium hover:underline" target="_blank" rel="noreferrer">
              Get a custom quote →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;