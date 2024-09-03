export const WhyFrontiers: React.FC = () => {
  return (
    <section className="container pt-6">
      <p className="text-center text-base text-secondary">
        Trusted livestock marketplace
      </p>
      <h2 className="text-center text-2xl leading-9 md:text-[36px] md:leading-12 text-primary font-archia font-semibold">
        Why buy &amp; sell on Frontiers Market?
      </h2>
      <section className="flex flex-col items-center py-6 md:py-8">
        <div className="flex gap-2 border border-slate-300 rounded-3xl p-1">
          <button
            type="button"
            className="font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl text-white bg-secondary"
          >
            I’m here for selling
          </button>
          <button
            type="button"
            className="font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl text-grey"
          >
            I’m here for buying
          </button>
        </div>
      </section>
      <section className="bullets flex flex-col md:mt-6">
        {/* Bullet 1 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Large selection
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Top Classes and Breeds
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Find the cattle you’re looking for with our large catalog of
              livestock across the United States. Search for breed, weight, age,
              and more to add only the highest quality cattle to your ranch.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-buying-1.webp" type="image/webp" />
              <img
                alt="Large selection"
                src="/d-buying-1.webp"
                width="360px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
        {/* Bullet 2 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Get more details
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Informed Purchasing
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Discuss animal health and history, negotiate prices, and learn
              about operations directly from the seller. View reviews from
              previous buyers.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-buying-2.webp" type="image/webp" />
              <img
                alt="Get more details"
                src="/d-buying-2.webp"
                width="362px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
        {/* Bullet 3 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Buy &amp; Sell safely
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Hassle-Free Transactions
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Making an offer and closing a deal with sellers is safe and easy
              through Frontiers Market. Each listing is verified for
              authenticity and our team is available for support.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-buying-3.webp" type="image/webp" />
              <img
                alt="Buy &amp; Sell safely"
                src="/d-buying-3.webp"
                width="374px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
        {/* Bullet 4 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Free to list
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Sell to a National Market
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Sell to anyone from industry giants to small-scale operations
              wanting to buy your product. Ensure fair, competitive prices in
              the national market with buyers you can trust. Get listings seen
              for free.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-selling-1.webp" type="image/webp" />
              <img
                alt="Free to list"
                src="/d-selling-1.webp"
                width="360px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
        {/* Bullet 5 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Get more details
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Make More Sales
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Access to Frontiers Market’s marketplace means you are seen by
              thousands of potential buyers. As soon as you are verified to
              sell, get offers from all over the country.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-selling-2.webp" type="image/webp" />
              <img
                alt="Get more details"
                src="/d-selling-2.webp"
                width="362px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
        {/* Bullet 6 */}
        <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
          <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
            <p className="font-semibold text-sm text-secondary leading-5 uppercase">
              Instant messaging
            </p>
            <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">
              Quick &amp; Easy Process
            </p>
            <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">
              Connect quickly with buyers and negotiate directly until you are
              satisfied. Your cattle don’t leave the ranch until you meet a
              buyer you like.
            </p>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <picture>
              <source srcSet="/d-selling-3.webp" type="image/webp" />
              <img
                alt="Instant messaging"
                src="/d-selling-3.webp"
                width="374px"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </div>
        </article>
      </section>
    </section>
  );
};
