import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import ArrowButton from "@/components/ui/ArrowButton";
import { experiences, buttons, iconAndText, skills, blogs, portfolioData, cardData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />
      
      {/* Hero Section */}
      <div className="group flex flex-col md:flex-row w-full min-h-[500px] sm:min-h-[600px] lg:h-[700px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6">
        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[200px] group-hover:opacity-0 px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20">
            

            {/* Main heading */}
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomeText 
                title="I&apos;m" 
                className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
              />
              <div className="flex items-end">
                <CustomeText 
                  title="Khumalo Katleho" 
                  className="text-[#7b7d7a] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
                />
                <CustomeText 
                  title="," 
                  className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
                />
              </div>
            </div>
            
            {/* Subtitle */}
            <CustomeText 
              title="Computer Systems Engineer" 
              className="text-[#171717] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center" 
            />
            
            {/* Contact info */}
            <p className="mt-6 text-[#344054] text-sm sm:text-base text-center max-w-2xl">
              Gauteng, Pretoria, Soshanguve L | (+27) 64 162 2166 | khumalosiya2001@gmail.com
            </p>
            <p className="mt-3 text-[#667085] text-xs sm:text-sm text-center tracking-[0.08em] uppercase">
              Linkedin | Github
            </p>
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
                <div className="absolute w-full h-full bg-[#7b7d7a] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <Image
              src="/girl.svg"
              alt="abhiruchi"
              width={952}
              height={636}
              className="relative z-20 w-full h-auto object-contain mt-5"
              priority
            />

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>
        </div>

      </div>

      {/* Services */}
      <div className="relative flex flex-col w-full min-h-[878px] gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden -translate-y-8 sm:-translate-y-0 md:-translate-y-15 lg:translate-y-0 -mt-14">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col items-center gap-6 relative z-10 text-center">
          <div className="flex gap-2.5 justify-center">
            <CustomeText title="Profile" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Summary" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#7b7d7a]" />
          </div>
          <p className="w-full max-w-[900px] font-medium text-base sm:text-lg lg:text-[20px] text-white leading-relaxed">
            I am a Diploma-qualified Computer Systems Engineering (CSE) graduate from Pretoria, South Africa, with a strong passion for problem-solving and an analytical mindset. I specialize in designing intuitive and efficient solutions across various domains, including computer vision, machine learning, web development, and software development.
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-center justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[500px] sm:h-[550px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div className="w-full min-h-[600px] lg:h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-8 lg:py-16">
        <div className="w-full h-auto lg:h-[234px] flex lg:flex-row items-start justify-center space-x-2.5 mb-8 lg:mb-16 text-center lg:text-left">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#7b7d7a]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#7b7d7a]" />
        </div>

        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={exp.duration} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <CustomeText title={exp.desc} className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomeText title={exp.duration} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-2xl text-[#98A2B3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <Image
            src="/Property 1=Default.svg"
            alt="Education graphic"
            fill
            className="object-contain z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          <Image
            src="/Property 1=Variant2.svg"
            alt="Education graphic"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Education" className="text-[#344054]" />
          </div>

          <div className="flex flex-col gap-6 text-[#344054] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            <div>
              <p className="font-semibold">Advanced Diploma in Computer System Engineering</p>
              <p>Tshwane University of Technology — In Progress</p>
            </div>
            <div>
              <p className="font-semibold">Remote Pilot Certificate - BVLOS</p>
              <p>NTSU Drone Academy — 2025</p>
            </div>
            <div>
              <p className="font-semibold">Diploma in Computer System Engineering</p>
              <p>Tshwane University of Technology — 2024</p>
            </div>
            <div>
              <p className="font-semibold">National Senior Certificate</p>
              <p>Ziphakamiseni Secondary School — 2019</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Additional"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="Information"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#7b7d7a]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://drive.google.com/file/d/1mG5c70vuyMdaR24hQhFIpPqJzAbAeYpR/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[24px] bg-[#7b7d7a] text-white text-[18px] sm:text-[20px] font-semibold transition-all duration-300 hover:bg-[#7b7d7a]"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button
                  key={index}
                  className="px-6 sm:px-8 py-3 rounded-[24px] bg-[#F2F4F7] text-[#000000] text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#7b7d7a] hover:text-white transition-colors duration-300"
                >
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="flex flex-col w-full max-w-[742px] items-start gap-6 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4 sm:gap-[18px]">
              <CustomeText
                title="Lirante - Food Delivery Solution"
                className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#344054]"
              />
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#7b7d7a] hidden md:flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#344054] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative flex flex-col w-full min-h-[900px] items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-[96px]  gap-12 bg-[#171717] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
          <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
            <CustomeText
              title="Testimonials That"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
            />
            <div className="flex flex-wrap gap-2.5 justify-center">
              <CustomeText
                title="Speak to"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
              />
              <CustomeText
                title="My Result"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#7b7d7a]"
              />
            </div>
          </div>
          <p className="w-full max-w-[742px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.6] px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          </p>
        </div>

        <div className="absolute bottom-[20%] left-0 right-0 w-full z-10">
          <GenericSlider
            data={reviews}
            slidesPerView={3}
            heightClass=""
            cardType="review"
          />
        </div>
      </div>


      {/* Contact */}
      <div className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#7b7d7a]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#7b7d7a] shrink-0">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={24}
              height={24}
            />
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <button className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#7b7d7a] hover:bg-[#7b7d7a] text-white text-lg font-semibold transition duration-300">
              Send
            </button>
          </ClientOnly>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Slider */}
      <div className="relative w-full h-[147px] bg-[#7b7d7a] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#7b7d7a"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="flex flex-col w-full max-w-[1080px] mx-auto items-center gap-12 px-4 sm:px-6 py-16">
        <div className="w-full h-[126px] flex flex-col lg:flex-row items-center justify-between gap-6 mb-6 md:mb-0">
          <h1 className="text-[#344054] w-fit md:min-w-[215px] h-full font-bold text-4xl md:text-5xl">From my blog post</h1>
          <OrangeButton title="See All" className="w-[300px] md:w-fit" />
        </div>
        <GenericSlider
          data={blogs}
          slidesPerView={3}
          heightClass=""
          cardType="blog"
        />
      </div>

    </div>
  );
}