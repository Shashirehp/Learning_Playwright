# Test Plan – VWO Digital Experience Optimization Platform

| Document | VWO Test Plan |
|---|---|
| Product Name | VWO (Visual Website Optimizer) – Digital Experience Optimization Platform |
| Product URL | https://app.vwo.com/ |
| PRD Reference | Product Requirements Document (PRD) – VWO, dated January 7, 2026 |
| Document Version | 1.0 |
| Prepared By | QA Lead |
| Prepared For | Manual Testers, Automation Testers, QA Managers, Product & Dev Stakeholders |
| Date | September 10, 2026 |

---

## 1. Objective

The objective of this test plan is to validate that the VWO platform meets its business goals — improving conversion rates, enabling hypothesis-driven experimentation, reducing engineering dependency for optimization, and providing unified insights — by delivering a secure, reliable, performant and compliant SaaS product.

Specifically, testing will confirm that:

- All functional requirements (FR1–FR9) behave as defined in the PRD.
- All non-functional requirements (Performance, Security, Scalability, Data Privacy, Reliability) are met.
- Experimentation, Behavioral Insights, Personalization, Program & Workflow Management and Integration modules work correctly both individually and end-to-end.
- The user interface behaves correctly for **valid, invalid, boundary and edge-case** inputs.
- Experiment lifecycle, audience targeting rules, SmartStats computation and real-time content delivery produce accurate results.
- Defects are identified, reported, tracked and closed within the agreed severity and priority SLAs before release.

---

## 2. Scope

### 2.1 In Scope

| Area | Description |
|---|---|
| Experimentation & Testing | Create, configure, launch, pause, resume, conclude and archive A/B, Split URL and Multivariate tests (FR1) |
| SmartStats Engine | Validate Bayesian analysis, statistical significance, winner declaration and result accuracy (FR2) |
| Visual & Code Editor | WYSIWYG element editing, change application, preview and developer-level code edits (FR3) |
| Behavioral Insights | Heatmaps (click, scroll, focus), session recordings, on-page surveys and funnel analytics (FR4) |
| Audience Targeting | Segment creation using behavior, attribute, geography and demographic rules (FR5) |
| Reporting & Dashboards | Real-time metrics, goal conversions, filters, date ranges and report export (FR6) |
| Personalization | Segment-based real-time content delivery and campaign engagement tracking (FR7) |
| Integrations | Data sync accuracy with Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, Google Analytics and Mixpanel (FR8) |
| Collaboration & Workflow | Kanban backlog, card movement across states and multi-user collaboration (FR9) |
| Login & Authentication | Valid, invalid, blank, locked-out and 2FA login scenarios on https://app.vwo.com/#/login |
| Non-Functional | Performance (≤2s editing workflows), Security (2FA, RBAC, activity logs), Scalability, GDPR/CCPA Data Privacy, Reliability (99.9% uptime SLA) |
| Compatibility | Chrome, Firefox, Edge, Safari across Windows 11, macOS, Android and iOS |
| Regression | Core Testing, Insights, Personalization and Integration flows after each release |

### 2.2 Out of Scope

| Area | Reason |
|---|---|
| AI-driven suggestion engine | Listed as a future enhancement in the PRD |
| Native mobile SDK app experimentation | Listed as a future enhancement in the PRD |
| Predictive analytics & ROI forecasting | Listed as a future enhancement in the PRD |
| Internal cloud infrastructure administration | Owned by the DevOps/Cloud team |
| Internal logic of third-party platforms | Only VWO's integration endpoints are validated |
| Internal database schema and migration scripts | Managed by the Engineering team |
| Advanced penetration testing | Covered under a separate security audit engagement |

---

## 3. Inclusions

### 3.1 Testing / Experimentation Module
Create, configure, launch, pause, resume and conclude A/B, Split URL and Multivariate tests. Validate traffic allocation, goal/metric configuration, audience targeting rules, version previews, scheduling and SmartStats result computation.

### 3.2 Behavioral Insights Module
Heatmap generation (click, scroll, focus) for a selected date range, session recording capture and playback, on-page survey delivery and response capture, and funnel drop-off analytics.

### 3.3 Personalization Module
Segment creation by geography, behavior and demographics, and real-time delivery of targeted content to matching segments, with engagement tracking.

### 3.4 Program & Workflow Management
Kanban backlog creation, card creation and movement across states, and multi-user collaboration on the central planning board.

### 3.5 Integrations
Data sync accuracy with Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, Google Analytics and Mixpanel, including connector authentication, field mapping and failure handling.

### 3.6 Login & Authentication
Login with valid, invalid, blank and malformed credentials, 2FA verification, password reset, session timeout and account lockout behaviour.

---

## 4. Test Environments

