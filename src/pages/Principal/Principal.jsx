import React from 'react';
import { motion } from 'framer-motion';
import principalImage from './Images/principal.png';
import bannerImage from './Images/banner.png';

const PrincipalDesk = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Banner */}
     {/* Banner */}
<div
  className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${bannerImage})` }}
>
  {/* Left-to-right shadow overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

  {/* Heading */}
  <h1 className="relative z-20 text-white text-4xl md:text-5xl font-bold">
    PRINCIPAL’S DESK
  </h1>
</div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 flex flex-col lg:flex-row items-stretch gap-6">
        {/* Principal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-[490px] flex flex-col shadow-2xl overflow-hidden rounded-b-3xl lg:rounded-bl-3xl lg:rounded-tr-none bg-white"
        >
          <img
            src={principalImage}
            alt="Dr. Manpreet Singh"
            className="w-full h-[250px] md:h-[350px] object-cover rounded-tl-[2.5rem] rounded-tr-[2.5rem]"
          />

          <div className="flex-1 bg-gradient-to-t from-black via-black/80 to-black/60 text-white px-4 md:px-6 py-6 rounded-bl-[2.5rem] rounded-br-[2.5rem]">
            <h2 className="text-xl md:text-2xl font-bold">Dr. Manpreet Singh</h2>
            <hr className="my-2 border-white/80" />
            <p className="text-sm md:text-base font-medium">
              Chandigarh College of Engineering and Technology
            </p>
            <hr className="my-2 border-white/80" />
            <p className="text-sm md:text-base font-medium">Email: principal@ccet.ac.in</p>
            <hr className="my-2 border-white/80" />
            <p className="text-sm md:text-base font-medium">Ph: 0172-2750872</p>
          </div>
        </motion.div>

        {/* Principal Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-[#18388C] text-white italic px-6 md:px-10 py-8 md:py-10 rounded-tl-3xl rounded-b-3xl lg:rounded-b-3xl lg:rounded-r-3xl shadow-2xl text-justify font-serif text-[1rem] md:text-[1.1rem] font-medium leading-[1.9]"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 not-italic font-serif">
            Principal’s Message
          </h2>

          <p>
            With technology spreading its domain to all walks of life, there is a need to upgrade the ever-widening knowledge base. CCET has risen to the occasion, and resolves to provide talented, skilled, and highly competent technical human resource to the industrial society. Education is imparted at the institute in a manner so that each student realizes their responsibility of enhancing the present skills and shaping the future.
          </p>
          <p className="mt-6">
            In its endeavour to foster an optimum blend of self-discipline and consistency, the college provides a robust curriculum to cater to the versatile scenario of the industry. It commits to serve the society with zeal and to fulfil its societal obligations with distinction. With consistent efforts to provide the industry with apt talent, I invite the prospective potential seekers to participate in the campus recruitment program.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
