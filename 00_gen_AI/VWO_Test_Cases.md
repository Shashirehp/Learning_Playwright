# Test Cases – VWO Digital Experience Optimization Platform

| Field | Detail |
|---|---|
| Product | VWO (Visual Website Optimizer) – Digital Experience Optimization Platform |
| Product URL | https://app.vwo.com/ |
| Source Reference | Product Requirements Document (PRD) – VWO – Digital Experience Optimization Platform |
| Document Version | 1.0 |
| Prepared By | QA Team Lead |
| Date | September 10, 2026 |
| Table Structure | Scenario TID \| Test Case ID \| Test Case Description \| Test Steps \| Status \| Comments |

> Status values: Pass / Fail / Blocked / Not Run (to be updated during execution). Comments indicate the test case category: Positive, Negative, Boundary or Edge.

---

## TS-01 – Experimentation & Testing (FR1, Section 4.1, User Flow 5.1)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-01 | TC-01.1 | Verify that an A/B test can be defined with a hypothesis and target metrics | 1. Navigate to the Testing module<br>2. Start a new experiment<br>3. Define the hypothesis<br>4. Define the target metrics<br>5. Save the experiment |  | Positive |
| TS-01 | TC-01.2 | Verify that an experiment can be defined with multiple variations | 1. Open the created experiment<br>2. Add a second variation<br>3. Add further variations<br>4. Save the experiment |  | Positive |
| TS-01 | TC-01.3 | Verify that a Split URL test can be created | 1. Navigate to the Testing module<br>2. Select Split URL Testing<br>3. Configure the test<br>4. Save the test |  | Positive |
| TS-01 | TC-01.4 | Verify that a Multivariate test can be created | 1. Navigate to the Testing module<br>2. Select Multivariate Testing<br>3. Configure multiple variations<br>4. Save the test |  | Positive |
| TS-01 | TC-01.5 | Verify that an experiment can be configured with audience segment parameters | 1. Open the experiment<br>2. Select the audience segment parameters<br>3. Save the configuration |  | Positive |
| TS-01 | TC-01.6 | Verify that test variations can be configured through the visual editor | 1. Open the experiment<br>2. Select the visual editor<br>3. Configure a variation<br>4. Save the variation |  | Positive |
| TS-01 | TC-01.7 | Verify that test variations can be configured through the code editor | 1. Open the experiment<br>2. Select the code editor<br>3. Configure a variation<br>4. Save the variation |  | Positive |
| TS-01 | TC-01.8 | Verify that a custom goal and metric configuration can be set for an experiment | 1. Open the experiment<br>2. Add a custom goal<br>3. Configure the metric<br>4. Save |  | Positive |
| TS-01 | TC-01.9 | Verify that a metric configuration aligned with a business KPI is accepted | 1. Open the experiment<br>2. Configure a metric mapped to a business KPI<br>3. Save |  | Positive |
| TS-01 | TC-01.10 | Verify that a version preview of the experiment can be viewed | 1. Open the configured experiment<br>2. Open the version preview<br>3. Verify the variation is displayed |  | Positive |
| TS-01 | TC-01.11 | Verify that an experiment can be scheduled | 1. Open the configured experiment<br>2. Configure the schedule<br>3. Save |  | Positive |
| TS-01 | TC-01.12 | Verify that an experiment can be launched and its progress monitored | 1. Open the configured experiment<br>2. Launch the experiment<br>3. Monitor the progress of the experiment |  | Positive |
| TS-01 | TC-01.13 | Verify that SmartStats results can be reviewed and a winner concluded | 1. Open the experiment after it has collected data<br>2. Review the SmartStats results<br>3. Conclude the winner |  | Positive |
| TS-01 | TC-01.14 | Verify that reporting is generated for a completed experiment | 1. Open the concluded experiment<br>2. Open the experiment report<br>3. Verify the report is generated |  | Positive |
| TS-01 | TC-01.15 | Verify that results are statistically validated for the experiment | 1. Open the experiment results<br>2. Verify the results are statistically validated |  | Positive |
| TS-01 | TC-01.16 | Verify that the complete A/B test setup flow runs end to end | 1. Define the hypothesis and target metrics<br>2. Select the audience segment parameters<br>3. Configure the test variations<br>4. Launch the test and monitor progress<br>5. Review SmartStats results and conclude the winner |  | Positive |
| TS-01 | TC-01.17 | Verify that an experiment cannot be launched without a hypothesis and target metrics | 1. Start a new experiment<br>2. Leave the hypothesis and target metrics undefined<br>3. Attempt to launch the experiment |  | Negative |
| TS-01 | TC-01.18 | Verify that an experiment cannot be launched without variations configured | 1. Start a new experiment<br>2. Do not add any variation<br>3. Attempt to launch the experiment |  | Negative |
| TS-01 | TC-01.19 | Verify that an experiment cannot be launched without audience segment parameters selected | 1. Configure an experiment without selecting audience segment parameters<br>2. Attempt to launch the experiment |  | Negative |
| TS-01 | TC-01.20 | Verify that a goal configuration submitted without a metric value is rejected | 1. Open the experiment<br>2. Add a goal<br>3. Leave the metric value blank<br>4. Attempt to save |  | Negative |
| TS-01 | TC-01.21 | Verify that an invalid scheduling value is rejected | 1. Open the configured experiment<br>2. Enter an invalid scheduling value<br>3. Attempt to save |  | Negative |
| TS-01 | TC-01.22 | Verify that the minimum variation configuration for an A/B test is supported | 1. Create an experiment<br>2. Configure the minimum required variations for a comparison<br>3. Save and launch |  | Boundary |
| TS-01 | TC-01.23 | Verify that an experiment can use variations configured through both the visual editor and the code editor | 1. Open the experiment<br>2. Configure one variation using the visual editor<br>3. Configure another variation using the code editor<br>4. Save the experiment |  | Edge |
| TS-01 | TC-01.24 | Verify that audience targeting can combine behavior and attribute parameters in one experiment | 1. Open the experiment<br>2. Configure audience targeting using behavior parameters<br>3. Add attribute parameters<br>4. Save |  | Edge |

