import Lottie from "lottie-react";
import youtubeUrl from "/assets/youtube.json?url";
import instagramUrl from "/assets/instagram.json?url";
import xUrl from "/assets/x.json?url";
import tiktokUrl from "/assets/tiktok.json?url";
import linkedinUrl from "/assets/linkedin.json?url";

const socials = [
  {
    src: youtubeUrl,
    label: "YouTube",
    count: "425K",
  },
  {
    src: instagramUrl,
    label: "Instagram",
    count: "280K",
  },
  {
    src: xUrl,
    label: "𝕏",
    count: "120K",
  },
  {
    src: tiktokUrl,
    label: "TikTok",
    count: "65K",
  },
  {
    src: linkedinUrl,
    label: "LinkedIn",
    count: "...",
  },
];

export default function SocialProof() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-8">
      {socials.map(({ src, label, count }) => (
        <div key={label} className="flex items-center gap-3 text-center">
          <Lottie animationData={src} className="h-10 w-10" loop={false} />
          <div>
            <p className="text-lg font-bold text-primary">{count}</p>
            <p className="text-sm text-secondary">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}