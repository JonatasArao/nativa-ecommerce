import React from "react";
import { CurrentPriceLine, PriceContainer } from "./price-details.styled"; // Certifique-se dos nomes corretos dos styled components
import { PreviousPrice, SalePrice, Badge } from "@components/atoms";
import { formatCurrency } from "@utils";
import { Product } from "@models";

interface PriceDetailsProps {
  product : Product;
}

export const PriceDetails: React.FC<PriceDetailsProps> = ({ product }) => {
  const { onSale, promotionalPrice, price, currency } = product; 
  const formattedRegularPrice = formatCurrency(price, currency);
  const formattedPromotionalPrice = formatCurrency(promotionalPrice, currency);
  const currentDisplayedPrice = onSale ? formattedPromotionalPrice : formattedRegularPrice;

  let discountPercentageText = "0%";
  if (onSale && price > 0) {
    const discountValue = ((price - promotionalPrice) / price) * 100;
    discountPercentageText = `${Math.round(discountValue).toFixed(0)}%`;
  }

  let priceLabel = '';
  if (onSale) {
    priceLabel = `De ${formattedRegularPrice}, agora disponível por ${currentDisplayedPrice}, com ${discountPercentageText} de desconto.`;
  } else {
    priceLabel = `Disponível por ${currentDisplayedPrice}.`;
  }

  return (
    <PriceContainer aria-label={priceLabel}>
      {onSale && (
        <PreviousPrice aria-hidden="true">
          {formattedRegularPrice}
        </PreviousPrice>
      )}
      <CurrentPriceLine aria-hidden="true">
        <SalePrice>
          {currentDisplayedPrice}
        </SalePrice>
        {onSale && (
          <Badge>
            {discountPercentageText}
          </Badge>
        )}
      </CurrentPriceLine>
    </PriceContainer>
  );
};

export default PriceDetails;