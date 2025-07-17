import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


const Home = () => {
  const dayOneEvents = [
    {
      title: "Pitch for the Planet: SDG Innovation Expo",
      desc: "Students showcase SDG-based projects judged for innovation and impact.",
      image: "/images/events/sdg-pitch.jpg",
      slug: "sdginnovationexpo"
    },
    {
      title: "Code for Cause: The Humanitarian Hack-Sprint",
      desc: "Coding challenge with humanitarian-themed problems (disaster, energy, health).",
      image: "/images/events/code-humanity.jpg",
      slug: "codeforcause"
    },
    {
      title: "Craft Your Digital Self: Branding Beyond Borders",
      desc: "Hands-on LinkedIn and resume building workshop.",
      image: "/images/events/linkedin-resume.jpg",
      slug: "brandingbeyondborders"
    }
  ];

  const dayTwoEvents = [
    {
      title: "GreenMind: Sustainable AI for a Better Tomorrow",
      desc: "Hands-on AI sessions focused on ethics, inclusivity, and sustainability.",
      image: "/images/events/ai-sustainable.jpg",
      slug: "greenmind"
    },
    {
      title: "UrbanThink 2025: Designing Cities that Feel Human",
      desc: "Ideathon to redesign urban spaces using sustainable practices.",
      image: "/images/events/smart-city.jpg",
      slug: "urbanthink2025"
    },
    {
      title: "Voices of Fire: Igniting Purpose-Driven Careers with IEEE",
      desc: "IEEE leaders discuss impact-driven innovation and careers.",
      image: "/images/events/panel-discussion.jpg",
      slug: "voicesoffire"
    }
  ];

  const EventCard = ({ title, desc, image, slug }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="h-40 w-full bg-white/10">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-between min-h-[230px]">
        <div>
          <h4 className="text-xl font-bold text-yellow-400 mb-2">{title}</h4>
          <p className="text-blue-200 text-sm">{desc}</p>
        </div>
        <Link
          to={`/events/${slug}`}
          className="mt-4 inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
  const targetDate = new Date("2025-07-31T09:00:00+05:30").getTime();

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      clearInterval(interval);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  }, 1000);

    return () => clearInterval(interval);
}, []);


  return (
    <div className="min-h-screen w-full bg-[#123A94] text-white font-sans pt-[80px] px-8 pb-8 space-y-20 overflow-x-hidden">
      
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/sairam-nu-eta.jpeg"
          alt="Sri Sairam Engineering College"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-extrabold">
          <span className="text-yellow-400">GENESIS</span> 2.0
        </h1>
        <p className="text-blue-200 text-xl">HumAInity 2025: Where Intelligence Meets Intention</p>
        <p className="text-2xl font-semibold text-yellow-400">July 31 & August 1, 2025</p>
        
        <div className="mt-6 w-full max-w-md mx-auto bg-white/10 backdrop-blur-md text-center py-6 px-4 rounded-xl shadow-lg grid grid-cols-4 gap-4 text-white text-lg font-semibold">
  <div>
    <p className="text-3xl text-yellow-400">{timeLeft.days}</p>
    <p className="text-blue-200 text-sm">Days</p>
  </div>
  <div>
    <p className="text-3xl text-yellow-400">{timeLeft.hours}</p>
    <p className="text-blue-200 text-sm">Hours</p>
  </div>
  <div>
    <p className="text-3xl text-yellow-400">{timeLeft.minutes}</p>
    <p className="text-blue-200 text-sm">Minutes</p>
  </div>
  <div>
    <p className="text-3xl text-yellow-400">{timeLeft.seconds}</p>
    <p className="text-blue-200 text-sm">Seconds</p>
  </div>
</div>
<motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-blue-900 px-10 py-3 rounded-full font-bold text-lg hover:bg-yellow-300"
        >
          Register Now
        </motion.button>

      </motion.div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: faCalendar,
            title: "Two-Day Symposium",
            description: "Expert talks, competitions, and hands-on workshops"
          },
          {
            icon: faUsers,
            title: "3,500+ Participants",
            description: "Connect with IEEE Madras Section professionals"
          },
          {
            icon: faLightbulb,
            title: "SDG Aligned",
            description: "Innovating for the UN Sustainable Development Goals"
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-blue-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Institution Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-10 mb-20 flex flex-col lg:flex-row gap-10"
      >
        <img
          src="/images/founder.png"
          alt="MJF. Ln. Leo Muthu"
          className="w-full lg:w-[300px] object-contain rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Sri Sairam Engineering College
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            Established in 1995 by <strong>MJF.Ln.Leo Muthu</strong>, Chairman of Sapthagiri Educational Trust,
            Sri Sairam Engineering College is a premier non-profitable, non-minority institution.
            With a commitment to excellence, the institution spans over <strong>300 acres</strong> and houses
            top-tier laboratories, digital classrooms, a modern library, and a superlative sports complex.
            Known for fostering innovation and sustainability, it has become one of India’s leading engineering colleges.
          </p>
          <a
            href="https://sairam.edu.in/"
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-300 transition inline-block"
          >
            Learn More
          </a>
        </div>
        <img
          src="/images/campus.png"
          alt="Sairam Campus"
          className="w-full lg:w-[300px] object-cover rounded-lg hidden lg:block"
        />
      </motion.div>
      {/* Nu Eta Chapter Section */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  className="bg-white/5 backdrop-blur-md rounded-xl p-10 mb-20 flex flex-col lg:flex-row gap-10"
>
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-yellow-400 mb-4">Nu Eta Chapter</h2>
    <p className="text-blue-100 leading-relaxed mb-6">
      The Nu Eta Chapter of IEEE HKN was installed at Sri Sairam Engineering College on <strong>29 September 2023</strong>.
      It is the <strong>4th IEEE HKN chapter</strong> in India and the <strong>272nd worldwide</strong>. ‘Nu Eta’ symbolizes a commitment
      to new-age technology and innovation. Under the visionary leadership of
      <strong> Dr. Sai Prakash Leo Muthu</strong>, Chairman and CEO of Sairam Institutions, who is also a professional member,
      the chapter is on track to achieve great success and spread the spirit and values of IEEE Eta Kappa Nu.
      The team is guided by <strong>Dr. Soma Prathibha</strong> and is committed to harnessing innovation for the advancement of society.
    </p>
  </div>

  <img
    src="/images/hkn.jpeg"
    alt="Nu Eta Chapter Campus"
    className="w-full lg:w-[300px] object-cover rounded-lg"
  />
</motion.div>

      {/* Genesis 1.0 Recap */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-md rounded-xl p-10 mb-20 flex flex-col md:flex-row gap-10 items-center"
      >
        <img
          src="/images/genesis1.jpg"
          alt="Genesis 1.0"
          className="w-full md:w-[450px] rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Genesis 1.0</h2>
          <p className="text-blue-100 leading-relaxed">
            Genesis 1.0 was a two-day symposium organized by the IEEE-HKN Nu Eta Chapter, empowering students with tech
            and sustainability insights. It included expert talks, exhibitions, workshops, and leadership sessions.
          </p>
        </div>
      </motion.div>

      {/* Event Highlights */}
      <div className="space-y-16">
        <h2 className="text-4xl font-bold text-center underline decoration-yellow-400 decoration-4">
          Event Highlights
        </h2>
       <div className="bg-yellow-200 border-2 border-yellow-500 text-black p-4 rounded-xl shadow-md text-center text-lg max-w-4xl mx-auto mt-4">
  <span role="img" aria-label="warning">⚠️</span> 
  <strong className="underline"> Disclaimer: </strong> 
  Please note that accommodation and transportation facilities will <strong>not</strong> be provided by the organizing institution.
</div>

<div className="bg-blue-100 border border-blue-500 text-black p-4 rounded-xl shadow text-center text-lg max-w-4xl mx-auto mt-2">
  <strong>Note:</strong> You can participate in <strong>only one</strong> event per day.
</div>


        {/* Day 1 */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 1: Ignite the Change</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {dayOneEvents.map((event, i) => (
              <EventCard key={i} {...event} />
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Day 2: Think, Solve, Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {dayTwoEvents.map((event, i) => (
              <EventCard key={i} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
