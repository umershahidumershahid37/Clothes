import React from 'react';

const Map = ({ query = 'Lahore, Pakistan', zoom = 14, height = 400 }) => {
    const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;

    return (
        <div className="w-full px-2 sm:px-4 py-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 bg-white p-1 sm:p-2">
                
                {/* Optional Brand Badge Overlay (Agar dikhana ho) */}
                <div className="absolute top-4 left-4 z-10 bg-neutral-900/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md border border-neutral-800">
                    STITCH<span className="text-[#b98a55]">LAB</span> Location
                </div>

                <iframe
                    title="STITCHLAB Location Map"
                    src={src}
                    style={{ width: '100%', height: `${height}px`, border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-xl w-full"
                />
            </div>
        </div>
    );
};

export default Map;