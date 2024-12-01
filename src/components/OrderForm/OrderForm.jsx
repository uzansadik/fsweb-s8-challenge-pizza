import React from 'react';

function OrderForm() {
  return (
    //container div
    <div className=' m-auto font-barlow text-darkGrey'>
      <div className=' md:max-w-[532px] flex flex-col flex-wrap mt-4 md:mt-[30px] md:m-auto ml-12 mr-14'>
        <div className='font-barlow flex flex-col flex-wrap'>
          <h1 className='text-[27px] md:text-[22px] font-semibold '>
            Position Absolute Acı Pizza
          </h1>
          <div className='flex flex-row justify-between mt-4 md:mt-[14px]'>
            <h1 className='text-[27px] md:text-[22px] font-bold '>85.20₺</h1>
            <div className='flex flex-row justify-between items-end'>
              <h5>4.9</h5>
              <h5 className='ml-16'>(200)</h5>
            </div>
          </div>
        </div>
        <p className='max-w-[408px] md:max-w-[532px] text-xl md:text-lg font-barlow tracking-normal leading-7 mt-4 md:mt-5'>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className='flex flex-nowrap justify-between mt-10 font-barlow text-xl'>
          <div className='flex flex-col '>
            <h5 className='text-xl font-bold pb-2 '>
              Boyut Seç <span className='text-red'>*</span>
            </h5>
            <div className='pb-1'>
              <input name='size' type='radio' />
              <label className='pl-1' htmlFor='size'>
                Küçük
              </label>
            </div>
            <div className='pb-1'>
              <input name='size' type='radio' />
              <label className='pl-1' htmlFor='size'>
                Orta
              </label>
            </div>
            <div className='pb-1'>
              <input name='size' type='radio' />
              <label className='pl-1' htmlFor='size'>
                Büyük
              </label>
            </div>
          </div>
          <div className='flex flex-col mr-10 md:mr-16'>
            <h5 className='text-xl font-bold pb-2'>
              Hamur Seç <span className='text-red'>*</span>
            </h5>
            <select id='cars'>
              <option value=''>HAMUR KALINLIĞI</option>
              <option value='kalin'>Kalın</option>
              <option value='ince'>İnce</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col mt-10 gap-4'>
          <p className='text-xl font-semibold'>Ek Malzemeler</p>
          <p>En az 4 ve en fazla 10 adet seçebilirsiniz: (5TL)</p>
          <div className='flex flex-row flex-wrap' id='option-container'>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='zeytin' id='zeytin' />
              <label className='pl-2' htmlFor='zeytin'>
                Zeytin
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='sosis' id='sosis' />
              <label className='pl-2' htmlFor='sosis'>
                Sosis
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='kanadaJambonu' id='kanadaJambonu' />
              <label className='pl-2' htmlFor='kanadaJambonu'>
                kanada Jambonu
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='zeytin' id='zeytin' />
              <label className='pl-2' htmlFor='zeytin'>
                Zeytin
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='sosis' id='sosis' />
              <label className='pl-2' htmlFor='sosis'>
                Sosis
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='kanadaJambonu' id='kanadaJambonu' />
              <label className='pl-2' htmlFor='kanadaJambonu'>
                kanada Jambonu
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
            <div id='option' className='w-1/2 mb-4'>
              <input type='checkbox' name='tavukIzgara' id='TavukIzgara' />
              <label className='pl-2' htmlFor='tavukIzgara'>
                Tavuk Izgara
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-10 gap-4'>
          <p className='text-2xl font-semibold'>Sipariş Notu</p>
          <textarea
            className='p-4 w-full opacity-100 border-[1px] border-lightGrey text-darkGrey rounded-md focus:border-2
            '
            name='orderNote'
            id='orderNote'
            placeholder='Siparişine Eklemek istediğin bir not var mı?'
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
            <p className='text-xl font-semibold text-lightGrey'>25.00 ₺</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold text-red'>Seçimler</p>
            <p className='text-xl font-semibold text-red'>25.00 ₺</p>
          </div>
        </div>

        <div className='flex flex-row mt-10 gap-5 justify-between text-2xl font-semibold mb-10'>
          <div className='flex gap-0 w-[200px]'>
            <button className='w-16 h-14 border-[1px] border-yellow bg-yellow rounded-l-md'>
              -
            </button>
            <input
              className='w-16 h-14 border-t-[1px] border-b-[1px] border-lightGrey focus:outline-none text-center'
              type='text'
            />
            <button className='w-16 h-14 border-[1px] border-yellow bg-yellow rounded-r-md'>
              +
            </button>
          </div>
          <div className='flex gap-0 w-[200px]'>
            <button className='w-[200px] h-14 border-[1px] border-yellow bg-yellow rounded-r-md '>
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
