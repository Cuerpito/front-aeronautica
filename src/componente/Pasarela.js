import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import '../hojas estilo/Pasarela.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import moment from 'moment';
const cookies = new Cookies();

const STRIPE_PUBLIC_KEY_DEV =
  'pk_test_51Ns7BdFxlOv4gV2Cr4mU5j5ALd479RPRjBS1MJOc4ixxcoj9VolIlL4Y06N1nUFh1kf09bRpkBXGHM5ZfMvpGtqs00r3YryaYs';
const STRIPE_PUBLIC_KEY_PROD =
  'pk_live_51Ns7BdFxlOv4gV2C6xbP1E5xX5vxdlGabwukEONteGpojU0LrpygyGBQ6IWUYOgvvVtA5furj8pauBOijd83MKeR00o9CTMAww';

const MyCheckoutComponent = () => {
  const stripePublicKey = process.env.NODE_ENV === 'development' ? STRIPE_PUBLIC_KEY_DEV : STRIPE_PUBLIC_KEY_PROD;

  toast.configure();

  const milisegundosMes = 2592000000;
  const operacion = 'suscripcion';
  const operacionPago = 'pago';
  const [product] = useState({
    name: 'PAGO EXAMEN ULM',
    price: 30,
    description: 'PAGO EXAMEN ULM'
  });

  let FechaMes = new Date();
  var tres = FechaMes.getTime();
  tres = tres + milisegundosMes;
  let FechaFechaMesDos = new Date(tres);
  let Fecha_SuscripcionMes = FechaMes;
  let Fecha_CaducidadMes = FechaFechaMesDos;
  Fecha_SuscripcionMes = moment.utc(Fecha_SuscripcionMes).format('YYYY-MM-DD');
  Fecha_CaducidadMes = moment.utc(Fecha_CaducidadMes).format('YYYY-MM-DD');

  const handleToken = async token => {
    // Envia el token al servidor Node.js
    //const response = await axios.post('https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica', {
    const response = await axios.post('http://localhost:5000/api/charge', {
      operacionPago: operacionPago,
      token: token.id,
      amount: 500 // Cambia esto al monto que quieras cobrar 1 EURO ---> 100//////
    });

    // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
    console.log(response);

    if (response.data.message === 'successful payment') {
      toast('pago exitoso fue completado', { type: 'Exito' });
      alert(response.data.message);
      axios
        .post('https://450dfy2taj.execute-api.us-east-2.amazonaws.com/prod/aeronautica', {
          operacion: operacion,
          Id: cookies.get('Id'),
          Suscripcion: 'Activo',
          Fecha_SuscripcionMes: Fecha_SuscripcionMes,
          Fecha_CaducidadMes: Fecha_CaducidadMes
        })
        .then(response => {
          if (response.data.message) {
            cookies.set('Suscripcion', response.data.content.Suscripcion, { path: '/' });
            window.location.href = './activa';
            alert(response.data.message);
          } else {
            alert('AL PARECER HAY UN PROBLEMA CON LA ACTUALIZACION DE LA SUSCRIPCION');
            window.location.href = './noentra';
          }
        });
    } else {
      toast('pago fallido existe algun problema', { type: 'error' });
      alert(response.data.message);
    }
    console.log(response);
  };

  return (
    <div className='general-suscripcion'>
      <div className='container'>
        <br></br>
        <h1 className='titulo-Pago' style={{ textAlign: 'center' }}>
          PAGO EXAMEN ULM
        </h1>
        <br></br>
        <h2 className='letraArriba' style={{ textAlign: 'center' }}>
          BANCO DE PREGUNTAS ULM
        </h2>
        <h3 className='letraAbajo' style={{ textAlign: 'center' }}>
          PRECIO DEL PRODUCTO: {product.price} EUROS
        </h3>
        <br></br>
        <div className='formL'>
          <StripeCheckout
            className='center'
            token={handleToken}
            stripeKey={stripePublicKey}
            description={product.description}
            amount={product.price * 100}
            name={product.name}
            billingAddress
            shippingAddress>
            <button className='center'>PAGAR</button>
          </StripeCheckout>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default MyCheckoutComponent;
