import PetHero from "../assets/editpet2.jpg";
import { Link } from "react-router-dom"; // Added import for Link

const HeroSection = () => (
  <div className="relative">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Hero Section */}
    <div
      className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[615px] w-full flex items-center justify-start bg-amber-900 md:bg-cover md:bg-center md:bg-no-repeat"
      style={{
        backgroundImage: `url(${PetHero}) `,
      }}
    >
      {/* Text Container */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-10 xl:pl-20 text-left py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          <span className="block">Every Stray Deserves</span>
          <span className="block text-amber-300">A Chance To Live</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-3xl">
          Together, we can transform the lives of Udaipur's street animals
          through compassion, care, and community action.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            to="/donation"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Donate Now
          </Link>
          <Link
            to="/vol"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
