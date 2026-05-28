export type PropertyType = "apartment" | "office" | "airbnb";
export type PropertySize = "small" | "medium" | "large";
export type CleaningType = "regular" | "deep";

export const propertyOptions: Array<{ label: string; value: PropertyType }> = [
  { label: "Apartment", value: "apartment" },
  { label: "Office", value: "office" },
  { label: "Airbnb", value: "airbnb" }
];

export const sizeOptions: Array<{ label: string; value: PropertySize }> = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" }
];

export const cleaningOptions: Array<{ label: string; value: CleaningType }> = [
  { label: "Regular", value: "regular" },
  { label: "Deep", value: "deep" }
];

const basePrice: Record<PropertyType, number> = {
  apartment: 59,
  office: 89,
  airbnb: 69
};

const sizeMultiplier: Record<PropertySize, number> = {
  small: 1,
  medium: 1.45,
  large: 2
};

const cleaningMultiplier: Record<CleaningType, number> = {
  regular: 1,
  deep: 1.75
};

const baseDuration: Record<PropertySize, number> = {
  small: 2,
  medium: 3,
  large: 4.5
};

export function calculateEstimate(
  propertyType: PropertyType,
  size: PropertySize,
  cleaningType: CleaningType
) {
  const rawPrice =
    basePrice[propertyType] *
    sizeMultiplier[size] *
    cleaningMultiplier[cleaningType];
  const price = Math.round(rawPrice / 5) * 5;
  const duration =
    baseDuration[size] +
    (cleaningType === "deep" ? 1.5 : 0) +
    (propertyType === "office" ? 0.5 : 0);

  return {
    price,
    duration: `${duration}-${duration + 1}h`
  };
}
