import { NavBar } from '../components/NavBar';
import { SolutionsContainer } from '../components/SolutionsContainer';
import { ProductCard } from '../components/ProductCard';
import { ProductFeature } from '../components/ProductFeature';
import { Footer } from '../components/Footer';

export default function WildcardSolution() {
  return (
    <>
      <NavBar />
      <SolutionsContainer selectionColors="selection:text-white selection:bg-yellow-6">
        <ProductCard
          tier="Wildcard"
          textColor="text-yellow-6"
          bgColor="bg-yellow-6"
          borderColor="border-yellow-6"
          hoverColor="hover:bg-yellow-5"
          hoverShadow="hover:shadow-wildcard"
        >
          <ProductFeature iconColor="text-yellow-6">
            A completely custom solution tailored to your specific needs
          </ProductFeature>
          <ProductFeature iconColor="text-yellow-6">
            Flexible pricing based on desired features and scope, discussed in
            advance
          </ProductFeature>
          <ProductFeature iconColor="text-yellow-6">
            Same 30-day support and money-back guarantee as for standard
            solutions
          </ProductFeature>
        </ProductCard>
      </SolutionsContainer>
      <Footer />
    </>
  );
}
