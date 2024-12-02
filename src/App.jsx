import Home from './Pages/Home';
import Header from './components/Header';
import OrderForm from './components/OrderForm/OrderForm';
import './App.css';
import { useEffect, useState } from 'react';
import CustomToastContainer from './components/Toast/CustomToastContainer';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import OrderCompleted from './Pages/OrderCompleted';
import { formToJSON } from 'axios';

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
  const [pageInfo, setPageInfo] = useState(initialData);
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState(initialFormData);
  const [err, setErr] = useState([]);

  const handlePageChange = (event) => {
    if (event.target.name === 'order') {
      toast.info('Pizza Sipariş Ekranına Hoşgeldiniz...');
    }
    setPage(event.target.name);
  };

  function handleChange(event) {
    const { type, name, value, id } = event.target;
    console.log(type, name, value, id);

    if (type === 'radio') {
      setFormData({ ...formData, [name]: id });
    }
    if (type === 'select-one') {
      if (value === '') {
        console.log('Seçim yok error ekle.');
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
      console.log('azaltcam');
      setFormData({ ...formData, quantity: formData.quantity - 1 });
    }
    if (type === 'textarea' && name === 'orderNote') {
      setFormData({ ...formData, note: value });
    }
    if (name === 'quantity') {
      setFormData({ ...formData, quantity: Number(value) });
    }
  }

  useEffect(() => {
    if (formData.quantity <= 0) {
      setFormData({ ...formData, quantity: 1 });
    }
  }, [formData]);

  function handleSubmit(event) {
    console.log(formData);
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
          formData={formData}
          pageInfo={pageInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
