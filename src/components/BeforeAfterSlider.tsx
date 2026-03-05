import { useRef, useState, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl select-none cursor-col-resize group border border-border"
        style={{ aspectRatio: "16 / 10" }}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* After image (full background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerWidth || "100%", maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-slider-line/80 z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle circle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slider-handle flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.4)] border-[3px] border-slider-line/90 pointer-events-auto transition-transform duration-200 hover:scale-110"
            style={{ cursor: "col-resize" }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary-foreground"
            >
              <path
                d="M8 5L3 12L8 19M16 5L21 12L16 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dashed guides */}
          <div className="absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-[2px] mb-8"
            style={{ background: "repeating-linear-gradient(to bottom, hsl(var(--slider-line) / 0.5) 0, hsl(var(--slider-line) / 0.5) 6px, transparent 6px, transparent 12px)" }}
          />
          <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 w-[2px] mt-8"
            style={{ background: "repeating-linear-gradient(to bottom, hsl(var(--slider-line) / 0.5) 0, hsl(var(--slider-line) / 0.5) 6px, transparent 6px, transparent 12px)" }}
          />
        </div>

        {/* Labels */}
        <div className="absolute bottom-5 left-5 z-20 px-4 py-2 rounded-lg bg-label text-label-foreground font-semibold text-sm tracking-wider uppercase backdrop-blur-sm border border-primary/30">
          {beforeLabel}
        </div>
        <div className="absolute bottom-5 right-5 z-20 px-4 py-2 rounded-lg bg-label text-label-foreground font-semibold text-sm tracking-wider uppercase backdrop-blur-sm border border-primary/30">
          {afterLabel}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
