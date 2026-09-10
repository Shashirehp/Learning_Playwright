# Test Cases – VWO Digital Experience Optimization Platform

| Document | VWO Test Case Suite |
|---|---|
| Product | VWO (Visual Website Optimizer) |
| Product URL | https://app.vwo.com/ |
| PRD Reference | Product Requirements Document (PRD) – VWO, dated January 7, 2026 |
| Version | 1.0 |
| Prepared By | QA Lead |
| Date | September 10, 2026 |
| Columns | Scenario TID \| Test Case ID \| Test Case Description \| Test Steps \| Status \| Comments |

> Status values: Pass / Fail / Blocked / Not Run (to be updated during execution). Comments indicate the case category: Positive, Negative, Boundary or Edge.

---

## TS-01 – Login & Authentication (https://app.vwo.com/#/login)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-01 | TC-01.1 | Verify that a user can log in successfully with valid email and valid password | 1. Navigate to https://app.vwo.com/#/login<br>2. Enter a registered email address<br>3. Enter the correct password<br>4. Click Login |  | Positive |
| TS-01 | TC-01.2 | Verify that login fails with a valid email and an incorrect password | 1. Navigate to the login page<br>2. Enter a registered email address<br>3. Enter an incorrect password<br>4. Click Login |  | Negative |
| TS-01 | TC-01.3 | Verify that login fails with an unregistered email address | 1. Navigate to the login page<br>2. Enter an email that is not registered<br>3. Enter any password<br>4. Click Login |  | Negative |
| TS-01 | TC-01.4 | Verify that validation messages appear when both email and password fields are left blank | 1. Navigate to the login page<br>2. Leave email and password blank<br>3. Click Login |  | Negative |
| TS-01 | TC-01.5 | Verify that an invalid email format is rejected with a field-level validation message | 1. Navigate to the login page<br>2. Enter an email without the @ symbol (for example userdomain.com)<br>3. Enter a valid password<br>4. Click Login |  | Negative |
| TS-01 | TC-01.6 | Verify that the password field masks the entered characters | 1. Navigate to the login page<br>2. Type a password in the password field<br>3. Observe the displayed characters |  | Positive |
| TS-01 | TC-01.7 | Verify that leading and trailing spaces in the email field are trimmed before validation | 1. Navigate to the login page<br>2. Enter a registered email with leading and trailing spaces<br>3. Enter the correct password<br>4. Click Login |  | Edge |
| TS-01 | TC-01.8 | Verify that the email field is case-insensitive | 1. Navigate to the login page<br>2. Enter the registered email in UPPERCASE<br>3. Enter the correct password<br>4. Click Login |  | Edge |
| TS-01 | TC-01.9 | Verify that the email field accepts the maximum allowed length and rejects one character more | 1. Navigate to the login page<br>2. Enter an email at the maximum allowed length<br>3. Submit and observe the outcome<br>4. Repeat with one character beyond the limit |  | Boundary |
| TS-01 | TC-01.10 | Verify that the Forgot Password link triggers the password reset flow | 1. Navigate to the login page<br>2. Click Forgot Password<br>3. Enter a registered email<br>4. Submit the request |  | Positive |
| TS-01 | TC-01.11 | Verify that password reset link sent to email is valid and expires after use | 1. Request a password reset<br>2. Open the reset link from the email<br>3. Set a new password<br>4. Re-open the same link |  | Edge |
| TS-01 | TC-01.12 | Verify that a user can log in successfully with a valid 2FA code | 1. Log in with valid credentials<br>2. Enter the valid OTP received on the registered device<br>3. Submit the code |  | Positive |
| TS-01 | TC-01.13 | Verify that an invalid or expired 2FA code is rejected and a retry is offered | 1. Log in with valid credentials<br>2. Enter an incorrect or expired OTP<br>3. Submit the code |  | Negative |
| TS-01 | TC-01.14 | Verify that the account is locked after the configured number of consecutive failed login attempts | 1. Enter a valid email and an incorrect password repeatedly up to the configured limit<br>2. Observe the lockout message<br>3. Attempt login with the correct password |  | Boundary |
| TS-01 | TC-01.15 | Verify that the user session expires after the configured inactivity period | 1. Log in successfully<br>2. Remain inactive beyond the session timeout<br>3. Attempt to navigate to a protected page |  | Edge |
| TS-01 | TC-01.16 | Verify that the user is logged out and cannot access protected pages using the browser Back button | 1. Log in successfully<br>2. Click Logout<br>3. Press the browser Back button<br>4. Attempt to access a protected URL directly |  | Negative |
| TS-01 | TC-01.17 | Verify that the login fields are protected against SQL injection and XSS payloads | 1. Navigate to the login page<br>2. Enter SQL injection payloads in the email and password fields<br>3. Submit<br>4. Repeat with script-tag XSS payloads |  | Negative |
| TS-01 | TC-01.18 | Verify that the password is not exposed in the URL, page source or browser console after login | 1. Log in successfully<br>2. Inspect the browser URL, page source and console logs<br>3. Search for the plain-text password |  | Edge |

