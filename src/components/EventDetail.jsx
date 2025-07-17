import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBullseye, FaCalendarAlt, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';

const eventDetails = {
  sdginnovationexpo: {
    title: "Pitch for the Planet: SDG Innovation Expo",
    description: "Students showcase projects addressing one or more SDGs, judged for innovation, feasibility, and impact.",
    image: "/images/expo.png",
    focus: "Foundational growth, SDG alignment, career empowerment.",
    objective: "Highlight student-led sustainable innovation.",
    date: "July 31, 2025 | 1:30 PM - 3:30 PM",
    venue: "Sigma Auditorium, Sri Sairam Engineering College",
    details: (
      <>
        <div className="space-y-6 text-blue-100 leading-relaxed">
          <h2 className="text-xl text-yellow-300 font-semibold">Event Details</h2>

          <h3 className="text-lg font-semibold text-blue-200">🔹 Theme-Based Tracks</h3>
          <p>Participants must align their projects with the UN Sustainable Development Goals (SDGs) and choose a theme during registration:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-blue-400/20 text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 border border-blue-300">Theme</th>
                  <th className="px-4 py-2 border border-blue-300">SDG Goals</th>
                  <th className="px-4 py-2 border border-blue-300">Focus Areas</th>
                </tr>
              </thead>
              <tbody className="bg-white/10 text-blue-100">
                <tr>
                  <td className="px-4 py-2 border border-blue-300">Theme 1</td>
                  <td className="px-4 py-2 border border-blue-300">SDG 1 to 6</td>
                  <td className="px-4 py-2 border border-blue-300">Poverty, hunger, health, education, gender equality, water</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-blue-300">Theme 2</td>
                  <td className="px-4 py-2 border border-blue-300">SDG 7 to 12</td>
                  <td className="px-4 py-2 border border-blue-300">Energy, innovation, infrastructure, industry, sustainability</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-blue-300">Theme 3</td>
                  <td className="px-4 py-2 border border-blue-300">SDG 13 to 17</td>
                  <td className="px-4 py-2 border border-blue-300">Climate action, life on land and water, peace, partnerships</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">👥 Team Structure</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2 to 4 members per team</li>
                  <li>One project per team</li>
                  <li>All members must be present on event day</li>
                  <li>Each team gets a table to set up prototype</li>
                </ul>
              </div>

              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">✅ Participation Requirements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Working prototype is mandatory</li>
                  <li>No idea-only submissions accepted</li>
                  <li>Bring your own tools and materials</li>
                  <li>No support will be provided for setup</li>
                </ul>
              </div>

              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">🔔 Important Notes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Select your theme carefully during registration</li>
                  <li>Final selection will be notified via email</li>
                  <li>Absentees on July 31 will be disqualified</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">🧑‍⚖️ Judging Criteria</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Innovation</strong> – Creativity and originality</li>
                  <li><strong>Feasibility</strong> – Practicality and scalability</li>
                  <li><strong>Impact</strong> – SDG alignment and social value</li>
                  <li><strong>Presentation</strong> – Communication & delivery</li>
                </ul>
              </div>

              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎓 Certificates & Prizes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Top 3 teams receive hard copy certificates</li>
                  <li>Finalists (21 teams) get E-certificates</li>
                  <li>All selected participants get E-certificates</li>
                  <li>Winners will be awarded in Valedictory Ceremony</li>
                </ul>
              </div>

              <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow italic text-blue-200">
                💡 This is your chance to turn a prototype into purpose.
                <br />Register now and pitch for the planet!
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },

  codeforcause: {
  title: "Code Verse - Crack the Code. Conquer the Verse.",
  description: "Competitive coding challenge testing speed, logic, and problem-solving.",
  image: "/images/code.png",
  focus: "Coding, analytical skills, and tech excellence.",
  objective: "Encourage rapid coding and logical problem-solving.",
  date: "July 31, 2025 | 1:30 PM - 3:30 PM",
  venue: "Alpha Hall, Sri Sairam Engineering College",
  details: (
    <>
      {/* Event Details Card */}
      <div className="space-y-6 text-blue-100 leading-relaxed">
        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">📍 Event Details</h3>
          <ul className="list-disc pl-5 space-y-1">
          
            <li><strong>Platform:</strong> HackerRank</li>
          </ul>
        </div>

        {/* Overview */}
        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">💻 Event Overview</h3>
          <p>
            Code Verse is a competitive coding showdown where logic meets speed. Participants will face a challenging problem statement and must develop and submit their solution on HackerRank within the time limit.
          </p>
        </div>

        {/* Judging Criteria */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">🏆 Judging Criteria</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accuracy and Efficiency</li>
              <li>Time of Submission</li>
              <li>Code Quality (if tied)</li>
            </ul>
            <p className="mt-2">🥇 🥈 🥉 Prizes for Top 3</p>
          </div>

          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎓 Certification</h3>
            <p>
              All participants receive e-certificates. Winners receive hardcopy certificates.
            </p>
          </div>
        </div>

        {/* Eligibility & Notes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">👥 Eligibility</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Individual participation</li>
              <li>Bring your own laptops and ethernet cables</li>
              <li>Internet access will be provided</li>
            </ul>
          </div>
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">📌 Notes</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>No plagiarism or use of AI tools</li>
              <li>Neat dress code mandatory</li>
              <li>Arrive 15 mins early</li>
              <li>Ensure HackerRank access</li>
            </ul>
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-6 italic text-blue-200 text-center">
          💡 Think you can outsmart the problem and rise above the rest? Join Code Verse and let your logic lead the way!
        </div>
      </div>
    </>
  )
},

 brandingbeyondborders: {
  title: "Craft Your Digital Self: Branding Beyond Borders",
  description: "Hands-on workshop to help students design impactful resumes and LinkedIn profiles.",
  image: "/images/linkedin.png",
  focus: "Foundational growth, SDG alignment, career empowerment.",
  objective: "Empower students to build strong digital presence.",
  date: "July 31, 2025 | 2:00 PM - 3:30 PM",
  venue: "Beta Hall, Sri Sairam Engineering College",
  details: (
    <>
      <div className="space-y-6 text-blue-100 leading-relaxed">
        <h2 className="text-xl text-yellow-300 font-semibold">📍 Event Details</h2>
        <ul className="list-disc pl-5 space-y-1">
          
        </ul>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">💼 Workshop Overview</h3>
          <p>
            This hands-on session aims to enhance students' professional visibility through effective resume writing and LinkedIn profile development.
            It emphasizes the importance of digital branding and equips participants with skills to present their qualifications, experiences, and goals 
            in a way that resonates with recruiters and industry professionals globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">👥 Eligibility & Participation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Open to all participants</li>
              <li>Individual participation only</li>
              <li>Participants must bring their own devices (laptops or tablets)</li>
              <li>Internet access is recommended for live updates</li>
            </ul>
          </div>

          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">📝 Workshop Modules</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Understanding Digital Presence</li>
              <li>Resume Building Techniques</li>
              <li>Optimizing LinkedIn Profiles</li>
              <li>Personal Branding Alignment</li>
              <li>Hands-On Profile & Resume Creation</li>
            </ul>
          </div>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">👩‍💼 Guest Speaker</h3>
          <p>
            <strong>Ms. Suganya</strong><br />
            Human Resources Professional<br />
            Industry expert guiding students on aligning their online presence with hiring expectations and global opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎓 Certification</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>All participants receive e-certificates</li>
              <li>Active participants may be spotlighted in post-event highlights</li>
            </ul>
          </div>

          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">📌 Notes</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Arrive 10 minutes early for registration</li>
              <li>Bring a soft copy of your existing resume (if any)</li>
              <li>Ensure LinkedIn login credentials are accessible</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 italic text-blue-200 text-center">
          💡 Ready to unlock your digital identity? Join this transformative session and take the first step toward building a future-ready career.
        </div>
      </div>
    </>
  )
},

greenmind: {
  title: "GreenMind: Sustainable AI for a Better Tomorrow",
  description: "Introductory and practical sessions on AI that prioritize green computing, ethics, and inclusive intelligence for SDG-aligned solutions.",
  image: "/images/AI.png",
  focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
  objective: "Introduce students to sustainable AI principles.",
  date: "August 1, 2025 | 9:30 AM - 11:00 AM",
  venue: "Alpha Hall, Sri Sairam Engineering College",
  details: (
    <>
      <div className="space-y-6 text-blue-100 leading-relaxed">
        <h2 className="text-xl text-yellow-300 font-semibold">📍 Event Details</h2>
        <ul className="list-disc pl-5 space-y-1">
          
        </ul>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">🌱 Event Overview</h3>
          <p>
            GreenMind is a unique knowledge-sharing session that emphasizes how Artificial Intelligence can be harnessed responsibly. 
            This event will explore energy-efficient AI algorithms, ethical practices, and the importance of building inclusive, low-carbon AI systems to solve real-world problems aligned with the Sustainable Development Goals (SDGs).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">👥 Eligibility & Participation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Open to all students of any background</li>
              <li>No prior experience in AI required</li>
              <li>Individual participation</li>
            </ul>
          </div>

          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">📘 Guidelines</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bring your own notebook or device for note-taking</li>
              <li>Maintain discipline and professional etiquette</li>
              <li>Be present at least 10 minutes before the start</li>
            </ul>
          </div>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">📌 Highlights</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Introduction to AI ethics and environmental impacts</li>
            <li>Discussion on green computing practices</li>
            <li>Live demonstration of sustainable AI applications</li>
          </ul>
        </div>

        <div className="mt-6 italic text-blue-200 text-center">
          💡 Discover how intelligent systems can be smart and sustainable!
        </div>
      </div>
    </>
  )
},

 urbanthink2025: {
  title: "UrbanThink 2025: Designing Cities that Feel Human",
  description:
    "A challenge for students to reimagine urban spaces with sustainable, accessible, and human-first innovations rooted in SDG 11.",
  image: "/images/smart-city.png",
  focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
  objective: "Promote SDG-based urban ideation.",
  date: "August 1, 2025 | 9:30 AM - 11:00 AM",
  venue: "Beta Hall, Sri Sairam Engineering College",
  details: (
    <>
      <div className="space-y-6 text-blue-100 leading-relaxed">
        <h2 className="text-xl text-yellow-300 font-semibold">📍 Event Details</h2>
        <ul className="list-disc pl-5 space-y-1">
         
        </ul>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">💡 Event Overview</h3>
          <p>
            The IEEE Smart Cities Ideathon is an interactive idea-generation session that invites participants to envision innovative, tech-driven solutions to real urban challenges.
            This is not just a workshop—it’s a platform to ideate, brainstorm, and share ideas that could shape the cities of tomorrow.
            Participants will explore how technologies like IoT, AI, and digital infrastructure can solve issues related to mobility, energy, waste management, sustainability, and public services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">👥 Who Can Participate?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Open to all students</li>
              <li>Team participation only (2 to 4 members)</li>
              <li>No prior technical experience required</li>
              <li>Bring your notebook or tablet for ideation</li>
            </ul>
          </div>

          <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">🧠 Event Segments</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Introduction to smart city challenges</li>
              <li>Problem statements revealed on-spot</li>
              <li>Ideation sprint: brainstorm & sketch your solution</li>
              <li>Peer-sharing and quick presentations</li>
              <li>Global inspirations: real-world innovations</li>
            </ul>
          </div>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">🗣️ Mentor / Facilitator</h3>
          <p>
            To Be Announced<br />
            (An IEEE expert or urban innovation strategist)
          </p>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎓 Certification</h3>
          <p>All participants will receive e-certificates for active participation.</p>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">📌 Instructions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Arrive 10 minutes early for smooth registration</li>
            <li>Bring your writing materials or digital device</li>
            <li>Wi-Fi will be available at the venue</li>
          </ul>
        </div>

        <div className="mt-6 italic text-blue-200 text-center">
          ✨ Step into the future. Reimagine urban life. Join the Smart Cities Ideathon and bring your brightest ideas to life!
        </div>
      </div>
    </>
  )
},
voicesoffire: {
  title: "Voices of Fire: Igniting Purpose-Driven Careers with IEEE",
  description:
    "A dynamic panel where IEEE visionaries share transformative insights on building careers fueled by innovation, impact, and global responsibility.",
  image: "/images/Ieee.png",
  focus: "Tech-driven innovation, sustainability, and purpose-led leadership.",
  objective: "Inspire students through leadership journeys.",
  date: "August 1, 2025 | 1:30 PM - 2:30 PM",
  venue: "Sigma Auditorium, Sri Sairam Engineering College",
  details: (
    <>
      <div className="space-y-6 text-blue-100 leading-relaxed">
        <h2 className="text-xl text-yellow-300 font-semibold">📍 Event Details</h2>
        <ul className="list-disc pl-5 space-y-1">
          
        </ul>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎤 About the Event</h3>
          <p>
            Ever wondered what it really means to build a career with purpose? 🤔 This panel brings together inspiring IEEE leaders 🌟 who’ve done just that — blending innovation 💡 with impact 🌍.
            It’s not just a talk, it’s a space for real conversations, lived experiences, and honest insights 🎙️.
          </p>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">💬 Session Overview</h3>
          <p>
            No scripts. No slides. Just stories 📖 and ideas 💬 that spark something within you. Whether you're figuring out your next step 🧭 or dreaming big about your future 🚀,
            this is a chance to hear from those who've turned passion ❤️ into action — and challenges into change ➡️✨.
          </p>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">📌 Panel Format</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>💫 Warm welcome and speaker introductions</li>
            <li>🎤 Open and real-time panel discussion</li>
            <li>🌱 Stories from the field — challenges, turning points, breakthroughs</li>
            <li>🙋‍♀️ Student Q&A — ask what truly matters to you</li>
            <li>💬 Final reflections and closing thoughts</li>
          </ul>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">✨ Why You Shouldn’t Miss It</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Come as you are — curious, uncertain, excited. 🧠💫</li>
            <li>Leave with clarity, courage, and the fire to lead with purpose. 🔥</li>
            <li>An hour of real talk, bold ideas, and powerful inspiration awaits. 💥</li>
          </ul>
        </div>

        <div className="p-5 bg-white/10 border border-blue-500 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">👩‍⚖️ Panel Judges</h3>
          <p>
            Judge [Name] – [Designation]
          </p>
        </div>

        
      </div>
    </>
  )
}

};

const EventDetail = () => {
  const { slug } = useParams();
  const event = eventDetails[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
          <p className="text-gray-400 mb-6">The event you're looking for doesn't exist or the link is invalid.</p>
          <Link to="/" className="text-yellow-400 underline hover:text-yellow-300 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const infoCards = [
    { label: "Focus", value: event.focus, icon: <FaLightbulb className="text-yellow-400" /> },
    { label: "Objective", value: event.objective, icon: <FaBullseye className="text-yellow-400" /> },
    { label: "Date & Time", value: event.date, icon: <FaCalendarAlt className="text-yellow-400" /> },
    { label: "Venue", value: event.venue, icon: <FaMapMarkerAlt className="text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen w-full bg-[#123A94] text-white font-sans pt-[80px] px-6 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Event Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-yellow-400 bg-white/5">
          <img src={event.image} alt={event.title} className="w-full max-h-[500px] object-contain object-center mx-auto" />
        </div>

        {/* Title and Description */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">{event.title}</h1>
          <p className="text-blue-200 text-lg">{event.description}</p>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-blue-500/30 hover:scale-[1.02] transition-transform">
              <div className="text-2xl">{card.icon}</div>
              <div>
                <p className="text-yellow-300 font-semibold">{card.label}</p>
                <p className="text-blue-100">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Event Details for SDG Expo */}
        {event.details && (
          <div className="bg-white/5 border border-blue-400/20 p-6 rounded-xl">
            {event.details}
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <Link to="/" className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
