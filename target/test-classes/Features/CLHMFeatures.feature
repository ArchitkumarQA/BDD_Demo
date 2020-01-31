Feature: CLHM smoke on Mindtap-Qa/Stage environment

Scenario: Verifiy that User is able to login 
Given user is on Instructor-login page
When user enter valid instructor credentials for login
Then user logs-in and moves to the Instructor resource center page

Scenario: Verify user is able to add textbook 
Given user is on Instructor resource center page
When user is able to select ISBN from different products and user clicks on create course button
Then user moves to courseDetailsConfirmation page

Scenario: Verify if user wants to create a new course or copy an existing course
Given user is on courseDetailsConfirmation page
When user is able to confirm details
Then user moves to Instructor SSO - Create / Edit Course page

Scenario: Verify if user is able to add course details
Given user is on Instructor SSO - Create / Edit Course page
When user is able to add course details
Then course gets created

Scenario: Verify the course Details that is created
Given user is on courseinfo page
Then user is able to copy the details of the course


Scenario: Verify if user is able to move to activity assessment page through LPN
Given user is on LPN page
And user navigates on the Add/Create 
Then user moves to the activity assessment page

Scenario: Verify if user is able to add and publish activity
Given user is on activity assessment page
When user is able to add activity from Simple assessment
Then activity gets added into the users course successfully

Scenario: Verify if user is able to change the cookie details
Given user is on cookieDetails page
Then user updates the cookieDetails


Scenario: Verify if student is able to login 
Given user is on student login page
When user enters valid login credentials
Then user Test Test
        