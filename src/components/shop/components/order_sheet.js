import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  next_btn: {
    width: '100%',
    paddingRight: 15,
    justifyContent: 'right',
    fontSize: 20
  }
}));

function OrderSheet({order_data, nextStep, removePhonePackage, removeTVPackage}) {
  //console.log("In the Order Sheet - order_data:", order_data)
  // Determine Next btn text
  let re = /\/\w\w\/[\w]+.html/;
  let link_text = 'Next';
  let pathArray = re.exec(window.location.href);
  let current_path = pathArray[0]
  if (current_path == '/en/service_details.html') {
    link_text = 'Review & Pay'
  };
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const calculateTax = (amt) => {
    if (order_data.province == 'NL') {
      return(amt*0.15)
    } else if (order_data.province == 'QC') {
      return(amt*0.14975)
    } else if (order_data.province == 'NS') {
      return(amt*0.13)
    } else if (order_data.province == 'NU') {
      return(amt*0.05)
    } else if (order_data.province == 'PE') {
      return(amt*0.15)
    } else if (order_data.province == 'NB') {
      return(amt*0.15)
    } else if (order_data.province == 'ON') {
      return(amt*0.13)
    } else if (order_data.province == 'MB') {
      return(amt*0.12)
    } else if (order_data.province == 'SK') {
      return(amt*0.11)
    } else if (order_data.province == 'NT') {
      return(amt*0.05)
    } else if (order_data.province == 'AB') {
      return(amt*0.05)
    } else if (order_data.province == 'BC') {
      return(amt*0.12)
    } else if (order_data.province == 'YT') {
      return(amt*0.05)
    }
  }

  const resetOrder = () => {
    let city = localStorage.getItem('city') || '';
    let province = localStorage.getItem('province') || '';
    let postal_code = localStorage.getItem('postal_code') || '';
    let service_address = localStorage.getItem('service_address') || '';
    let order_id = Math.random().toString(36).substr(2, 9).toUpperCase();
    localStorage.clear();
    localStorage.setItem('city', city)
    localStorage.setItem('province', province)
    localStorage.setItem('postal_code', postal_code)
    localStorage.setItem('service_address', service_address)
    localStorage.setItem('order_id', order_id)
  }

  let total_one_time_costs = order_data.internet_hardware_one_time_fee + order_data.tv_hardware_one_time_fee + 
    order_data.phone_hardware_one_time_fee;
  let total_monthly_fees = order_data.internet_hardware_monthly_fee + order_data.internet_package_fee +
    order_data.tv_package_fee + order_data.phone_package_fee;

  let promo_code_message = '';
  let promo_code_value = 0;
  if (order_data.promo_code_type == 'Fixed Dollar Amount - onetime') {
    promo_code_message = 'Save $' + order_data.promo_code_value;
    promo_code_value = parseFloat(order_data.promo_code_value);
    total_one_time_costs -= promo_code_value;
  } else if (order_data.promo_code_type == 'Fixed Dollar Amount - monthly') {
    promo_code_message = 'Save $' + order_data.promo_code_value + ' per Month';
    promo_code_value = parseFloat(order_data.promo_code_value);
    total_monthly_fees -= promo_code_value;
  } else {
    promo_code_message = order_data.promo_code_value;
  }

  return (
    <div className="mx-auto lg:mx-0 max-w-xs rounded-lg bg-white overflow-hidden border border-gray-600 order-sheet mb-6">
      <div className="flex px-4 bg-canfone-teal">
        <div className=" flex-1 text-white text-2xl py-2 uppercase">Your Order</div>
        {/*<div className="text-white text-2xl my-2 mr-3 cursor-pointer" onClick={resetOrder}><i className="fas fa-trash-alt"></i></div>*/}
        <div className={clsx("mt-4", (current_path == '/en/order_review.html') && 'hidden')} onClick={nextStep}>
          <i className="far fa-arrow-alt-circle-right text-2xl text-white cursor-pointer"></i>
        </div>
      </div>

      <div className="p-4">
        <div className={clsx("border-b border-gray-400", (current_path == '/en/internet') && 'pl-3')}>
          <div className="my-1 px-3 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="internet#modify" className="text-sm grey-600 font-semibold uppercase hover:underline">Internet Package</a>
              </div>
              <a href="internet#modify" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
            </div>
            {(order_data.internet_package_name.length > 0) ?
              <div>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {order_data.internet_package_name}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <div className="grey-600 text-sm">
                    {`$${order_data.internet_package_fee.toFixed(2)}`}
                  </div>
                </div>
                {(order_data.service_contract == '2YR') ?
                  <p className="grey-600 text-xs">2-YR Contract</p>
                :
                  <p className="grey-600 text-xs">No Contract</p>
                }
              </div>
              :
              <h3 className="text-sm grey-400">None Selected</h3>
            }
          </div>
        </div>

        <div className={clsx("border-b border-gray-400", (current_path == '/en/tv.html') && 'pl-3')}>
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="tv.html#modify" className="text-sm grey-600 font-semibold uppercase hover:underline">TV Package</a>
              </div>
              { (order_data.tv_package_id > 0) ?
                <button 
                  className="text-sm text-canfone-teal underline text-right" 
                  onClick={removeTVPackage}>
                  Remove
                </button>
                :
                <button 
                  className={clsx("text-sm text-canfone-teal underline text-right", (current_path == '/en/tv.html') && 'invisible')}
                  onClick={() => {window.location = "tv.html#modify"}}>
                  Add
                </button>
              }
            </div>
            {(order_data.tv_package_id > 0) ?
              <Fragment>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {order_data.tv_package_name}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <p className="grey-600 text-sm">
                    {`$${order_data.tv_package_fee.toFixed(2)}`}
                  </p>
                </div>
              </Fragment>
              :
              <h3 className="text-sm grey-400">None Selected</h3>
            }
          </div>
        </div>

        <div className={clsx("border-b border-gray-400", (current_path == '/en/phone.html') && 'pl-3')}>
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="phone.html#modify" className="text-sm grey-600 font-semibold uppercase hover:underline">Phone Package</a>
              </div>
              { (order_data.phone_package_id > 0) ?
                <button 
                  className="text-sm text-canfone-teal underline text-right" 
                  onClick={removePhonePackage}>
                  Remove
                </button>
                :
                <button 
                  className={clsx("text-sm text-canfone-teal underline text-right", (current_path == '/en/phone.html') && 'invisible')}
                  onClick={() => {window.location = "phone.html#modify"}}>
                  Add
                </button>
              }
            </div>
            {(order_data.phone_package_name.length > 0) ?
              <Fragment>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {order_data.phone_package_name}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <p className="grey-600 text-sm">
                    {`$${order_data.phone_package_fee.toFixed(2)}`}
                  </p>
                </div>
              </Fragment>
              :
              <h3 className="text-sm grey-400">None Selected</h3>
            }
          </div>
        </div>

        <div className={clsx("border-b border-gray-400", (current_path == '/en/hardware.html') && 'pl-3')}>
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex pb-2">
              <div className="flex-1">
                <a href="hardware.html#modify" className="text-sm grey-600 font-semibold uppercase hover:underline">Hardware</a>
              </div>
              <div>
                <a href="hardware.html#modify" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
              </div>
            </div>
            <Fragment>
              {order_data.internet_hardware_description &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{order_data.internet_hardware_description}</p>
              }
              {order_data.tv_hardware_name ?
                  <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{order_data.tv_hardware_name}</p>
                :
                  null
              }
              {order_data.phone_hardware_name &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{order_data.phone_hardware_name}</p>
              }
              {(order_data.internet_hardware_description.length == 0 && order_data.tv_hardware_name.length == 0 && order_data.phone_hardware_name.length == 0) &&
                <p className="text-sm grey-400">
                  None Selected
                </p>
              }
              {(order_data.internet_hardware_description.length > 0 || order_data.tv_hardware_name.length > 0 || order_data.phone_hardware_name.length > 0) &&
                <Fragment>
                  <div className="flex pt-3">
                    <h3 className="flex-1 grey-600 text-sm">
                      One-Time Cost:
                    </h3>
                    <p className="grey-600 text-sm">
                      { (total_one_time_costs) ?
                          `$${total_one_time_costs.toFixed(2)}`
                        :
                          '$0.00'
                      }
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="flex-1 grey-600 text-sm">
                      Monthly Fee:
                    </h3>
                    <p className="grey-600 text-sm">
                      { (total_monthly_fees) ?
                          `$${order_data.internet_hardware_monthly_fee.toFixed(2)}`
                        :
                          '$0.00'
                      }
                    </p>
                  </div>
                </Fragment>
              }
            </Fragment>
          </div>
        </div>

        <div className={clsx("border-b border-gray-400", (current_path == '/en/service_details.html') && 'pl-3')}>
          <div className="my-1 px-2 py-1 border-l-4 border-teal-400">
            <div className="flex pb-2">
              <div className="flex-1">
                <a href="service_details.html#modify" className="text-sm grey-600 font-semibold uppercase hover:underline">Service Details</a>
              </div>
              <div>
                <a href="service_details.html#modify" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
              </div>
            </div>
            <Fragment>
              {(order_data.service_address_confirmed === 'YES') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>Address Confirmed</p>
              }
              {(order_data.has_active_service === 'YES') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>Existing Service</p>
              }
              {(order_data.has_active_service === 'NO') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>New Service</p>
              }
              {(order_data.phone_port === 'NO') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>New Phone Number</p>
              }
              {(order_data.phone_port === 'YES') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>Keep Existing Phone Number</p>
              }
              {(order_data.installation_dates_accepted === 'YES') &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>Installation Dates Selected</p>
              }
              {(!order_data.service_address_confirmed && (order_data.has_active_service === null) && (!order_data.installation_dates_accepted)) &&
                <p className="text-sm grey-400">
                  Not Completed
                </p>
              }
            </Fragment>
          </div>
        </div>

        {/*<div className="inline-flex mt-2 pt-1 px-3 w-full bg-orange-200">
          <h2 className="flex-1 text-base grey-800">Promo Code:</h2>
          <h2 className="text-base text-right grey-800">JoseCuervo</h2>
        </div>
        <div className="mb-2 pb-1 px-3 w-full bg-orange-200">
          <h2 className="text-sm grey-800">Save $5 per month<span className="pl-3 text-green-600"><i className="fas fa-check-circle"></i></span></h2>
        </div>*/}

        {(order_data.promo_code_name !== '') &&
          <div className="border-2 border-red-500 mt-2 p-2 text-center">
            <h3 className="flex-1 text-base font-semibold text-canfone-red">Promo {order_data.promo_code_name} Applied</h3>
            <h3 className="flex-1 text-sm text-canfone-red">{promo_code_message}</h3>
          </div>
        }

        <div className="inline-flex pt-3 pb-0 px-3 w-full">
          <h2 className="flex-1 text-sm grey-800">Monthly Fee:</h2>
          <h2 className="text-sm text-right grey-600">${total_monthly_fees.toFixed(2)}</h2>
        </div>
        <div className="inline-flex pb-0 px-3 w-full">
          <h2 className="flex-1 text-sm grey-800">One-Time Cost:</h2>
          <h2 className="text-sm text-right grey-600">${total_one_time_costs.toFixed(2)}</h2>
        </div>
        <div className="inline-flex pb-3 px-3 w-full">
          <h2 className="flex-1 text-sm grey-800">Taxes:</h2>
            <h2 className="text-sm text-right grey-600">${calculateTax(total_monthly_fees + total_one_time_costs).toFixed(2)}</h2>
        </div>
        <div className="inline-flex pb-2 px-3 w-full">
          <h2 className="flex-1 text-xl font-semibold grey-800">Today's Total:</h2>
          <h2 className="text-xl text-right text-canfone-teal font-semibold">${(total_monthly_fees + total_one_time_costs + calculateTax(total_monthly_fees + total_one_time_costs)).toFixed(2)}</h2>
        </div>
      </div>

      <div className={clsx("mt-2 mx-4 mb-4", (current_path == '/en/order_review.html') && 'hidden')}>
        <Button 
          variant="contained" 
          color="secondary" 
          size="small" 
          className={classes.next_btn}
          onClick={nextStep}>
          {link_text} <i className="far fa-arrow-alt-circle-right ml-3 text-2xl"></i>
        </Button>
      </div>
    </div>
  );
}

export default OrderSheet;