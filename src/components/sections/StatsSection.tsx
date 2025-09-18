import React, { useState, useEffect, useRef } from 'react';
import { Users, Clock, Shield, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide',
  },
  {
    icon: Clock,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'In travel industry',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Secure Booking',
    description: 'Safe & secure payments',
  },
  {
    icon: Star,
    value: 4.8,
    suffix: '/5',
    label: 'Customer Rating',
    description: 'Based on 2000+ reviews',
  },
];

const CounterAnimation: React.FC<{ 
  value: number; 
  suffix: string; 
  duration?: number 
}> = ({ value, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-primary">
      {count === value ? value : count}{suffix}
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-adventure relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Travelers Trust Us</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who chose us for their perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
                
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};