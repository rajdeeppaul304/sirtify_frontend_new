import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import heroIllustration from "../../assets/about-header.png";
import dontQuit from "../../assets/dont-quit.jpg";
import bulbsImage from "../../assets/blb.jpg";
import aboutStart from "../../assets/about-start.png";
import aboutUsSectionImg from "../../assets/abous-us-section-1.jpg";
import avatar1 from "../../assets/user-1.png";
import avatar2 from "../../assets/user-2.png";
import avatar3 from "../../assets/user-3.jpg";
import avatar4 from "../../assets/user-4.jpg";
import avatar5 from "../../assets/user-5.jpg";
import avatar6 from "../../assets/user-6.jpg";
import PartnerLogo0 from "../../assets/Company logo.svg";
import PartnerLogo1 from "../../assets/Company logo (1).svg";
import PartnerLogo2 from "../../assets/Company logo (2).svg";
import PartnerLogo3 from "../../assets/Company logo (3).svg";
import PartnerLogo4 from "../../assets/Company logo (4).svg";
import PartnerLogo5 from "../../assets/Company logo (5).svg";
import PartnerLogo6 from "../../assets/Company logo (6).svg";

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F1]">
      {/* Hero Section (Figma: Learn. Earn. Get Placed. Rise.) */}
      <section className="pt-16 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Learn. Earn. Get
              <br />
              Placed. Rise.
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              India's first Job-First Education Ecosystem, building skilled
              professionals with real work experience and lifetime career
              support.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-sm font-semibold text-orange-600">
                Join Now :
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#spp-int"
                  className="text-sm text-orange-600 font-medium"
                >
                  SPP Int
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#spp-freelance"
                  className="text-sm text-orange-600 font-medium"
                >
                  SPP Freelance
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="#spp-student"
                  className="text-sm text-orange-600 font-medium"
                >
                  SPP Student
                </a>
              </div>
            </div>
          </div>
          {/* Right illustration */}
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Hero illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Sertifai (Figma) */}
      <section className="py-14 bg-gradient-to-b from-white to-orange-50/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image collage (Don't Quit + Bulb image with overlays) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={dontQuit}
                alt="Don't Quit"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
              />
              <img
                src={bulbsImage}
                alt="Bulbs"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
              />
            </div>
            {/* KPI card */}
            <div className="absolute -top-8 left-8 md:left-16 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg border border-orange-100 w-[220px]">
              <p className="text-lg font-extrabold text-gray-900">30,000+</p>
              <p className="text-[10px] text-gray-500">
                Sales in July 2021 with 5 star ratings and happy clients.
              </p>
              <div className="mt-3 h-px bg-gray-200" />
              <div className="mt-3 flex -space-x-2">
                {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map(
                  (a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt="avatar"
                      className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    />
                  )
                )}
              </div>
            </div>
            {/* Ratings badge */}
            <div className="absolute -bottom-4 left-10 bg-white/95 backdrop-blur rounded-xl shadow p-3 border border-gray-100">
              <p className="text-[11px] text-gray-700 font-semibold mb-1">
                Best ratings
              </p>
              <div className="flex gap-1 text-base">
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
              </div>
            </div>
          </div>
          {/* Copy */}
          <div>
            <p className="tracking-[0.4em] text-xs text-orange-600 font-semibold mb-2">
              A BIT
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Sertifai
            </h2>
            <p className="text-gray-600 mb-4">
              Sirtifai is a career transformation platform that connects
              learning directly with earning and job placement. Through our
              flagship SPP (Skill → Practice → Progress) model, we ensure
              learners gains:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                Practical skills through structured, industry-aligned training.
              </li>
              <li>
                Paid work experience with real companies via verified projects.
              </li>
              <li>
                Career support for job switches, re-entry, and global placement
                across 24 industries.
              </li>
              <li>
                Trusted by employers and universities in India, MENA, and SEA.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Button variant="primary" size="md">
                View More
              </Button>
              <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Feature Image Section (from Figma node 177-1036) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 shadow-xl">
            <img
              src={aboutUsSectionImg}
              alt="About us section"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries ribbon */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex gap-10 opacity-90 text-sm whitespace-nowrap">
            {[
              "HR",
              "Finance",
              "Legal",
              "Education",
              "Construction",
              "Healthcare",
              "Aerospace",
              "BFSI",
            ].map((i) => (
              <span key={i} className="italic">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How Sirtifai is different? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left intro */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              How Sirtifai is different?
            </h2>
            <p className="text-gray-600 text-lg">
              Sirtifai is a career transformation platform that connects
              learning directly with earning and job placement.
            </p>
          </div>

          {/* Right features grid (2 columns across 2/3 width) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            {[
              {
                title: "Income from Day 1",
                desc: "Earn ₹12K–₹35K/month during the Practice Phase.",
              },
              {
                title: "Verified Payroll (Peario™)",
                desc: "EPF/ESI coverage for domestic plans, and international payroll for overseas roles.",
              },
              {
                title: "Global Certifications",
                desc: "NSQF Certification: Globally recognized certification, trusted by employers in India, MENA, and SEA.",
              },
              {
                title: "Lifetime Re-entry & Career Switch Support",
                desc: "Switch industries, upgrade skills, and re-enter the job market without extra programme cost.",
              },
              {
                title: "Skill-to-job execution gap",
                desc: "Solved for all learners, from Tier 1 to Tier 3. Built-in career analytics and AI resume tools.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-[28px] border border-[#E5E5E5] bg-white shadow-[0_6px_0_0_#D4D4D4] p-8 min-h-[220px]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={aboutStart}
                    alt="feature icon"
                    className="w-16 h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  />
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-6">
                    {feature.title}
                  </h3>
                </div>
                <div className="h-px w-full bg-gray-300 my-5" />
                <p className="text-[15px] text-gray-700 leading-7">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#FEF7F1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize access to high-quality skill development and
                career opportunities, enabling individuals from all backgrounds
                to achieve their professional dreams through practical,
                project-based learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-orange-500" />
                  <span className="text-gray-700">
                    Bridge the skill gap in emerging technologies
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-orange-500" />
                  <span className="text-gray-700">
                    Provide real-world project experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-orange-500" />
                  <span className="text-gray-700">
                    Enable global career opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center">
                  <Globe size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's most trusted platform for skill
                development and career transformation, creating a future where
                anyone, anywhere can access world-class education and
                opportunities.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  By 2030, we aim to:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Help 1 million+ learners transform their careers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Partner with 1000+ global companies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Expand to 50+ countries worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Sirtify
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#FEF7F1] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Learner First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make prioritizes the success and growth of our
                learners. Their journey is our mission.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#FEF7F1] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in our curriculum, mentorship,
                and support systems to ensure exceptional outcomes.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#FEF7F1] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in creating opportunities that transcend borders and
                empower individuals to achieve their global career aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FEF7F1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Sirtify's mission to transform
              careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-orange-500 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former tech leader with 15+ years experience in education and
                career development.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-[#374151] to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jane Smith
              </h3>
              <p className="text-orange-500 font-medium mb-3">
                Head of Learning
              </p>
              <p className="text-gray-600 text-sm">
                Curriculum expert with deep experience in skill development and
                industry partnerships.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mike Johnson
              </h3>
              <p className="text-orange-500 font-medium mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Technology leader focused on building scalable learning
                platforms and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                10,000+
              </div>
              <p className="text-gray-600">Learners Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <p className="text-gray-600">Corporate Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sirtify was founded with a single purpose: to connect learning
              with measurable outcomes through Practice and Progress. What
              started as a small initiative is now a movement empowering
              learners across the globe to build real experience and land
              meaningful opportunities.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="primary" size="md">
                Watch Video
                <Play size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="md">
                Read Full Story
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/success.jpg"
                alt="Sirtify Story"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play size={24} className="text-gray-900 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-[#FEF7F1]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  year: "2019",
                  title: "Foundation",
                  desc: "Started with a vision to connect skills with real work.",
                },
                {
                  year: "2020",
                  title: "First 1k Learners",
                  desc: "Scaled programs and validated the SPP model.",
                },
                {
                  year: "2022",
                  title: "Global Partners",
                  desc: "Signed partnerships enabling cross-border opportunities.",
                },
                {
                  year: "2024",
                  title: "Platform Evolution",
                  desc: "Launched a platform focused on outcomes and portfolios.",
                },
              ].map((item, idx) => (
                <div
                  key={item.year}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:text-right ${
                      idx % 2 === 0 ? "" : "md:order-2"
                    }`}
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-white text-orange-600 font-semibold shadow">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                  <div className="relative md:order-1">
                    <div className="h-2 w-2 bg-orange-500 rounded-full absolute left-1/2 -translate-x-1/2 top-4 hidden md:block" />
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                      <p className="text-gray-700">
                        Milestone achieved with collective effort of mentors,
                        partners and our learner community.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sirtify */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Sirtify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SPP Methodology",
                desc: "A proven Skill • Practice • Progress framework for outcomes.",
              },
              {
                title: "Real Projects",
                desc: "Hands-on work with real clients to build a credible portfolio.",
              },
              {
                title: "Mentor Network",
                desc: "Guidance from industry experts throughout your journey.",
              },
              {
                title: "Placement Support",
                desc: "Dedicated career assistance for jobs and freelance gigs.",
              },
              {
                title: "Global Pathways",
                desc: "Opportunities across borders with verified partners.",
              },
              {
                title: "Community",
                desc: "Peer groups, events, and lifelong learning ecosystem.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[#FEF7F1] rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#FEF7F1]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trusted by Hiring Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {[
              PartnerLogo0,
              PartnerLogo1,
              PartnerLogo2,
              PartnerLogo3,
              PartnerLogo4,
              PartnerLogo5,
              PartnerLogo6,
            ].map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="h-8 w-auto opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FEF7F1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who have already taken the first step
            towards their dream career.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "What is the SPP model?",
      a: "SPP stands for Skill • Practice • Progress — a framework that connects learning with real projects and measurable career outcomes.",
    },
    {
      q: "Do you provide placement support?",
      a: "Yes. We provide structured career services including portfolio reviews, mock interviews, and job/freelance opportunity matching.",
    },
    {
      q: "Can I join while studying or working?",
      a: "Absolutely. Programs are flexible with part-time options and remote-friendly practice phases.",
    },
    {
      q: "Is there global opportunity support?",
      a: "We work with verified partners to enable global career pathways including visas for eligible programs.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className="bg-[#FEF7F1] rounded-xl">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-semibold text-gray-900">{item.q}</span>
              <span
                className={`text-orange-500 text-xl ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && <div className="px-5 pb-5 text-gray-700">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
};
