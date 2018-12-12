import { AppPage } from './app.po';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });

it ('xxx', () => {
const titles = [
'what is Lorem ipsus?',
'what is Lorem ipsus?'
];

const titlesList = page.getCardTitle();

titles.forEach((title, index) => {
  expect(titlesList.get(index).getText()).toEqual(title);
});


}) ;

});
