import React from 'react';

export const GlobalCareerRoadmap = () => {
  return (
    <>
      <style>{`
        .roadmap-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          // background-color: #f8f9fa;
          min-height: 100vh;
        }

        .roadmap-title {
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          color: #2d3748;
        }

        .roadmap-timeline {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #ff6b35, #ff6b35);
          transform: translateX(-50%);
          z-index: 1;
        }

        .phase-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          position: relative;
          z-index: 2;
        }

        .phase-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #2d3748;
        }

        .phase-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          font-size: 16px;
          color: #4a5568;
          line-height: 1.5;
        }

        .phase-item:last-child {
          margin-bottom: 0;
        }

        .phase-icon {
          width: 20px;
          height: 20px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .milestone-section {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          position: relative;
          z-index: 2;
        }

        .milestone-section::before {
          content: '';
          position: absolute;
          left: -45px;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: #ff6b35;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
          z-index: 3;
        }

        .milestone-section.phase-1::before {
          content: '1';
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .milestone-section.phase-2::before {
          content: '2';
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .milestone-section.phase-3::before {
          content: '3';
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .milestone-title {
          font-size: 18px;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 15px;
        }

        .milestone-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 15px;
          color: #4a5568;
        }

        .milestone-item:last-child {
          margin-bottom: 0;
        }

        .milestone-check {
          width: 16px;
          height: 16px;
          background: #48bb78;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
          position: relative;
        }

        .milestone-check::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 10px;
          font-weight: bold;
        }

        .earning-highlight {
          background: #fff5f0;
          border-left: 4px solid #ff6b35;
          padding: 15px;
          margin: 15px 0;
          border-radius: 6px;
        }

        .earning-text {
          color: #ff6b35;
          font-weight: 600;
          font-size: 15px;
        }

        /* Icon styles */
        .icon-graduation { background: #ff6b35; }
        .icon-portfolio { background: #3182ce; }
        .icon-certificate { background: #e53e3e; }
        .icon-resume { background: #ed8936; }
        .icon-project { background: #38a169; }
        .icon-money { background: #d69e2e; }
        .icon-interview { background: #805ad5; }
        .icon-language { background: #e53e3e; }
        .icon-placement { background: #3182ce; }
        .icon-visa { background: #ed8936; }
        .icon-relocation { background: #38a169; }
        .icon-support { background: #e53e3e; }
      `}</style>
      
      <div className="roadmap-container">
        <h1 className="roadmap-title">18-Month Global Career Roadmap</h1>
        
        <div className="roadmap-timeline">
          <div className="timeline-line"></div>
          
          {/* Row 1 */}
          <div className="phase-card">
            <h2 className="phase-title">Months 1-9: Skill Development</h2>
            
            <div className="phase-item">
              <div className="phase-icon icon-graduation"></div>
              Industry-focused skill training with global standards
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-portfolio"></div>
              Portfolio development with international projects
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-certificate"></div>
              NSQF certification and global skill assessment
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-resume"></div>
              International resume preparation
            </div>
          </div>
          
          <div className="milestone-section phase-1">
            <h3 className="milestone-title">Key Milestones:</h3>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Complete skill certification
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Build international portfolio
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Global resume preparation
            </div>
          </div>

          {/* Row 2 */}
          <div className="phase-card">
            <h2 className="phase-title">Months 10-15: Practice Phase</h2>
            
            <div className="phase-item">
              <div className="phase-icon icon-project"></div>
              Real client projects with international exposure
            </div>
            
            <div className="earning-highlight">
              <div className="earning-text">
                Earn ₹15K-₹35K/month while preparing for global roles
              </div>
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-interview"></div>
              Global interview preparation and mock sessions
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-language"></div>
              Cultural and language preparation for target countries
            </div>
          </div>
          
          <div className="milestone-section phase-2">
            <h3 className="milestone-title">Key Milestones:</h3>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Real client project experience
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Earn while you prepare
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Mock interviews with global companies
            </div>
          </div>

          {/* Row 3 */}
          <div className="phase-card">
            <h2 className="phase-title">Months 16-18: Progress to Global Placement</h2>
            
            <div className="phase-item">
              <div className="phase-icon icon-placement"></div>
              Direct placement with international employers
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-visa"></div>
              Complete visa application support
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-relocation"></div>
              Relocation assistance and guidance
            </div>
            
            <div className="phase-item">
              <div className="phase-icon icon-support"></div>
              Continuous support during initial months abroad
            </div>
          </div>
          
          <div className="milestone-section phase-3">
            <h3 className="milestone-title">Key Milestones:</h3>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              International job offer
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Successful visa application
            </div>
            
            <div className="milestone-item">
              <div className="milestone-check"></div>
              Smooth relocation process
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default CareerRoadmap;