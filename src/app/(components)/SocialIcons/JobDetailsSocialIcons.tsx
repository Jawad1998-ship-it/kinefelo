import Link from "next/link";
import React from "react";

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.04C6.48 2.04 2 6.53 2 12.06c0 1.66.42 3.26 1.21 4.68l-1.43 5.22 5.34-1.4c1.38.74 2.94 1.18 4.57 1.18 5.52 0 10-4.48 10-10.02S17.52 2.04 12 2.04zM12 20.1c-1.49 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.41 0-4.42 3.58-8.01 8-8.01s8 3.59 8 8.01-3.58 8.01-8 8.01zm4.37-6.09c-.25-.12-1.47-.72-1.7-.84-.23-.12-.4-.12-.57.12-.17.25-.64.84-.78 1.02-.14.17-.28.19-.52.07-.24-.12-1.02-.38-1.94-1.2s-1.4-1.57-1.58-1.84c-.18-.28-.01-.43.11-.54s.24-.28.37-.42c.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43s-.72-1.72-.98-2.36c-.26-.64-.52-.55-.72-.55h-.47c-.2 0-.52.07-.78.34-.26.27-.98.96-.98 2.35 0 1.39.99 2.73 1.13 2.91.14.17 1.96 3 4.75 4.14 2.79 1.14 2.79.76 3.3.73.5-.04 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.05-.12-.2-.17-.44-.3z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);
const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const JobDetailsSocialIcons = () => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <FacebookIcon />
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <XIcon />
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <LinkedInIcon />
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <WhatsAppIcon />
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <YouTubeIcon />
      </Link>
      <Link
        href="#"
        className="w-8 h-8 flex items-center justify-center bg-white/10 sm:w-[24px] sm:h-[24px] w-[32px] h-[32px] rounded-[100px] hover:bg-white/20 transition-colors"
      >
        <TikTokIcon />
      </Link>
    </>
  );
};

export default JobDetailsSocialIcons;
