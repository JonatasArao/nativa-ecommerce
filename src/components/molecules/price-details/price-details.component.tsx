import React from "react";
import { CurrentPriceLine, PriceContainer } from "./price-details.styled";
import { PreviousPrice, SalePrice, Badge } from "@components/atoms";
import { formatCurrency } from "@utils";
import { Product } from "@models";

interface PriceDetailsProps {
  product : Product;
}

export const PriceDetails: React.FC<PriceDetailsProps> = ({ product }) => {
  const { onSale, promotionalPrice, price, currency } = product;
  const currentPrice = onSale ? promotionalPrice : price;
  let discount = "0"
  if (onSale && price > 0) {
    const discountPercentageValue = ((price - promotionalPrice) / price) * 100;
    discount = Math.round(discountPercentageValue).toFixed(0);
  }

  return (
    <PriceContainer>
      {onSale && (
        <PreviousPrice>
          {formatCurrency(price, currency)}
        </PreviousPrice>
      )}
      <CurrentPriceLine>
        <SalePrice>
          {formatCurrency(currentPrice, currency)}
        </SalePrice>
        {onSale && (
          <Badge>
            {discount}%
          </Badge>
        )}
      </CurrentPriceLine>
    </PriceContainer>
  );
};

export default PriceDetails;