| Category | Coverage |
|---|---|
| Operating Systems | Windows 10/11, macOS 14, Android 14, iOS 17 |
| Browsers | Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari (latest + previous 2 versions) |
| Devices | Desktop, laptop, tablet, smartphone |
| Environment URL | https://app.vwo.com/ (staging/sandbox account) |
| Access Control | 2FA-enabled accounts with Admin, Editor and Viewer roles for RBAC testing |
| Network | Wi-Fi, wired, and throttled 3G/4G profiles for performance checks |
| Test Data | Synthetic experiments, variations, audience segments, visitor sessions and GDPR/CCPA profiles refreshed weekly |
| Integration Sandboxes | Shopify, Salesforce, Segment, Snowflake, Google Analytics and Mixpanel sandbox accounts |

---

## 5. Defect Reporting Procedure

Defects are logged in **JIRA** with the following mandatory fields:

- Summary (title)
- Module (Testing / Insights / Personalization / Program & Workflow / Integration / Login / Non-Functional)
- Severity (Blocker / Critical / Major / Minor / Trivial)
- Priority (P0 / P1 / P2 / P3)
- Environment, browser and build version
- Preconditions and numbered reproduction steps
- Expected result vs. actual result
- Evidence (screenshots, screen recording, HAR log or API response)

**Workflow:** Tester logs defect → QA Lead triages and assigns → Developer fixes → Tester retests on QA environment → Closed if pass, Reopened if fail. Severity and priority are triaged daily by the QA Lead with the development leads. Any defect exposing sensitive data or breaking authentication is flagged **Critical** regardless of functional severity.

| Severity | Definition | Target Response |
|---|---|---|
| Blocker | Prevents further testing; no workaround | Immediate (≤2 hours) |
| Critical | Major feature non-functional; no workaround | ≤4 hours |
| Major | Feature works with significant limitation; workaround exists | ≤8 hours |
| Minor | Cosmetic issue; feature functional | ≤24 hours |
| Trivial | Low-impact cosmetic/UX suggestion | Next sprint |

---

## 6. Test Strategy

### 6.1 Test Design Techniques

| Technique | Application Area |
|---|---|
| Equivalence Class Partitioning | Login credentials, experiment names, traffic split values, segment rule fields, pricing tiers |
| Boundary Value Analysis | Traffic split at 0/100 and 50/50, date ranges, visitor counts, conversion thresholds, name length limits |
| Decision Table Testing | Audience targeting rules, segment combinations, role permission boundaries |
| State Transition Testing | Experiment lifecycle (Draft → Scheduled → Running → Paused → Concluded), workflow card states |
| Use Case Testing | End-to-end flows: A/B test setup and behavioral data analysis |
| Error Guessing | API failures, malformed payloads, network drops, concurrent edits |
| Exploratory Testing | Visual editor behaviour, heatmap rendering, session recording playback |

### 6.2 Execution Cycle

Test cases are designed using the techniques above and executed in the sequence below:

1. **Smoke testing** on each build. If smoke fails, the build is rejected and returned to development.
2. **Functional testing** on the stable build, module by module, covering valid, invalid, boundary and edge cases.
3. **Integration testing** for connected modules and third-party connectors.
4. **Non-functional testing** — performance, security, scalability, data privacy and reliability.
5. **Regression testing** after every defect fix and before release.
6. **Defect retesting** and daily defect status reporting to development management.

### 6.3 Test Types

| Test Type | Coverage | Approach |
|---|---|---|
| Smoke | Critical user flows on each build | Automated (Playwright) |
| Functional | FR1–FR9 | Manual + Automated |
| Integration | FR8 connectors | Manual + Postman/Newman |
| UI/Visual | Visual Editor, dashboards, heatmaps | Manual + visual regression |
| API | VWO APIs, SDK and connector endpoints | Postman / Newman |
| Performance | ≤2s editing workflow SLA | k6 / JMeter |
| Security | 2FA, RBAC, activity logs, injection/XSS | Manual + OWASP ZAP |
| Scalability | High concurrent visitor volume | k6 / JMeter |
| Data Privacy | GDPR/CCPA compliance and anonymization | Manual verification |
| Reliability | 99.9% uptime SLA | Uptime monitoring |
| Compatibility | Browser and device matrix | BrowserStack |
| Regression | Core flows after every change | Automated suite |

---

## 7. Test Schedule

Estimated duration: **2 sprints** to test the application end-to-end.

