const ALIGNMENT = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
};

const ARROW_ALIGNMENT = {
  left: "left-6",
  center: "left-1/2 -translate-x-1/2",
};

export const Tooltip = ({
  id,
  title,
  text,
  align = "center",
  className = "",
  children,
}) => {
  return (
    <span className={`group/tip relative inline-block ${className}`}>
      {children}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full z-20 mb-3 w-64 max-w-[80vw] translate-y-1 rounded-xl border border-gray-700/50 bg-gray-800/95 p-4 text-left opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover/tip:translate-y-0 group-hover/tip:opacity-100 group-focus-within/tip:translate-y-0 group-focus-within/tip:opacity-100 ${ALIGNMENT[align]}`}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600/20 to-purple-600/20"></span>
        {title && (
          <span className="relative mb-1 block text-sm font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        )}
        <span className="relative block text-xs leading-relaxed text-gray-300">
          {text}
        </span>
        <span
          className={`absolute top-full -mt-1 h-2 w-2 rotate-45 border-b border-r border-gray-700/50 bg-gray-800 ${ARROW_ALIGNMENT[align]}`}
        ></span>
      </span>
    </span>
  );
};
