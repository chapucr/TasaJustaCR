# Specification: TasaJusta CR

## 1. Project Overview
**TasaJusta CR** is the first 100% Costa Rican financial rate comparison platform. It aims to provide transparency in the financial market by allowing users to compare interest rates (for loans and investments) across multiple entities, highlighting the real Total Annual Cost (CAT) including hidden fees.

## 2. Problem Statement
The Costa Rican market lacks a centralized, transparent platform for financial comparison. Users currently perform manual, fragmented searches, often missing hidden costs until late in the lending or investment process.

## 3. Product Features

### 3.1 Core Features (Free)
- **Rate Comparator:** Centralized database of rates from public/private banks, cooperatives, and mutuals.
- **CAT Calculator:** Automatic calculation of the real Total Annual Cost for loans.
- **Filtering:** Search by product type (personal, mortgage, SME, investment), amount, and term.
- **Educational Content:** Resources to help users understand financial products.

### 3.2 Premium Features (Paid)
- **Direct WhatsApp Business Integration:** Instant redirection to financial entity advisors.
- **Personalized Advisory:** Direct communication channel with institutions.
- **Smart Rate Alerts:** Notifications for tailored rate changes.

## 4. Technical Stack
- **Frontend/Backend:** (To be defined, typically Full-stack web/mobile)
- **AI Engine:** Intelligent matching between user profiles and financial products.
- **Communication:** WhatsApp Business API for premium interaction.
- **Blockchain:** Immutable verification of reported rates to ensure veracity.
- **APIs:** Real-time data integration with financial institutions.

## 5. User Segments
1. **Young Professionals (25-40):** Seeking personal/vehicle loans and first mortgages.
2. **SMEs:** Looking for working capital and equipment financing.
3. **First-time Home Buyers:** High-anxiety segment needing clear hipothecary guidance.
4. **Conservative Investors:** Seeking safe options with maximized real returns.

## 6. Business Model
- **Lead Commission (CPA):** Commissions for every qualified lead that closes a deal with a partner institution.
- **Premium Subscriptions:** Fees for users accessing direct advisory and specialized tools.

## 7. Roadmap & Phases
- **Phase 1 (MVP - Months 1-3):** Basic web platform, 5 initial bank partnerships, commission validation.
- **Phase 2 (Growth - Months 4-6):** Public launch, SEO/Marketing focus, first 100 active users.
- **Phase 3 (Scale - Months 7-12):** Mobile App (iOS/Android), WhatsApp API integration, Blockchain implementation, 15+ partner entities.

## 8. Strategic Risks
- Data accessibility from financial entities.
- Regulatory hurdles (SUGEF/CONASIF validation).
- User adoption and CAC/LTV balance.

## 9. Security Considerations (OWASP Top 10)
TasaJusta CR will follow the OWASP Top 10 security guidelines to protect user data and financial integrity:

- **A01:2021-Broken Access Control:** Implement strict RBAC (Role-Based Access Control) for administrative interfaces and user data.
- **A02:2021-Cryptographic Failures:** Enforce HTTPS throughout. Use AES-256 for data at rest (especially for any stored financial profiles).
- **A03:2021-Injection:** Use parameterized queries and input validation to prevent SQL/NoSQL injections.
- **A04:2021-Insecure Design:** Perform threat modeling during the current design phase.
- **A05:2021-Security Misconfiguration:** Minimalist server setup and automated configuration audits.
- **A06:2021-Vulnerable and Outdated Components:** Regular dependency scanning and updating.
- **A07:2021-Identification and Authentication Failures:** Multi-factor authentication (MFA) for entities and robust password hashing (Argon2 or bcrypt).
- **A08:2021-Software and Data Integrity Failures:** Use Blockchain for rate verification to ensure data has not been tampered with.
- **A09:2021-Security Logging and Monitoring Failures:** Implement centralized logging and real-time alerting for suspicious activities.
- **A10:2021-Server-Side Request Forgery (SSRF):** Strict validation of URLs used for API integrations with financial entities.
