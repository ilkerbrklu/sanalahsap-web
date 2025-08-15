import React, { useState, useEffect } from "react";

const animations = [
    [
        { left: "8%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "16%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "16%", height: "4px", top: "14.5%", animation: "lineAnimetion_X-25 1s forwards 3s" },
        { left: "16%", height: "4px", top: "28%", animation: "lineAnimetion_X-30 1s forwards 4s" },
        { left: "16%", height: "4px", top: "42.5%", animation: "lineAnimetion_X-35 1s forwards 5s" },
        { left: "16%", height: "4px", top: "57%", animation: "lineAnimetion_X-30 1s forwards 6s" },
        { left: "16%", height: "4px", top: "71.5%", animation: "lineAnimetion_X-25 1s forwards 7s" },
    ],
    [
        { left: "8%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "16%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "24%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "32%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "40%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "48%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "8%", height: "4px", top: "14.5%", animation: "lineAnimetion_X 1s forwards 3s" },
        { right: "8%", height: "4px", top: "28%", animation: "lineAnimetion_X 1s forwards 4s" },
        { left: "8%", height: "4px", top: "42.5%", animation: "lineAnimetion_X 1s forwards 5s" },
        { right: "8%", height: "4px", top: "57%", animation: "lineAnimetion_X 1s forwards 6s" },
        { left: "8%", height: "4px", top: "71.5%", animation: "lineAnimetion_X 1s forwards 7s" },
    ],
    [
        { right: "8%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "8%", height: "100%", width: "4px", animation: "lineAnimetion_Y 3s forwards" },
        { left: "8%", height: "4px", top: "14.5%", animation: "lineAnimetion_X 1s forwards 3s" },
        { right: "8%", height: "4px", top: "28%", animation: "lineAnimetion_X 1s forwards 4s" },
        { left: "8%", height: "4px", top: "42.5%", animation: "lineAnimetion_X 1s forwards 5s" },
        { right: "8%", height: "4px", top: "57%", animation: "lineAnimetion_X 1s forwards 6s" },
        { left: "8%", height: "4px", top: "71.5%", animation: "lineAnimetion_X 1s forwards 7s" },
    ]
];

const totalAnimationDuration = 3 + 1 + 8;

export default function AnimatedLines() {
    const [activeAnimationIndex, setActiveAnimationIndex] = useState(0);
    const [showLines, setShowLines] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLines(false);
            setTimeout(() => {
                setActiveAnimationIndex((prev) => (prev + 1) % animations.length);
                setShowLines(true);
            }, 1000);
        }, (totalAnimationDuration) * 1000);

        return () => clearTimeout(timer);
    }, [activeAnimationIndex]);

    return (
        <div className="wood-wrap">
            {showLines &&
                animations[activeAnimationIndex].map((line, i) => (
                    <div
                        key={i}
                        className="line"
                        style={{
                            position: "absolute",
                            backgroundColor: "#000",
                            pointerEvents: "none",
                            ...line,
                        }}
                    />
                ))}
            <img
                className="img-fit rounded-1"
                src="imgs/wood.png"
                alt="Çelik Kapı Görseli"
            />
        </div>
    );
}
