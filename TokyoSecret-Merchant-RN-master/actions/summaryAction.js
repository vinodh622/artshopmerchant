import {  ORDER_SUMMARY   } from './Constants';
import {  BOOKING_PRODUCT } from '../Screens/API/Api';

export const summaryAction = (token  ,booking_Id,  checkin_date, tableName, qrcode ) => async (dispatch) => {
    //console.log(booking_Id)
  try {
    var form = new FormData();

    form.append('api_token', token);
    form.append('bookid', booking_Id);

    await fetch(BOOKING_PRODUCT, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
     //  console.log(data)

        dispatch({type: ORDER_SUMMARY, payload: data  ,payload_1: checkin_date , payload_2:tableName ,payload_3:qrcode });
      })


      .catch((e) => console.log(e));

  } 
  catch (error) {
    console.log(error);
  }
};





  
  









