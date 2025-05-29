package lab4;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.*;

import java.time.Duration;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class IntegrationTests {

    private WebDriver driver;
    private WebDriverWait wait;
    private static final String BASE_URL = "http://127.0.0.1:8080/#";

    @BeforeAll
    public void setup() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless", "--disable-gpu", "--no-sandbox", "--remote-allow-origins=*");
        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @AfterAll
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    private WebElement findButtonByText(String buttonText) {
        return (WebElement) ((JavascriptExecutor) driver).executeScript(
                "return Array.from(document.querySelectorAll('button'))" +
                        ".find(el => el.textContent.trim().toLowerCase() === arguments[0].toLowerCase());",
                buttonText
        );
    }

    private boolean tableContainsEntry(String x, String y, String r, String result) {
        try {
            WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("table")));
            List<WebElement> rows = table.findElements(By.tagName("tr"));

            for (WebElement row : rows) {
                List<WebElement> cells = row.findElements(By.tagName("td"));
                if (cells.size() >= 4) {
                    String cellX = cells.get(0).getText().trim();
                    String cellY = cells.get(1).getText().trim();
                    String cellR = cells.get(2).getText().trim();
                    String cellResult = cells.get(3).getText().trim();

                    boolean xMatches = cellX.equals(x);
                    boolean yMatches = areNumbersEqual(cellY, y);
                    boolean rMatches = areNumbersEqual(cellR, r);
                    boolean resultMatches = cellResult.equalsIgnoreCase(result);

                    if (xMatches && yMatches && rMatches && resultMatches) {
                        return true;
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Exception in tableContainsEntry: " + e.getMessage());
        }
        return false;
    }

    private boolean areNumbersEqual(String a, String b) {
        try {
            double aVal = Double.parseDouble(a);
            double bVal = Double.parseDouble(b);
            return Math.abs(aVal - bVal) < 1e-6;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private void inputXYRAndSubmit(String xValue, String yValue, String rValue) {
        wait.withTimeout(Duration.ofSeconds(2));

        WebElement xListbox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("p-listbox[formcontrolname='x']")));
        List<WebElement> xOptions = xListbox.findElements(By.cssSelector("li.p-listbox-item"));
        for (WebElement option : xOptions) {
            if (option.getText().trim().equals(xValue)) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", option);
                break;
            }
        }

        WebElement yInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[formcontrolname='y']")));
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('input'));",
                yInput, yValue);

        WebElement rListbox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("p-listbox[formcontrolname='r']")));
        List<WebElement> rOptions = rListbox.findElements(By.cssSelector("li.p-listbox-item"));
        for (WebElement option : rOptions) {
            if (option.getText().trim().equals(rValue)) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", option);
                break;
            }
        }

        WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#submit button:not([disabled])")));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitBtn);

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("canvas")));
    }

    private boolean isLoggedIn() {
        driver.get(BASE_URL);
        try {
            wait.withTimeout(Duration.ofSeconds(3));
            WebElement logoutBtn = findButtonByText("Sign out");
            wait.withTimeout(Duration.ofSeconds(30));
            return logoutBtn != null && logoutBtn.isDisplayed();
        } catch (Exception e) {
            wait.withTimeout(Duration.ofSeconds(30));
            return false;
        }
    }

    private void logout() {
        if (isLoggedIn()) {
            driver.get(BASE_URL);
            WebElement logoutBtn = wait.until(driver -> findButtonByText("Sign out"));
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", logoutBtn);
            wait.until(ExpectedConditions.urlContains("/auth"));
        } else {
            driver.get(BASE_URL + "/auth");
            wait.until(ExpectedConditions.urlContains("/auth"));
        }
    }

    private void login() {
        if (isLoggedIn()) {
            return;
        }
        driver.get(BASE_URL + "/auth");

        WebElement usernameInput = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("input[formControlName='username']")));
        WebElement passwordInput = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("input[formControlName='password']")));

        WebElement loginBtn = wait.until(driver -> findButtonByText("Log in"));

        usernameInput.clear();
        usernameInput.sendKeys("admin");
        passwordInput.clear();
        passwordInput.sendKeys("admin");

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", loginBtn);

        wait.until(driver -> driver.getCurrentUrl().endsWith("/#/"));
    }

    private void waitUntilMainPageReady() {
        wait.until(driver -> findButtonByText("Sign out"));
    }

    @Test
    @Order(1)
    public void testLoginPageLoads() {
        logout();
        driver.get(BASE_URL + "/auth");
        wait.until(ExpectedConditions.urlContains("/auth"));
        assertTrue(driver.getCurrentUrl().contains("/auth"), "Login page URL should contain '/auth'");
    }

    @Test
    @Order(2)
    public void testProtectedPageWithoutLogin() {
        logout();
        ((JavascriptExecutor) driver).executeScript("localStorage.removeItem('token'); localStorage.removeItem('username');");
        driver.navigate().refresh();
        wait.until(ExpectedConditions.urlContains("/auth"));
        assertTrue(driver.getCurrentUrl().contains("/auth"), "Should redirect to login if not authenticated");
    }

    @Test
    @Order(3)
    public void testLoginSuccess() {
        login();
        wait.until(ExpectedConditions.urlContains("/#/"));
        assertTrue(driver.getCurrentUrl().endsWith("/#/"), "Should redirect to main page after login");
    }

    @Test
    @Order(4)
    public void testChartRendered() {
        WebElement canvas = driver.findElement(By.tagName("canvas"));
        assertTrue(canvas.isDisplayed(), "Chart canvas should be visible on main page");
    }

    @Test
    @Order(5)
    public void testClickOnCanvas() {
        wait.withTimeout(Duration.ofSeconds(5));
        WebElement canvas = wait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName("canvas")));
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].dispatchEvent(new MouseEvent('click', {" +
                        "bubbles: true," +
                        "cancelable: true," +
                        "view: window," +
                        "clientX: arguments[0].width / 2," +
                        "clientY: arguments[0].height / 2" +
                        "}));", canvas);
        assertTrue(canvas.isDisplayed(), "Canvas should remain visible after click");
    }

    @Test
    @Order(6)
    public void testClearHitsButton() {
        WebElement clearHitsBtn = wait.until(driver -> findButtonByText("Clear hits"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", clearHitsBtn);
        wait.withTimeout(Duration.ofSeconds(2));
        WebElement canvas = driver.findElement(By.tagName("canvas"));
        assertTrue(canvas.isDisplayed(), "Canvas should still be visible after clearing hits");
    }

    @Test
    @Order(7)
    public void testInputXYRAndSubmit() {
        inputXYRAndSubmit("1", "0.5", "2");
        assertTrue(driver.findElement(By.tagName("canvas")).isDisplayed(), "Canvas should be visible after valid submission");
    }

    @Test
    @Order(8)
    public void testInputXYRAndSubmit_Miss() {
        inputXYRAndSubmit("1", "2", "2");
        wait.withTimeout(Duration.ofSeconds(2));
        assertTrue(tableContainsEntry("1", "2", "2", "Miss"), "Expected table to contain result: Miss");
    }

    @Test
    @Order(9)
    public void testInputXYRAndSubmit_Hit() {
        inputXYRAndSubmit("-1", "0.5", "2");
        wait.withTimeout(Duration.ofSeconds(2));
        assertTrue(tableContainsEntry("-1", "0.5", "2", "Hit"), "Expected table to contain result: Hit");
    }

    @Test
    @Order(10)
    public void testLanguageSwitch() throws InterruptedException {
        WebElement dropdownLabel = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("span.p-dropdown-label")));
        dropdownLabel.click();

        List<WebElement> langOptions = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(
                By.cssSelector("li.p-dropdown-item")));
        for (WebElement option : langOptions) {
            if (option.getText().trim().equals("Русский")) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", option);
                break;
            }
        }

        Thread.sleep(1000);

        String bodyText = driver.findElement(By.tagName("body")).getText();
        String withoutAdmin = bodyText.replaceAll("(?i)admin", "");

        assertFalse(containsLatinLetters(withoutAdmin), "Page should not contain Latin characters except 'admin'");

        dropdownLabel = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("span.p-dropdown-label")));
        dropdownLabel.click();
        langOptions = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(
                By.cssSelector("li.p-dropdown-item")));
        for (WebElement option : langOptions) {
            if (option.getText().trim().equals("English")) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", option);
                break;
            }
        }

        Thread.sleep(1000);

        bodyText = driver.findElement(By.tagName("body")).getText();
        assertTrue(bodyText.contains("Log out") || bodyText.contains("Sign out"), "Interface should return to English");
    }

    private boolean containsLatinLetters(String text) {
        return text.matches(".*[a-zA-Z].*");
    }

    @Test
    @Order(11)
    public void testResponsiveModeDetection() throws InterruptedException {
        driver.get(BASE_URL);
        login();
        waitUntilMainPageReady();

        driver.manage().window().setSize(new Dimension(500, 800));
        Thread.sleep(500);
        assertTrue(getModeText().toLowerCase().contains("mobile"), "Expected responsive mode: mobile");

        driver.manage().window().setSize(new Dimension(841, 800));
        Thread.sleep(500);
        assertTrue(getModeText().toLowerCase().contains("tablet"), "Expected responsive mode: tablet");

        driver.manage().window().setSize(new Dimension(1052, 800));
        Thread.sleep(500);
        assertTrue(getModeText().toLowerCase().contains("desktop"), "Expected responsive mode: desktop");

        driver.manage().window().setSize(new Dimension(1280, 900));
    }

    private String getModeText() {
        WebElement modeElement = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("div.p-toolbar-group-left")));
        return modeElement.getText().trim();
    }

    @Test
    @Order(12)
    public void testPaginationAfter13Submissions() throws InterruptedException {
        WebElement clearButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(), 'Clear')]")));
        clearButton.click();
        Thread.sleep(500);

        for (int i = 0; i < 13; i++) {
            inputXYRAndSubmit("0", "0", "1");
            Thread.sleep(200);
        }

        List<WebElement> paginatorPages = wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(
                By.cssSelector(".p-paginator-pages .p-paginator-page"), 1));

        assertEquals(2, paginatorPages.size(), "Paginator should show 2 pages after 13 submissions");
    }

    @Test
    @Order(13)
    public void testUsernameDisplayedAfterLogin() {
        logout();
        login();
        waitUntilMainPageReady();

        String pageText = driver.findElement(By.tagName("body")).getText();
        assertTrue(pageText.toLowerCase().contains("admin"), "Username 'admin' should be displayed on the page");
    }

    @Test
    @Order(14)
    public void testNegativeRadiusValidationMessage() throws InterruptedException {
        login();
        waitUntilMainPageReady();

        WebElement rListbox = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("p-listbox[formcontrolname='r']")));
        List<WebElement> rOptions = rListbox.findElements(By.cssSelector("li.p-listbox-item"));

        boolean found = false;
        for (WebElement option : rOptions) {
            if (option.getText().trim().equals("-5")) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", option);
                found = true;
                break;
            }
        }

        assertTrue(found, "Radius option '-5' should exist in R dropdown");

        Thread.sleep(500);

        List<WebElement> errors = driver.findElements(By.xpath(
                "//small[contains(@class, 'p-invalid') and contains(text(), 'Radius must be positive')]"));

        assertFalse(errors.isEmpty(), "Validation error message 'Radius must be positive' should be visible");

        driver.navigate().refresh();
        waitUntilMainPageReady();
    }

    @Test
    @Order(15)
    public void testLogoutButton() {
        WebElement logoutBtn = wait.until(driver -> findButtonByText("Sign out"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", logoutBtn);
        wait.until(ExpectedConditions.urlContains("/auth"));
        assertTrue(driver.getCurrentUrl().contains("/auth"), "Should redirect to login page after logout");
    }
}
