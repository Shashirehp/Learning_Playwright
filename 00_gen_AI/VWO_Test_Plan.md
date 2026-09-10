# Test Plan – VWO Digital Experience Optimization Platform

| Field | Detail |
|---|---|
| Product Name | VWO (Visual Website Optimizer) – Digital Experience Optimization Platform |
| Product URL | https://app.vwo.com/ |
| Source Reference | Product Requirements Document (PRD) – VWO – Digital Experience Optimization Platform |
| Document Version | 1.0 |
| Prepared By | QA Team Lead |
| Prepared For | Manual Testers, Automation Testers (JIRA test case import), QA Manager, Product and Development Stakeholders |
| Date | September 10, 2026 |

---

## 1. Objective

The objective of this test plan is to verify that the VWO platform delivers the functionality defined in the PRD and meets the business objectives it was built for.

Testing will confirm that:

- Experiments can be defined with multiple variations and executed as A/B, Split URL and Multivariate tests (FR1).
- SmartStats provides Bayesian analysis for test results (FR2).
- Experiment setup is supported through both WYSIWYG and developer-level editing (FR3).
- User interactions are captured for insights through heatmaps and session recordings (FR4).
- Audience segmentation based on behaviors is available (FR5).
- Up-to-date experiment analytics are delivered through real-time reporting and dashboards (FR6).
- Tailored experiences are delivered to segments (FR7).
- Data is synced with external platforms (FR8).
- Planning and team task tools are available (FR9).
- Non-functional requirements for performance, security, scalability, data privacy and reliability are met.
- The user flows defined in the PRD (setting up an A/B test, analyzing behavioral data) work end to end.
- Results are statistically validated and actionable reports are generated.
- Both valid and invalid inputs are handled with correct system behaviour and clear messages across the user interface.

---

## 2. Scope

### 2.1 In Scope

| Area | Description |
|---|---|
| Experimentation & Testing | A/B Testing, Split URL Testing and Multivariate Testing; experiments with multiple variations; custom goals and metric configurations aligned with business KPIs; version previews; scheduling; reporting (FR1) |
| SmartStats Engine | Bayesian analysis for test results; statistically validated results (FR2) |
| Visual & Code Editor | WYSIWYG experiment setup and developer-level experiment setup (FR3) |
| Behavioral Insights | Heatmaps (click, scroll, focus), session recordings, on-page surveys and feedback, funnel analytics (FR4) |
| Audience Targeting | Segmentation based on behaviors and attributes (FR5) |
| Real-time Reporting & Dashboards | Up-to-date experiment analytics (FR6) |
| Personalization | Segmentation by geography, behavior and demographics; real-time delivery of customized content to segments (FR7) |
| Integration Connectors | Data sync with Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, CDPs, analytics systems, and analytics tools including Google Analytics and Mixpanel (FR8) |
| Collaboration & Workflow Management | Central planning interface, collaboration tools for distributed teams, Kanban style workflows for experiment backlogs (FR9) |
| User Flows | End-to-end flow for setting up an A/B test; end-to-end flow for analyzing behavioral data |
| Non-Functional | Performance (editing workflows within 2 seconds), Security (2FA, role-based access control, activity logs), Scalability (high visitor volumes without performance loss), Data Privacy (GDPR, CCPA and regional data policies), Reliability (99.9% uptime SLA for enterprise customers) |
| QA Coverage | Cross-device QA and cross-browser QA |
| Regression | Core experimentation, insights, personalization, workflow and integration behaviour after each release |

### 2.2 Out of Scope

| Area | Reason |
|---|---|
| AI-driven suggestion engine for test ideas and personalization patterns | Identified in the PRD as a future enhancement |
| Native mobile SDK enhancements for app experimentation | Identified in the PRD as a future enhancement |
| Advanced predictive analytics and ROI forecasting | Identified in the PRD as a future enhancement |
| Internal logic of third-party platforms | Only the VWO integration points are tested |
| Pricing tier entitlement and billing computation | The PRD describes pricing and licensing structure only; no billing behaviour is defined |
| Platform infrastructure and cloud administration | Not described in the PRD |

