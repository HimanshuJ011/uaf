import React, { useState, useEffect } from "react";
import { Heart, PawPrint, Users, Clock, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import ImpactSection from "../components/Impact";
import MissionSection from "../components/MissionSection";

const StoryModal = ({ isOpen, onClose, story }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={story.fullImage || story.image} 
            alt={story.title} 
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-amber-800 mb-3">{story.title}</h3>
          
          <div className="flex items-center mb-4 text-sm text-gray-500">
            <span className="mr-4">
              <span className="font-medium">Date:</span> {story.date || "January 15, 2023"}
            </span>
            <span>
              <span className="font-medium">Status:</span> {story.status || "Success Story"}
            </span>
          </div>
          
          <div className="prose max-w-none">
            <p className="mb-4">{story.fullDescription || story.description}</p>
            
            {story.extendedContent && story.extendedContent.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            
            {story.bulletPoints && (
              <ul className="mt-4 mb-6">
                {story.bulletPoints.map((point, index) => (
                  <li key={index} className="mb-2">{point}</li>
                ))}
              </ul>
            )}
          </div>
  
        </div>
      </div>
    </div>
  );
};

// Enhanced Story Card component with modal functionality
const StoryCard = ({ image, title, description, fullStory = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Combine props with any additional full story content
  const storyData = {
    image,
    title,
    description,
    ...fullStory
  };
  
  // Sample extended content if none provided
  if (!storyData.extendedContent) {
    if (title === "Buddy's Journey") {
      storyData.extendedContent = [
        "Buddy was found with severe injuries on the side of a busy highway. His back legs were paralyzed, and he was severely malnourished and dehydrated.",
        "Our rescue team rushed him to our medical facility where he received emergency care, including IV fluids, wound treatment, and pain management. The first 48 hours were critical, but Buddy showed remarkable resilience.",
        "Over the next three months, Buddy underwent intensive physiotherapy. Slowly, he began regaining sensation in his hind legs. Our dedicated team worked with him daily, helping him build strength through specialized exercises.",
        "Today, Buddy not only walks but runs with just a slight limp! He was adopted by a loving family who continues his therapy at home. His journey from a critically injured stray to a beloved family pet is a testament to the power of compassion, expert care, and never giving up."
      ];
      storyData.gallery = ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"];
      storyData.bulletPoints = [
        "3 months of intensive rehabilitation",
        "Custom wheelchair during recovery phase",
        "Now adopted and living his best life"
      ];
    }
  }
  
  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-amber-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button className="mt-4 text-amber-600 font-medium hover:text-amber-700 flex items-center">
            Read full story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <StoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        story={storyData}
      />
    </>
  );
};

// Updated Stories Section with enhanced cards
const StoriesSection = () => {
  // Sample data for full stories
  const buddyStory = {
    fullImage: "/api/placeholder/800/500",
    date: "January 15, 2023",
    status: "Adopted",
    fullDescription: "Buddy was rescued from a busy highway with severe injuries and paralyzed back legs. After months of intensive care and rehabilitation, he's now thriving in his forever home.",
    extendedContent: [
      "When our rescue team found Buddy, he was in critical condition. His back legs were completely paralyzed, and he had multiple wounds that were severely infected.",
      "The first few weeks were touch and go. Our medical team provided round-the-clock care, administering IV antibiotics, wound care, and pain management. Buddy's fighting spirit shone through even in those darkest moments.",
      "As his wounds healed, we began a comprehensive rehabilitation program. Our physiotherapists designed special exercises to help stimulate nerve regeneration. We also fitted him with a custom wheelchair to help him stay mobile during recovery.",
      "Slowly but surely, Buddy began showing signs of improvement. First came slight movement in his toes, then gradual control of his legs. Each small victory was celebrated by our entire team.",
      "Six months later, Buddy took his first unassisted steps. It was an emotional moment for everyone who had been part of his journey. His recovery continued to progress, and though he still has a slight limp, he now runs and plays like any other dog."
    ],
    bulletPoints: [
      "Complete paralysis to walking independently in 6 months",
      "Required specialized hydrotherapy and physical therapy",
      "Now advocates for special needs dogs through our education program"
    ],
    gallery: [
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200",
      "/api/placeholder/300/200"
    ]
  };
  
  const lunaStory = {
    fullImage: "/api/placeholder/800/500",
    date: "March 10, 2023",
    status: "Recovered & Adopted",
    fullDescription: "Luna was found severely malnourished, weighing just 8kg when she should have been 25kg. Her transformation through proper nutrition and medical care shows the impact of compassionate intervention.",
    extendedContent: [
      "Luna was discovered hiding under an abandoned vehicle, too weak to even stand. Her body was just skin and bones, with her ribs and spine clearly visible. At only 8kg, she was at less than a third of her healthy weight.",
      "Our team carefully transported her to our medical facility, where we immediately began a specialized refeeding protocol. Severe malnutrition requires careful medical management to prevent refeeding syndrome, which can be fatal.",
      "Luna received small, frequent meals of easily digestible, nutrient-dense food. Her blood work showed severe anemia and protein deficiency, which we addressed through medical intervention.",
      "As Luna began to gain strength, her personality emerged. Despite her suffering, she was gentle and affectionate with everyone she met. Her resilience was truly remarkable.",
      "Within three months, Luna had reached a healthy weight of 23kg. Her coat, once dull and patchy, became thick and shiny. Her transformation wasn't just physical - she became playful and energetic, full of the joy that had been suppressed by her suffering."
    ],
    bulletPoints: [
      "Gained 15kg through careful nutritional rehabilitation",
      "Recovered from severe anemia and skin infections",
      "Now helps socialize other rescued dogs"
    ],
    gallery: [
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200"
    ]
  };
  
  const feedingProgram = {
    fullImage: "/api/placeholder/800/500",
    date: "Ongoing Program",
    status: "Active Initiative",
    fullDescription: "Our street feeding program provides daily meals to over 500 street animals across Udaipur. This initiative is crucial for maintaining the health and wellbeing of the city's street animal population.",
    extendedContent: [
      "The Street Feeding Program began in 2018 with just one volunteer feeding 50 dogs. Today, it has grown into a comprehensive network covering all major areas of Udaipur, feeding over 500 animals daily.",
      "Our dedicated team follows 12 established routes, ensuring consistent feeding at the same locations and times each day. This consistency is crucial, as street animals come to rely on these meals for their survival.",
      "We provide nutritionally balanced food, specially formulated to meet the needs of street animals. Each meal contains a careful balance of protein, carbohydrates, and essential nutrients to support immune function and overall health.",
      "Beyond providing food, our feeding program serves as a monitoring system. Our volunteers identify animals needing medical attention, allowing for prompt intervention. This early detection has saved countless lives.",
      "The program also helps us identify new animals in an area, monitor population dynamics, and implement targeted sterilization efforts to manage street animal populations humanely."
    ],
    bulletPoints: [
      "12 feeding routes covering all major areas of Udaipur",
      "Over 500 animals fed nutritionally balanced meals daily",
      "Serves as an early warning system for injured or sick animals"
    ],
    gallery: [
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200", 
      "/api/placeholder/300/200",
      "/api/placeholder/300/200"
    ]
  };

  return (
    <section className="py-16 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every rescue is a story of hope, resilience, and
            transformation. Meet some of the animals whose lives have been changed
            forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StoryCard
            image="/api/placeholder/400/300"
            title="Buddy's Journey"
            description="From a severely injured stray to a happy, healthy dog with a loving forever home."
            fullStory={buddyStory}
          />
          <StoryCard
            image="/api/placeholder/400/300"
            title="Luna's Recovery"
            description="A starving street dog transformed through medical care, nutrition, and endless compassion."
            fullStory={lunaStory}
          />
          <StoryCard
            image="/api/placeholder/400/300"
            title="Street Feeding Program"
            description="How our daily feeding routes are bringing nourishment to hundreds of animals across Udaipur."
            fullStory={feedingProgram}
          />
        </div>

        <div className="text-center mt-12">
          <Link to={'/vol'} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300">
            View More Stories
          </Link>
        </div>
      </div>
    </section>
  );
};


const ProgramCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all hover:shadow-xl">
    <Icon className="h-12 w-12 text-amber-600 mb-4" />
    <h3 className="text-xl font-bold mb-3 text-amber-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ProgramsSection = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          Our Programs
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We take a holistic approach to animal welfare through these key
          initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgramCard
          icon={PawPrint}
          title="Street Feeding"
          description="Daily routes providing nutritious meals to stray animals across Udaipur."
        />
        <ProgramCard
          icon={Heart}
          title="Medical Care"
          description="Emergency response and treatment for injured and sick street animals."
        />
        <ProgramCard
          icon={Award}
          title="Education"
          description="School programs promoting compassion and responsible pet ownership."
        />
        <ProgramCard
          icon={Users}
          title="Community Engagement"
          description="Working with local communities to create sustainable change for animals."
        />
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section
    className="py-16 bg-cover bg-center relative"
    style={{ backgroundImage: `url('/api/placeholder/1920/600')` }}
  >
    <div className="absolute inset-0 bg-amber-800 opacity-90"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-amber-50 max-w-3xl mb-8">
          Every act of kindness makes a difference. Together, we can create a
          city where no animal suffers from hunger, neglect, or abuse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={'/donation'} className="bg-white text-amber-800 hover:bg-amber-100 px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300">
            Make a Donation
          </Link>
          <Link to={'/vol'} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300">
            Become a Volunteer
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          What People Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our volunteers, donors, and community members about the
          impact of our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "Volunteering with UAF has been the most rewarding experience.
            Seeing the transformation in these animals is truly incredible."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Priya Sharma</h4>
              <p className="text-gray-600">Volunteer for 2 years</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "The dedication of UAF's team is inspiring. They work tirelessly to
            ensure no street animal in Udaipur goes hungry."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Rajesh Mehra</h4>
              <p className="text-gray-600">Monthly Donor</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "After UAF's educational program at our school, my students now show
            so much more compassion towards street animals."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Meena Patel</h4>
              <p className="text-gray-600">Local Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImageCarousel = () => {
  // Sample image data - replace with your actual images
  const images = [
    {
      src: "/images/1.jpg",
      alt: "Rescued street dog recovering at UAF shelter",
      caption: "Recovery in progress: Rescued street dog at our shelter",
    },
    {
      src: "/images/2.jpg",
      alt: "Volunteers feeding street animals",
      caption: "Our volunteers distributing food to street animals",
    },
    {
      src: "/images/3.png",
      alt: "Veterinary care for injured cat",
      caption: "Providing medical care to an injured street cat",
    },
    {
      src: "/images/1.jpg",
      alt: "Educational workshop with school children",
      caption: "Teaching compassion: Educational workshop with local students",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Our Impact in Pictures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we're making a difference for street animals across Udaipur.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-xl">
          {/* Image container with transition */}
          <div className="relative h-40 md:h-48 bg-gray-100">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ zIndex: index === currentIndex ? 10 : 0 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-2 px-4 text-white">
                  <p className="text-xs md:text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-20"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 z-20"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Navigation dots */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ImpactSection />
        <MissionSection />
        <StoriesSection />
        <ProgramsSection />
        <CallToAction />
        <TestimonialSection />
        <ImageCarousel />
      </main>
    </div>
  );
};

export default LandingPage;
