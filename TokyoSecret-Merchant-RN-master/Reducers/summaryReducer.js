//import {boolean} from 'yup';
import {ORDER_SUMMARY} from '../actions/Constants';

function summaryReducer(state = {summaryData:[ ],  summaryStatus:"  "  ,qrCode:""  ,checkin_date :"" ,tableName:""  }, action) {
  switch (action.type) {
    case ORDER_SUMMARY:
      let jsonData = action.payload;
      let getsummaryData = jsonData.data

      let getsummaryStatus = jsonData.status
    



      return {
        summaryData: [...getsummaryData],
        summaryStatus:getsummaryStatus,

        checkin_date:action.payload_1,

        tableName:action.payload_2,

        qrCode :action.payload_3,




      };

    default:
      return state;
  }
}

export {summaryReducer};
