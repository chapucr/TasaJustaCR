/**
 * TasaJusta CR - CAT Calculator
 * Calculates the real Internal Rate of Return (IRR) converted to annual percentage.
 */

export const calculateCAT = (loanAmount, monthlyRatepercent, termMonths, extraMonthlyCosts = 0, initialCommissions = 0) => {
    const monthlyRate = monthlyRatepercent / 100;

    // Standard monthly payment calculation (Formula: P = L * [i(1+i)^n] / [(1+i)^n - 1])
    const baseMonthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);

    const totalMonthlyPayment = baseMonthlyPayment + extraMonthlyCosts;
    const netLoanAmount = loanAmount - initialCommissions;

    // Numerical method to find monthly IRR (Net Loan = Sum [Payment / (1 + irr)^t])
    // We use a simple Newton-Raphson or Bisection method
    let irr = monthlyRate; // Initial guess
    for (let i = 0; i < 20; i++) {
        let f_irr = 0;
        let df_irr = 0;
        for (let t = 1; t <= termMonths; t++) {
            f_irr += totalMonthlyPayment / Math.pow(1 + irr, t);
            df_irr -= (t * totalMonthlyPayment) / Math.pow(1 + irr, t + 1);
        }
        f_irr -= netLoanAmount;

        irr = irr - f_irr / df_irr;
    }

    // Convert monthly IRR to Annual Percentage (CAT)
    const annualCAT = (Math.pow(1 + irr, 12) - 1) * 100;
    return annualCAT.toFixed(2);
};