---

## TS-02 – SmartStats Engine (FR2)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-02 | TC-02.1 | Verify that SmartStats provides Bayesian analysis for test results | 1. Open an experiment with collected data<br>2. Open the SmartStats results<br>3. Verify the Bayesian analysis is displayed |  | Positive |
| TS-02 | TC-02.2 | Verify that SmartStats reports statistically validated results | 1. Open an experiment with collected data<br>2. Open the SmartStats results<br>3. Verify the results are statistically validated |  | Positive |
| TS-02 | TC-02.3 | Verify that a winner can be concluded from the SmartStats results | 1. Open the SmartStats results<br>2. Identify the winning variation<br>3. Conclude the winner |  | Positive |
| TS-02 | TC-02.4 | Verify that SmartStats analysis is available for an experiment with multiple variations | 1. Open an experiment configured with multiple variations<br>2. Open the SmartStats results<br>3. Verify the analysis covers each variation |  | Positive |
| TS-02 | TC-02.5 | Verify that SmartStats results update as new data is collected | 1. Open the SmartStats results of a running experiment<br>2. Note the reported values<br>3. Allow further data to be collected<br>4. Refresh the results |  | Positive |
| TS-02 | TC-02.6 | Verify that SmartStats analysis is available for a Split URL test | 1. Open a completed Split URL test<br>2. Open the SmartStats results |  | Positive |
| TS-02 | TC-02.7 | Verify that SmartStats analysis is available for a Multivariate test | 1. Open a completed Multivariate test<br>2. Open the SmartStats results |  | Positive |
| TS-02 | TC-02.8 | Verify that SmartStats results are produced when the experiment has no conversions | 1. Open an experiment with no conversions<br>2. Open the SmartStats results |  | Boundary |

---

