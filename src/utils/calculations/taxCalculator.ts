// Calcule le salaire net après impôts
export function calculateNetSalary(
  grossSalary: number,
  taxRate: number,
  withholdingRate: number
): {
  netAnnual: number;
  netMonthly: number;
  taxAmount: number;
  withholdingAmount: number;
} {
  const taxAmount = grossSalary * (taxRate / 100);
  const withholdingAmount = grossSalary * (withholdingRate / 100);
  const netAnnual = grossSalary - taxAmount;
  const netMonthly = netAnnual / 12;

  return {
    netAnnual,
    netMonthly,
    taxAmount,
    withholdingAmount,
  };
}