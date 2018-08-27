import { LoginTest } from './login.po';


describe('Login Component', () => {
  let page: LoginTest;

  beforeEach(() => {
    page = new LoginTest();
  });
  it('should be created', () => {
    expect(page).toBeDefined();
  });
  it('should not Login with no input filed', () => {
    page.navigateTo();
    page.getLoginButton().click();
    expect(page.getLoginButton().isPresent()).toBeTruthy();
  });
  it('should not Login with only username', () => {
    page.navigateTo();
    page.getUserNameInput().click();
    page.rightTest();
    page.getLoginButton().click();
    expect(page.getRecoverButton().isPresent()).toBeFalsy();
    expect(page.getLoginButton().isPresent()).toBeTruthy();
  });
  it('should not Login with only password', () => {
    page.navigateTo();
    page.getPasswordInput();
    page.rightTest();
    page.getLoginButton().click();
    expect(page.getLoginButton().isPresent()).toBeTruthy();
    expect(page.getRecoverButton().isPresent()).toBeFalsy();
  });
  it('should show forget form', () => {
    page.navigateTo();
    page.getForgetLink().click();
    expect(page.getLoginButton().isPresent()).toBeFalsy();
    expect(page.getRecoverButton().isPresent()).toBeTruthy();
  });
  it('should return to login form', () => {
    page.navigateTo();
    page.getForgetLink().click();
    expect(page.getLoginButton().isPresent()).toBeFalsy();
    expect(page.getRecoverButton().isPresent()).toBeTruthy();
    page.getRetrunLink().click();
    expect(page.getLoginButton().isPresent()).toBeTruthy();
    expect(page.getRecoverButton().isPresent()).toBeFalsy();
  });
  it('should filed local storage', () => {
    page.navigateTo();
    page.getUserNameInput().click();
    page.getUserNameInput().sendKeys('joe');
    page.getPasswordInput().click();
    page.getPasswordInput().sendKeys('GI');
    expect(page.getPasswordInput().getAttribute('value')).toBe('GI');
    expect(page.getUserNameInput().getAttribute('value')).toBe('joe');
    page.getRememberInput().click();
    expect(page.getCheckBoxValue().getAttribute('aria-checked')).toBeTruthy();
    page.getLoginButton().click();
    page.setLocal();
  });
  it('should have inputs already filed with local storage values', () => {
    page.navigateTo();
    expect(page.getPasswordInput().getAttribute('value')).toBe('GI');
    expect(page.getUserNameInput().getAttribute('value')).toBe('joe');
    expect(page.getCheckBoxValue().getAttribute('aria-checked')).toBeTruthy();
    page.getRememberInput().click();
  });
  it('should be a bad email adress execption raised', () => {
    page.navigateTo();
    page.getForgetLink().click();
    page.getEmailInput().click();
    page.wrongEmail();
    page.getRecoverButton().click();
    expect(page.getError().isPresent()).toBeTruthy();
    expect(page.getLoginButton().isPresent()).toBeFalsy();
    expect(page.getRecoverButton().isPresent()).toBeTruthy();
  });
  it('should accept email and retrun to login', () => {
    page.navigateTo();
    page.getForgetLink().click();
    page.getEmailInput().click();
    page.rightEmail();
    page.getRecoverButton().click();
    expect(page.getLoginButton().isPresent()).toBeTruthy();
    expect(page.getRecoverButton().isPresent()).toBeFalsy();
  });
});