## TS-03 – Visual & Code Editor (FR3)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-03 | TC-03.1 | Verify that the visual editor opens for experiment setup | 1. Open an experiment<br>2. Open the visual editor<br>3. Verify the editor loads |  | Positive |
| TS-03 | TC-03.2 | Verify that the code editor opens for developer-level experiment setup | 1. Open an experiment<br>2. Open the code editor<br>3. Verify the editor loads |  | Positive |
| TS-03 | TC-03.3 | Verify that a variation can be created using the WYSIWYG editor | 1. Open the visual editor<br>2. Create a variation<br>3. Apply the change<br>4. Save |  | Positive |
| TS-03 | TC-03.4 | Verify that a variation can be created using developer-level editing | 1. Open the code editor<br>2. Enter valid code for the variation<br>3. Save |  | Positive |
| TS-03 | TC-03.5 | Verify that the configured variation is reflected in the version preview | 1. Configure a variation in the editor<br>2. Save<br>3. Open the version preview |  | Positive |
| TS-03 | TC-03.6 | Verify that a saved variation persists after the editor is reopened | 1. Configure and save a variation<br>2. Close the editor<br>3. Reopen the editor and the variation |  | Positive |
| TS-03 | TC-03.7 | Verify that an empty variation cannot be saved | 1. Open the editor<br>2. Do not make any change<br>3. Attempt to save the variation |  | Negative |
| TS-03 | TC-03.8 | Verify that invalid code entered in the code editor is rejected | 1. Open the code editor<br>2. Enter invalid code<br>3. Attempt to save |  | Negative |
| TS-03 | TC-03.9 | Verify that the editor handles a variation configured with the maximum supported changes | 1. Open the visual editor<br>2. Apply the maximum supported number of changes<br>3. Save |  | Boundary |
| TS-03 | TC-03.10 | Verify that the same experiment supports variations created in both editors | 1. Create a variation in the visual editor<br>2. Create another variation in the code editor<br>3. Save the experiment and open the version preview |  | Edge |

---

## TS-04 – Behavioral Insights: Heatmaps, Session Recordings, Surveys & Funnels (FR4, Section 4.2, User Flow 5.2)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-04 | TC-04.1 | Verify that the VWO Insights dashboard can be accessed | 1. Log in to VWO<br>2. Open the VWO Insights dashboard |  | Positive |
| TS-04 | TC-04.2 | Verify that a click heatmap is generated | 1. Open the Insights dashboard<br>2. Select the click heatmap<br>3. Generate the heatmap |  | Positive |
| TS-04 | TC-04.3 | Verify that a scroll heatmap is generated | 1. Open the Insights dashboard<br>2. Select the scroll heatmap<br>3. Generate the heatmap |  | Positive |
| TS-04 | TC-04.4 | Verify that a focus heatmap is generated | 1. Open the Insights dashboard<br>2. Select the focus heatmap<br>3. Generate the heatmap |  | Positive |
| TS-04 | TC-04.5 | Verify that user actions on a key page can be visualized | 1. Open the Insights dashboard<br>2. Select a key page<br>3. Visualize the user actions for that page |  | Positive |
| TS-04 | TC-04.6 | Verify that a session can be recorded | 1. Open the Insights dashboard<br>2. Start session recording<br>3. Generate a session on the tracked page |  | Positive |
| TS-04 | TC-04.7 | Verify that a recorded session can be played back | 1. Open the Insights dashboard<br>2. Open the recorded sessions<br>3. Play back a session |  | Positive |
| TS-04 | TC-04.8 | Verify that an on-page survey can be created | 1. Open the Insights dashboard<br>2. Create an on-page survey<br>3. Configure the survey questions<br>4. Save and publish the survey |  | Positive |
| TS-04 | TC-04.9 | Verify that survey feedback is captured | 1. Open the published survey on the tracked page<br>2. Submit a response<br>3. Verify the response is captured in the Insights dashboard |  | Positive |
| TS-04 | TC-04.10 | Verify that a funnel can be set up | 1. Open the Insights dashboard<br>2. Set up a funnel<br>3. Configure the funnel steps<br>4. Save the funnel |  | Positive |
| TS-04 | TC-04.11 | Verify that funnel analytics identify drop-off points | 1. Open the configured funnel<br>2. Generate the funnel analytics<br>3. Verify the drop-off points are identified |  | Positive |
| TS-04 | TC-04.12 | Verify that behavioral insights can be correlated with test outcomes | 1. Open the Insights dashboard<br>2. Select the behavioral insight<br>3. Correlate it with the experiment outcome |  | Positive |
| TS-04 | TC-04.13 | Verify that behavior insights can be used to prioritize optimization ideas | 1. Review the behavioral insights<br>2. Prioritize an optimization idea using the insights |  | Positive |
| TS-04 | TC-04.14 | Verify that the complete behavioral data analysis flow runs end to end | 1. Access the VWO Insights dashboard<br>2. Generate heatmaps, record sessions and set funnels<br>3. Correlate behavior insights with test outcomes<br>4. Prioritize optimization ideas |  | Positive |
| TS-04 | TC-04.15 | Verify that a heatmap cannot be generated without a page or data selection | 1. Open the Insights dashboard<br>2. Select a heatmap type without selecting a page or data set<br>3. Attempt to generate the heatmap |  | Negative |
| TS-04 | TC-04.16 | Verify that a survey cannot be published without any question configured | 1. Open the Insights dashboard<br>2. Create a survey<br>3. Leave the questions empty<br>4. Attempt to publish |  | Negative |
| TS-04 | TC-04.17 | Verify that a funnel cannot be built without funnel steps configured | 1. Open the Insights dashboard<br>2. Start setting up a funnel<br>3. Leave the funnel steps empty<br>4. Attempt to save |  | Negative |
| TS-04 | TC-04.18 | Verify that heatmap generation behaves correctly when no user interaction data is available | 1. Open the Insights dashboard<br>2. Select a page with no interaction data<br>3. Attempt to generate the heatmap |  | Boundary |

