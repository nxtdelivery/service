import React from 'react';
import { Package, Truck, ShoppingBag, Briefcase, FileText, Pizza } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="card p-6 hover:shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 bg-primary-light rounded-full w-fit text-primary-dark group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Parcel Delivery",
      description: "Fast and secure delivery of packages of all sizes, from small envelopes to large boxes."
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "E-commerce Delivery",
      description: "Reliable delivery solutions for online stores with real-time tracking and COD options."
    },
    {
      icon: <Pizza className="h-6 w-6" />,
      title: "Food Delivery",
      description: "Timely delivery of food items ensuring they arrive fresh and at the right temperature."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Corporate Delivery",
      description: "Specialized delivery services for businesses with scheduled pickups and priority handling."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Delivery",
      description: "Secure and confidential delivery of important documents with proof of delivery."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Bulk Delivery",
      description: "Cost-effective solutions for delivering multiple items to different locations."
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-4 py-1 rounded-full mb-3">Our Services</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What We Deliver</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From small parcels to large packages, we deliver everything at the lowest cost without compromising on speed or quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;