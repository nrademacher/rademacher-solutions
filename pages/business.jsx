import { NavBar } from '../components/NavBar';
import { SolutionsContainer } from '../components/SolutionsContainer';
import { ProductCard } from '../components/ProductCard';
import { ProductFeature } from '../components/ProductFeature';
import { Footer } from '../components/Footer';

export default function BusinessSolutions() {
  return (
    <>
      <NavBar />
      <SolutionsContainer selectionColors="selection:text-white selection:bg-blue-6">
        <ProductCard
          tier="Basic"
          price={99}
          textColor="text-blue-6"
          bgColor="bg-blue-6"
          borderColor="border-blue-6"
          hoverColor="hover:bg-blue-5"
          hoverShadow="hover:shadow-business"
          hasDemo
        >
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Carefully designed showcase sections
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
        </ProductCard>
        <ProductCard
          tier="Plus"
          price={149}
          textColor="text-blue-6"
          bgColor="bg-blue-6"
          borderColor="border-blue-6"
          hoverColor="hover:bg-blue-5"
          hoverShadow="hover:shadow-business"
          hasDemo
        >
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Carefully designed showcase sections
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
        </ProductCard>
        <ProductCard
          tier="Premium"
          price={299}
          textColor="text-blue-6"
          bgColor="bg-blue-6"
          borderColor="border-blue-6"
          hoverColor="hover:bg-blue-5"
          hoverShadow="hover:shadow-business"
          hasDemo
        >
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Carefully designed showcase sections
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            An appealing, performant landing page
          </ProductFeature>
        </ProductCard>
      </SolutionsContainer>
      <Footer />
    </>
  );
}