---

## TS-05 – Audience Targeting (FR5, Section 4.1)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-05 | TC-05.1 | Verify that an audience segment can be created based on behavior | 1. Navigate to audience targeting<br>2. Create a segment<br>3. Configure the behavior parameter<br>4. Save the segment |  | Positive |
| TS-05 | TC-05.2 | Verify that an audience segment can be created based on attributes | 1. Navigate to audience targeting<br>2. Create a segment<br>3. Configure the attribute parameter<br>4. Save the segment |  | Positive |
| TS-05 | TC-05.3 | Verify that an audience segment can be applied to an experiment | 1. Open an experiment<br>2. Apply the audience segment<br>3. Save the experiment |  | Positive |
| TS-05 | TC-05.4 | Verify that targeting based on multiple behaviors is supported | 1. Create a segment<br>2. Configure more than one behavior parameter<br>3. Save the segment |  | Positive |
| TS-05 | TC-05.5 | Verify that an existing audience segment can be edited | 1. Open an existing segment<br>2. Modify the parameters<br>3. Save the segment |  | Positive |
| TS-05 | TC-05.6 | Verify that a segment cannot be saved without any targeting parameter | 1. Create a segment<br>2. Leave all targeting parameters empty<br>3. Attempt to save |  | Negative |
| TS-05 | TC-05.7 | Verify that an invalid targeting parameter value is rejected | 1. Create a segment<br>2. Enter an invalid value for a targeting parameter<br>3. Attempt to save |  | Negative |
| TS-05 | TC-05.8 | Verify that behavior and attribute parameters can be combined in a single segment | 1. Create a segment<br>2. Configure a behavior parameter<br>3. Add an attribute parameter<br>4. Save the segment |  | Edge |

---

## TS-06 – Real-time Reporting & Dashboards (FR6)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-06 | TC-06.1 | Verify that the dashboard displays experiment analytics | 1. Log in to VWO<br>2. Open the dashboard<br>3. Verify the experiment analytics are displayed |  | Positive |
| TS-06 | TC-06.2 | Verify that the reported analytics are up to date | 1. Open the dashboard<br>2. Note the reported values<br>3. Allow further data to be collected<br>4. Refresh and verify the analytics are up to date |  | Positive |
| TS-06 | TC-06.3 | Verify that a report is generated for an experiment | 1. Open an experiment<br>2. Open the experiment report<br>3. Verify the report is generated |  | Positive |
| TS-06 | TC-06.4 | Verify that the generated report is actionable | 1. Open the experiment report<br>2. Verify the report presents the results needed to act on the experiment |  | Positive |
| TS-06 | TC-06.5 | Verify that reporting is available for a concluded experiment | 1. Open a concluded experiment<br>2. Open the experiment report |  | Positive |
| TS-06 | TC-06.6 | Verify that dashboard analytics are accurate against the experiment data | 1. Note the experiment data values<br>2. Open the dashboard<br>3. Compare the reported analytics with the experiment data |  | Positive |
| TS-06 | TC-06.7 | Verify that the dashboard behaves correctly when no experiment analytics exist | 1. Open the dashboard on an account with no experiment data |  | Boundary |
| TS-06 | TC-06.8 | Verify that the dashboard remains usable when a large number of experiments is present | 1. Open the dashboard on an account with a large number of experiments<br>2. Verify the analytics are displayed |  | Edge |

