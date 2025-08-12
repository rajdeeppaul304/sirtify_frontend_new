import { useEffect, useRef } from 'react';

export const RotatingGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

               // Set canvas size
           const size = 500;
           canvas.width = size;
           canvas.height = size;

    let rotation = 0;

    const drawGlobe = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

                   const centerX = size / 2;
             const centerY = size / 2;
             const radius = 200;

      // Draw latitude lines (horizontal circles)
      for (let lat = -80; lat <= 80; lat += 20) {
        const latRadius = radius * Math.cos((lat * Math.PI) / 180);
        const y = centerY + (lat * radius) / 90;

        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.ellipse(centerX, y, latRadius, Math.abs(latRadius * 0.3), 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // Draw longitude lines (vertical circles)
      for (let lon = 0; lon < 360; lon += 30) {
        const lonRad = (lon * Math.PI) / 180 + rotation;
        
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        
        // Draw longitude line as an ellipse
        for (let i = 0; i < 180; i++) {
          const lat = (i - 90) * Math.PI / 180;
          const x = centerX + radius * Math.cos(lat) * Math.cos(lonRad);
          const y = centerY + radius * Math.sin(lat);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw equator (thicker line)
      ctx.beginPath();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.ellipse(centerX, centerY, radius, radius * 0.3, 0, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw prime meridian (thicker line)
      ctx.beginPath();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      for (let i = 0; i < 180; i++) {
        const lat = (i - 90) * Math.PI / 180;
        const x = centerX + radius * Math.cos(lat) * Math.cos(rotation);
        const y = centerY + radius * Math.sin(lat);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Add some grid points for more detail
      for (let lat = -60; lat <= 60; lat += 30) {
        for (let lon = 0; lon < 360; lon += 45) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = (lon * Math.PI) / 180 + rotation;
          
          const x = centerX + radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = centerY + radius * Math.sin(latRad);
          
          ctx.beginPath();
          ctx.fillStyle = '#000';
          ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      rotation += 0.005;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      // Cleanup animation
    };
  }, []);

  return (
    <div className="relative">
                   <canvas
               ref={canvasRef}
               className="w-96 h-96"
               style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
             />
    </div>
  );
};
