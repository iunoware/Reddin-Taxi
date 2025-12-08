export default function Heading({ title, className = "" }) {
  return (
    <>
      <div className={`text-center mb-10 text-red-600 ${className}`}>
        <h2 className="text-3xl md:text-4xl  font-semibold uppercase drop-shadow-sm basker">
          {title}
        </h2>
        <div className="w-64 h-1 mx-auto mt-6 rounded-full bg-linear-to-r from-transparent via-red-500 to-transparent opacity-80"></div>
      </div>
    </>
  );
}
