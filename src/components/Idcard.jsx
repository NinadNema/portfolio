import { useEffect, useRef, useCallback } from "react";
import portfolioData from "../data/portfolioData";
import avatar from "../assets/images/avatar.svg";

/**
 * Physics-based swinging ID card.
 * Simulates a damped pendulum: angularAcceleration = -STIFFNESS * sin(angle) - DAMPING * angularVelocity
 * Drag to grab the card and swing it; release and it swings/settles like a real badge on a lanyard.
 * Tune STIFFNESS (swing speed) and DAMPING (how fast it settles) to change the "feel".
 */
const STIFFNESS = 8; // like g/L - higher = faster swing
const DAMPING = 1.15; // energy loss per second - higher = settles faster
const MAX_ANGLE = (75 * Math.PI) / 180; // clamp while dragging so it can't flip over the nail
const REST_EPSILON = 0.0006; // snap to perfect rest below this threshold

function IdCard() {
  const pivotRef = useRef(null);
  const swingRef = useRef(null); // the string + card group that rotates
  const cardRef = useRef(null); // just the card, for dynamic shadow

  const angleRef = useRef(-0.5); // start slightly off-angle for an entrance swing
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const pivotPointRef = useRef({ x: 0, y: 0 });
  const lastPointerAngleRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const rafRef = useRef(null);
  const lastFrameTimeRef = useRef(null);

  const applyTransform = useCallback((angle) => {
    const deg = (angle * 180) / Math.PI;
    if (swingRef.current) {
      // subtle 3D tilt (rotateY) tied to swing angle for extra realism
      swingRef.current.style.transform = `rotate(${deg}deg) rotateY(${deg * 0.15}deg)`;
    }
    if (cardRef.current) {
      // shadow shifts opposite the swing direction, like real light/depth
      const shadowX = -deg * 0.6;
      cardRef.current.style.boxShadow = `${shadowX}px 18px 25px -10px rgba(0,0,0,0.55)`;
    }
  }, []);

  const tick = useCallback(
    (time) => {
      if (lastFrameTimeRef.current == null) lastFrameTimeRef.current = time;
      let dt = (time - lastFrameTimeRef.current) / 1000;
      dt = Math.min(dt, 0.032); // clamp so tab-switching doesn't cause a huge jump
      lastFrameTimeRef.current = time;

      if (!draggingRef.current) {
        const angle = angleRef.current;
        const velocity = velocityRef.current;

        // tiny ambient "breeze" torque so it never looks perfectly dead/static
        const wind = Math.sin(time / 1700) * 0.025;

        const accel = -STIFFNESS * Math.sin(angle) - DAMPING * velocity + wind;
        let newVelocity = velocity + accel * dt;
        let newAngle = angle + newVelocity * dt;

        if (
          Math.abs(newAngle) < REST_EPSILON &&
          Math.abs(newVelocity) < REST_EPSILON
        ) {
          newAngle = 0;
          newVelocity = 0;
        }

        angleRef.current = newAngle;
        velocityRef.current = newVelocity;
        applyTransform(newAngle);
      }
    },
    [applyTransform]
  );

  useEffect(() => {
    applyTransform(angleRef.current);

    const loop = (time) => {
      tick(time);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick, applyTransform]);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    velocityRef.current = 0;

    const rect = pivotRef.current.getBoundingClientRect();
    pivotPointRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top,
    };

    if (swingRef.current) swingRef.current.style.cursor = "grabbing";
    e.target.setPointerCapture?.(e.pointerId);
    lastPointerTimeRef.current = performance.now();
    lastPointerAngleRef.current = angleRef.current;
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;

    const { x: px, y: py } = pivotPointRef.current;
    const dx = e.clientX - px;
    const dy = e.clientY - py;
    let angle = Math.atan2(dx, dy); // 0 = hanging straight down
    angle = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angle));

    const now = performance.now();
    const dt = Math.max((now - lastPointerTimeRef.current) / 1000, 0.001);
    velocityRef.current = (angle - lastPointerAngleRef.current) / dt;

    angleRef.current = angle;
    applyTransform(angle);

    lastPointerAngleRef.current = angle;
    lastPointerTimeRef.current = now;
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    if (swingRef.current) swingRef.current.style.cursor = "grab";
  };

  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{ perspective: 900 }}
    >
      {/* Glow behind the card, matching the site's cyan accent */}
      <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-30 scale-125 rounded-full pointer-events-none" />

      {/* Nail */}
      <div ref={pivotRef} className="relative z-10 flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 shadow-md border border-slate-400" />
        <div className="w-[2px] h-2 bg-slate-500" />
      </div>

      {/* Swinging group: string + card share one pivot at the nail */}
      <div
        ref={swingRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative cursor-grab touch-none"
        style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
      >
        {/* Lanyard string */}
        <div className="w-[3px] h-14 bg-gradient-to-b from-slate-400 to-slate-600 mx-auto rounded-full" />

        {/* Card */}
        <div
          ref={cardRef}
          className="w-60 bg-slate-100 rounded-2xl overflow-hidden border border-slate-300 -mt-1"
          style={{ boxShadow: "0px 18px 25px -10px rgba(0,0,0,0.55)" }}
        >
          {/* Punch hole + grommet */}
          <div className="flex justify-center pt-2.5">
            <div className="w-4 h-4 rounded-full bg-slate-300 border border-slate-400 shadow-inner" />
          </div>

          {/* Header bar */}
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-4 mt-2.5" />

          <div className="px-5 py-5 flex flex-col items-center">
            <img
              src={avatar}
              alt={portfolioData.name}
              className="w-20 h-20 rounded-full border-4 border-cyan-500 bg-slate-800 object-cover"
              draggable={false}
            />

            <p className="mt-3 font-bold text-slate-900 text-center leading-tight">
              {portfolioData.name}
            </p>
            <p className="text-xs text-cyan-700 font-semibold mt-1 tracking-wide uppercase">
              {portfolioData.role}
            </p>

            <div className="w-full border-t border-dashed border-slate-300 my-4" />

            <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
              ID · Full-Stack Developer
            </p>

            {/* Decorative barcode */}
            <div className="flex gap-[2px] mt-3">
              {Array.from({ length: 26 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-800"
                  style={{
                    width: 2,
                    height: 18,
                    opacity: i % 3 === 0 ? 1 : 0.45,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;