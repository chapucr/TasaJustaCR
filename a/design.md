# Design System & Security Architecture: TasaJusta CR

## 1. Visual Identity
TasaJusta CR is designed to evoke **Trust, Transparency, and Professionalism**.

### 1.1 Color Palette
- **Primary (Deep Navy):** #0A192F - Stability and security.
- **Secondary (Trust Green):** #64FFDA - Prosperity and growth.
- **Accent (Alert Gold):** #FFD700 - Important information/Alerts.
- **Surface (Glassmorphism):** rgba(255, 255, 255, 0.05) with backdrop-filter: blur(10px).

### 1.2 Typography
- **Headings:** 'Outfit', sans-serif - Modern and bold.
- **Body:** 'Inter', sans-serif - Highly legible for financial data.

### 1.3 UI Components
- **Cards:** Subtle borders, soft shadow, glassmorphism effect for rate displays.
- **Inputs:** Clear focus states using Trust Green.
- **Buttons:** Smooth transitions, primary CTA uses a strong gradient (Deep Navy to Trust Green).

## 2. Security Architecture (OWASP Top 10 Mapping)

| Category | Design Control | Implementation Detail |
| :--- | :--- | :--- |
| **A01: Broken Access Control** | Least Privilege Principle | JWT tokens with short expiry; scoping API access to specific entity IDs. |
| **A02: Cryptographic Failures** | Always-on Encryption | Forced TLS 1.3; Sensitive data like user profiles encrypted with AES-256-GCM. |
| **A03: Injection** | Safe Data Handling | ORM/Parameterization for all DB queries; Strict schema validation on input. |
| **A04: Insecure Design** | Security by Default | No default passwords; Error messages do not reveal stack traces or system info. |
| **A05: Security Misconfiguration** | Hardened Infrastructure | Content Security Policy (CSP) headers; Regular automated security audits. |
| **A06: Vulnerable Components** | Lifecycle Management | Automated 'npm audit' in CI/CD; using signed/verified docker images. |
| **A07: ID & Auth Failures** | Strong Authentication | Argon2 hashing; MFA required for all financial institution logins. |
| **A08: Data Integrity** | Blockchain Verification | Digital signatures on all rate updates; public audit trail for rate changes. |
| **A09: Logging & Monitoring** | SIEM Integration | Audit logs for all state-changing actions; Real-time alerts on multiple failed login attempts. |
| **A10: SSRF** | Network Isolation | Whitelisting specific financial entity API endpoints; No user-supplied URLs in server requests. |

## 3. Mockups (Assets Pending)
- *Landing Page:* [landing_page_mockup.png] (Pending Generation)
- *Rate Comparator:* [comparator_mockup.png] (Pending Generation)
