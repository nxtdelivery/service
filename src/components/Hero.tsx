import React from 'react';
import { Truck, Package, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 bg-gradient-to-br from-secondary via-secondary to-primary-dark text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fast, Reliable & Affordable Delivery</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-light">
              Driven by Safety. Delivered with Speed.<br />
              We deliver whatever you need at the lowest cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#book" 
                className="btn bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Book Now
              </a>
              <a 
                href="#track" 
                className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30"
              >
                Track Order
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                    <Truck className="w-10 h-10 mb-3 text-primary" />
                    <h3 className="font-medium">Same Day Delivery</h3>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                    <Package className="w-10 h-10 mb-3 text-primary" />
                    <h3 className="font-medium">Any Item Size</h3>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                    <Clock className="w-10 h-10 mb-3 text-primary" />
                    <h3 className="font-medium">24/7 Service</h3>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                    <Shield className="w-10 h-10 mb-3 text-primary" />
                    <h3 className="font-medium">Secure Transit</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
