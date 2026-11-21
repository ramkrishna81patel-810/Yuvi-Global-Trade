
import React from 'react';
import { Leaf, ShieldCheck, Handshake } from 'lucide-react';

const YuviPaperBagsSVG = () => (
    <svg
        viewBox="0 0 400 320"
        className="w-full h-auto drop-shadow-2xl"
    >
        <defs>
            <linearGradient id="kraftBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            <linearGradient id="kraftDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#451a03" />
            </linearGradient>

            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>

            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="6"
                    floodColor="#000000"
                    floodOpacity="0.4"
                />
            </filter>
        </defs>

        {/* Surface Shadow */}
        <ellipse
            cx="200"
            cy="290"
            rx="170"
            ry="18"
            fill="#000000"
            opacity="0.3"
            filter="blur(8px)"
        />

        {/* Big Paper Bag (Right) */}
        <g filter="url(#shadow)">

            {/* Handle */}
            <path
                d="M 230 140 C 230 80, 310 80, 310 140"
                fill="none"
                stroke="#78350f"
                strokeWidth="8"
                strokeLinecap="round"
            />

            <path
                d="M 233 140 C 233 85, 307 85, 307 140"
                fill="none"
                stroke="#d97706"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Bag Body */}
            <path
                d="M 190 135 L 350 135 L 365 285 L 195 285 Z"
                fill="url(#kraftBg)"
            />

            <path
                d="M 190 135 L 205 285 L 195 285 Z"
                fill="url(#kraftDark)"
                opacity="0.4"
            />

            {/* Logo on Big Bag */}
            <g transform="translate(245, 175)">
                <rect
                    x="12"
                    y="0"
                    width="36"
                    height="32"
                    rx="6"
                    fill="#78350f"
                    opacity="0.8"
                />

                <path
                    d="M 30 6 C 20 6, 16 16, 22 24 C 28 30, 38 28, 38 20 C 38 12, 34 6, 30 6 Z"
                    fill="url(#leafGrad)"
                />

                <text
                    x="30"
                    y="46"
                    fontSize="14"
                    fontWeight="900"
                    fill="#fef3c7"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                >
                    YUVI
                </text>

                <text
                    x="30"
                    y="58"
                    fontSize="10"
                    fontWeight="700"
                    fill="#fde68a"
                    textAnchor="middle"
                    letterSpacing="1"
                    fontFamily="sans-serif"
                >
                    PAPER BAG
                </text>

                <line
                    x1="0"
                    y1="68"
                    x2="60"
                    y2="68"
                    stroke="#fde68a"
                    strokeWidth="1"
                    opacity="0.5"
                />

                <text
                    x="30"
                    y="77"
                    fontSize="5.5"
                    fontWeight="600"
                    fill="#fef3c7"
                    textAnchor="middle"
                    letterSpacing="1"
                    fontFamily="sans-serif"
                >
                    PACK • PRINT • PROMOTE
                </text>
            </g>
        </g>

        {/* Small Paper Bag (Left) */}
        <g filter="url(#shadow)">

            {/* Handle */}
            <path
                d="M 100 180 C 100 130, 150 130, 150 180"
                fill="none"
                stroke="#78350f"
                strokeWidth="6"
                strokeLinecap="round"
            />

            <path
                d="M 102 180 C 102 134, 148 134, 148 180"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Bag Body */}
            <path
                d="M 70 175 L 180 175 L 190 288 L 75 288 Z"
                fill="url(#kraftBg)"
            />

            <path
                d="M 70 175 L 80 288 L 75 288 Z"
                fill="url(#kraftDark)"
                opacity="0.4"
            />

            {/* Logo on Small Bag */}
            <g transform="translate(102, 205)">
                <rect
                    x="8"
                    y="0"
                    width="28"
                    height="24"
                    rx="4"
                    fill="#78350f"
                    opacity="0.8"
                />

                <path
                    d="M 22 4 C 14 4, 11 12, 16 18 C 21 23, 29 21, 29 15 C 29 9, 25 4, 22 4 Z"
                    fill="url(#leafGrad)"
                />

                <text
                    x="22"
                    y="36"
                    fontSize="11"
                    fontWeight="900"
                    fill="#fef3c7"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                >
                    YUVI
                </text>

                <text
                    x="22"
                    y="45"
                    fontSize="7.5"
                    fontWeight="700"
                    fill="#fde68a"
                    textAnchor="middle"
                    letterSpacing="0.8"
                    fontFamily="sans-serif"
                >
                    PAPER BAG
                </text>
            </g>
        </g>
    </svg>
);

const LeftBanner = () => {
    return (
        <div className="w-full md:w-1/2 relative bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 text-white flex flex-col justify-between p-8 lg:p-10 overflow-hidden">

            {/* Decorative Glow Elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Brand Header */}
            <div className="relative z-10">

                <div className="flex items-center gap-3 mb-4">

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg border border-amber-400/30">

                        <Leaf className="w-7 h-7 text-emerald-300 fill-emerald-400/40 transform -rotate-12" />

                    </div>

                    <div>
                        <h2 className="font-extrabold text-2xl tracking-tight text-amber-100 leading-none">
                            YUVI
                        </h2>

                        <span className="text-xs tracking-widest text-amber-300 uppercase font-semibold">
                            Paper Bag
                        </span>
                    </div>
                </div>

                {/* Registration Heading */}
                <h1 className="text-3xl lg:text-4xl font-bold text-amber-50 leading-tight mb-2">
                    Join the Eco Movement
                </h1>

                <p className="text-amber-200/90 text-sm font-light max-w-md">
                    Create an account to order high-quality, eco-friendly custom paper bags for your brand.
                </p>
            </div>

            {/* SVG Paper Bag Banner */}
            <div className="relative z-10 my-4 flex items-center justify-center">

                <div className="w-full max-w-xs">
                    <YuviPaperBagsSVG />
                </div>

            </div>

            {/* Bottom Features */}
            <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-amber-800/60 pt-4">

                {/* Eco Friendly */}
                <div className="flex flex-col items-center text-center">

                    <div className="w-8 h-8 rounded-full bg-amber-800/60 flex items-center justify-center mb-1 border border-amber-600/30">

                        <Leaf className="w-4 h-4 text-emerald-400" />

                    </div>

                    <span className="text-[11px] font-medium text-amber-100">
                        Eco-Friendly
                    </span>

                </div>

                {/* High Quality */}
                <div className="flex flex-col items-center text-center">

                    <div className="w-8 h-8 rounded-full bg-amber-800/60 flex items-center justify-center mb-1 border border-amber-600/30">

                        <ShieldCheck className="w-4 h-4 text-amber-300" />

                    </div>

                    <span className="text-[11px] font-medium text-amber-100">
                        High Quality
                    </span>

                </div>

                {/* Trusted Partner */}
                <div className="flex flex-col items-center text-center">

                    <div className="w-8 h-8 rounded-full bg-amber-800/60 flex items-center justify-center mb-1 border border-amber-600/30">

                        <Handshake className="w-4 h-4 text-amber-300" />

                    </div>

                    <span className="text-[11px] font-medium text-amber-100">
                        Trusted Partner
                    </span>

                </div>

            </div>

        </div>
    );
};

export default LeftBanner;
