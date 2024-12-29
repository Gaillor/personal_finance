import { Investment } from '../../types/financial';

interface ProjectionResult {
  year: number;
  savings_capacity: number;
  liquidity: number;
  investment_value: number;
  cumulative_returns: number;
}

// Calcule les projections financières sur plusieurs années
export function calculateProjections(
  initialSavingsCapacity: number,
  initialLiquidity: number,
  investments: Investment[],
  numberOfYears: number = 5
): ProjectionResult[] {
  const projections: ProjectionResult[] = [];
  let currentSavingsCapacity = initialSavingsCapacity;
  let currentLiquidity = initialLiquidity;
  let cumulativeReturns = 0;

  for (let year = 0; year < numberOfYears; year++) {
    // Calcul des rendements des investissements
    const investmentReturns = investments.reduce((sum, investment) => {
      const yearsSinceStart = year - new Date(investment.start_date).getFullYear();
      if (yearsSinceStart >= 0) {
        return sum + (investment.amount * investment.return_rate) / 100;
      }
      return sum;
    }, 0);

    // Mise à jour des valeurs
    cumulativeReturns += investmentReturns;
    currentLiquidity += investmentReturns;
    
    projections.push({
      year: new Date().getFullYear() + year,
      savings_capacity: currentSavingsCapacity,
      liquidity: currentLiquidity,
      investment_value: investments.reduce((sum, inv) => sum + inv.amount, 0),
      cumulative_returns: cumulativeReturns,
    });

    // Ajout de l'épargne annuelle à la liquidité pour l'année suivante
    currentLiquidity += currentSavingsCapacity * 12;
  }

  return projections;
}