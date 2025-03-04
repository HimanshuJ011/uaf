import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Menu,
  X,
  Home,
  Syringe,
  Stethoscope,
  Link,
} from "lucide-react";

const AnimatedCounter = ({ value }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}+`);

  React.useEffect(() => {
    const animation = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
      delay: 0.2,
    });

    return animation.stop;
  }, [numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const founderInfo = {
    name: "",
    role: "Founding team",
    bio: "Started Udaipur Animal Feed in 2015 with a vision to create a compassionate community for stray animals.",
    image: "/images/2.jpg",
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Animal Feeding Programs",
      description:
        "Regular feeding programs ensuring stray animals receive proper nutrition.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Street Animal Support",
      description:
        "Comprehensive support system for street animals including shelter and care.",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Emergency Medical Support",
      description: "24/7 emergency medical assistance for animals in distress.",
    },
    {
      icon: <Syringe className="w-8 h-8" />,
      title: "Vaccination & Sterilization",
      description:
        "Regular vaccination and sterilization camps for street animals.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Animals Fed Monthly" },
    { number: "200+", label: "Animals Rescued Yearly" },
    { number: "1000+", label: "Community Members Educated" },
    { number: "5+", label: "Years of Service" },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Mission Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Heart className="w-12 h-12 mx-auto text-amber-300" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Mission
            </h1>
            <p className="text-xl leading-relaxed text-amber-100">
              "To provide food, shelter, and medical care to stray animals in
              Udaipur, and to promote compassion and kindness towards all living
              beings."
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/1.jpg"
                alt="Organization History"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-900">Our Journey</h2>
              <p className="text-lg text-amber-800 leading-relaxed">
                Udaipur Animal Feed was founded in 2015 by a group of animal
                lovers who were concerned about the welfare of stray animals in
                Udaipur. Our organization has grown rapidly since then, and we
                now have a team of dedicated volunteers and staff who work
                tirelessly to care for animals in need.
              </p>
              <button className="group flex items-center gap-2 text-amber-700 font-semibold">
                Learn more about our history
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-amber-800">
              Comprehensive care and support for street animals through various
              programs and initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-amber-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-amber-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter value={achievement.number} />
                </motion.div>
                <div className="text-amber-200">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Team</h2>
            <p className="text-lg text-amber-700">
              Meet the dedicated individuals who make our mission possible.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={founderInfo.image}
                alt={founderInfo.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-amber-900">
                  {founderInfo.name}
                </h3>
                <p className="text-amber-700 mb-4">{founderInfo.role}</p>
                <p className="text-amber-800">{founderInfo.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto mb-8">
            Help us make a difference in the lives of stray animals in Udaipur.
            Your support can provide food, shelter, and medical care to animals
            in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Donate Now
            </button>
            <button className="bg-white text-amber-800 border-2 border-amber-800 hover:bg-amber-50 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
