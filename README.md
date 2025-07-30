Transaction Query Dashboard (Role-Based COU Access)

**Demo**: https://marvelous-caramel-d127d1.netlify.app/
**Role**: Product Manager | Strategy • Systems • Stakeholder Execution

**Project Overview**
A secure, org-specific transaction lookup tool built for COU partner to fetch BBPS transaction data using unique identifiers. This was shipped to replace support-heavy flows and help regulated institutions meet RBI’s 24-hour resolution SLA.

**Business Context**
Problem: Repeated support tickets from COUs regulatory teams for fraud/escalated txns. Avg. TAT ~72 hrs (vs. RBI-mandated 24 hrs).
Impact: ₹50–₹60K/month cost leak in manual ops + compliance risk exposure.
Solution: Built a self-serve transaction dashboard with scoped visibility, tied to a new org role (Regulator).

**My Contributions**
Scoped a role-based access model → Added Regulator org type with controlled PII visibility.
Worked with platform engg team to define entitlement layers tied to standard accounts.
Defined architecture shift: Moved heavy PII fetches from **RDS DB** to **ClickHouse** for faster reads & cost reduction (~40%).
Authored PRD, API contracts, and UX flows; drove grooming, UAT, and go-live.

**Tech Highlights**
Role-based COU views (React + Node)
Entitlement-controlled PII access
ClickHouse backend for analytical speed + revenue savings
XLS/email export, error handling, paginated results

**Outcomes**
Reduced investigation time from 3 days → <2 minutes
Reduced support load by 80%, enabling support team to refocus on external merchant issues
Saved ops cost and infra queries → ~₹60K/month
Regulatory confidence improved with audit logs + PII compliance
