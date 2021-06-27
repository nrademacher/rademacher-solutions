export function SolutionsContainer({ selectionColors, children }) {
  return (
    <main
      className={`grid place-content-center mt-8 mb-24 px-8 ${selectionColors}`}
    >
      <section className="flex flex-col justify-center items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        {children}
      </section>
    </main>
  );
}
