import { Product } from "@/types/product";

const DeliveryWarranty = ({ details }: { details?: Product["details"] }) => (
  <div className="space-y-3 bg-white p-4 rounded-lg shadow-lg">
    {details?.exclusiveOffer && <p>🎉 {details.exclusiveOffer}</p>}
    {details?.warranty && <p>✅ {details.warranty}</p>}
    {details?.delivery && <p>🚚 {details.delivery}</p>}
    {details?.carrierCompatibility && <p>📶 {details.carrierCompatibility}</p>}
    {details?.refurbishedStatus && <p>🔄 {details.refurbishedStatus}</p>}
  </div>
);

export default DeliveryWarranty;
