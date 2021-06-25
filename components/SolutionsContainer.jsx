export function SolutionsContainer({ selectionColors, children }) {
  return (
    <main className={`mt-4 px-8 h-[92vh] ${selectionColors}`}>
      <section className="flex flex-col justify-center items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        {children}
      </section>
    </main>
  );
}
