import { expect, test, describe } from 'vitest'
import { calculateCAT } from './calculator'

describe('CAT Calculator', () => {
    test('calculates CAT for a standard loan correctly', () => {
        // Example: 1,000,000 CRC loan, 1% monthly rate, 12 months, no extra costs
        const cat = calculateCAT(1000000, 1, 12, 0, 0);
        // With monthly rate 1%, the annual rate should be approx 12.68% (1.01^12 - 1)
        expect(parseFloat(cat)).toBeCloseTo(12.68, 1);
    });

    test('calculates CAT with extra monthly costs', () => {
        const cat = calculateCAT(1000000, 1, 12, 5000, 0);
        // Extra costs should increase the CAT
        expect(parseFloat(cat)).toBeGreaterThan(12.68);
    });

    test('calculates CAT with initial commissions', () => {
        const cat = calculateCAT(1000000, 1, 12, 0, 20000);
        // Initial commissions should increase the CAT
        expect(parseFloat(cat)).toBeGreaterThan(12.68);
    });
});
