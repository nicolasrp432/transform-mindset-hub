import React from "react";

export const VisaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-visa">
    <title id="pi-visa">Visa</title>
    <rect x="1" y="1" width="36" height="22" rx="3" fill="#FFFFFF" stroke="#1A1F71" strokeWidth="1.5" />
    <rect x="1" y="1" width="36" height="7" rx="3" fill="#1A1F71" opacity="0.08" />
    <text x="19" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#1A1F71">
      VISA
    </text>
  </svg>
);

export const MastercardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-mastercard">
    <title id="pi-mastercard">Mastercard</title>
    <rect x="1" y="1" width="36" height="22" rx="3" fill="#FFFFFF" stroke="#1A1F71" strokeWidth="1.5" />
    <circle cx="16" cy="12" r="6.5" fill="#EB001B" />
    <circle cx="22" cy="12" r="6.5" fill="#F79E1B" />
    <circle cx="19" cy="12" r="6.5" fill="#FF5F00" opacity="0.7" />
    <text x="19" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="700" fill="#1A1F71">
      Mastercard
    </text>
  </svg>
);
