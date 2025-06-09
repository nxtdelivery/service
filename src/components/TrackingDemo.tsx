import React, { useState } from 'react';
import { Search, Package, CheckCircle, Truck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackingDemo: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim() === '') return;
    
    setIsTracking(true);
    setCurrentStep(0);
    
    // Simulate steps progress
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const steps = [
    {
      icon: <Package />,
      title: "Order Confirmed",
      description: "Your delivery request has been received and confirmed.",
      time: "10:30 AM"
    },
    {
      icon: <MapPin />,
      title: "Pickup Complete",
      description: "Your package has been picked up from the origin location.",
      time: "11:45 AM"
    },
    {
      icon: <Truck />,
      title: "In Transit",
      description: "Your package is on the way to the destination.",
      time: "12:15 PM"
    },
    {
      icon: <CheckCircle />,
      title: "Delivered",
      description: "Your package has been successfully delivered.",
      time: "01:30 PM"
    }
  ];

  return (
    <section id="track" className="section bg-secondary">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-3">
            Track Order
          </span>
          <h2 className="text-3xl font-bold text-white mb-2">Track Your Delivery</h2>
          <p className="text-primary-light/90 max-w-2xl mx-auto">
            Enter your tracking ID to see real-time updates on your delivery status.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleTrack} className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter tracking ID (e.g., NXT12345)"
                    className="w-full bg-white/10 text-white border border-white/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/60"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary flex items-center justify-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Track Order
                </button>
              </div>
            </form>

            {/* Demo tracking animation */}
            {isTracking && (
              <div className="relative">
                {/* Progress line */}
                <div className="absolute left-6 top-8 h-[calc(100%-32px)] w-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="w-full bg-primary rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Tracking steps */}
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`relative flex items-center justify-center w-12 h-12 rounded-full mr-4 shrink-0 ${
                        index <= currentStep 
                          ? 'bg-primary text-white' 
                          : 'bg-white/10 text-white/40'
                      }`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            index <= currentStep ? 'text-white' : 'text-white/40'
                          }`}>
                            {step.title}
                          </h4>
                          <span className={`text-sm ${
                            index <= currentStep ? 'text-white/80' : 'text-white/40'
                          }`}>
                            {step.time}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          index <= currentStep ? 'text-white/80' : 'text-white/40'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isTracking && (
              <div className="text-center text-white/80 py-8">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Enter your tracking ID to see delivery status</p>
                <p className="text-sm mt-2 text-white/60">Try entering any ID for a demo</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/80 text-sm">
                Don't have a tracking ID? <a href="#book" className="text-primary underline">Book a delivery</a> or <a href="https://wa.me/919391332253" className="text-primary underline" target="_blank" rel="noreferrer">contact support</a> for assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackingDemo;