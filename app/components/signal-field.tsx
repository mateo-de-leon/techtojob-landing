"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";

type SignalFieldProps = {
  labels: string[];
  ticker: string[];
};

const particlePositions = [
  [7, 18], [14, 42], [19, 71], [27, 28], [33, 84], [41, 12], [47, 57], [53, 34],
  [58, 78], [64, 19], [72, 48], [77, 87], [84, 28], [91, 64], [96, 16], [89, 9],
  [24, 9], [38, 64], [69, 70], [4, 89], [56, 6], [81, 12], [12, 88], [45, 93],
];

export function SignalField({ labels, ticker }: SignalFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const field = fieldRef.current;
    if (!field) return;
    const bounds = field.getBoundingClientRect();
    field.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    field.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  };

  return (
    <div className="signal-field" ref={fieldRef} onPointerMove={handlePointerMove} aria-hidden="true">
      <div className="field-grid" />
      <div className="field-glow" />
      <div className="field-scanline" />
      <div className="field-topology topology-a"><span /><span /><span /><span /></div>
      <div className="field-topology topology-b"><span /><span /><span /></div>
      <div className="field-particles">
        {particlePositions.map(([x, y], index) => (
          <i
            className={`field-particle particle-${index % 4}`}
            key={`${x}-${y}`}
            style={{ "--particle-x": `${x}%`, "--particle-y": `${y}%`, "--particle-delay": `${index * 180}ms` } as CSSProperties}
          />
        ))}
      </div>
      <div className="field-labels">
        {labels.map((label, index) => <span key={label}><i>0{index + 1}</i>{label}</span>)}
      </div>
      <div className="signal-ticker"><div className="signal-ticker-track">{[...ticker, ...ticker].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>
    </div>
  );
}
