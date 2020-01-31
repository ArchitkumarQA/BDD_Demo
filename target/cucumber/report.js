$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/CLHMFeatures.feature");
formatter.feature({
  "name": "CLHM smoke on Mindtap-Qa/Stage environment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifiy that User is able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Instructor-login page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_Instructor_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid instructor credentials for login",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeStepDefination.user_enter_valid_instructor_credentials_for_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs-in and moves to the Instructor resource center page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.user_logs_in_and_moves_to_the_Instructor_resource_center_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to add textbook",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Instructor resource center page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_Instructor_resource_center_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to select ISBN from different products and user clicks on create course button",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_able_to_select_ISBN_from_different_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to courseDetailsConfirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.user_moves_to_courseDetailsConfirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if user wants to create a new course or copy an existing course",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on courseDetailsConfirmation page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_courseDetailsConfirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to confirm details",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_able_to_confirm_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Instructor SSO - Create / Edit Course page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.user_moves_to_Instructor_SSO_Create_Edit_Course_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if user is able to add course details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Instructor SSO - Create / Edit Course page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_Instructor_SSO_Create_Edit_Course_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to add course details",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_able_to_add_course_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "course gets created",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.course_gets_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the course Details that is created",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on courseinfo page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_courseinfo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to copy the details of the course",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.user_copies_the_details_of_the_course()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if user is able to move to activity assessment page through LPN",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on LPN page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_LPN_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates on the Add/Create",
  "keyword": "And "
});
formatter.match({
  "location": "SmokeStepDefination.user_navigates_on_the_Add_Create()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to the activity assessment page",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.user_moves_to_the_activity_assessment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if user is able to add and publish activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on activity assessment page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_on_activity_assessment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to add activity from Simple assessment",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeStepDefination.user_is_able_to_add_activity_from_Simple_assessment()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ASDP1757PO02529\u0027, ip: \u002710.161.235.195\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir7...}, goog:chromeOptions: {debuggerAddress: localhost:53753}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e1b2f22fe61dbecc88ad4ce62d5d663f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat CLHM_PageObjects.AssessmentPage.select_Activity_and_Publish(AssessmentPage.java:19)\r\n\tat StepDefination.SmokeStepDefination.user_is_able_to_add_activity_from_Simple_assessment(SmokeStepDefination.java:142)\r\n\tat ✽.user is able to add activity from Simple assessment(file:src/test/java/Features/CLHMFeatures.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "activity gets added into the users course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeStepDefination.activity_gets_added_into_the_users_course_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify if user is able to change the cookie details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on cookieDetails page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user updates the cookieDetails",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify if student is able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on student login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters valid login credentials",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});