---

## TS-07 – Personalization Engine (FR7, Section 4.3)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-07 | TC-07.1 | Verify that a personalization experience can be created | 1. Navigate to the Personalization module<br>2. Create a personalization experience<br>3. Save the experience |  | Positive |
| TS-07 | TC-07.2 | Verify that users can be segmented by geography | 1. Create a segment<br>2. Configure the geography parameter<br>3. Save the segment |  | Positive |
| TS-07 | TC-07.3 | Verify that users can be segmented by behavior | 1. Create a segment<br>2. Configure the behavior parameter<br>3. Save the segment |  | Positive |
| TS-07 | TC-07.4 | Verify that users can be segmented by demographics | 1. Create a segment<br>2. Configure the demographic parameter<br>3. Save the segment |  | Positive |
| TS-07 | TC-07.5 | Verify that customized content is delivered in real time to a matching segment | 1. Attach a segment to the personalization experience<br>2. Publish the experience<br>3. Visit the page as a matching visitor<br>4. Verify the customized content is delivered |  | Positive |
| TS-07 | TC-07.6 | Verify that engagement is tracked for a targeted experience | 1. Publish a personalized experience<br>2. Generate visitor engagement<br>3. Verify the engagement is tracked |  | Positive |
| TS-07 | TC-07.7 | Verify that a personalization experience cannot be published without a segment | 1. Create a personalization experience<br>2. Do not attach a segment<br>3. Attempt to publish |  | Negative |
| TS-07 | TC-07.8 | Verify that a segment cannot be created without a segmentation parameter | 1. Create a segment<br>2. Leave the segmentation parameters empty<br>3. Attempt to save |  | Negative |
| TS-07 | TC-07.9 | Verify that combining geography, behavior and demographic parameters in one segment is supported | 1. Create a segment<br>2. Configure geography, behavior and demographic parameters<br>3. Save the segment |  | Edge |

---

## TS-08 – Integration Connectors (FR8, Section 4.5)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-08 | TC-08.1 | Verify that VWO integrates with Shopify and syncs data | 1. Navigate to Integrations<br>2. Select Shopify<br>3. Configure the connection<br>4. Verify data sync |  | Positive |
| TS-08 | TC-08.2 | Verify that VWO integrates with Salesforce and syncs data | 1. Navigate to Integrations<br>2. Select Salesforce<br>3. Configure the connection<br>4. Verify data sync |  | Positive |
| TS-08 | TC-08.3 | Verify that VWO integrates with Segment and syncs data | 1. Navigate to Integrations<br>2. Select Segment<br>3. Configure the connection<br>4. Verify data sync |  | Positive |
| TS-08 | TC-08.4 | Verify that VWO integrates with Snowflake and syncs data | 1. Navigate to Integrations<br>2. Select Snowflake<br>3. Configure the connection<br>4. Verify data sync |  | Positive |
| TS-08 | TC-08.5 | Verify that VWO integrates with WordPress | 1. Navigate to Integrations<br>2. Select WordPress<br>3. Configure the integration<br>4. Verify the connection |  | Positive |
| TS-08 | TC-08.6 | Verify that VWO integrates with Drupal | 1. Navigate to Integrations<br>2. Select Drupal<br>3. Configure the integration<br>4. Verify the connection |  | Positive |
| TS-08 | TC-08.7 | Verify that VWO integrates with Google Analytics and provides extended insights | 1. Navigate to Integrations<br>2. Select Google Analytics<br>3. Configure the connection<br>4. Verify experiment data is available for extended insights |  | Positive |
| TS-08 | TC-08.8 | Verify that VWO integrates with Mixpanel and provides extended insights | 1. Navigate to Integrations<br>2. Select Mixpanel<br>3. Configure the connection<br>4. Verify experiment data is available for extended insights |  | Positive |
| TS-08 | TC-08.9 | Verify that VWO integrates with a CDP or analytics system | 1. Navigate to Integrations<br>2. Select the CDP or analytics system<br>3. Configure the connection<br>4. Verify data sync |  | Positive |
| TS-08 | TC-08.10 | Verify that synced data in an external platform matches the VWO data | 1. Generate a known set of data in VWO<br>2. Allow the sync to complete<br>3. Compare the values in the external platform with VWO |  | Positive |
| TS-08 | TC-08.11 | Verify that an integration with invalid connection details is rejected | 1. Navigate to Integrations<br>2. Select a connector<br>3. Enter invalid connection details<br>4. Attempt to save |  | Negative |
| TS-08 | TC-08.12 | Verify that an integration cannot be configured with empty connection details | 1. Navigate to Integrations<br>2. Select a connector<br>3. Leave the connection details empty<br>4. Attempt to save |  | Negative |
| TS-08 | TC-08.13 | Verify that data sync behaves correctly when the external platform is unavailable | 1. Configure a connector<br>2. Make the external platform unavailable<br>3. Verify the sync behaviour |  | Edge |

