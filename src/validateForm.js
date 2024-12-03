export function validateForm(formData) {
  const errors = { count: 0 };

  if (formData.size === '') {
    errors.size = 'Pizza boyutu seçimini yapın';
    errors.count += 1;
  }
  if (formData.thickness === '') {
    errors.thickness = 'Hamur kalınlığı seçilmeli...';
    errors.count += 1;
  }

  if (formData.extras.length < 4 || formData.extras.length > 10) {
    errors.extras = 'En az 4 ve en fazla 10 adet seçebilirsiniz';
    errors.count += 1;
  }

  if (formData.nameSurname.length <= 3) {
    errors.nameSurname = 'Geçerli bir isim giriniz...';
    errors.count += 1;
  }
  if (formData.quantity <= 0) {
    errors.quantity = 'Adet minimum 1 olmalıdır...';
    errors.count += 1;
  }

  return errors;
}
