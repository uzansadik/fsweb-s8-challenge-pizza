describe('Anasayfa yükleniyor ve buton aktif', () => {
  it('şekilde çalışıyor', () => {
    cy.visit('http://192.168.1.72:5173/'); // change URL to match your dev URL
    cy.get('[data-test-cy="home-button"]').should('have.text', 'ACIKTIM');
  });
});

describe('Acıktım butonuna tıklanınca', () => {
  it('siparis sayfasi render oluyor', () => {
    cy.visit('http://192.168.1.72:5173/'); // change URL to match your dev URL
    cy.get('[data-test-cy="home-button"]').click();
    cy.get('h1').contains('Position Absolute');
  });
});

describe('İsim inputu 3 harf kabul girince.', () => {
  it('hata mesajı ekranda', () => {
    cy.visit('http://192.168.1.72:5173/'); // change URL to match your dev URL
    cy.get('[data-test-cy="home-button"]').click();
    cy.get('[data-test-cy="input-nameSurname"]').type('sad');
    cy.get('[data-test-cy="error-nameSurname"]').contains('Geçerli');
  });
});

describe('Ek malzemeler seçildikçe.', () => {
  it('seçim toplamı doğru şekilde güncelleniyor', () => {
    cy.visit('http://192.168.1.72:5173/'); // change URL to match your dev URL
    cy.get('[data-test-cy="home-button"]').click();
    cy.get('[name="sogan"]')
      .click()
      .get("[data-test-cy='price']")
      .should('have.text', '5 ₺');
    cy.get('[name="biber"]')
      .click()
      .get("[data-test-cy='price']")
      .should('have.text', '10 ₺');
    cy.get('[name="ananas"]')
      .click()
      .get("[data-test-cy='price']")
      .should('have.text', '15 ₺');
    cy.get('[name="kabak"]')
      .click()
      .get("[data-test-cy='price']")
      .should('have.text', '20 ₺');
  });
});

describe('Form doğru şekilde post ediliyor.', () => {
  it('', () => {
    cy.visit('http://192.168.1.72:5173/'); // change URL to match your dev URL
    cy.get('[data-test-cy="home-button"]').click();
    cy.get('[name="sogan"]').click();
    cy.get('[name="domates"]').click();
    cy.get('[name="ananas"]').click();
    cy.get('[name="kabak"]').click(``);
    cy.get('[type="radio"]').first().click();
    cy.get('select').select('ince');
    cy.get('[data-test-cy="input-nameSurname"]').type('sadık');
    cy.get('[data-test-cy="siparis"]')
      .click()
      .get('p')
      .first()
      .should('have.text', 'TEBRİKLER!');
  });
});
