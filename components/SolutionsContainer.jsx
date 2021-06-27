export function SolutionsContainer({ selectionColors, children }) {
  return (
    <main
      className={`container grid place-content-center mt-12 mb-36 px-8 ${selectionColors}`}
    >
      <section className="flex flex-col justify-center items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        {children}
      </section>
    </main>
  );
}
