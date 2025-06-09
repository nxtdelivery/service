import React from 'react';
import { Clock, Shield, DollarSign, Zap, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="flex items-start p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mr-4 mt-1 bg-primary-light p-3 rounded-lg text-primary-dark">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-Fast Delivery",
      description: "We offer same-day delivery with express options for urgent items."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Lowest Price Guarantee",
      description: "Our rates are the most competitive in the market without compromising on quality."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Handling",
      description: "All packages are handled with care and fully insured during transit."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "We operate round the clock to meet your delivery needs any time."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Real-time Tracking",
      description: "Track your delivery in real-time through our WhatsApp integration."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Instant Support",
      description: "Get immediate assistance via WhatsApp for any queries or special requirements."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-4 py-1 rounded-full mb-3">Why Choose Us</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Benefits of NXT Delivery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine speed, security, and affordability to provide the best delivery experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;