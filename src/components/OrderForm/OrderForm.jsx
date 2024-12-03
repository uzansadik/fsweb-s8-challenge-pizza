import React from 'react';
import OrderFormHeader from './OrderFormHeader';
import OrderFormDescription from './OrderFormDescription';
import SizeRadioButton from './SizeRadioButton';
import ThicknessOption from './ThicknessOption';
import ExtraMaterials from './ExtraMaterials';

function OrderForm({
  pageInfo,
  handleChange,
  handleSubmit,
  formData,
  errors,
  isValid,
}) {
  return (
    //container div
    <div className=' m-auto font-barlow text-darkGrey'>
      <form onSubmit={handleSubmit}>
        <div className=' md:max-w-[532px] flex flex-col flex-wrap mt-4 md:mt-[30px] md:m-auto ml-12 mr-14'>
          <OrderFormHeader
            title={pageInfo.title}
            price={pageInfo.price}
          ></OrderFormHeader>
          <OrderFormDescription
            description={pageInfo.desc}
          ></OrderFormDescription>

          {errors.thickness && (
            <p className='mt-1 text-red'> {errors.thickness} </p>
          )}
          {errors.size && <p className='mt-1 text-red'> {errors.size} </p>}

          <div
            className='flex flex-nowrap justify-between font-barlow text-xl'
            onClick={handleChange}
          >
            <div className='flex flex-col '>
              <h5 className='text-xl font-bold pb-2 '>
                Boyut Seç <span className='text-red'>*</span>
              </h5>
              {pageInfo.sizes.map((item) => (
                <SizeRadioButton
                  plus={item.plus}
                  formData={formData}
                  key={item.name}
                  text={item.text}
                  id={item.name}
                  handleChange={handleChange}
                ></SizeRadioButton>
              ))}
            </div>
            <div className='flex flex-col mr-10 md:mr-16'>
              <h5 className='text-xl font-bold pb-2'>
                Hamur Seç <span className='text-red'>*</span>
              </h5>
              <ThicknessOption
                formData={formData}
                id='thickness'
                options={pageInfo.thickness}
                handleChange={handleChange}
              ></ThicknessOption>
            </div>
          </div>
          <div className='flex flex-col mt-10 gap-4'>
            <p className='text-xl font-semibold'>Ek Malzemeler (+5TL)</p>
            {errors.extras && <p className='text-red'> {errors.extras} </p>}

            <div className='flex flex-row flex-wrap' id='option-container'>
              {pageInfo.extras.map((malzeme) => (
                <ExtraMaterials
                  selectedMaterials={formData.extras}
                  key={malzeme.value}
                  inputName={malzeme.value}
                  text={malzeme.text}
                  inputId={malzeme.value}
                  handleChange={handleChange}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col mt-10 gap-4'>
            <p className='text-2xl font-semibold'>İsim</p>
            {errors.nameSurname && (
              <p data-test-cy='error-nameSurname' className='text-red'>
                {' '}
                {errors.nameSurname}{' '}
              </p>
            )}

            <input
              data-test-cy='input-nameSurname'
              type='text
          '
              className='p-4 w-full opacity-100 border-[1px] border-lightGrey text-darkGrey rounded-md focus:border-2
            '
              name='nameSurname'
              id='orderNote'
              placeholder='Adınız girin...'
              value={formData.nameSurname}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col mt-10 gap-4'>
            <p className='text-2xl font-semibold'>Sipariş Notu</p>
            <textarea
              className='p-4 w-full opacity-100 border-[1px] border-lightGrey text-darkGrey rounded-md focus:border-2
            '
              name='orderNote'
              id='orderNote'
              placeholder='Siparişine Eklemek istediğin bir not var mı?'
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='w-full border-lightGrey border-b-[1px] mt-10 mb-10 '></div>

          <div
            className='w-full border-lightGrey border-[1px] rounded-md flex flex-col gap-3 p-10'
            id='OrderSummary'
          >
            <p className='text-2xl font-semibold'>Sipariş Toplamı</p>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold text-lightGrey'>Seçimler</p>
              <p
                data-test-cy='price'
                className='text-xl font-semibold text-lightGrey'
              >
                {formData.extraPrice} ₺
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold text-red'>Toplam</p>
              <p className='text-xl font-semibold text-red'>
                {formData.price * formData.quantity + formData.extraPrice} ₺
              </p>
            </div>
          </div>
          {errors.quantity && <p className='text-red'> {errors.quantity} </p>}

          <div className='flex flex-row mt-10 gap-5 justify-between text-2xl font-semibold mb-10'>
            <div className='flex gap-0 w-[200px]'>
              <button
                type='button'
                name='decrease'
                onClick={handleChange}
                className='w-16 h-14 border-[1px] border-yellow bg-yellow rounded-l-md'
                disabled={errors.quantity}
              >
                -
              </button>
              <input
                className='w-16 h-14 border-t-[1px] border-b-[1px] border-lightGrey focus:outline-none text-center'
                type='text'
                name='quantity'
                value={formData.quantity}
                onChange={handleChange}
                disabled='true'
              />
              <button
                type='button'
                name='increase'
                onClick={handleChange}
                className='w-16 h-14 border-[1px] border-yellow bg-yellow rounded-r-md'
              >
                +
              </button>
            </div>
            <div className='flex gap-0 w-[200px]'>
              <button
                data-test-cy='siparis'
                disabled={!isValid}
                type='submit'
                className='w-[200px] h-14 border-[1px] border-yellow bg-yellow rounded-r-md '
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