---

## 3. Inclusions

### 3.1 Testing / Experimentation Module
Create, configure, launch, monitor and conclude A/B, Split URL and Multivariate tests. Validate multiple variations, audience targeting based on behaviors and attributes, custom goals and metric configurations, version previews, scheduling and reporting.

### 3.2 SmartStats Module
Validate the Bayesian analysis of test results, including statistical validation of results and the concluding of a winner.

### 3.3 Visual & Code Editor Module
Validate WYSIWYG experiment setup and developer-level experiment setup, and their use in configuring test variations.

### 3.4 Behavioral Insights Module
Validate heatmap generation for click, scroll and focus; session recording capture; on-page survey and feedback capture; and funnel analytics to identify drop-off points.

### 3.5 Personalization Module
Validate segment creation by geography, behavior and demographics, and the real-time delivery of customized content to those segments.

### 3.6 Reporting & Dashboards Module
Validate that up-to-date experiment analytics are delivered and that results are presented as actionable reports.

### 3.7 Program & Workflow Management Module
Validate the central planning interface, collaboration tools for distributed teams, and Kanban style workflows for experiment backlogs.

### 3.8 Integrations Module
Validate the connection and data sync with Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, CDPs, analytics systems, Google Analytics and Mixpanel.

### 3.9 Non-Functional Coverage
Validate the performance, security, scalability, data privacy and reliability requirements, and cross-device and cross-browser QA.

---

## 4. Test Environments

| Category | Coverage |
|---|---|
| Operating Systems | Windows 10/11, macOS, Android, iOS |
| Browsers | Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari |
| Devices | Desktop, laptop, tablet, smartphone |
| Environment URL | https://app.vwo.com/ (staging / sandbox account) |
| Access Control | 2FA-enabled accounts with Admin, Editor and Viewer roles for role-based access control testing |
| Network | Wi-Fi, wired, and throttled 3G/4G profiles for performance checks |

---

## 5. Defect Reporting Procedure

Defects are logged in **JIRA** with the following mandatory fields:

- Title
- Module (Testing / SmartStats / Visual & Code Editor / Insights / Personalization / Reporting / Program & Workflow / Integration / Non-Functional)
- Severity (Blocker / Critical / Major / Minor)
- Priority (P0 / P1 / P2)
- Reproduction steps
- Expected result vs. actual result
- Environment
- Screenshots or HAR logs

Severity and priority are triaged daily by the QA lead with the development leads. Defects involving exposure of sensitive data are flagged **Critical** regardless of functional severity.

| Severity | Definition |
|---|---|
| Blocker | Prevents further testing; no workaround |
| Critical | Major function is non-functional; no workaround |
| Major | Function works with a significant limitation; a workaround exists |
| Minor | Cosmetic or low-impact issue; function is fully usable |

---

## 6. Test Strategy

### 6.1 Test Design Techniques

| Technique | Application Area |
|---|---|
| Equivalence Class Partitioning | Experiment setup inputs, audience segment parameters, goal and metric configuration |
| Boundary Value Analysis | Variation counts, goal and metric values, scheduling inputs, editing workflow response time against the 2-second requirement |
| Decision Table Testing | Audience and segment rules based on behaviors and attributes |
| State Transition Testing | Experiment progress as defined in the PRD user flow: definition, launch, monitoring and conclusion |
| Use Case Testing | Setting up an A/B test and analyzing behavioral data |
| Error Guessing | Invalid input handling, connector failures, concurrent activity |
| Exploratory Testing | Heatmap rendering, session recording playback, Kanban board behaviour |

### 6.2 Execution Cycle

1. **Smoke testing** on each build. If smoke fails, the build is rejected and returned to development.
2. **Functional testing** of modules FR1–FR9, covering positive, negative, boundary and edge cases.
3. **Non-functional testing** for performance, security, scalability, data privacy and reliability.
4. **Cross-device and cross-browser QA** across the environment matrix.
5. **Integration testing** for the connectors listed in FR8.
6. **Regression testing** after each fix and before release.
7. **Daily defect status** shared with development management.

