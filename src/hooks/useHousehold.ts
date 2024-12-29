import { useState, useEffect } from 'react';
import { Household } from '../types/financial';
import { services } from '../services';

export function useHousehold() {
  const [household, setHousehold] = useState<Household | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchHousehold() {
      try {
        const data = await services.household.getHousehold();
        setHousehold(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch household'));
      } finally {
        setLoading(false);
      }
    }

    fetchHousehold();
  }, []);

  const createNewHousehold = async (data: Omit<Household, 'id'>) => {
    try {
      const newHousehold = await services.household.createHousehold(data);
      setHousehold(newHousehold);
      return newHousehold;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create household'));
      throw err;
    }
  };

  return { household, loading, error, createNewHousehold };
}