export default function SmallLineStroke({
  className,
  ariaLabel,
  ariaHidden,
}: {
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}) {
  const resolvedAriaHidden = ariaHidden ?? !ariaLabel;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      role="img"
      aria-label={resolvedAriaHidden ? undefined : ariaLabel}
      aria-hidden={resolvedAriaHidden}
    >
      <path
        opacity="0.6"
        d="M14.5641 2.65443C14.7804 2.43811 15.1312 2.43811 15.3475 2.65443C15.5638 2.87075 15.5638 3.2215 15.3475 3.43782L2.05501 16.7304C1.83868 16.9467 1.48794 16.9467 1.27162 16.7304C1.0553 16.514 1.05529 16.1633 1.27162 15.947L14.5641 2.65443Z"
        fill="#4F46E5"
      />
      <path
        opacity="0.5"
        d="M1.66179 18.0033C2.57957 18.0033 3.32358 17.2593 3.32358 16.3415C3.32358 15.4237 2.57957 14.6797 1.66179 14.6797C0.744009 14.6797 0 15.4237 0 16.3415C0 17.2593 0.744009 18.0033 1.66179 18.0033Z"
        fill="#4F46E5"
      />
      <path
        opacity="0.5"
        d="M8.30557 11.908C9.52928 11.908 10.5213 10.916 10.5213 9.69229C10.5213 8.46858 9.52928 7.47656 8.30557 7.47656C7.08186 7.47656 6.08984 8.46858 6.08984 9.69229C6.08984 10.916 7.08186 11.908 8.30557 11.908Z"
        fill="#4F46E5"
      />
      <path
        d="M14.9559 6.09142C16.638 6.09142 18.0016 4.72781 18.0016 3.04571C18.0016 1.36361 16.638 0 14.9559 0C13.2738 0 11.9102 1.36361 11.9102 3.04571C11.9102 4.72781 13.2738 6.09142 14.9559 6.09142Z"
        fill="#4F46E5"
      />
    </svg>
  );
}
