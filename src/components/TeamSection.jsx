import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Users, Globe, Award, Code } from 'lucide-react';
import { teamMembers, teamStats } from '../data/teamData';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('all');

  // Filter members by expertise
  const filteredMembers = teamMembers.filter(member => {
    if (filter === 'all') return true;
    return member.expertise.some(exp => 
      exp.toLowerCase().includes(filter.toLowerCase())
    );
  });

  // Group members by role category
  const roleCategories = {
    'Leadership': ['Founder & CEO', 'Chief Communications Officer (CCO)', 'Chief Technology Officer (CTO)'],
    'Engineering': ['Software Engineer', 'Full-Stack Developer', 'Backend/AI/ML Engineer', 'Electronics Engineer & AI Specialist', 'Senior Developer & Architect'],
    'Robotics': ['Mechatronic Engineer & ROS2 Developer', 'Robotics & Software Engineer', 'Robotics & RL Engineer', 'Marine Robotics Engineer', 'Fleet Management & RL Engineer', 'Senior Robotics Engineer'],
    'AI/ML': ['Deep Learning Engineer', 'Backend & ML Engineer', 'AI Developer & Tech Lead', 'AI Full-Stack Developer'],
    'Specialized': ['Technical Artist', 'Electrical Engineer', 'Embedded Software Engineer', 'Electronics Engineer & XR Developer']
  };

  const getRoleCategory = (role) => {
    for (const [category, roles] of Object.entries(roleCategories)) {
      if (roles.some(r => role.includes(r.split(' ')[0]))) {
        return category;
      }
    }
    return 'Specialized';
  };

  const groupedMembers = filteredMembers.reduce((acc, member) => {
    const category = getRoleCategory(member.role);
    if (!acc[category]) acc[category] = [];
    acc[category].push(member);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-ocean-dark to-ocean-dark/95">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Meet the Team</span>
          </h2>
          <p className="text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed">
            A diverse group of innovators, engineers, and visionaries united by our passion for 
            sustainable ocean mining and cutting-edge technology.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-ocean-primary mx-auto mb-3" />
            <div className="text-2xl font-orbitron font-bold text-ocean-text mb-1">
              {teamStats.totalMembers}
            </div>
            <div className="text-sm text-ocean-text/70">Team Members</div>
          </div>
          <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6 text-center">
            <Globe className="w-8 h-8 text-ocean-primary mx-auto mb-3" />
            <div className="text-2xl font-orbitron font-bold text-ocean-text mb-1">
              {teamStats.countries.length}
            </div>
            <div className="text-sm text-ocean-text/70">Countries</div>
          </div>
          <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6 text-center">
            <Code className="w-8 h-8 text-ocean-primary mx-auto mb-3" />
            <div className="text-2xl font-orbitron font-bold text-ocean-text mb-1">
              {teamStats.expertise.length}
            </div>
            <div className="text-sm text-ocean-text/70">Expertise Areas</div>
          </div>
          <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6 text-center">
            <Award className="w-8 h-8 text-ocean-primary mx-auto mb-3" />
            <div className="text-2xl font-orbitron font-bold text-ocean-text mb-1">
              50+
            </div>
            <div className="text-sm text-ocean-text/70">Years Experience</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['all', 'robotics', 'ai', 'engineering', 'marine'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterType
                  ? 'bg-ocean-primary text-ocean-dark'
                  : 'bg-ocean-dark/50 text-ocean-text/70 hover:bg-ocean-primary/20 hover:text-ocean-primary'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Team Members by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {Object.entries(groupedMembers).map(([category, members]) => (
            <div key={category}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-orbitron font-bold text-ocean-text mb-8 text-center"
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    whileHover="hover"
                    onClick={() => setSelectedMember(member)}
                    className={`group bg-gradient-to-br ${member.bgGradient} backdrop-blur-sm border ${member.borderColor} rounded-xl p-6 cursor-pointer relative overflow-hidden`}
                  >
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Avatar */}
                      <div className="text-4xl mb-4 text-center">
                        {member.avatar}
                      </div>
                      
                      {/* Name & Role */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-orbitron font-semibold text-ocean-text group-hover:text-ocean-primary transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-sm text-ocean-primary/70 font-medium">
                          {member.role}
                        </p>
                      </div>
                      
                      {/* Bio Preview */}
                      <p className="text-ocean-text/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {member.bio}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-ocean-dark/30 text-ocean-text/80 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-ocean-dark/30 text-ocean-text/80 text-xs rounded-full">
                            +{member.expertise.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-ocean-dark/30 text-ocean-text/70 hover:text-ocean-primary hover:bg-ocean-primary/20 rounded-lg transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-ocean-dark/30 text-ocean-text/70 hover:text-ocean-primary hover:bg-ocean-primary/20 rounded-lg transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin size={16} />
                          </a>
                        )}
                        {(member.website || member.portfolio) && (
                          <a
                            href={member.website || member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-ocean-dark/30 text-ocean-text/70 hover:text-ocean-primary hover:bg-ocean-primary/20 rounded-lg transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-dark/95 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-ocean-dark border border-ocean-primary/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{selectedMember.avatar}</div>
              <h3 className="text-2xl font-orbitron font-bold text-ocean-text mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-ocean-primary font-medium">{selectedMember.role}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-ocean-text/80 leading-relaxed mb-4">
                {selectedMember.bio}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-orbitron font-semibold text-ocean-text mb-3">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-ocean-primary/20 text-ocean-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-ocean-primary/20 text-ocean-primary rounded-lg hover:bg-ocean-primary/30 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-ocean-primary/20 text-ocean-primary rounded-lg hover:bg-ocean-primary/30 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                )}
                {(selectedMember.website || selectedMember.portfolio) && (
                  <a
                    href={selectedMember.website || selectedMember.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-ocean-primary/20 text-ocean-primary rounded-lg hover:bg-ocean-primary/30 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Portfolio</span>
                  </a>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedMember(null)}
              className="w-full py-3 bg-ocean-primary/20 text-ocean-primary rounded-lg hover:bg-ocean-primary/30 transition-colors duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default TeamSection;
