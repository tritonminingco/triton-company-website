import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const InteractiveMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAUV, setSelectedAUV] = useState(null);

  // CCZ (Clarion-Clipperton Zone) coordinates
  const cczCenter = [10.0, -140.0];
  const cczBounds = [
    [5.0, -160.0], // Southwest
    [15.0, -120.0]  // Northeast
  ];

  // Mock AUV data
  const auvData = [
    {
      id: 'AUV-001',
      name: 'Luna Alpha',
      position: [9.5, -142.3],
      status: 'active',
      battery: 87,
      depth: 4200,
      temperature: 1.2,
      pressure: 420,
      lastUpdate: '2 minutes ago',
      mission: 'Nodule Survey',
      efficiency: 94
    },
    {
      id: 'AUV-002',
      name: 'Luna Beta',
      position: [10.2, -138.7],
      status: 'active',
      battery: 92,
      depth: 4100,
      temperature: 1.4,
      pressure: 410,
      lastUpdate: '1 minute ago',
      mission: 'Environmental Monitoring',
      efficiency: 89
    },
    {
      id: 'AUV-003',
      name: 'Luna Gamma',
      position: [11.1, -141.2],
      status: 'maintenance',
      battery: 45,
      depth: 0,
      temperature: 25.0,
      pressure: 1,
      lastUpdate: '5 minutes ago',
      mission: 'Surface Maintenance',
      efficiency: 78
    },
    {
      id: 'AUV-004',
      name: 'Luna Delta',
      position: [8.8, -139.5],
      status: 'active',
      battery: 95,
      depth: 4300,
      temperature: 1.1,
      pressure: 430,
      lastUpdate: '30 seconds ago',
      mission: 'Nodule Collection',
      efficiency: 96
    }
  ];

  // Mock sediment plume data
  const plumeData = [
    {
      center: [9.5, -142.3],
      radius: 500, // meters
      concentration: 45, // mg/L
      age: 2 // hours
    },
    {
      center: [10.2, -138.7],
      radius: 300,
      concentration: 28,
      age: 1
    }
  ];

  // Custom AUV icon
  const createAUVIcon = (status, battery) => {
    const color = status === 'active' ? '#00b4d8' : status === 'maintenance' ? '#ffa500' : '#ff4444';
    const batteryColor = battery > 70 ? '#00ff00' : battery > 30 ? '#ffa500' : '#ff0000';
    
    return L.divIcon({
      className: 'custom-auv-icon',
      html: `
        <div style="
          width: 24px;
          height: 24px;
          background: ${color};
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">
          <div style="
            width: 8px;
            height: 8px;
            background: ${batteryColor};
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  };

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
        duration: 0.6
      }
    }
  };

  return (
    <section id="technology" className="section-padding bg-gradient-to-b from-ocean-dark/50 to-ocean-dark">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6"
          >
            <span className="gradient-text">Live Operations</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time monitoring of our autonomous fleet in the Clarion-Clipperton Zone. 
            Track AUV positions, environmental conditions, and compliance metrics.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl overflow-hidden h-96 lg:h-[500px]">
              <MapContainer
                center={cczCenter}
                zoom={6}
                style={{ height: '100%', width: '100%' }}
                bounds={cczBounds}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* AUV Markers */}
                {auvData.map((auv) => (
                  <Marker
                    key={auv.id}
                    position={auv.position}
                    icon={createAUVIcon(auv.status, auv.battery)}
                    eventHandlers={{
                      click: () => setSelectedAUV(auv)
                    }}
                  >
                    <Popup>
                      <div className="text-sm">
                        <h3 className="font-bold text-ocean-dark mb-2">{auv.name}</h3>
                        <p><strong>Status:</strong> {auv.status}</p>
                        <p><strong>Battery:</strong> {auv.battery}%</p>
                        <p><strong>Depth:</strong> {auv.depth}m</p>
                        <p><strong>Mission:</strong> {auv.mission}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* Sediment Plumes */}
                {plumeData.map((plume, index) => (
                  <Circle
                    key={index}
                    center={plume.center}
                    radius={plume.radius}
                    pathOptions={{
                      color: '#ff6b6b',
                      fillColor: '#ff6b6b',
                      fillOpacity: 0.2,
                      weight: 2
                    }}
                  />
                ))}
              </MapContainer>
            </div>
          </motion.div>

          {/* AUV Status Panel */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-orbitron font-semibold mb-4 text-ocean-text">
                Fleet Status
              </h3>
              <div className="space-y-3">
                {auvData.map((auv) => (
                  <motion.div
                    key={auv.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedAUV(auv)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedAUV?.id === auv.id
                        ? 'border-ocean-primary bg-ocean-primary/10'
                        : 'border-ocean-primary/20 hover:border-ocean-primary/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-ocean-text">{auv.name}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        auv.status === 'active' ? 'bg-green-500' : 
                        auv.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                    <div className="text-xs text-ocean-text/70">
                      <div>Battery: {auv.battery}%</div>
                      <div>Efficiency: {auv.efficiency}%</div>
                      <div>Mission: {auv.mission}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Environmental Conditions */}
            <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-orbitron font-semibold mb-4 text-ocean-text">
                Environmental Data
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-ocean-text/70">Avg. Temperature:</span>
                  <span className="text-ocean-text">1.2°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ocean-text/70">Avg. Pressure:</span>
                  <span className="text-ocean-text">420 atm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ocean-text/70">Active Plumes:</span>
                  <span className="text-ocean-text">{plumeData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ocean-text/70">Compliance:</span>
                  <span className="text-green-400">95%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selected AUV Details */}
        {selectedAUV && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-orbitron font-semibold text-ocean-text">
                {selectedAUV.name} - Detailed Status
              </h3>
              <button
                onClick={() => setSelectedAUV(null)}
                className="text-ocean-text/70 hover:text-ocean-text transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-ocean-primary mb-1">
                  {selectedAUV.battery}%
                </div>
                <div className="text-sm text-ocean-text/70">Battery Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-ocean-primary mb-1">
                  {selectedAUV.depth}m
                </div>
                <div className="text-sm text-ocean-text/70">Current Depth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-ocean-primary mb-1">
                  {selectedAUV.temperature}°C
                </div>
                <div className="text-sm text-ocean-text/70">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-ocean-primary mb-1">
                  {selectedAUV.efficiency}%
                </div>
                <div className="text-sm text-ocean-text/70">Efficiency</div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-ocean-text/70">
              <p><strong>Mission:</strong> {selectedAUV.mission}</p>
              <p><strong>Last Update:</strong> {selectedAUV.lastUpdate}</p>
              <p><strong>Pressure:</strong> {selectedAUV.pressure} atm</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveMap;
