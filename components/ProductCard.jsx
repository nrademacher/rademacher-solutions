export function ProductCard({
  tier,
  price,
  textColor,
  bgColor,
  borderColor,
  hoverColor,
  hoverShadow,
  children,
  hasDemo,
}) {
  return (
    <div
      className={`w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[30vw] text-center card shadow-card ${hoverShadow} h-[80vh]`}
    >
      <div className="justify-between card-body">
        <div className="grid gap-8 place-items-center">
          <h2 className="text-5xl font-bold font-heading">{tier}</h2>
          <h3 className="text-4xl font-bold text-gray-7 font-heading">
            ${price}
          </h3>
        </div>
        <div className="text-left w-full">
          <h4 className="font-heading text-lg font-bold mb-4">What you get:</h4>
          <ul className="space-y-4 text-sm flex flex-col w-full mx-auto">
            {children}
          </ul>
        </div>
        <div className="grid place-items-center gap-8">
          {hasDemo && (
            <button
              className={`py-2 px-4 rounded bg-white ${textColor} border-[1px] ${borderColor} ${hoverColor} hover:text-white`}
            >
              View Demo
            </button>
          )}
          <button
            className={`py-2 px-4 rounded ${bgColor} text-white ${hoverColor}`}
          >
    {hasDemo ? 'Buy Now' : 'Get in Touch'}
          </button>
        </div>
      </div>
    </div>
  );
}
