"use client";

import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";
// import { Star } from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
// import OrangeButton from "@/components/ui/OrangeButton";
// import ArrowButton from "@/components/ui/ArrowButton";
import { experiences, buttons, skills, portfolioData, cardData } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";
import PortfolioCard from "@/components/ui/PortfolioCard";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await emailjs.send(
        "service_ugilufa",
        "template_lezac9x",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject || "No Subject",
          message: formData.message,
          to_email: "khumalosiya2001@gmail.com",
        }
      );

      console.log("EmailJS Success:", response);
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } } catch (error: unknown) {
  if (error instanceof EmailJSResponseStatus) {
    console.error(error.text);
    console.error(error.status);
  }
} finally {
      setIsSending(false);
    }
  };

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
                src="/Frame 68.png"
                alt="Frame Decoration"
                width={917}
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
                    <ul className="mt-2 space-y-1.5">
                      {exp.desc.map((item, itemIndex) => (
                        <li key={itemIndex} className="ml-4 list-disc text-[#98A2B3] text-[12px] sm:text-[14px] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
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
                  <ul className="space-y-2">
                    {exp.desc.map((item, itemIndex) => (
                      <li key={itemIndex} className="ml-5 list-disc text-[16px] lg:text-[18px] text-[#98A2B3] leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="w-full mt-8 lg:mt-16 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
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
              title="Portfolio"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-[24px] bg-[#7b7d7a] text-white text-[18px] sm:text-[20px] font-semibold transition-all duration-300 hover:bg-[#7b7d7a]"
            >
              {showAllProjects ? "Show Less" : "See All"}
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          {showAllProjects ? (
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {portfolioData.map((project, index) => (
                <PortfolioCard key={project.title} {...project} priority={index === 0} />
              ))}
            </div>
          ) : (
            <GenericSlider
              data={portfolioData}
              slidesPerView={2}
              heightClass="h-auto"
              cardType="portfolio"
            />
          )}

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

    </div>
  );
}
