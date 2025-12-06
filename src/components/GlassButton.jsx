import { Link } from "react-router-dom";

export default function GlassButton({ text, link, glass, bg, className = "" }) {
  return (
    <>
      <Link
        to={link}
        className={`${
          glass
            ? `backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] px-8 py-3 rounded-full ${className}`
            : `px-8 py-3 rounded-full ${bg} ${className}`
        } group/btn `}
      >
        <div className={`flex h-6 mt-1.5 overflow-hidden items-center space-x-8 `}>
          <div className="text-white/90 text-lg flex flex-col translate-y-2 group-hover/btn:-translate-y-5 duration-400 transition-all font-medium">
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
