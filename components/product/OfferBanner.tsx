const OfferBanner = ({ offer }: { offer: string }) => (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <h2 className="text-lg font-semibold">
        {offer}
      </h2>
    </div>
  );
  
  export default OfferBanner;
  