---

## TS-02 – Experimentation & Testing (A/B, Split URL, Multivariate) – FR1

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-02 | TC-02.1 | Verify that a new A/B test is created successfully with a valid experiment name | 1. Navigate to the Testing module<br>2. Click Create New Test<br>3. Enter a valid experiment name<br>4. Click Save |  | Positive |
| TS-02 | TC-02.2 | Verify that an A/B test cannot be created with a blank experiment name | 1. Navigate to the Testing module<br>2. Click Create New Test<br>3. Leave the experiment name blank<br>4. Click Save |  | Negative |
| TS-02 | TC-02.3 | Verify that the experiment name accepts the maximum allowed length | 1. Navigate to Create New Test<br>2. Enter an experiment name exactly at the maximum allowed length<br>3. Click Save |  | Boundary |
| TS-02 | TC-02.4 | Verify that an experiment name exceeding the maximum allowed length is rejected | 1. Navigate to Create New Test<br>2. Enter an experiment name one character beyond the maximum length<br>3. Click Save |  | Negative |
| TS-02 | TC-02.5 | Verify the behaviour when an experiment name with only special characters is submitted | 1. Navigate to Create New Test<br>2. Enter a name containing only special characters (for example ####)<br>3. Click Save |  | Edge |
| TS-02 | TC-02.6 | Verify that multiple variations can be added to a single experiment | 1. Open the created experiment<br>2. Click Add Variation<br>3. Add two or more variations<br>4. Save the experiment |  | Positive |
| TS-02 | TC-02.7 | Verify that a 50/50 traffic split between two variations is saved correctly | 1. Open the experiment Traffic Allocation settings<br>2. Set the split to 50/50<br>3. Save |  | Positive |
| TS-02 | TC-02.8 | Verify that a 0/100 traffic split is accepted as a boundary value | 1. Open Traffic Allocation settings<br>2. Set the split to 0/100<br>3. Save |  | Boundary |
| TS-02 | TC-02.9 | Verify that a traffic split that does not total 100 percent is rejected | 1. Open Traffic Allocation settings<br>2. Enter a split totaling less than or more than 100 percent<br>3. Save |  | Negative |
| TS-02 | TC-02.10 | Verify that a custom goal and metric can be configured for an experiment | 1. Open the experiment<br>2. Navigate to Goals and Metrics<br>3. Add a custom goal with a valid metric<br>4. Save |  | Positive |
| TS-02 | TC-02.11 | Verify that an experiment can be launched and its status changes to Running | 1. Open a fully configured experiment<br>2. Click Launch<br>3. Verify the experiment status |  | Positive |
| TS-02 | TC-02.12 | Verify that a running experiment can be paused | 1. Open a Running experiment<br>2. Click Pause<br>3. Verify the experiment status |  | Positive |
| TS-02 | TC-02.13 | Verify that a paused experiment can be resumed | 1. Open a Paused experiment<br>2. Click Resume<br>3. Verify the experiment status |  | Positive |
| TS-02 | TC-02.14 | Verify that an experiment can be concluded and a winner variation declared | 1. Open a Running experiment with results<br>2. Click Conclude<br>3. Select the winning variation<br>4. Confirm |  | Positive |
| TS-02 | TC-02.15 | Verify that an experiment can be scheduled to start on a future date and time | 1. Open Create New Test<br>2. Configure the experiment<br>3. Set the start date to a future date and time<br>4. Save |  | Positive |
| TS-02 | TC-02.16 | Verify that scheduling an experiment with a past date is rejected | 1. Open Create New Test<br>2. Set the start date to a past date<br>3. Save |  | Negative |
| TS-02 | TC-02.17 | Verify that variation previews render correctly across desktop, tablet and mobile devices | 1. Open the experiment<br>2. Click Preview<br>3. Switch between desktop, tablet and mobile views |  | Positive |
| TS-02 | TC-02.18 | Verify that a Split URL test is created successfully with valid control and variation URLs | 1. Navigate to the Testing module<br>2. Select Split URL test type<br>3. Enter valid control and variation URLs<br>4. Save |  | Positive |
| TS-02 | TC-02.19 | Verify that a Split URL test with an invalid or unreachable URL shows a validation error | 1. Select Split URL test type<br>2. Enter an invalid URL (for example httpx//invalid)<br>3. Save |  | Negative |
| TS-02 | TC-02.20 | Verify that a Multivariate test is created with multiple element combinations | 1. Navigate to the Testing module<br>2. Select Multivariate test type<br>3. Configure two or more elements with multiple variants<br>4. Save |  | Positive |
| TS-02 | TC-02.21 | Verify that a running experiment cannot be edited in a way that invalidates live results | 1. Open a Running experiment<br>2. Attempt to edit variations and goals<br>3. Observe the system response |  | Edge |
| TS-02 | TC-02.22 | Verify that two users editing the same experiment concurrently do not overwrite each other's changes silently | 1. Open the same experiment in two sessions<br>2. Edit different fields in each session<br>3. Save in both sessions |  | Edge |
| TS-02 | TC-02.23 | Verify that an experiment can be archived and is removed from the active experiment list | 1. Open an experiment<br>2. Click Archive or Delete<br>3. Confirm the action<br>4. Verify the active list |  | Positive |
| TS-02 | TC-02.24 | Verify that an experiment with no variations cannot be launched | 1. Create an experiment without adding any variation<br>2. Attempt to launch it |  | Negative |

---

## TS-03 – SmartStats Engine – FR2

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-03 | TC-03.1 | Verify that SmartStats displays Bayesian results for a running experiment | 1. Open a running experiment with traffic<br>2. Navigate to the Results tab<br>3. Verify the Bayesian metrics displayed |  | Positive |
| TS-03 | TC-03.2 | Verify that a winner is declared when statistical significance is reached | 1. Open an experiment that has reached the significance threshold<br>2. Verify the winning variation is declared |  | Positive |
| TS-03 | TC-03.3 | Verify that the not-enough-data state is shown when traffic is insufficient | 1. Open a newly launched experiment with minimal traffic<br>2. Navigate to the Results tab |  | Boundary |
| TS-03 | TC-03.4 | Verify that results update as new conversions arrive | 1. Open the Results tab of a running experiment<br>2. Note the conversion values<br>3. Generate new conversions<br>4. Refresh the results |  | Positive |
| TS-03 | TC-03.5 | Verify that the Results tab handles zero conversions without errors | 1. Open an experiment with zero conversions<br>2. Navigate to the Results tab |  | Boundary |
| TS-03 | TC-03.6 | Verify that a 100 percent conversion rate is computed correctly | 1. Open an experiment where all visitors convert<br>2. Navigate to the Results tab |  | Boundary |
| TS-03 | TC-03.7 | Verify that no false winner is declared when variations perform equally | 1. Open an experiment with statistically equal variations<br>2. Navigate to the Results tab |  | Edge |
| TS-03 | TC-03.8 | Verify SmartStats results against a known statistical sample dataset | 1. Load a dataset with known expected Bayesian output<br>2. Run the experiment and capture the results<br>3. Compare the output with the expected values |  | Positive |
| TS-03 | TC-03.9 | Verify that an invalid goal or metric configuration shows an error and does not affect results | 1. Open the experiment goals<br>2. Configure an invalid metric<br>3. Save and open the Results tab |  | Negative |
| TS-03 | TC-03.10 | Verify that results remain consistent after a goal is changed mid-test | 1. Open a running experiment with results<br>2. Change the primary goal<br>3. Open the Results tab |  | Edge |

---

## TS-04 – Visual & Code Editor – FR3

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-04 | TC-04.1 | Verify that the Visual Editor loads the target page correctly | 1. Open an experiment<br>2. Click Edit Variation<br>3. Wait for the Visual Editor to load the page |  | Positive |
| TS-04 | TC-04.2 | Verify that text can be edited using the WYSIWYG editor | 1. Open the Visual Editor<br>2. Select a text element<br>3. Edit the text<br>4. Apply the change |  | Positive |
| TS-04 | TC-04.3 | Verify that an image element can be replaced with a new image | 1. Open the Visual Editor<br>2. Select an image element<br>3. Upload or select a new image<br>4. Apply the change |  | Positive |
| TS-04 | TC-04.4 | Verify that element styles (color, font size, alignment) can be modified | 1. Open the Visual Editor<br>2. Select an element<br>3. Change color, font size and alignment<br>4. Apply the change |  | Positive |
| TS-04 | TC-04.5 | Verify that an element can be moved, reordered and deleted | 1. Open the Visual Editor<br>2. Drag an element to a new position<br>3. Reorder elements<br>4. Delete an element<br>5. Apply the changes |  | Positive |
| TS-04 | TC-04.6 | Verify that applied changes are reflected in the variation preview | 1. Open the Visual Editor<br>2. Apply a change<br>3. Click Preview and verify the change |  | Positive |
| TS-04 | TC-04.7 | Verify that valid custom JavaScript or CSS entered in the Code Editor is applied | 1. Open the Code Editor<br>2. Enter valid JavaScript or CSS<br>3. Save and preview the page |  | Positive |
| TS-04 | TC-04.8 | Verify that invalid code syntax in the Code Editor shows an error and is not saved | 1. Open the Code Editor<br>2. Enter code with invalid syntax<br>3. Attempt to save |  | Negative |
| TS-04 | TC-04.9 | Verify that unsupported or restricted tags in the Code Editor are blocked | 1. Open the Code Editor<br>2. Enter a restricted tag or script<br>3. Attempt to save |  | Negative |
| TS-04 | TC-04.10 | Verify that Undo and Redo work correctly in the Visual Editor | 1. Open the Visual Editor<br>2. Apply a change<br>3. Click Undo<br>4. Click Redo |  | Positive |
| TS-04 | TC-04.11 | Verify that editor changes persist after saving and reloading the page | 1. Open the Visual Editor<br>2. Apply and save a change<br>3. Reload the editor and the preview page |  | Positive |
| TS-04 | TC-04.12 | Verify that elements inside an iframe or protected region cannot be edited | 1. Open the Visual Editor on a page containing an iframe<br>2. Attempt to select and edit the iframe content |  | Edge |

---

## TS-05 – Heatmaps & Session Recordings (Behavioral Insights) – FR4

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-05 | TC-05.1 | Verify that a click heatmap is generated for a selected date range | 1. Navigate to the Insights module<br>2. Select Heatmap and the click type<br>3. Choose a valid date range<br>4. Generate the heatmap |  | Positive |
| TS-05 | TC-05.2 | Verify that a scroll heatmap is generated correctly | 1. Navigate to the Insights module<br>2. Select the scroll heatmap type<br>3. Choose a valid date range<br>4. Generate the heatmap |  | Positive |
| TS-05 | TC-05.3 | Verify that a focus or attention heatmap is generated correctly | 1. Navigate to the Insights module<br>2. Select the focus heatmap type<br>3. Choose a valid date range<br>4. Generate the heatmap |  | Positive |
| TS-05 | TC-05.4 | Verify that an appropriate empty state is shown when no heatmap data exists | 1. Navigate to the Insights module<br>2. Select a page or date range with no data<br>3. Generate the heatmap |  | Boundary |
| TS-05 | TC-05.5 | Verify that a session is recorded and can be played back | 1. Navigate to the Insights module<br>2. Open Session Recordings<br>3. Select a recorded session and play it |  | Positive |
| TS-05 | TC-05.6 | Verify that personally identifiable information is masked in session recordings | 1. Open a session recording containing form inputs<br>2. Verify that PII fields are masked or anonymized |  | Positive |
| TS-05 | TC-05.7 | Verify that an on-page survey can be created and a response captured | 1. Create a survey with valid questions<br>2. Publish it on a test page<br>3. Submit a response<br>4. Verify the response in the Insights dashboard |  | Positive |
| TS-05 | TC-05.8 | Verify that a survey with required questions cannot be submitted empty | 1. Open the published survey<br>2. Leave required questions unanswered<br>3. Submit |  | Negative |
| TS-05 | TC-05.9 | Verify that funnel analytics show drop-off correctly for valid steps | 1. Navigate to Funnel Analytics<br>2. Add two or more valid funnel steps<br>3. Generate the funnel report |  | Positive |
| TS-05 | TC-05.10 | Verify that a funnel with a single step shows a validation error | 1. Navigate to Funnel Analytics<br>2. Add only one step<br>3. Generate the funnel report |  | Negative |
| TS-05 | TC-05.11 | Verify that insights can be filtered by device, browser and date range | 1. Open the Insights dashboard<br>2. Apply device, browser and date range filters<br>3. Verify the filtered results |  | Positive |
| TS-05 | TC-05.12 | Verify that an insights report can be exported | 1. Open the Insights dashboard<br>2. Click Export<br>3. Select the export format<br>4. Verify the downloaded file |  | Positive |

---

## TS-06 – Audience Targeting – FR5

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-06 | TC-06.1 | Verify that an audience segment can be created using a behavior rule | 1. Navigate to Audience Targeting<br>2. Create a new segment<br>3. Add a behavior-based rule<br>4. Save the segment |  | Positive |
| TS-06 | TC-06.2 | Verify that an audience segment can be created using an attribute rule | 1. Navigate to Audience Targeting<br>2. Create a new segment<br>3. Add an attribute-based rule<br>4. Save the segment |  | Positive |
| TS-06 | TC-06.3 | Verify that an audience segment can be created using a geography rule | 1. Navigate to Audience Targeting<br>2. Create a new segment<br>3. Add a geography-based rule<br>4. Save the segment |  | Positive |
| TS-06 | TC-06.4 | Verify that a segment combining behavior, attribute and geography rules evaluates correctly | 1. Create a segment with three rule types<br>2. Define the AND/OR relationship<br>3. Save and preview the matching audience |  | Positive |
| TS-06 | TC-06.5 | Verify that a segment with no rule cannot be saved | 1. Navigate to Audience Targeting<br>2. Create a new segment<br>3. Leave all rules empty<br>4. Click Save |  | Negative |
| TS-06 | TC-06.6 | Verify that nested AND/OR rule logic is evaluated correctly | 1. Create a segment with nested AND/OR conditions<br>2. Save the segment<br>3. Preview the matching audience count |  | Edge |
| TS-06 | TC-06.7 | Verify that the matching audience count preview is accurate | 1. Create a segment with known matching criteria<br>2. Click Preview Audience<br>3. Compare the count with the expected value |  | Positive |
| TS-06 | TC-06.8 | Verify that a segment can be edited and deleted | 1. Open an existing segment<br>2. Edit a rule and save<br>3. Delete the segment |  | Positive |
| TS-06 | TC-06.9 | Verify the behaviour of a test attached to a segment that matches no visitors | 1. Attach an experiment to a segment matching zero visitors<br>2. Launch the experiment<br>3. Observe traffic allocation |  | Edge |

---

## TS-07 – Real-time Reporting & Dashboards – FR6

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-07 | TC-07.1 | Verify that the dashboard loads and displays current experiment metrics | 1. Log in to VWO<br>2. Open the Dashboard<br>3. Verify the experiment metrics displayed |  | Positive |
| TS-07 | TC-07.2 | Verify that dashboard metrics refresh within the expected interval | 1. Open the Dashboard<br>2. Note the metric values<br>3. Generate new traffic and conversions<br>4. Wait for the refresh interval and verify the update |  | Positive |
| TS-07 | TC-07.3 | Verify that the date range filter updates the reported metrics | 1. Open the Dashboard or Reports<br>2. Apply a valid date range filter<br>3. Verify the metrics reflect the selected range |  | Positive |
| TS-07 | TC-07.4 | Verify that device and browser filters update the reported metrics | 1. Open the Reports view<br>2. Apply device and browser filters<br>3. Verify the metrics reflect the filters |  | Positive |
| TS-07 | TC-07.5 | Verify that an invalid date range (start date after end date) shows a validation error | 1. Open the date range filter<br>2. Set the start date after the end date<br>3. Apply the filter |  | Negative |
| TS-07 | TC-07.6 | Verify that a report can be exported in the supported formats | 1. Open a report<br>2. Click Export<br>3. Select CSV and then PDF<br>4. Verify the downloaded files |  | Positive |
| TS-07 | TC-07.7 | Verify that the dashboard shows an appropriate empty state when no experiments exist | 1. Log in with a new account having no experiments<br>2. Open the Dashboard |  | Boundary |
| TS-07 | TC-07.8 | Verify that the dashboard loads within the expected time with a large data volume | 1. Open an account with a large number of experiments and conversions<br>2. Measure the dashboard load time |  | Boundary |

---

## TS-08 – Personalization Engine – FR7

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-08 | TC-08.1 | Verify that a personalization campaign is created successfully with a valid name | 1. Navigate to the Personalization module<br>2. Click Create Campaign<br>3. Enter a valid campaign name<br>4. Save |  | Positive |
| TS-08 | TC-08.2 | Verify that a personalization campaign cannot be created with a blank name | 1. Navigate to the Personalization module<br>2. Click Create Campaign<br>3. Leave the name blank<br>4. Save |  | Negative |
| TS-08 | TC-08.3 | Verify that customized content is delivered in real time to a matching segment | 1. Create a campaign targeting a specific segment<br>2. Launch the campaign<br>3. Visit the page as a matching visitor<br>4. Verify the personalized content |  | Positive |
| TS-08 | TC-08.4 | Verify that a non-matching visitor receives the default content | 1. Launch a segment-targeted campaign<br>2. Visit the page as a non-matching visitor<br>3. Verify the default content is shown |  | Negative |
| TS-08 | TC-08.5 | Verify that a geography-based personalization campaign targets visitors correctly | 1. Create a campaign with a geography-based segment<br>2. Launch it<br>3. Visit from a matching geography<br>4. Verify the personalized content |  | Positive |
| TS-08 | TC-08.6 | Verify that a campaign with no segment cannot be published | 1. Create a campaign without attaching a segment<br>2. Attempt to publish |  | Negative |
| TS-08 | TC-08.7 | Verify that a personalization campaign can be paused and resumed | 1. Open a running campaign<br>2. Click Pause and verify the status<br>3. Click Resume and verify the status |  | Positive |
| TS-08 | TC-08.8 | Verify that engagement metrics are tracked for a personalized campaign | 1. Launch a campaign and generate visitor interactions<br>2. Open the campaign report<br>3. Verify the engagement metrics |  | Positive |
| TS-08 | TC-08.9 | Verify the behaviour when a visitor matches two conflicting personalization campaigns | 1. Create two campaigns with overlapping segments<br>2. Launch both<br>3. Visit the page as a visitor matching both |  | Edge |

---

## TS-09 – Integration Connectors – FR8

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-09 | TC-09.1 | Verify that the Shopify integration connects and syncs data with valid credentials | 1. Navigate to Integrations<br>2. Select Shopify<br>3. Enter valid credentials and authorize<br>4. Verify data sync |  | Positive |
| TS-09 | TC-09.2 | Verify that the Salesforce integration connects and syncs data with valid credentials | 1. Navigate to Integrations<br>2. Select Salesforce<br>3. Enter valid credentials and authorize<br>4. Verify data sync |  | Positive |
| TS-09 | TC-09.3 | Verify that the Segment integration connects and forwards events correctly | 1. Navigate to Integrations<br>2. Select Segment<br>3. Enter the valid write key<br>4. Verify event delivery |  | Positive |
| TS-09 | TC-09.4 | Verify that the Snowflake integration connects and syncs data with valid credentials | 1. Navigate to Integrations<br>2. Select Snowflake<br>3. Enter valid connection details<br>4. Verify data sync |  | Positive |
| TS-09 | TC-09.5 | Verify that the WordPress plugin installs, activates and syncs correctly | 1. Install the VWO WordPress plugin<br>2. Activate it and enter the account ID<br>3. Verify the connection and data sync |  | Positive |
| TS-09 | TC-09.6 | Verify that the Drupal module installs, activates and syncs correctly | 1. Install the VWO Drupal module<br>2. Activate it and enter the account ID<br>3. Verify the connection and data sync |  | Positive |
| TS-09 | TC-09.7 | Verify that the Google Analytics integration connects and reports experiment data | 1. Navigate to Integrations<br>2. Select Google Analytics<br>3. Authorize the account<br>4. Verify experiment data in GA |  | Positive |
| TS-09 | TC-09.8 | Verify that the Mixpanel integration connects and reports experiment data | 1. Navigate to Integrations<br>2. Select Mixpanel<br>3. Enter valid credentials<br>4. Verify experiment data in Mixpanel |  | Positive |
| TS-09 | TC-09.9 | Verify that an integration with invalid credentials shows a clear error and is not saved | 1. Navigate to Integrations<br>2. Select any connector<br>3. Enter invalid credentials<br>4. Attempt to save |  | Negative |
| TS-09 | TC-09.10 | Verify that synced data in an external platform matches the data in VWO | 1. Generate a known set of visitors and conversions in VWO<br>2. Wait for the sync cycle<br>3. Compare the values in the external platform with VWO |  | Positive |
| TS-09 | TC-09.11 | Verify that an integration can be disconnected without affecting existing data | 1. Open a connected integration<br>2. Click Disconnect<br>3. Verify the connection status and existing data |  | Positive |
| TS-09 | TC-09.12 | Verify that connector API rate limits are handled gracefully | 1. Configure an integration and exceed the API call limit<br>2. Observe the error handling and retry behaviour |  | Edge |

---

## TS-10 – Collaboration & Workflow Management – FR9

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-10 | TC-10.1 | Verify that a new Kanban card can be created in the backlog | 1. Navigate to Program and Workflow Management<br>2. Click Create Card<br>3. Enter a valid title and details<br>4. Save |  | Positive |
| TS-10 | TC-10.2 | Verify that a card cannot be created with a blank title | 1. Navigate to the Kanban board<br>2. Click Create Card<br>3. Leave the title blank<br>4. Save |  | Negative |
| TS-10 | TC-10.3 | Verify that a card can be moved between workflow states | 1. Open the Kanban board<br>2. Drag a card from one state column to another<br>3. Verify the new state is persisted after reload |  | Positive |
| TS-10 | TC-10.4 | Verify that a card can be assigned to a team member | 1. Open a card<br>2. Select an assignee<br>3. Save and verify the assignment |  | Positive |
| TS-10 | TC-10.5 | Verify that comments and attachments can be added to a card | 1. Open a card<br>2. Add a comment<br>3. Attach a file<br>4. Save and verify |  | Positive |
| TS-10 | TC-10.6 | Verify that two users moving the same card concurrently do not corrupt the card state | 1. Open the same board in two sessions<br>2. Move the same card to different states in each session<br>3. Verify the final card state |  | Edge |
| TS-10 | TC-10.7 | Verify that the backlog can be searched and filtered | 1. Open the Kanban board<br>2. Apply a search term and status filter<br>3. Verify the filtered cards |  | Positive |
| TS-10 | TC-10.8 | Verify that a Viewer role cannot create or edit cards | 1. Log in with a Viewer role account<br>2. Attempt to create and edit a card<br>3. Observe the system response |  | Negative |

---

## TS-11 – Non-Functional Requirements (Performance, Security, Scalability, Data Privacy, Reliability, Compatibility)

| Scenario TID | Test Case ID | Test Case Description | Test Steps | Status | Comments |
|---|---|---|---|---|---|
| TS-11 | TC-11.1 | Verify that editing workflows respond within the 2-second performance SLA | 1. Open the Visual Editor and experiment settings<br>2. Measure the response time for edit, apply and save actions<br>3. Compare against the 2-second SLA |  | Boundary |
| TS-11 | TC-11.2 | Verify that the dashboard load time remains within the SLA under normal load | 1. Load the dashboard with a standard dataset<br>2. Measure the page load time |  | Boundary |
| TS-11 | TC-11.3 | Verify that the Visual Editor remains usable on a throttled 3G network | 1. Switch the network profile to throttled 3G<br>2. Open and use the Visual Editor<br>3. Observe responsiveness and failures |  | Edge |
| TS-11 | TC-11.4 | Verify that 2FA is enforced for all user accounts | 1. Log in with 2FA disabled or unconfigured<br>2. Observe the enforcement prompt |  | Positive |
| TS-11 | TC-11.5 | Verify Role-Based Access Control for Admin, Editor and Viewer roles | 1. Log in with each role<br>2. Attempt permitted and restricted actions<br>3. Verify access matches the role matrix |  | Positive |
| TS-11 | TC-11.6 | Verify that a Viewer cannot modify or delete experiments | 1. Log in with a Viewer role account<br>2. Attempt to edit and delete an experiment |  | Negative |
| TS-11 | TC-11.7 | Verify that the activity log records all user actions | 1. Perform create, edit and delete actions<br>2. Open the Activity Log<br>3. Verify each action is recorded with user, timestamp and action detail |  | Positive |
| TS-11 | TC-11.8 | Verify that XSS payloads in form fields are sanitized and not executed | 1. Enter script-tag XSS payloads in experiment and segment form fields<br>2. Save and reload the page<br>3. Verify the script is not executed |  | Negative |
| TS-11 | TC-11.9 | Verify that SQL injection payloads in API parameters are blocked | 1. Send API requests with SQL injection payloads in path and query parameters<br>2. Verify no database error is exposed and the request is rejected |  | Negative |
| TS-11 | TC-11.10 | Verify that the session expires after the configured inactivity period on all modules | 1. Log in and remain inactive beyond the timeout<br>2. Attempt an action in each module |  | Edge |
| TS-11 | TC-11.11 | Verify that the platform supports high concurrent visitor volume without performance loss | 1. Simulate peak concurrent visitor traffic on a tested page<br>2. Monitor response times and error rates<br>3. Verify the experiment serves variations correctly |  | Boundary |
| TS-11 | TC-11.12 | Verify GDPR cookie consent enforcement for EU visitors | 1. Visit a tested page from an EU IP address<br>2. Verify the consent banner and that tracking occurs only after consent |  | Positive |
| TS-11 | TC-11.13 | Verify that CCPA opt-out requests are respected | 1. Simulate a visitor with the CCPA opt-out signal<br>2. Verify no tracking or experimentation occurs |  | Positive |
| TS-11 | TC-11.14 | Verify that PII is anonymized in all captured behavioral data | 1. Generate sessions containing form inputs<br>2. Inspect heatmaps and recordings<br>3. Verify all PII is masked |  | Positive |
| TS-11 | TC-11.15 | Verify that platform uptime meets the 99.9 percent SLA | 1. Monitor platform availability over the defined measurement window<br>2. Record downtime events<br>3. Compare against the 99.9 percent SLA |  | Boundary |
| TS-11 | TC-11.16 | Verify that the application degrades gracefully when a dependent service fails | 1. Simulate a failure of a dependent service (for example the stats engine or a connector)<br>2. Perform affected user actions<br>3. Verify a clear message and no data loss |  | Edge |
| TS-11 | TC-11.17 | Verify consistent rendering across Chrome, Firefox, Edge and Safari | 1. Open the Testing, Insights and Personalization modules in each browser<br>2. Compare layout, functionality and console errors |  | Positive |
| TS-11 | TC-11.18 | Verify responsive layout across desktop, tablet and mobile devices | 1. Open the dashboard and key modules on desktop, tablet and mobile<br>2. Verify layout, navigation and readability |  | Positive |