---

## TS-09 – Collaboration & Workflow Management (FR9, Section 4.4)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-09 | TC-09.1 | Verify that the central planning interface for optimization initiatives is accessible | 1. Navigate to Program & Workflow Management<br>2. Open the central planning interface |  | Positive |
| TS-09 | TC-09.2 | Verify that an optimization initiative can be added to the planning interface | 1. Open the central planning interface<br>2. Create an optimization initiative<br>3. Save the initiative |  | Positive |
| TS-09 | TC-09.3 | Verify that a Kanban style workflow for experiment backlogs is available | 1. Navigate to Program & Workflow Management<br>2. Open the Kanban workflow<br>3. Verify the experiment backlog is displayed |  | Positive |
| TS-09 | TC-09.4 | Verify that an experiment can be added to the Kanban backlog | 1. Open the Kanban workflow<br>2. Add an experiment to the backlog<br>3. Verify it is displayed in the backlog |  | Positive |
| TS-09 | TC-09.5 | Verify that collaboration tools are available for distributed teams | 1. Open the planning interface<br>2. Verify the collaboration tools are available for the team |  | Positive |
| TS-09 | TC-09.6 | Verify that an initiative cannot be added without the required details | 1. Open the central planning interface<br>2. Attempt to create an initiative without entering the required details<br>3. Attempt to save |  | Negative |
| TS-09 | TC-09.7 | Verify that an experiment cannot be added to the Kanban backlog without the required details | 1. Open the Kanban workflow<br>2. Attempt to add an experiment without the required details<br>3. Attempt to save |  | Negative |
| TS-09 | TC-09.8 | Verify that multiple team members can work on the same planning board | 1. Open the planning board in two sessions<br>2. Add initiative details in both sessions<br>3. Save and verify the board state |  | Edge |

---

