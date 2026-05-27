export default function GlobeIcon({
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
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
      role="img"
      aria-label={resolvedAriaHidden ? undefined : ariaLabel}
      aria-hidden={resolvedAriaHidden}
    >
      <path
        d="M1.83301 10.9997H20.1663M1.83301 10.9997C1.83301 16.0623 5.93706 20.1663 10.9997 20.1663M1.83301 10.9997C1.83301 5.93706 5.93706 1.83301 10.9997 1.83301M20.1663 10.9997C20.1663 16.0623 16.0623 20.1663 10.9997 20.1663M20.1663 10.9997C20.1663 5.93706 16.0623 1.83301 10.9997 1.83301M10.9997 1.83301C13.2925 4.34316 14.5955 7.60071 14.6663 10.9997C14.5955 14.3986 13.2925 17.6562 10.9997 20.1663M10.9997 1.83301C8.70683 4.34316 7.40382 7.60071 7.33301 10.9997C7.40382 14.3986 8.70683 17.6562 10.9997 20.1663"
        stroke="#747397"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
