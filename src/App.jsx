import Home from './Pages/Home';
import Header from './components/Header';
import OrderForm from './components/OrderForm/OrderForm';
import { useEffect, useState } from 'react';
import CustomToastContainer from './components/Toast/CustomToastContainer';
import { toast } from 'react-toastify';
import OrderCompleted from './Pages/OrderCompleted';
import { formToJSON } from 'axios';
import axios from 'axios';
import { validateForm } from './validateForm.js';

const initialData = {
  title: 'Position Absolute Acı Pizza',
  price: 90,
  desc: 'Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.',
  sizes: [
    { name: 'kucuk', text: 'Küçük', plus: 0 },
    { name: 'orta', text: 'Orta', plus: 10 },
    { name: 'buyuk', text: 'Büyük', plus: 15 },
    { name: 'xbuyuk', text: 'Extra Büyük', plus: 20 },
  ],
  thickness: [
    { value: 'ince', text: 'İnce Hamur' },
    { value: 'orta', text: 'Klasik Hamur' },
    { value: 'kalin', text: 'Kalın Hamur' },
  ],
  extras: [
    { value: 'pepperoni', text: 'Pepperoni' },
    { value: 'sosis', text: 'Sosis' },
    { value: 'kanadaJambonu', text: 'Kanada Jambonu' },
    { value: 'tavukIzgara', text: 'Tavuk Izgara' },
    { value: 'sogan', text: 'Soğan' },
    { value: 'domates', text: 'Domates' },
    { value: 'misir', text: 'Mısır' },
    { value: 'jalepeno', text: 'Jalepeno' },
    { value: 'sarimsak', text: 'Sarımsak' },
    { value: 'biber', text: 'Biber' },
    { value: 'sucuk', text: 'Sucuk' },
    { value: 'ananas', text: 'Ananas' },
    { value: 'kabak', text: 'Kabak' },
  ],
};

const initialFormData = {
  nameSurname: '',
  name: initialData.title,
  price: initialData.price,
  quantity: 2,
  size: '',
  thickness: '',
  extras: [],
  note: '',
  extraPrice: 0,
};

function App() {
  const [pageInfo] = useState(initialData);
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handlePageChange = (event) => {
    if (event.target.name === 'order') {
      toast.info('Pizza Sipariş Ekranına Hoşgeldiniz...');
    }
    setPage(event.target.name);
  };

  function handleChange(event) {
    const { type, name, value, id } = event.target;

    if (type === 'text' && name === 'nameSurname') {
      setFormData({ ...formData, [name]: value });
    }

    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    }
    if (type === 'select-one') {
      if (value === '') {
      }
      setFormData({ ...formData, thickness: value });
    }
    if (type === 'checkbox') {
      if (formData.extras.includes(name)) {
        setFormData({
          ...formData,
          extras: formData.extras.filter((e) => e !== name),
          extraPrice: formData.extraPrice - 5,
        });
      } else {
        setFormData({
          ...formData,
          extras: [...formData.extras, name],
          extraPrice: formData.extraPrice + 5,
        });
      }
    }
    if (type === 'button' && name === 'increase') {
      setFormData({ ...formData, quantity: formData.quantity + 1 });
    }
    if (type === 'button' && name === 'decrease') {
      setFormData({ ...formData, quantity: formData.quantity - 1 });
      console.log(formData.quantity);
    }
    if (type === 'textarea' && name === 'orderNote') {
      setFormData({ ...formData, note: value });
    }
    if (name === 'quantity') {
      setFormData({ ...formData, quantity: Number(value) });
    }
  }

  useEffect(() => {
    if (isTouched) {
      setErrors(validateForm(formData));
      if (errors === 'null') {
        setIsValid(true);
      }
    } else {
      setIsTouched(true);
    }
    //console.log(errors);
  }, [formData]);

  useEffect(() => {
    if (errors.count === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors]);

  function handleSubmit(event) {
    event.preventDefault();
    const notification = toast.loading(
      'Siparişiniz alınıyor. Lütfen bekleyin ...'
    );
    return axios
      .post('https://reqres.in/api/pizza', formData)
      .then((res) => {
        console.log(res.data);
        toast.update(notification, {
          render: `${res.data.id} numaralı sipariş başarıyla oluşturuldu`,
          type: 'success',
          isLoading: true,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        if (res.status === 201) {
          setPage('ordered');
        }
      })
      .catch((err) => {
        toast.update(notification, {
          render: `Hata oluştu. En kısa zamanda tekrar sipariş verin.. [${err.message}]`,
          type: 'error',
          isLoading: false,
          closeOnClick: true,
        });
      });
  }

  return (
    <>
      <CustomToastContainer />
      {page === 'home' && <Home handlePageChange={handlePageChange}></Home>}
      {page === 'order' && (
        <Header handlePageChange={handlePageChange}></Header>
      )}
      {page === 'order' && (
        <OrderForm
          isValid={isValid}
          errors={errors}
          formData={formData}
          pageInfo={pageInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {page === 'ordered' && <OrderCompleted />}
    </>
  );
}

export default App;
