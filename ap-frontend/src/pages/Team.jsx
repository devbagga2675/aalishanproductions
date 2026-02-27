import React from "react";
import { motion } from "framer-motion";
import { teamData } from "./teamData";
import { Scissors } from "lucide-react";
import TeamCard from "../components/teamCard";
import SectionTitle from "../components/SectionTitle";
import ServicePill from "../components/ServicePill";
import FeaturePill from "../components/FeaturePill";
import usePageMeta from "../hooks/usePageMeta";
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Team = () => {
  usePageMeta(
    "Meet the Team | Aalishaan Productions",
    "Meet the creative team behind Aalishaan Productions — dedicated filmmakers, editors, and strategists passionate about delivering broadcast-quality content for brands and creators.",
  );
  return (
    <div className="min-h-screen bg-(--color-dark-bg-primary) max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <section>
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Header */}
          <div className="w-full">
            <div className="max-w-5xl mx-auto flex flex-col gap-8">
              <div className="top-content text-center">
                <motion.div
                  className="mb-2"
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  animate="show"
                >
                  <ServicePill text="The Team" />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={0.12}
                  initial="hidden"
                  animate="show"
                >
                  <SectionTitle align="center" className="md:text-center">
                    Focus on Dedication and Quality
                  </SectionTitle>
                </motion.div>

                <motion.p
                  className="inter-regular w-full text-lg text-(--color-dark-text-secondary) md:text-xl"
                  variants={fadeUp}
                  custom={0.24}
                  initial="hidden"
                  animate="show"
                >
                  We are professional filmmakers dedicated entirely to the
                  craft. Our passion for masterful editing and technical
                  shooting is the guarantee behind your content's quality.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <div className="w-full">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {teamData.map((member) => (
                <motion.div key={member.id} variants={staggerItem}>
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
