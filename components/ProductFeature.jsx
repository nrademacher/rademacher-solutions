export function ProductFeature({ iconColor, children }) {
  return (
    <li className="flex items-center space-x-2">
      <svg
        className={`inline-block ${iconColor} w-6 h-6`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
      </svg>
    <span>
      {children}
    </span>
    </li>
  );
}