## TS-10 – Non-Functional Requirements (Performance, Security, Scalability, Data Privacy, Reliability)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-10 | TC-10.1 | Verify that the system responds within 2 seconds for editing workflows | 1. Open an editing workflow<br>2. Measure the system response time<br>3. Compare against the 2-second requirement |  | Boundary |
| TS-10 | TC-10.2 | Verify that editing workflows remain within 2 seconds when the experiment has multiple variations | 1. Open an experiment with multiple variations<br>2. Perform an editing workflow<br>3. Measure the system response time |  | Boundary |
| TS-10 | TC-10.3 | Verify that editing workflows remain within 2 seconds on a slower network profile | 1. Switch to a throttled network profile<br>2. Perform an editing workflow<br>3. Measure the system response time |  | Edge |
| TS-10 | TC-10.4 | Verify that 2FA is supported for user accounts | 1. Open the account security settings<br>2. Configure 2FA<br>3. Log in and complete the 2FA step |  | Positive |
| TS-10 | TC-10.5 | Verify that role-based access control is enforced | 1. Log in with each available role (Admin, Editor, Viewer)<br>2. Perform a permitted action and a restricted action<br>3. Verify access matches the assigned role |  | Positive |
| TS-10 | TC-10.6 | Verify that activity logs are recorded | 1. Perform actions in the platform<br>2. Open the activity log<br>3. Verify the actions are recorded |  | Positive |
| TS-10 | TC-10.7 | Verify that access is denied for an action outside the assigned role | 1. Log in with the Viewer role<br>2. Attempt a restricted action<br>3. Verify access is denied |  | Negative |
| TS-10 | TC-10.8 | Verify that the platform supports high visitor volumes without performance loss | 1. Simulate a high visitor volume on a tested page<br>2. Monitor the system performance<br>3. Verify there is no performance loss |  | Boundary |
| TS-10 | TC-10.9 | Verify that the platform complies with GDPR data policy requirements | 1. Access the platform from an EU region<br>2. Verify the data policy requirements are applied |  | Positive |
| TS-10 | TC-10.10 | Verify that the platform complies with CCPA data policy requirements | 1. Access the platform from a California region<br>2. Verify the data policy requirements are applied |  | Positive |
| TS-10 | TC-10.11 | Verify that regional data policies are applied | 1. Access the platform from a region with a specific data policy<br>2. Verify the regional data policy is applied |  | Positive |
| TS-10 | TC-10.12 | Verify that platform uptime meets the 99.9% SLA for enterprise customers | 1. Monitor platform availability over the measurement window<br>2. Record any downtime<br>3. Compare against the 99.9% SLA |  | Boundary |
| TS-10 | TC-10.13 | Verify that the platform remains usable when a dependent service is unavailable | 1. Make a dependent service unavailable<br>2. Perform the affected user actions<br>3. Verify the platform remains usable |  | Edge |

---

## TS-11 – Cross-device QA and Cross-browser QA (Section 4.1)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-11 | TC-11.1 | Verify that experiments can be reviewed on desktop devices | 1. Open the experiment on a desktop device<br>2. Review the experiment and its variations |  | Positive |
| TS-11 | TC-11.2 | Verify that experiments can be reviewed on laptop devices | 1. Open the experiment on a laptop device<br>2. Review the experiment and its variations |  | Positive |
| TS-11 | TC-11.3 | Verify that experiments can be reviewed on tablet devices | 1. Open the experiment on a tablet device<br>2. Review the experiment and its variations |  | Positive |
| TS-11 | TC-11.4 | Verify that experiments can be reviewed on smartphone devices | 1. Open the experiment on a smartphone device<br>2. Review the experiment and its variations |  | Positive |
| TS-11 | TC-11.5 | Verify that the platform works on Google Chrome | 1. Open the platform in Google Chrome<br>2. Perform the core flows |  | Positive |
| TS-11 | TC-11.6 | Verify that the platform works on Mozilla Firefox | 1. Open the platform in Mozilla Firefox<br>2. Perform the core flows |  | Positive |
| TS-11 | TC-11.7 | Verify that the platform works on Microsoft Edge | 1. Open the platform in Microsoft Edge<br>2. Perform the core flows |  | Positive |
| TS-11 | TC-11.8 | Verify that the platform works on Apple Safari | 1. Open the platform in Apple Safari<br>2. Perform the core flows |  | Positive |
| TS-11 | TC-11.9 | Verify that the reported values from one browser can be tested for consistency against another browser | 1. Open the same experiment in two browsers<br>2. Compare the reported values |  | Edge |

---

## Requirement Coverage Summary

| Scenario | Requirement | Test Case Count |
|---|---|---|
| TS-01 | FR1 – A/B, Split & Multivariate Testing; Section 4.1; User Flow 5.1 | 24 |
| TS-02 | FR2 – SmartStats Engine | 8 |
| TS-03 | FR3 – Visual & Code Editor | 10 |
| TS-04 | FR4 – Heatmaps & Session Recordings; Section 4.2; User Flow 5.2 | 18 |
| TS-05 | FR5 – Audience Targeting | 8 |
| TS-06 | FR6 – Real-time Reporting & Dashboards | 8 |
| TS-07 | FR7 – Personalization Engine | 9 |
| TS-08 | FR8 – Integration Connectors | 13 |
| TS-09 | FR9 – Collaboration & Workflow Management | 8 |
| TS-10 | NFR – Performance, Security, Scalability, Data Privacy, Reliability | 13 |
| TS-11 | Cross-device QA and Cross-browser QA | 9 |
| **Total** | | **128** |