| Phase | Task | Duration | Owner |
|---|---|---|---|
| P1 | Test Plan creation and review | Day 1 – Day 3 | QA Lead |
| P2 | Test scenario and test case design | Day 3 – Day 7 | QA Engineers |
| P3 | Test case review and sign-off | Day 7 – Day 8 | QA Lead, Dev Lead, PM |
| P4 | Test environment and test data setup | Day 5 – Day 8 | DevOps, QA |
| P5 | Smoke testing on the stable build | Day 9 | QA Engineers |
| P6 | Functional testing (FR1–FR5) | Day 9 – Day 15 | QA Engineers |
| P7 | Functional testing (FR6–FR9) | Day 13 – Day 18 | QA Engineers |
| P8 | Integration testing (FR8) | Day 15 – Day 19 | QA Engineers |
| P9 | Non-functional testing (Performance, Security, Scalability, Privacy, Reliability) | Day 16 – Day 21 | QA / Security Engineer |
| P10 | Compatibility testing | Day 18 – Day 22 | QA Engineers |
| P11 | Regression testing and defect retesting | Day 20 – Day 24 | QA Engineers |
| P12 | Test summary, UAT and sign-off | Day 24 – Day 26 | QA Lead, QA Manager, PM |

---

## 8. Test Deliverables

| # | Deliverable | Owner |
|---|---|---|
| 1 | Test Plan document | QA Lead |
| 2 | Test Scenario document | QA Lead |
| 3 | Test Case Suite (Excel/Markdown, one set per module) | QA Engineers |
| 4 | Requirement Traceability Matrix (RTM) | QA Lead |
| 5 | Smoke Test Report | QA Engineers |
| 6 | Functional Test Execution Report | QA Engineers |
| 7 | Integration Test Report | QA Engineers |
| 8 | Performance and Load Test Report | QA Engineer |
| 9 | Security Test Report | Security Engineer |
| 10 | Compatibility Test Report | QA Engineers |
| 11 | Regression Test Report | QA Engineers |
| 12 | Defect Report (JIRA export) | QA Lead |
| 13 | Daily Status Report | QA Lead |
| 14 | Test Summary Report | QA Lead |
| 15 | Test Closure Report with sign-off | QA Manager |

---

## 9. Entry and Exit Criteria

### 9.1 Requirement Analysis

| Criterion | Description |
|---|---|
| Entry | PRD received and baselined by the QA team |
| Exit | Requirements reviewed, ambiguities clarified and confirmed with the Product Owner |

### 9.2 Test Execution

| Criterion | Description |
|---|---|
| Entry | Test cases designed, reviewed and signed off; staging environment stable and accessible; test data seeded; build deployed and smoke-tested |
| Exit | All P0 and P1 test cases executed; 100% of P0 cases pass; 95% of P1 cases pass with documented exceptions; no open Blocker or Critical defects |

### 9.3 Test Closure

| Criterion | Description |
|---|---|
| Entry | Test case execution and defect reports are complete |
| Exit | Test Summary Report delivered; all P0 defects closed; P1/P2 defects documented with agreed workarounds; stakeholder sign-off obtained |

### 9.4 Suspension and Resume Criteria

| Suspension Trigger | Resume Condition |
|---|---|
| Blocker/Critical defect blocking 30%+ of test cases | Defect fixed and verified |
| Test environment unavailable for more than 4 hours | Environment restored and validated |
| Build fails smoke tests three consecutive times | New stable build passes smoke tests |
| Security vulnerability requiring an emergency patch | Patch applied and verified |
| Test data corruption or loss | Test data restored and validated |

---

## 10. Test Execution

| Step | Activity | Responsible |
|---|---|---|
| 1 | Execute smoke tests on the deployed build; reject build if smoke fails | Tester |
| 2 | Execute functional test cases module by module and record status (Pass/Fail/Blocked/Not Run) | Tester |
| 3 | Execute integration, non-functional and compatibility test cases | Tester |
| 4 | Log defects in JIRA with complete evidence and retest after fixes | Tester |
| 5 | Update test execution status and defect status in the test management tool daily | Tester |
| 6 | Hold daily defect triage with development leads | QA Lead |
| 7 | Publish the daily status report covering progress, defects, blockers and risks | QA Lead |
| 8 | Execute the full regression suite before release | Tester |
| 9 | Re-execute failed and blocked test cases after fixes until pass or documented exception | Tester |

---

## 11. Test Closure

Test closure activities are initiated once all exit criteria in Section 9 are met. The QA Lead will:

1. Verify that all P0 and P1 defects are resolved or have documented workarounds.
2. Execute the final regression suite and confirm the agreed pass rate.
3. Compile the **Test Summary Report** containing: planned vs. executed vs. passed vs. failed test cases, defect metrics by severity and priority, requirement coverage, automation coverage, performance benchmark results and open risks.
4. Archive test cases, execution logs, defect reports and test data.
5. Record lessons learned and recommendations for future releases.
6. Obtain formal sign-off from the QA Manager, Product Manager and Development Lead.

---

## 12. Tools

