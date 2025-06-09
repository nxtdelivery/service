import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, rating, index }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-light opacity-50" />
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "NXT Delivery has been a game-changer for my small business. Their same-day deliveries at such affordable rates have helped me grow my customer base significantly.",
      author: "Rajiv Mehta",
      role: "Small Business Owner",
      rating: 5
    },
    {
      quote: "I was impressed by how securely they handled my fragile items. The delivery was on time and the staff was very professional. Highly recommended!",
      author: "Priya Singh",
      role: "Regular Customer",
      rating: 5
    },
    {
      quote: "Their WhatsApp booking system is so convenient! I can book a delivery in seconds and track it in real-time. Great service at unbeatable prices.",
      author: "Amit Kumar",
      role: "E-commerce Seller",
      rating: 4
    },
    {
      quote: "I needed urgent document delivery for a business deal and NXT Delivery came through in just 2 hours. Their express service is worth every rupee.",
      author: "Lakshmi Reddy",
      role: "Corporate Client",
      rating: 5
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-primary-light text-primary-dark text-sm font-medium px-4 py-1 rounded-full mb-3">Testimonials</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our delivery service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#book" className="btn btn-outline inline-block">
            Experience It Yourself
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;