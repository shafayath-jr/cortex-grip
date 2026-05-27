export default function LargeLineStroke({
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
      width="99"
      height="99"
      viewBox="0 0 99 99"
      fill="none"
      className={className}
      role="img"
      aria-label={resolvedAriaHidden ? undefined : ariaLabel}
      aria-hidden={resolvedAriaHidden}
    >
      <path
        opacity="0.6"
        d="M9.08984 89.3741L81.7999 16.6641"
        stroke="#A5B4FD"
        strokeWidth="6.06"
        strokeMiterlimit="8"
        strokeLinecap="round"
      />
      <path
        opacity="0.5"
        d="M9.09 98.4612C14.1103 98.4612 18.18 94.3915 18.18 89.3712C18.18 84.351 14.1103 80.2812 9.09 80.2812C4.06973 80.2812 0 84.351 0 89.3712C0 94.3915 4.06973 98.4612 9.09 98.4612Z"
        fill="#A5B4FD"
      />
      <path
        opacity="0.7"
        d="M45.4403 65.1384C52.134 65.1384 57.5603 59.7121 57.5603 53.0184C57.5603 46.3247 52.134 40.8984 45.4403 40.8984C38.7466 40.8984 33.3203 46.3247 33.3203 53.0184C33.3203 59.7121 38.7466 65.1384 45.4403 65.1384Z"
        fill="#A5B4FD"
      />
      <path
        d="M81.8006 33.32C91.0017 33.32 98.4606 25.8611 98.4606 16.66C98.4606 7.45894 91.0017 0 81.8006 0C72.5996 0 65.1406 7.45894 65.1406 16.66C65.1406 25.8611 72.5996 33.32 81.8006 33.32Z"
        fill="#A5B4FD"
      />
    </svg>
  );
}
