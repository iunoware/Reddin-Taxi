import { Link } from "react-router-dom";

export default function GlassButton({
  text1,
  text2,
  link,
  textColor,
  glass,
  bg,
  className = "",
}) {
  return (
    <>
      <Link
        to={link}
        className={`${
          glass
            ? `backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]`
            : `${bg}`
        } inline-block group/btn rounded-2xl px-8 py-3 ${className}`}
      >
        <div
          className={`flex h-6 mt-1.5 overflow-hidden items-center space-x-8 `}
        >
          <div
            className={`${
              textColor ? textColor : "text-white/90"
            } text-lg flex flex-col translate-y-2 group-hover/btn:-translate-y-5 duration-400 transition-all w-full font-medium`}
          >
            <span>{text1}</span>
            <span>{text2 ? text2 : text1}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
