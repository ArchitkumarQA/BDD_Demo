package StepDefination;

import org.testng.Assert;

import CLHM_PageObjects.AddCourseDetails;
import CLHM_PageObjects.AssessmentPage;
import CLHM_PageObjects.DataValues;
import CLHM_PageObjects.InstResourceCenter;
import CLHM_PageObjects.LPNpage;
import CLHM_PageObjects.LoginPage;
import CLHM_PageObjects.courseDetailsConfirmation;
import CLHM_PageObjects.courseInfo;
import CLHM_PageObjects.studentActivityPage;
import CLHM_PageObjects.studentLPNPage;
import CLHM_PageObjects.studentPage;
import CLHM_PageObjects.studentQA;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SmokeStepDefination {

	LoginPage obj1 = new LoginPage();
	InstResourceCenter obj3 = new InstResourceCenter();
	courseDetailsConfirmation obj4 = new courseDetailsConfirmation();
	AddCourseDetails obj5 = new AddCourseDetails();
	courseInfo obj6 = new courseInfo();
	LPNpage obj7 = new LPNpage();
	studentPage obj9 = new studentPage();
	AssessmentPage obj11 = new AssessmentPage();
	studentQA obj12 = new studentQA();
	studentLPNPage obj13 = new studentLPNPage();
	studentActivityPage obj14 = new studentActivityPage();

	@Given("^user is on Instructor-login page$")
	public void user_is_on_Instructor_login_page() {
		
		Assert.assertEquals(obj1.verify_loginPage(), "Cengage Sign In");

	}

	@When("^user enter valid instructor credentials for login$")
	public void user_enter_valid_instructor_credentials_for_login() throws InterruptedException {
		obj1.set_inst_details_for_login();
	}

	@Then("^user logs-in and moves to the Instructor resource center page$")
	public void user_logs_in_and_moves_to_the_Instructor_resource_center_page() {
		Assert.assertEquals(obj3.verifyIRC(), "Instructor Resource Center");
	}

	@Given("^user is on Instructor resource center page$")
	public void user_is_on_Instructor_resource_center_page() {
		Assert.assertEquals(obj3.verifyIRC(), "Instructor Resource Center");
	}

	@When("^user is able to select ISBN from different products and user clicks on create course button$")
	public void user_is_able_to_select_ISBN_from_different_products() {
		obj3.select_ISBN();
	}

	@Then("^user moves to courseDetailsConfirmation page$")
	public void user_moves_to_courseDetailsConfirmation_page() {
		Assert.assertEquals(obj4.confirm_course_Details(), "Instructor SSO - Create Course Option");
	}

	@Given("^user is on courseDetailsConfirmation page$")
	public void user_is_on_courseDetailsConfirmation_page() {
		Assert.assertEquals(obj4.confirm_course_Details(), "Instructor SSO - Create Course Option");
	}

	@When("^user is able to confirm details$")
	public void user_is_able_to_confirm_details() {
		obj4.confirmCourseDetails();

	}

	@Then("^user moves to Instructor SSO - Create / Edit Course page$")
	public void user_moves_to_Instructor_SSO_Create_Edit_Course_page() {
		Assert.assertEquals(obj5.validate_pagetitle(), "Instructor SSO - Create / Edit Course");

	}

	@Given("^user is on Instructor SSO - Create / Edit Course page$")
	public void user_is_on_Instructor_SSO_Create_Edit_Course_page() {
		Assert.assertEquals(obj5.validate_pagetitle(), "Instructor SSO - Create / Edit Course");
	}

	@When("^user is able to add course details$")
	public void user_is_able_to_add_course_details() {
		obj5.set_Coursedetails();

	}

	@Then("^course gets created$")
	public void course_gets_created() {
		Assert.assertEquals(obj5.validate_courseCreated(), "Course Created");

	}

	@Given("^user is on courseinfo page$")
	public void user_is_on_courseinfo_page() {
		Assert.assertEquals(obj6.getcoursetitle(), "Instructor SSO - Create Course Confirmation");
	}

	@Then("^user is able to copy the details of the course$")
	public void user_copies_the_details_of_the_course() throws InterruptedException {
		obj6.copy_course_Linkurl();
		obj6.copy_course_created_url();
		obj6.changewindowhandle();

	}

	@Given("^user is on LPN page$")
	public void user_is_on_LPN_page() {
		Assert.assertEquals(obj7.validate_LPNPage(), "Add / Create");

	}

	@When("^user navigates on the Add/Create$")
	public void user_navigates_on_the_Add_Create() throws InterruptedException {
		obj7.close_Popup1();
		obj7.close_Popup2();
		obj7.close_Popup3();
		obj7.add_activity();

	}

	@Then("^user moves to the activity assessment page$")
	public void user_moves_to_the_activity_assessment_page() {
		Assert.assertEquals(obj11.validateAssessmentPage(), "Assessment");

	}

	@Given("^user is on activity assessment page$")
	public void user_is_on_activity_assessment_page() {
		Assert.assertEquals(obj11.validateAssessmentPage(), "Assessment");
	}

	@When("^user is able to add activity from Simple assessment$")
	public void user_is_able_to_add_activity_from_Simple_assessment() throws InterruptedException {
		obj11.select_Activity_and_Publish();

	}

	@Then("^activity gets added into the users course successfully$")
	public void activity_gets_added_into_the_users_course_successfully() {
		Assert.assertEquals(obj7.validate_if_activity_added(), "CLHW Example True/False");
	}

}
