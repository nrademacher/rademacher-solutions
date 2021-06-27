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
        >
          <ProductFeature iconColor="text-blue-6">
            A well-designed, performant landing page
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            About section to introduce your business
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Showcase section for your products or services
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Contact section and form
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
        >
          <ProductFeature iconColor="text-blue-6">
            Everything included in Basic
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Up to six additional pages
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Any desired sections for those pages
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
        >
          <ProductFeature iconColor="text-blue-6">
            Everything included in Plus
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Up to 12 additional pages
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Customer authenication: registration and login
          </ProductFeature>
          <ProductFeature iconColor="text-blue-6">
            Offer personalized content to signed-in customers
          </ProductFeature>
        </ProductCard>
      </SolutionsContainer>
      <Footer />
    </>
  );
}
