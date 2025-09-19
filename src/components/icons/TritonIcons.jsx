import React from 'react';

// Base icon wrapper with consistent styling
const IconWrapper = ({ children, className = "" }) => (
  <div className={`w-16 h-16 rounded-full border-2 border-ocean-primary flex items-center justify-center bg-ocean-dark/50 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

// DeepSeaGuard Icon - Compliance Dashboard
export const DeepSeaGuardIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 16h16M16 8v16" stroke="#00b4d8" strokeWidth="2"/>
      <circle cx="16" cy="16" r="4" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M12 12l8 8M20 12l-8 8" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// SeaLink Icon - Autonomous Buoy Mesh
export const SeaLinkIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="2" fill="#00b4d8"/>
      <path d="M8 8l16 16M24 8L8 24" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// Shellby Icon - Coastal Sentinel
export const ShellbyIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 20c0-4 4-8 8-8s8 4 8 8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="16" r="2" fill="#00b4d8"/>
      <circle cx="20" cy="16" r="2" fill="#00b4d8"/>
      <path d="M16 12v8" stroke="#00b4d8" strokeWidth="2"/>
    </svg>
  </IconWrapper>
);

// Luna AUV Icon - Deep-sea Swarm Vehicle
export const LunaAUVIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <ellipse cx="16" cy="16" rx="10" ry="6" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M6 16h20M16 10v12" stroke="#00b4d8" strokeWidth="2"/>
      <circle cx="16" cy="16" r="3" stroke="#00b4d8" strokeWidth="2" fill="none"/>
    </svg>
  </IconWrapper>
);

// CrabBots Icon - Nodule Collectors
export const CrabBotsIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 12c0-2 2-4 4-4h8c2 0 4 2 4 4v8c0 2-2 4-4 4h-8c-2 0-4-2-4-4v-8z" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="16" r="2" fill="#00b4d8"/>
      <circle cx="20" cy="16" r="2" fill="#00b4d8"/>
      <path d="M10 20h12M10 12h12" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// Processing Stations Icon - Inland Refineries
export const ProcessingStationsIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <rect x="8" y="10" width="16" height="12" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M12 6v4M20 6v4M8 14h16M8 18h16" stroke="#00b4d8" strokeWidth="2"/>
      <circle cx="12" cy="22" r="1" fill="#00b4d8"/>
      <circle cx="20" cy="22" r="1" fill="#00b4d8"/>
    </svg>
  </IconWrapper>
);

// Data Infrastructure Icon - Databases, APIs
export const DataInfrastructureIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <rect x="10" y="8" width="12" height="8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <rect x="10" y="16" width="12" height="8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M16 8v8M16 16v8" stroke="#00b4d8" strokeWidth="2"/>
      <circle cx="12" cy="12" r="1" fill="#00b4d8"/>
      <circle cx="20" cy="12" r="1" fill="#00b4d8"/>
      <circle cx="12" cy="20" r="1" fill="#00b4d8"/>
      <circle cx="20" cy="20" r="1" fill="#00b4d8"/>
    </svg>
  </IconWrapper>
);

// External Systems Icon - Regulators, NGOs, Partners
export const ExternalSystemsIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 8l16 16M24 8L8 24" stroke="#00b4d8" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="2" fill="#00b4d8"/>
      <circle cx="22" cy="10" r="2" fill="#00b4d8"/>
      <circle cx="10" cy="22" r="2" fill="#00b4d8"/>
      <circle cx="22" cy="22" r="2" fill="#00b4d8"/>
    </svg>
  </IconWrapper>
);

// Triton Services Icon - Consulting, Open Source Tools
export const TritonServicesIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 16c0-4 4-8 8-8s8 4 8 8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 16c0 4 4 8 8 8s8-4 8-8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="4" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M14 14l4 4M18 14l-4 4" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// Ocean Mining Icon - General mining operations
export const OceanMiningIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 20c0-4 4-8 8-8s8 4 8 8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M12 12l8 8M20 12l-8 8" stroke="#00b4d8" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="2" fill="#00b4d8"/>
    </svg>
  </IconWrapper>
);

// Environmental Monitoring Icon
export const EnvironmentalMonitoringIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 16c0-4 4-8 8-8s8 4 8 8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M12 20c0-2 2-4 4-4s4 2 4 4" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="3" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M16 8v2M16 22v2M8 16h2M22 16h2" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// ML Technology Icon
export const MLTechnologyIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 12c0-2 2-4 4-4h8c2 0 4 2 4 4v8c0 2-2 4-4 4h-8c-2 0-4-2-4-4v-8z" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="16" r="1.5" fill="#00b4d8"/>
      <circle cx="20" cy="16" r="1.5" fill="#00b4d8"/>
      <path d="M14 12h4M14 20h4" stroke="#00b4d8" strokeWidth="1.5"/>
      <path d="M16 8v2M16 22v2" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);

// Sustainability Icon
export const SustainabilityIcon = ({ className = "" }) => (
  <IconWrapper className={className}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M8 20c0-4 4-8 8-8s8 4 8 8" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <path d="M12 16c0-2 2-4 4-4s4 2 4 4" stroke="#00b4d8" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="2" fill="#00b4d8"/>
      <path d="M16 8v2M16 22v2M8 16h2M22 16h2" stroke="#00b4d8" strokeWidth="1.5"/>
    </svg>
  </IconWrapper>
);
