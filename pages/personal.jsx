import { NavBar } from '../components/NavBar';
import { SolutionsContainer } from '../components/SolutionsContainer';
import { ProductCard } from '../components/ProductCard';
import { ProductFeature } from '../components/ProductFeature';
import { Footer } from '../components/Footer';

export default function PersonalSolutions() {
  return (
    <>
      <NavBar solutionsPage />
      <SolutionsContainer selectionColors="selection:text-white selection:bg-grape-6">
        <ProductCard
          tier="Hobbyist"
          price={49}
          textColor="text-grape-6"
          bgColor="bg-grape-6"
          borderColor="border-grape-6"
          hoverColor="hover:bg-grape-5"
          hoverShadow="hover:shadow-personal"
        >
          <ProductFeature iconColor="text-grape-6">
            A hand-crafted page for your content
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            Any specific sections you require, including navigation
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            Contact form if desired
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
            Everything included in Hobbyist
          </ProductFeature>
          <ProductFeature iconColor="text-grape-6">
            Up to 12 additional pages
          </ProductFeature>
        </ProductCard>
      </SolutionsContainer>
      <Footer solutionsPage />
    </>
  );
}
