// components/FileBadgeIcon.tsx
type FileBadgeProps = {
  className?: string;
};

export default function FileBadgeIcon({ className = "" }: FileBadgeProps) {
  return (
    <svg
      viewBox="0 0 38 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The 3 window control circles fit perfectly inside a 38px wide boundary */}
      <rect y="3" width="10" height="10" rx="5" fill="#BA1A1A" />
      <rect x="14" y="3" width="10" height="10" rx="5" fill="#DAE2FD" />
      <rect x="28" y="3" width="10" height="10" rx="5" fill="#E2DFFF" />

      {/* REMOVED the long <path> element because it was rendering invisible text metrics */}
    </svg>
  );
}
