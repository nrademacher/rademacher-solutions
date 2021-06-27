import { NavBar } from '../components/NavBar';
import { SolutionsContainer } from '../components/SolutionsContainer';
import { ProductCard } from '../components/ProductCard';
import { ProductFeature } from '../components/ProductFeature';
import { Footer } from '../components/Footer';

export default function PersonalSolutions() {
  return (
    <>
      <NavBar />
      <SolutionsContainer selectionColors="selection:text-white selection:bg-grape-6">
        <ProductCard
          tier="Basic"
          price={49}
          textColor="text-grape-6"
          bgColor="bg-grape-6"
          borderColor="border-grape-6"
          hoverColor="hover:bg-grape-5"
          hoverShadow="hover:shadow-personal"
        >
          <ProductFeature iconColor="text-grape-6">
            An appealing, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            Carefully designed showcase sections
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            An appealing, performant landing page
          </ProductFeature>
        </ProductCard>
        <ProductCard
          tier="Professional"
          price={149}
          textColor="text-grape-6"
          bgColor="bg-grape-6"
          borderColor="border-grape-6"
          hoverColor="hover:bg-grape-5"
          hoverShadow="hover:shadow-personal"
        >
          <ProductFeature iconColor="text-grape-6">
            An appealing, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            Carefully designed showcase sections
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            An appealing, performant landing page
          </ProductFeature>
        </ProductCard>
      </SolutionsContainer>
      <Footer />
    </>
  );
}
