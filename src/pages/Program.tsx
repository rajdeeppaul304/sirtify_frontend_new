import { ArrowRight } from "lucide-react";
import { Footer, Header } from "../components";
import { useState } from "react";

export default function Program() {
  const faqs = [
    {
      question: "Is this like a regular course?",
      answer:
        "No. This is a job-aligned, real-world project-based system with income, placement, and lifetime support.",
    },
    {
      question: "What if I don't get placed?",
      answer:
        "You retain all assets—certifications, resume, portfolio—and get lifetime re-entry support.",
    },
    {
      question: "Do you offer a refund policy?",
      answer:
        "Absolutely. We have a 14-day refund policy, no questions asked, if you are not satisfied with your purchase.",
    },
    {
      question: "Do I need to complete all 3 phases?",
      answer:
        "No. You can join at any phase. However, doing all 3 ensures maximum benefit.",
    },
    {
      question: "Is this legit and verifiable?",
      answer:
        "Yes. Sirtifai is a registered company with NSQF-certified programs and verified payroll via Deel.",
    },
    {
      question: "How quickly can I start earning?",
      answer:
        "In the Practice Phase, projects begin within 72 hours of onboarding.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* hero */}
      <section className="w-screen bg-[#FEF7F1]">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch justify-between gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between w-full md:w-full">
            <div className="space-y-6">
              <h2 className="text-[28px] sm:text-[40px] md:text-[80px] font-[600] tracking-tight leading-tight capitalize">
                Sirtifai SPP – Learn. Earn. Get Placed. Rise.
              </h2>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex items-center justify-center gap-4 w-full sm:w-auto md:max-w-[250px] bg-[#284050] border border-[rgba(255,255,255,0.45)] rounded-full px-4 py-2">
                  <button className="text-base text-white font-[600]">
                    Book a Call
                  </button>
                  <img
                    className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] object-contain"
                    src="/assets/programs/phone.png"
                    alt="Phone"
                  />
                </div>
                <span className="text-[16px] sm:text-[18px] font-[400] text-black/40 max-w-full sm:max-w-[370px]">
                  From no experience to ₹35L/year global careers – your journey,
                  your pace.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-start my-8">
              <h3 className="text-[18px] sm:text-[21px] font-inter font-[400]">
                Join SPP Now
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]">
                  SPP INT <ArrowRight />
                </button>
                <button className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]">
                  SPP FREELANCE <ArrowRight />
                </button>
                <button className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]">
                  SPP STUDENT <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/programs/program-hero.png"
              alt="Program Hero"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* about */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center space-y-4 sm:space-y-6 max-w-7xl mx-auto px-4">
        {/* Subtitle */}
        <span className="text-[#FC4C03] text-sm sm:text-base md:text-lg font-medium tracking-wider text-center">
          What Is SPP ?
        </span>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-[60px] font-[600] text-black capitalize text-center leading-tight">
          Our Three-Phase Approach
        </h1>

        {/* Description */}
        <span className="text-[#4B5563] max-w-3xl text-sm sm:text-base md:text-lg font-[400] text-center px-2">
          SPP is designed as a comprehensive career development program with
          three distinct phases that work
        </span>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-24 w-full items-center justify-center">
          {/* SKILL */}
          <div className="flex flex-col items-center text-center px-4">
            <img
              src="/assets/programs/skill.png"
              alt="Skill"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <h2 className="text-[#1F2937] text-lg sm:text-xl md:text-2xl font-[600] my-3">
              SKILL
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base font-[400]">
              Build industry-relevant skills through structured learning and
              hands-on projects
            </p>
          </div>

          {/* PRACTICE */}
          <div className="flex flex-col items-center text-center px-4">
            <img
              src="/assets/programs/code.png"
              alt="Practice"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <h2 className="text-[#1F2937] text-lg sm:text-xl md:text-2xl font-[600] my-3">
              PRACTICE
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base font-[400]">
              Work on real client projects and earn while gaining professional
              experience
            </p>
          </div>

          {/* PROGRESS */}
          <div className="flex flex-col items-center text-center px-4">
            <img
              src="/assets/programs/bar.png"
              alt="Progress"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <h2 className="text-[#1F2937] text-lg sm:text-xl md:text-2xl font-[600] my-3">
              PROGRESS
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base font-[400]">
              Secure job placement and receive ongoing career support for
              continued growth
            </p>
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="md:min-h-screen pb-4 md:pb-0 w-screen bg-[#FEF7F1]">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto min-h-screen w-screen">
          <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize">
            Key Benefits
          </h1>
          <div className="bg-[#FC4C03] w-[80px] h-[4px]" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mt-24 mt-8 justify-between">
            {/* students */}
            <div className="border-l-4 border-l-[#FE7743] rounded-[12px] bg-white shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] md:p-8 p-4 w-full">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6521)">
                      <path
                        d="M8.81641 0.519531C8.9375 0.496094 9.0625 0.496094 9.18359 0.519531L16.9961 2.08203C17.4336 2.16797 17.75 2.55469 17.75 3C17.75 3.44531 17.4336 3.83203 16.9961 3.91797L14 4.51953V6.75C14 9.51172 11.7617 11.75 9 11.75C6.23828 11.75 4 9.51172 4 6.75V4.51953L2.125 4.14453V6.6875L2.73828 9.75C2.77344 9.93359 2.72656 10.125 2.60937 10.2695C2.49219 10.4141 2.3125 10.5 2.125 10.5H0.874999C0.687499 10.5 0.511718 10.418 0.390624 10.2695C0.269531 10.1211 0.222656 9.93359 0.261718 9.75L0.874999 6.6875V3.88281C0.503906 3.75391 0.249999 3.40234 0.249999 3C0.249999 2.55469 0.566406 2.16797 1.00391 2.08203L8.81641 0.519531ZM4.62109 13.3008C5.03125 13.168 5.47266 13.3164 5.76953 13.6328L8.54297 16.582C8.78906 16.8438 9.20703 16.8438 9.45312 16.582L12.2266 13.6328C12.5234 13.3164 12.9648 13.168 13.375 13.3008C15.9141 14.1172 17.75 16.4922 17.75 19.3008C17.75 19.9648 17.2109 20.5 16.5508 20.5H1.44922C0.789062 20.5 0.249999 19.9609 0.249999 19.3008C0.249999 16.4922 2.08594 14.1172 4.62109 13.3008Z"
                        fill="#FE7743"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6521">
                        <path d="M0.25 0.5H17.75V20.5H0.25V0.5Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className="text-[#1F2937] text-xl font-[600]">
                    For Students
                  </h2>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_6528)">
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                          fill="#FE7743"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_6528">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#4B5563] text-[16px] font-[400]">
                      No prior experience required – ideal for freshers &
                      final-year students
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_6528)">
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                          fill="#FE7743"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_6528">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#4B5563] text-[16px] font-[400]">
                      Gain internship-level & freelance income before graduation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_6528)">
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                          fill="#FE7743"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_6528">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#4B5563] text-[16px] font-[400]">
                      Real work portfolio to crack your first job with
                      confidence
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_406_6528)">
                        <path
                          d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                          fill="#FE7743"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_406_6528">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-[#4B5563] text-[16px] font-[400]">
                      Lifetime support for job switching, even years later
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="border-l-4 border-l-[#FE7743] rounded-[12px] bg-white shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] p-8 w-full">
              <div className="flex items-center gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_406_6556)">
                    <path
                      d="M3 3.75C3 2.37109 4.12109 1.25 5.5 1.25H20.5C21.8789 1.25 23 2.37109 23 3.75V13.75H20.5V3.75H5.5V13.75H3V3.75ZM0.5 15.75C0.5 15.3359 0.835938 15 1.25 15H24.75C25.1641 15 25.5 15.3359 25.5 15.75C25.5 17.4062 24.1562 18.75 22.5 18.75H3.5C1.84375 18.75 0.5 17.4062 0.5 15.75ZM11.4766 8.16406L10.2656 9.375L11.4766 10.5859C11.8438 10.9531 11.8438 11.5469 11.4766 11.9102C11.1094 12.2734 10.5156 12.2773 10.1523 11.9102L8.27734 10.0352C7.91016 9.66797 7.91016 9.07422 8.27734 8.71094L10.1523 6.83594C10.5195 6.46875 11.1133 6.46875 11.4766 6.83594C11.8398 7.20312 11.8438 7.79687 11.4766 8.16016V8.16406ZM15.8516 6.83594L17.7266 8.71094C18.0938 9.07812 18.0938 9.67188 17.7266 10.0352L15.8516 11.9102C15.4844 12.2773 14.8906 12.2773 14.5273 11.9102C14.1641 11.543 14.1602 10.9492 14.5273 10.5859L15.7383 9.375L14.5273 8.16406C14.1602 7.79688 14.1602 7.20313 14.5273 6.83984C14.8945 6.47656 15.4883 6.47266 15.8516 6.83984V6.83594Z"
                      fill="#FC4C03"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_406_6556">
                      <path d="M0.5 0H25.5V20H0.5V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-[#1F2937] text-xl font-[600]">
                  For Freelancers
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6528)">
                      <path
                        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                        fill="#FE7743"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6528">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#4B5563] text-[16px] font-[400]">
                    Guaranteed paid client projects with legal contracts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6528)">
                      <path
                        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                        fill="#FE7743"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6528">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#4B5563] text-[16px] font-[400]">
                    Income via payroll (not just UPI or crypto) – great for
                    loans,Visas and Taxes.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6528)">
                      <path
                        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                        fill="#FE7743"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6528">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#4B5563] text-[16px] font-[400]">
                    Verified experience you can showcase to global employers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_406_6528)">
                      <path
                        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                        fill="#FE7743"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_406_6528">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-[#4B5563] text-[16px] font-[400]">
                    Support for freelance compliance, taxation, and contracts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features */}
      <section className="md:min-h-[450px] w-full flex flex-col items-center justify-center pb-4 md:pb-0">
        <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize">
          What makes SPP Unique
        </h1>
        <div className="flex flex-col md:flex-row md:gap-16 items-center gap-4 mt-8 md:mt-24">
          {/* card */}
          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/payroll.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                Payroll Benefits
              </h2>
              <p className="text-[#4B5563] text-base">
                ESI, EPF, Payslips, Tax-compliant
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/career.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                Lifetime Career Help
              </h2>
              <p className="text-[#4B5563] text-base">
                Re-entry, job switch, global access
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/tools.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                Tools Access
              </h2>
              <p className="text-[#4B5563] text-base">
                AI Resume, Portfolio, Analytics.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-16 items-center gap-4 mt-8 md:mt-24">
          {/* card */}

          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/career.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                Lifetime Career Help
              </h2>
              <p className="text-[#4B5563] text-base">
                Re-entry, job switch, global access
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/tools.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                Tools Access
              </h2>
              <p className="text-[#4B5563] text-base">
                AI Resume, Portfolio, Analytics.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <img
              src="/assets/programs/industries.png"
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
            <div>
              <h2 className="text-[#1F2937] text-lg font-[600]">
                24+ Industries
              </h2>
              <p className="text-[#4B5563] text-base">
                Choose your career – not just tech
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* pricing */}
      <section className="md:min-h-screen w-screen bg-[#FEF7F1] py-4 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8  justify-center min-h-screen w-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize text-center">
              Simple, Transparent Pricing
            </h1>
            <p className="text-[#4B5563] text-base max-w-[538px] text-center mt-4">
              One-time payment for lifetime access to our comprehensive program
              with on going support.
            </p>
          </div>

          <div
            className="p-4 rounded-full md:border md:border-[rgba(252, 76, 3, 0.45)] md:bg-white mt-4 md:mt-8 
                flex flex-col md:flex-row items-center justify-center 
                space-y-4 md:space-y-0 md:space-x-8"
          >
            <button className="bg-[#FE7642] rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto">
              Skill Phase
            </button>
            <button className="bg-[#CAC6C6] rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto">
              Practice Phase
            </button>
            <button className="bg-[#CAC6C6] rounded-[68px] p-2 px-4 text-white font-[600] text-lg w-full md:w-auto">
              Progress Phase
            </button>
          </div>

          <div
            id="pricing"
            className="md:w-[1100px]  mx-auto relative rounded-[21px] bg-[#FEB092] shadow-[0 1.443px 9.238px 0 rgba(255, 255, 255, 0.10)]"
          >
            {/* <div className="absolute top-0 left-0 z-[0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="278"
                height="226"
                viewBox="0 0 278 226"
                fill="none"
              >
                <path
                  d="M197.626 140.762C202.281 123.464 214.008 112.288 227.894 102.974C235.643 97.743 243.901 93.4725 253.066 91.1674C256.934 90.1664 260.777 89.4325 264.751 89.6794C267.161 89.8945 269.504 90.265 271.8 91.1698C276.08 92.8438 278.229 96.6429 277.985 101.252C277.838 104.146 276.732 106.901 275.381 109.365C272.951 113.67 269.763 117.37 266.176 120.711C256.758 129.563 245.589 135.619 233.422 140.133C225.281 143.068 216.876 145.333 208.385 146.73C207.781 146.837 207.334 147.013 206.619 147.164C206.289 150.904 207.279 154.384 208.536 157.888C213.562 172.551 221.251 185.782 231.336 197.558C234.668 201.408 238.18 205.06 241.983 208.468C249.165 215.193 257.651 219.988 267.017 222.762C268.645 223.284 270.273 223.806 271.945 224.44C272.101 224.508 272.189 224.731 272.41 225.289C271.538 225.373 270.935 225.481 270.288 225.477C259.283 224.764 249.272 221.34 240.1 215.138C228.747 207.341 219.636 197.375 212.274 185.95C206.242 176.582 201.329 166.775 198.496 156.023C197.837 153.703 197.468 151.14 196.944 148.509C196.297 148.505 195.537 148.545 194.778 148.584C183.408 149.562 172.153 149.85 160.839 148.356C151.712 147.165 142.879 145.085 134.41 141.314C129.842 139.237 125.477 136.694 121.718 133.398C112.154 124.899 109.99 114.53 115.534 103.072C115.805 102.45 116.075 101.828 116.481 100.895C115.074 100.931 114.047 100.947 112.864 100.895C103.663 101.151 94.442 101.028 85.203 99.8809C77.3031 98.853 69.5179 97.1355 62.1417 93.8391C58.5536 92.2806 55.3246 90.3235 52.3663 87.7444C45.3606 81.466 42.961 73.7679 45.2793 64.6063C45.644 62.916 46.3208 61.3611 46.8651 59.4714C45.4582 59.5074 44.431 59.5234 43.292 59.5833C33.1524 60.0785 22.8598 59.8602 12.773 58.5295C10.2064 58.2467 7.66336 57.6967 5.18798 56.9913C3.91646 56.7163 2.80379 55.8633 1.62347 55.1657C0.710981 54.492 0.313526 53.4874 0.899104 52.3552C1.4847 51.2229 2.51189 51.2069 3.67158 51.5257C6.1028 52.1195 8.6017 52.5578 11.0564 52.8845C23.4419 54.4741 35.8567 54.5049 48.186 53.6667C49.3251 53.6068 50.4199 53.4352 51.1174 52.2591C58.5361 40.9682 68.666 32.6113 80.041 25.4423C95.8276 15.3825 112.898 7.91401 131.028 3.12444C137.22 1.46944 143.366 0.34865 149.818 0.655065C152.184 0.758513 154.639 1.0852 156.846 1.76673C162.309 3.49249 164.343 7.9813 162.354 13.4033C161.089 16.7363 159.067 19.4634 156.578 21.9871C151.866 27.0586 146.221 31.0777 140.244 34.5825C128.848 41.3727 116.658 46.1538 103.87 49.7509C88.3089 54.1775 72.3978 57.0652 56.3807 58.7051C54.5264 58.9166 53.2962 59.399 52.7519 61.2888C52.0046 63.645 50.9894 65.9773 50.5099 68.3573C49.5039 73.6517 51.0467 78.2044 54.8704 81.9914C57.449 84.5905 60.4779 86.3683 63.7539 87.7912C69.3023 90.386 75.1684 91.8247 81.1699 92.9524C93.9322 95.1679 106.815 95.402 119.724 94.7232C120.863 94.6632 121.69 94.4678 122.476 93.515C130.666 84.5004 140.743 77.9693 151.486 72.4668C163.078 66.5017 175.201 61.8761 187.963 59.192C192.858 58.175 197.841 57.3812 202.841 57.612C204.94 57.6916 207.127 57.9943 209.066 58.652C213.838 60.2622 215.404 64.5477 212.817 68.7858C211.558 70.827 209.942 72.6212 208.126 74.236C203.038 78.6815 197.04 81.8076 190.953 84.7104C171.376 93.6781 150.479 98.0055 129.146 99.9249C128.387 99.9649 127.672 100.116 126.868 100.045C125.573 100.037 124.655 100.655 124.025 101.676C122.63 104.028 120.967 106.356 120.041 108.912C117.625 114.888 118.694 120.529 123.139 125.233C125.405 127.696 128.299 129.785 131.216 131.607C136.338 134.756 142.001 136.661 147.755 138.144C159.843 141.268 172.255 141.945 184.717 141.441C188.714 141.421 193.07 141.002 197.626 140.762ZM57.9929 52.6572C58.7964 52.7289 59.0643 52.7528 59.444 52.7328C60.0915 52.7367 60.8067 52.5852 61.4542 52.5891C77.7392 50.9731 93.8298 47.886 109.393 42.8136C120.73 39.1409 131.714 34.5752 141.703 27.8209C146.182 24.7747 150.506 21.6608 154.008 17.4505C155.467 15.5886 156.727 13.5474 157.674 11.3705C158.554 9.34923 157.78 7.71875 155.505 7.19271C153.497 6.69056 151.31 6.38776 149.256 6.41984C142.133 6.3766 135.293 8.02768 128.474 10.0575C113.605 14.5996 99.5986 20.9954 86.2546 29.0656C76.7838 34.8431 67.8458 41.3143 60.4179 49.643C59.8558 50.5082 59.0259 51.3495 57.9929 52.6572ZM207.927 139.043C209.402 138.852 210.385 138.724 211.212 138.529C214.52 137.747 217.761 137.121 221.025 136.228C232.806 133.025 243.858 128.304 253.826 121.171C258.956 117.483 263.529 113.368 267.169 108.201C268.473 106.272 269.465 104.206 270.3 102.073C271.251 99.2508 270.229 97.9752 267.306 97.4452C266.191 97.238 265.008 97.1863 263.913 97.3578C261.12 97.8085 258.171 98.1915 255.398 99.021C245.359 102.056 236.382 107.124 228.048 113.487C220.923 118.989 214.798 125.388 210.476 133.402C209.575 135.045 208.875 136.866 207.927 139.043ZM207.54 65.569C207.451 65.3457 207.319 65.0109 207.119 64.8315C205.891 64.6681 204.687 64.2377 203.504 64.186C201.07 64.238 198.48 64.2223 196.022 64.5414C184.226 66.0733 173.089 69.9254 162.238 74.826C152.349 79.2201 142.813 84.5073 134.231 91.2256C133.537 91.7559 132.886 92.3978 132.236 93.0397C133.396 93.3585 134.467 93.4541 135.406 93.2148C142.534 91.9664 149.683 91.0967 156.679 89.5133C169.441 86.8292 181.785 82.7617 193.178 76.6173C197.027 74.5917 200.612 71.8964 204.085 69.245C205.562 68.4077 206.507 66.8767 207.54 65.569Z"
                  fill="black"
                />
              </svg>
            </div> */}
            <div className="z-[50] border border-[#E5E7EB] p-4 sm:p-5 md:p-6 bg-white w-full max-w-4xl mx-auto rounded-2xl shadow-md mt-4 md:my-12">
              {/* Header */}
              <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row items-start md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-black capitalize">
                    Skill phase
                  </h2>
                  <p className="text-[#4B5563] text-sm sm:text-base">
                    Foundation learning with essential skills
                  </p>
                </div>
                <button className="text-[#FF7847] bg-[#FFF2EC] px-3 py-1 rounded-full text-sm sm:text-base">
                  Single payment
                </button>
              </div>

              <hr className="my-4 text-[#F3F4F6]" />

              {/* Price & status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111827]">
                    ₹ 5999
                  </h1>
                  <span className="text-[#6B7280] font-normal text-sm sm:text-lg">
                    (one time payment)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/programs/dot-circle.png"
                    alt=""
                    className="h-6 w-6 sm:h-[30px] sm:w-[30px] rounded-full object-contain"
                  />
                  <span className="text-sm sm:text-base font-medium">
                    Required
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between my-4 gap-3 sm:gap-0">
                <div className="flex items-center gap-2">
                  ✅
                  <p className="text-sm sm:text-base font-normal">
                    Core skill development
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  ✅
                  <p className="text-sm sm:text-base font-normal">
                    Learning Materials
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-2">
                  ✅
                  <p className="text-sm sm:text-base font-normal">
                    Foundational Knowledge
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  ✅
                  <p className="text-sm sm:text-base font-normal">
                    Core Tracking progress
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="md:max-w-2xl mx-auto mt-4 md:mt-8">
                <button className="w-full text-white bg-[#FE7642] rounded-full py-2 px-3 text-sm sm:text-base">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adds on pricing */}

      <section className="min-h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize text-center">
            Add-On Services & Pricing
          </h1>
          <p className="text-[#4B5563] text-xs md:text-base max-w-[538px] text-center mt-4">
            Boost your SPP Experience with professional services that support
            real work, payroll,taxes, and legal compliance—perfect for serious
            freelancers, global aspirants, and career-track professionals.
          </p>
        </div>

        {/* cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-3 md:grid-cols-3 mt-8 sm:mt-12 md:mt-16">
          {/* card 1 */}
          <div className="w-full rounded-[12px] shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] bg-white border border-[#E5E7EB] flex flex-col">
            {/* Header */}
            <div className="bg-[#AB735D] px-4 py-2 rounded-t-[12px]">
              <h3 className="text-white text-lg font-[700]">
                Payroll Services (via Deel™)
              </h3>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex-grow">
              <p className="text-[#4B5563] text-base mt-4">
                Get paid like a professional with verified income, payslips, and
                statutory benefits.
              </p>

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  Payroll + EPF/ESI
                </h4>
                <p className="text-[#4B5563] text-sm">
                  Full compliance with India's PF/ESI structure verified salary
                  slips
                </p>
              </div>

              <h2 className="text-[#AB735D] font-[700]">₹33,500 / $400</h2>

              <hr className="w-full bg-[#E5E7EB]" />

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  Global Freelance Payroll
                </h4>
                <p className="text-[#4B5563] text-sm">
                  International structure for US/UK/Canada clients, tax-ready
                  payout
                </p>
              </div>

              <h2 className="text-[#AB735D] font-[700]">₹41,800 / $500</h2>
            </div>

            {/* Button at bottom */}
            <div className="p-4">
              <button className="w-full text-white bg-[#AB735D] rounded-full py-2 px-3">
                Buy Now
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="w-full rounded-[12px] shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] bg-white border border-[#E5E7EB] flex flex-col">
            {/* Header */}
            <div className="bg-[#FE7743] px-4 py-2 rounded-t-[12px]">
              <h3 className="text-white text-lg font-[700]">CA Services</h3>
              <p className="text-base font-[400] text-white/80">
                Chartered Accountant Support
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex-grow">
              <p className="text-[#4B5563] text-base mt-4">
                Manage your income, taxes, and filings with expert CA
                assistance.
              </p>

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  CA Basic
                </h4>
                <p className="text-[#4B5563] text-sm">
                  Income Tax Return filing + basic invoicing
                </p>
              </div>
              <h2 className="text-[#FE7743] font-[700]">₹1,999</h2>

              <hr className="w-full bg-[#E5E7EB]" />

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">CA Pro</h4>
                <p className="text-[#4B5563] text-sm">
                  GST, advance tax, bank reconciliation, income mapping
                </p>
              </div>
              <h2 className="text-[#FE7743] font-[700]">₹3,999</h2>

              <hr className="w-full bg-[#E5E7EB]" />

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  CA Elite
                </h4>
                <p className="text-[#4B5563] text-sm">
                  Dedicated CA, startup compliance, international remittance
                  guidance
                </p>
              </div>
              <h2 className="text-[#FE7743] font-[700]">₹7,999</h2>
            </div>

            {/* Button at bottom */}
            <div className="p-4">
              <button className="w-full text-white bg-[#FE7743] rounded-full py-2 px-3">
                Buy Now
              </button>
            </div>
          </div>

          {/* card 3 */}
          <div className="w-full rounded-[12px] shadow-[0_4px_6px_0_rgba(0,0,0,0.10),0_10px_15px_0_rgba(0,0,0,0.10)] bg-white border border-[#E5E7EB] flex flex-col">
            {/* Header */}
            <div className="bg-[#FC4C03] px-4 py-2 rounded-t-[12px]">
              <h3 className="text-white text-lg font-[700]">Legal Services</h3>
              <p className="text-base font-[400] text-white/80">
                Contract & IP Support
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 flex-grow">
              <p className="text-[#4B5563] text-base mt-4">
                Stay legally protected while working with clients—India or
                abroad.
              </p>

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  Legal Starter
                </h4>
                <p className="text-[#4B5563] text-sm">
                  NDA + Service Agreement Templates
                </p>
              </div>
              <h2 className="text-[#FC4C03] font-[700]">
                ₹999 <sub>one time</sub>
              </h2>

              <hr className="w-full bg-[#E5E7EB]" />

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  Legal Freelancer Pro
                </h4>
                <p className="text-[#4B5563] text-sm">
                  5 legal drafts, IP rights, basic dispute advisory
                </p>
              </div>
              <h2 className="text-[#FC4C03] font-[700]">₹4,999/month</h2>

              <hr className="w-full bg-[#E5E7EB]" />

              <div>
                <h4 className="text-[#1F2937] text-base font-[600]">
                  Legal Global Elite
                </h4>
                <p className="text-[#4B5563] text-sm">
                  Unlimited contracts, legal notices, client dispute handling
                </p>
              </div>
              <h2 className="text-[#FC4C03] font-[700]">₹9,999/month</h2>
            </div>

            {/* Button at bottom */}
            <div className="p-4">
              <button className="w-full text-white bg-[#FC4C03] rounded-full py-2 px-3">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* combo pack */}
        <div
          className="max-w-7xl mx-auto w-full mt-16 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] border border-[#E5E7EB] rounded-[12px] px-4 py-4 flex items-center justify-between"
          style={{
            background: "linear-gradient(90deg, #FE7743 0%, #DD8A6A 100%)",
          }}
        >
          <div>
            <h1 className="text-2xl font-bold text-white">
              Freelancer Shield Combo Pack
            </h1>
            <p className="text-sm text-white/70 font-normal">
              Complete Protection for Serious Freelancers & Remote Workers
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_406_6699)">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_406_6699">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-sm font-[400] text-white">
                  Payroll + EPF/ESI
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_406_6699)">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_406_6699">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-sm font-[400] text-white">CA Pro Services</p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_406_6699)">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_406_6699">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-sm font-[400] text-white">
                  Legal Freelancer Pro
                </p>
              </li>
            </ul>
          </div>
          <div className="flex items-end justify-end flex-col">
            <button className=" bg-white text-[#FE7743] font-bold rounded-full py-2 px-3">
              ₹39,999/month
            </button>
            <p className="text-sm text-white/70 font-normal mt-2">
              Save ₹8,500/month compared to individual plans
            </p>
          </div>
        </div>
      </section>

      {/* who can use it */}
      <section className="min-h-screen w-screen bg-[#FEF7F1] mt-4 md:mt-16">
        <div className="max-w-7xl mx-auto min-h-screen w-screen flex flex-col justify-center items-start">
          <h1 className="text-[30px]  md:text-[60px] font-[600] text-black capitalize text-center w-full">
            Who is this For?
          </h1>

          <div className="flex flex-row gap-4 md:gap-8 mt-8">
            <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
              <img
                src="/assets/programs/student.png"
                alt=""
                className="h-16 w-16 object-cover"
              />

              <h2 className="text-[#1F2937] text-xl font-[600]">
                Final Year Students
              </h2>

              <p className="text-[#4B5563] text-base font-normal">
                Start early, build skill + portfolio.
              </p>
            </div>
            <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
              <img
                src="/assets/programs/seeker.png"
                alt=""
                className="h-16 w-16 object-cover"
              />

              <h2 className="text-[#1F2937] text-xl font-[600]">
                Freshers & Job Seekers
              </h2>

              <p className="text-[#4B5563] text-base font-normal">
                Learn, earn, and get placed.
              </p>
            </div>
            <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
              <img
                src="/assets/programs/freelancers.png"
                alt=""
                className="h-16 w-16 object-cover"
              />

              <h2 className="text-[#1F2937] text-xl font-[600]">Freelancers</h2>

              <p className="text-[#4B5563] text-base font-normal">
                Get verified client projects + monthly income.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-8 mt-8">
            <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
              <img
                src="/assets/programs/career-switchers.png"
                alt=""
                className="h-16 w-16 object-cover"
              />

              <h2 className="text-[#1F2937] text-xl font-[600]">
                Career Switchers
              </h2>

              <p className="text-[#4B5563] text-base font-normal">
                Transition to high-paying domains.
              </p>
            </div>
            <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
              <img
                src="/assets/programs/immigrants.png"
                alt=""
                className="h-16 w-16 object-cover"
              />

              <h2 className="text-[#1F2937] text-xl font-[600]">
                Immigration Aspirants
              </h2>

              <p className="text-[#4B5563] text-base font-normal">
                Elite plan helps build visa-friendly global profiles.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQS */}
      <section className="min-h-screen w-full py-4 md:py-16">
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-7xl mx-auto">
            <h1 className="text-[30px] md:text-[60px] font-[600] text-black capitalize text-center w-full">
              Frequently Asked Questions
            </h1>

            <div className="space-y-4 w-full my-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg border border-gray-200 w-full"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-[#1F2937]"
                  >
                    {faq.question}
                    <span className="text-gray-500 text-2xl leading-none">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="p-5 border-t border-gray-200 text-[#4B5563]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
