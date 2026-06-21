import React from 'react';
import './ScoreRing.css';

interface Props {
  score: number | null;
  size?: number;
}

export default function ScoreRing({ score, size = 56 }: Props) {
  if (score === null) return null;

  const strokeWidth = 2;
  const radius = (size / 2) - strokeWidth - 3;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  const color      = score >= 90 ? '#16a34a' : score >= 70 ? '#d97706' : '#dc2626';
  const trackColor = score >= 90 ? '#bbf7d0' : score >= 70 ? '#fde68a' : '#fecaca';
  const bgColor    = score >= 90 ? '#f0fdf4' : score >= 70 ? '#fffbeb' : '#fef2f2';
  const fontSize   = size <= 40 ? 11 : size <= 48 ? 12 : 16;

  return (
    <div className="score-ring" style={{ width: size, height: size, background: bgColor, borderRadius: '50%' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="score-ring__label" style={{ color, fontSize }}>{score}</span>
    </div>
  );
}