### 6.3 Test Types

| Test Type | Coverage |
|---|---|
| Smoke | Critical flows on each build |
| Functional | FR1–FR9 |
| UI | All user-facing modules, with valid and invalid inputs |
| Non-Functional | Performance, security, scalability, data privacy, reliability |
| Integration | FR8 connectors and analytics tool integrations |
| Compatibility | Cross-device QA and cross-browser QA |
| Privacy | GDPR, CCPA and regional data policy compliance |
| Regression | Core flows after each release |
| Error Handling and Validation | Invalid, missing and blank inputs across all modules |

---

## 7. Test Schedule

Estimated duration: **2 sprints** to test the application end-to-end.

| Phase | Task | Duration | Owner |
|---|---|---|---|
| P1 | Test Plan creation and review | TBD | QA Team Lead |
| P2 | Test scenario and test case design | TBD | QA Engineers |
| P3 | Test case review and sign-off | TBD | QA Team Lead, Dev Lead, Product Manager |
| P4 | Test environment and test data setup | TBD | DevOps, QA |
| P5 | Smoke testing | TBD | QA Engineers |
| P6 | Functional testing (FR1–FR5) | TBD | QA Engineers |
| P7 | Functional testing (FR6–FR9) | TBD | QA Engineers |
| P8 | Integration testing (FR8) | TBD | QA Engineers |
| P9 | Non-functional testing | TBD | QA Engineers |
| P10 | Cross-device and cross-browser QA | TBD | QA Engineers |
| P11 | Regression testing and defect retesting | TBD | QA Engineers |
| P12 | Test summary, UAT and sign-off | TBD | QA Team Lead, QA Manager, Product Manager |

---

## 8. Test Deliverables

| # | Deliverable | Owner |
|---|---|---|
| 1 | Test Plan document | QA Team Lead |
| 2 | Test Scenarios document | QA Team Lead |
| 3 | Test Case suite (JIRA-importable) | QA Engineers |
| 4 | Requirement coverage mapping | QA Team Lead |
| 5 | Defect reports in JIRA | QA Engineers |
| 6 | Daily status reports | QA Team Lead |
| 7 | Test execution report | QA Engineers |
| 8 | Test Summary Report | QA Team Lead |
| 9 | Test Closure Report with sign-off | QA Manager |

---

## 9. Entry Criteria

### 9.1 Requirement Analysis

| Criterion | Description |
|---|---|
| Entry | PRD received by the QA team |
| Exit | Requirements reviewed and doubts clarified with the product owner |

### 9.2 Test Execution

| Criterion | Description |
|---|---|
| Entry | Test cases signed off; staging environment stable and accessible; test data available; build deployed and smoke-tested |

### 9.3 Test Closure

| Criterion | Description |
|---|---|
| Entry | Test case and defect reports are ready |

---

## 10. Exit Criteria

### 10.1 Test Execution

| Criterion | Description |
|---|---|
| Exit | Test case and defect reports completed for all P0 and P1 scenarios |

### 10.2 Test Closure

| Criterion | Description |
|---|---|
| Exit | Test Summary Report delivered; all P0 defects closed; P1 and P2 defects documented with agreed workarounds; stakeholder sign-off obtained |

### 10.3 Suspension and Resume

| Suspension Trigger | Resume Condition |
|---|---|
| Blocker severity defect prevents further testing | Defect fixed and verified |
| Test environment unavailable | Environment restored and validated |
| Build fails smoke testing | New stable build passes smoke testing |

---

## 11. Test Execution

| Step | Activity | Responsible |
|---|---|---|
| 1 | Execute smoke tests on the deployed build and reject the build if smoke fails | Tester |
| 2 | Execute functional test cases module by module and record status (Pass / Fail / Blocked / Not Run) | Tester |
| 3 | Execute non-functional, integration and compatibility test cases | Tester |
| 4 | Log defects in JIRA with complete evidence and retest after fixes | Tester |
| 5 | Update test execution and defect status daily | Tester |
| 6 | Hold daily defect triage with development leads | QA Team Lead |
| 7 | Publish the daily status report covering progress, defects, blockers and risks | QA Team Lead |
| 8 | Execute the regression suite before release | Tester |
| 9 | Re-execute failed and blocked cases until pass or documented exception | Tester |