| Tool Category | Tool | Purpose |
|---|---|---|
| Test & Defect Management | JIRA (+ Zephyr / TestRail) | Test case management, execution tracking, defect tracking |
| Collaboration & Documentation | Confluence, Slack / Email | Test documentation, daily status communication |
| UI Automation | Playwright | Functional and regression automation |
| API Testing | Postman / Newman | API and connector endpoint testing |
| Performance & Load | k6 / JMeter | Performance, load and scalability testing |
| Security | OWASP ZAP / Burp Suite | Security scanning and vulnerability assessment |
| Cross-Browser / Device | BrowserStack | Compatibility testing across the browser and device matrix |
| Visual Regression | Percy / Playwright Screenshots | UI visual regression checks |
| Monitoring | Datadog / New Relic | Uptime and reliability monitoring |
| Evidence Capture | Snipping Tool / screen recorder | Defect screenshots and recordings |
| Version Control | Git / GitHub | Test artifact version management |

---

## 13. Risks, Assumptions and Dependencies

### 13.1 Risks and Mitigation Strategies

| ID | Risk | Probability | Impact | Mitigation Strategy |
|---|---|---|---|---|
| R01 | Technical complexity of SmartStats and integration connectors | High | High | Rely on vendor SDKs and documentation; validate against known statistical sample sets and pre-built templates |
| R02 | Data accuracy challenges across tools | Medium | High | Cross-tool validation using SmartStats plus Google Analytics and Mixpanel comparison |
| R03 | Low user adoption of new features | Medium | Medium | Guided onboarding, in-app support and analyst assistance |
| R04 | Third-party sandbox/API limits block integration testing | High | High | Maintain sandbox accounts and use mocked API responses as a fallback |
| R05 | The 2-second SLA is hard to validate without production-scale traffic | Medium | High | Load-test staging with k6/JMeter simulating peak visitor volume |
| R06 | Visual Editor breakage across browser versions | Medium | High | Test the latest plus previous two versions per browser; provide Code Editor fallback |
| R07 | Data privacy compliance gaps (GDPR/CCPA) | Low | Critical | Privacy review with the legal team and anonymization verification |
| R08 | RBAC misconfiguration leading to unauthorized access | Low | Critical | Automated RBAC boundary tests and permission audits |
| R09 | Test environment instability or configuration drift | Medium | High | Provision environments from infrastructure-as-code and verify weekly |
| R10 | Resource constraints during peak testing | Medium | Medium | Prioritize test cases by risk and run tests in parallel |

### 13.2 Assumptions

| ID | Assumption |
|---|---|
| A01 | The PRD is final and no major requirement changes will occur during the test cycle |
| A02 | The staging environment is available with at least 95% uptime during the test window |
| A03 | All team members have the required access to tools, environments and repositories |
| A04 | Test data can be refreshed without impacting other teams |
| A05 | Integration sandboxes remain available and stable |
| A06 | Defect fixes are delivered within the agreed severity SLAs |
| A07 | BrowserStack provides an accurate representation of real browsers and devices |

### 13.3 Dependencies

| ID | Dependency | Impact if Unavailable | Owner |
|---|---|---|---|
| D01 | Stable staging environment with a production-like configuration | Blocks all functional testing | DevOps |
| D02 | Test data seeded with realistic experiments, variations and segments | Blocks functional and Insights testing | QA / DevOps |
| D03 | Sandbox accounts for all integration platforms | Blocks FR8 integration testing | QA Lead / Product |
| D04 | BrowserStack access for the compatibility matrix | Blocks cross-browser and cross-device testing | QA Manager |
| D05 | Load testing tool availability (k6 / JMeter) | Blocks performance and scalability testing | QA Manager |
| D06 | JIRA project configured with the test workflow | Blocks defect and test case tracking | QA Lead |
| D07 | PRD approval and baseline sign-off | Scope remains unclear | Product Manager |
| D08 | API/SDK documentation for connector endpoints | Blocks API and integration testing | Dev Lead |

---

## 14. Approvals

The following documents require stakeholder sign-off before proceeding to the next phase: **Test Plan, Test Scenarios, Test Cases and Test Summary Report**.

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Manager | | | |
| QA Lead | | | |
| Product Manager | | | |
| Development Lead | | | |
| DevOps Lead | | | |

| Sign-off Criterion | Acceptance |
|---|---|
| All P0 test cases executed with 100% pass rate | ☐ Yes / ☐ No |
| All P1 test cases executed with 95%+ pass rate (documented exceptions) | ☐ Yes / ☐ No |
| No open Blocker or Critical severity defects | ☐ Yes / ☐ No |
| Performance: editing workflows respond within 2 seconds | ☐ Yes / ☐ No |
| Security: no high-risk findings | ☐ Yes / ☐ No |
| Requirement coverage: 100% of FR1–FR9 and NFRs | ☐ Yes / ☐ No |
| Regression suite executed with 95%+ pass rate | ☐ Yes / ☐ No |
| Test Summary Report reviewed and accepted | ☐ Yes / ☐ No |
