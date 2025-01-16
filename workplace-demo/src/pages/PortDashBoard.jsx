import React, { useState, useEffect, useRef } from 'react';
import { User2, Loader, Clock } from 'lucide-react';

const WarningItem = ({ message }) => (
  <div className="flex items-center h-fit p-2 rounded-lg mb-2 border-black/10 border-2 ">
    <div className="w-8 h-8 bg-red-100 rounded-lg mr-4 flex items-center justify-center ">
      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </div>
    <div className="flex-1">
      <div className="font-semibold">Safety Alert</div>
      <p className="text-sm text-gray-600 my-1">{message}</p>
    </div>
  </div>
);

const MetricCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white p-4 rounded-xl w-[30vw] h-[14vh]">
    <div className="flex items-center">
      <Icon className={`${color} mr-2`} size={12} />
      <span className="text-gray-600 text-xs">{label}</span>
    </div>
    <div className={`text-lg font-bold mt-2 ${color}`}>{value}</div>
  </div>
);

const Header = () => (
  <div className="bg-[#02274F] flex justify-between items-center mb-2">
    <div className="flex items-center justify-end ">
      <img 
        src="/src/assets/por.png" 
        alt="Vollee Port Patrol" 
        className="h-10"
      />
    </div>
    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white mr-30">
      JS
    </div>
  </div>
);

const PortDashboard = () => {
  const [warnings, setWarnings] = useState([]);
  const [shownWarnings, setShownWarnings] = useState(new Set());
  const videoRef = useRef(null);

  const warningData = [
    { id: 1, time: 0, message: "Warning: No Helmet Detected!" },
    { id: 2, time: 2, message: "Warning: Fire Detected!" },
    { id: 3, time: 8, message: "Warning: Fire inside the complex, Ensure all is secure!" },
    { id: 4, time: 15, message: "Warning: No Helmet Detected!" },
    { id: 5, time: 18, message: "Warning: No Helmet Detected!" },
    { id: 6, time: 20, message: "Warning: No Helmet Detected!" },
    { id: 7, time: 22, message: "Warning: Individual near Danger Zone!" },
    { id: 8, time: 26, message: "Warning: No Helmet Detected!" },
    { id: 9, time: 26, message: "Warning: No Helmet Detected!" },
    { id: 10, time: 26, message: "Warning: No Helmet Detected!" },
    { id: 11, time: 38, message: "Warning: No Helmet Detected!" },
    { id: 12, time: 42, message: "Warning: Person detected in Restricted Vehicle Zone!" }
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleTimeUpdate = (e) => {
    const currentTime = Math.floor(e.target.currentTime);
    
    const newWarnings = warningData.filter(warning => 
      warning.time === currentTime && !shownWarnings.has(warning.id)
    );

    if (newWarnings.length > 0) {
      setShownWarnings(prev => {
        const newSet = new Set(prev);
        newWarnings.forEach(warning => newSet.add(warning.id));
        return newSet;
      });

      setWarnings(prev => [
        ...newWarnings.map(w => ({
          id: w.id,
          message: w.message
        })),
        ...prev
      ]);
    }
  };

  return (
    <div className="h-screen bg-[#02274F] overflow-hidden p-6">
     
      {/* <div className="p-6 bg-black"> */}
        <div className="max-w-7xl mx-auto h-[10vh]"> <Header />
          <div className="bg-[#F1F1F1] rounded-3xl  shadow-xl overflow-auto ">
            <div className="relative   p-4 h-[82vh]">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <MetricCard 
                  icon={User2} 
                  label="No of Employees" 
                  value="235" 
                  color="text-purple-600" 
                />
                <MetricCard 
                  icon={Loader} 
                  label="No. of Active Cranes" 
                  value="142" 
                  color="text-green-600" 
                />
                <MetricCard 
                  icon={Clock} 
                  label="Cranes on standby" 
                  value="87" 
                  color="text-amber-500" 
                />
              </div>

              <div className="flex  gap-6 justify-evenly h-[58vh] w-full">
                {/* Main Video Feed */}
                <div className="col-span-2 h-[30vh] ">
                  <h2 className="text-lg justify-start font-semibold mb-1 text-black-500">Safety Monitoring System</h2>
                  <div className="relative  rounded-lg overflow-hidden h-[50vh] w-[48vw]">
                    <video 
                      ref={videoRef}
                      className="w-full rounded-lg"
                      autoPlay
                      muted
                      loop
                      onTimeUpdate={handleTimeUpdate}
                    >
                      <source 
                        src="/src/assets/Final.mp4"
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Warning Section */}
                <div className=" h-[20vh] w-[40vw]">
                  <h2 className="text-lg font-semibold mb-1">Safety Alerts</h2>
                  <div className="bg-white p-2 rounded-xl">
                    <h3 className="font-semibold text-md mb-1">WARNING HISTORY</h3>
                    <div className="overflow-y-auto max-h-[42vh]">
                    <div className="space-y-1 p-2">
                      {warnings.map((warning) => (
                        <WarningItem 
                          key={warning.id}
                          message={warning.message}
                        />
                      ))}
                      {warnings.length === 0 && (
                        <div className="text-gray-500 text-center py-4">
                          No active warnings
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default PortDashboard;