package Runner;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeClass;

import CLHM_PageObjects.Base;
import CLHM_PageObjects.DataValues;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
		features = "src/test/java/Features" 
,glue = "StepDefination",
plugin = {"html:target/cucumber/", "json:target/cucumber/report.json"} //for report
)



public class TestRunner extends AbstractTestNGCucumberTests {
	
	
	@BeforeClass()
	public void startup() {
		Base obj2 = new Base();
		obj2.setUp();
		
	}

}