---

## 12. Test Closure

Test closure begins when the exit criteria in Section 10 are met. The QA Team Lead will:

1. Confirm all P0 defects are closed and P1 and P2 defects are documented with agreed workarounds.
2. Execute the final regression suite.
3. Compile the Test Summary Report covering planned vs. executed vs. passed vs. failed cases, defect metrics, and requirement coverage.
4. Archive test cases, execution logs and defect reports.
5. Obtain stakeholder sign-off.

---

## 13. Tools

| Tool Category | Tool | Purpose |
|---|---|---|
| Defect & Test Case Tracking | JIRA | Defect tracking and test case tracking, including test case import |
| Test Case Management | TestRail / Zephyr / Excel | Test case management and execution tracking |
| Evidence Capture | Snipping / screen-recording tool | Defect screenshots and recordings |
| Performance & Load | k6 / JMeter | Performance and load testing |

---

## 14. Risks, Assumptions, Dependencies and Mitigations

### 14.1 Risks and Mitigations

| ID | Risk | Mitigation Strategy |
|---|---|---|
| R01 | Technical complexity of the platform | Provide robust SDKs and documentation, and pre-built templates |
| R02 | Data accuracy challenges | Use SmartStats and cross-tool validation integrations |
| R03 | User adoption | Onboard with guided tours, in-app support and analyst assistance |

### 14.2 Assumptions

| ID | Assumption |
|---|---|
| A01 | The PRD is the baselined requirement source for this test cycle |
| A02 | The staging environment is available and accessible during the test window |
| A03 | Test accounts with the required roles are provisioned for role-based access control testing |
| A04 | Integration sandbox or test accounts are available for the connectors listed in FR8 |
| A05 | Test cases will be imported into JIRA for execution and defect linkage |

### 14.3 Dependencies

| ID | Dependency | Impact if Unavailable |
|---|---|---|
| D01 | Stable staging environment at https://app.vwo.com/ | Blocks all functional testing |
| D02 | Test accounts with Admin, Editor and Viewer roles | Blocks security and permission testing |
| D03 | Access to integration platforms listed in FR8 | Blocks integration testing |
| D04 | JIRA project configured for test cases and defects | Blocks execution tracking and defect reporting |
| D05 | Performance and load testing tool availability | Blocks performance and scalability testing |

---

## 15. Requirement Coverage Mapping

| Requirement | Priority | Module | Test Scenarios |
|---|---|---|---|
| FR1 – A/B, Split & Multivariate Testing | Must | Experimentation & Testing | TS-01 |
| FR2 – SmartStats Engine | Must | SmartStats | TS-02 |
| FR3 – Visual & Code Editor | Must | Visual & Code Editor | TS-03 |
| FR4 – Heatmaps & Session Recordings | Must | Behavioral Insights | TS-04 |
| FR5 – Audience Targeting | High | Audience Targeting | TS-05 |
| FR6 – Real-time Reporting & Dashboards | Must | Reporting & Dashboards | TS-06 |
| FR7 – Personalization Engine | High | Personalization | TS-07 |
| FR8 – Integration Connectors | High | Integrations | TS-08 |
| FR9 – Collaboration & Workflow Management | Medium | Program & Workflow Management | TS-09 |
| NFR – Performance, Security, Scalability, Data Privacy, Reliability | Must | Non-Functional | TS-10 |
| Cross-device QA and Cross-browser QA | Must | Compatibility | TS-11 |
| User Flow 5.1 – Setting up an A/B Test | Must | Experimentation & Testing | TS-01 |
| User Flow 5.2 – Analyzing Behavioral Data | Must | Behavioral Insights | TS-04 |
