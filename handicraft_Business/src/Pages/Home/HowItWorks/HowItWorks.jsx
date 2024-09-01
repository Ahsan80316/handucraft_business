import SectionTitle from "../../../Shared/Section Tittle/SectionTittle";

const HowItWorks = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Discover Unique Creations"
        heading="How to Explore and Shop"
      ></SectionTitle>
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore Businesses</h3>
              <p className="text-gray-700">
                Browse through a variety of unique handicraft businesses. View
                their profiles, read reviews, and discover the products they
                offer.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Select Your Favorite Items</h3>
              <p className="text-gray-700">
                Choose from a curated selection of handmade products. Each item
                tells a story of tradition and craftsmanship.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Support Artisans</h3>
              <p className="text-gray-700">
                Purchase your selected items and support local artisans. Your
                purchase helps preserve traditional crafts and provides income
                to talented creators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
