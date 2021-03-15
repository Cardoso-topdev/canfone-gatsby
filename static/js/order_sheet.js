import React, { Fragment, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  next_btn: {
    width: '100%',
    paddingRight: 25,
    justifyContent: 'right',
    fontSize: 20
  }
}));

function OrderSheet({internet_package_name, internet_package_fee, service_contract, tv_package, tv_package_fee, removeTVPackage, 
    phone_package_name, phone_package_fee, removePhonePackage, internet_hardware_description, tv_hardware_name, tv_hardware_one_time_fee,
    phone_hardware_name, phone_hardware_one_time_fee, service_address_confirmed, linktext, nextStep}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const total_one_time_costs = 50;
  const total_monthly_fees = internet_package_fee + tv_package_fee + phone_package_fee;

  const sibitz = () => {
    //`$${total_monthly_fees.toFixed(2)}`
    console.log("total_monthly_fees:", total_monthly_fees, typeof total_monthly_fees)
  }

  return (
    <div className="max-w-xs rounded-lg bg-white overflow-hidden border border-gray-600 order-sheet mb-6">
      <div className="px-4 bg-canfone-teal">
        <div className="text-white text-2xl py-2 uppercase">Your Ordery</div>
      </div>
      <div className="p-4">
        <div className="border-b border-gray-400">
          <div className="my-1 px-3 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="internet.html" className="text-sm grey-600 font-semibold uppercase hover:underline">Internet Package</a>
              </div>
              <a href="internet.html" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
            </div>
            {(internet_package_name.length > 0) ?
              <div>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {internet_package_name}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <div className="grey-600 text-sm">
                    {`$${internet_package_fee.toFixed(2)}`}
                  </div>
                </div>
                {(service_contract == '2YR') ?
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
        <div className="border-b border-gray-400">
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="tv.html" className="text-sm grey-600 font-semibold uppercase hover:underline">TV Package</a>
              </div>
              <button 
                className="text-sm text-canfone-teal underline text-right" 
                onClick={removeTVPackage}>
                Remove
              </button>
            </div>
            {(tv_package.length > 0) ?
              <Fragment>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {tv_package}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <p className="grey-600 text-sm">
                    {`$${tv_package_fee.toFixed(2)}`}
                  </p>
                </div>
              </Fragment>
              :
              <h3 className="text-sm grey-400">None Selected</h3>
            }
          </div>
        </div>
        <div className="border-b border-gray-400">
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex items-end">
              <div className="flex-1">
                <a href="phone.html" className="text-sm grey-600 font-semibold uppercase hover:underline">Phone Package</a>
              </div>
              <button 
                className="text-sm text-canfone-teal underline text-right" 
                onClick={removePhonePackage}>
                Remove
              </button>
            </div>
            {(phone_package_name.length > 0) ?
              <Fragment>
                <p className="text-xl text-canfone-teal font-semibold py-1">
                  {phone_package_name}
                </p>
                <div className="flex">
                  <h3 className="flex-1 grey-600 text-sm">
                    Monthly Fee:
                  </h3>
                  <p className="grey-600 text-sm">
                    {`$${phone_package_fee.toFixed(2)}`}
                  </p>
                </div>
              </Fragment>
              :
              <h3 className="text-sm grey-400">None Selected</h3>
            }
          </div>
        </div>
        <div className="border-b border-gray-400">
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex pb-2">
              <div className="flex-1">
                <a href="hardware.html" className="text-sm grey-600 font-semibold uppercase hover:underline">Hardware</a>
              </div>
              <div>
                <a href="hardware.html" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
              </div>
            </div>

            <Fragment>
              {internet_hardware_description &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{internet_hardware_description}</p>
              }
              {tv_hardware_name ?
                  <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{tv_hardware_name}</p>
                :
                  null
              }
              {phone_hardware_name &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>{phone_hardware_name}</p>
              }
              {(internet_hardware_description.length == 0 && tv_hardware_name.length == 0) &&
                <p className="text-sm grey-400">
                  None Selected
                </p>
              }

              <div className="flex pt-3">
                <h3 className="flex-1 grey-600 text-sm">
                  One-Time Cost:
                </h3>
                <p className="grey-600 text-sm">
                  { (total_one_time_costs) ?
                      `$${total_one_time_costs.toFixed(2)}`
                    :
                      '0.00'
                  }
                </p>
              </div>
              <div className="flex">
                <h3 className="flex-1 grey-600 text-sm">
                  Monthly Fee:
                </h3>
                <p className="grey-600 text-sm">
                  {sibitz()}
                </p>
              </div>
            </Fragment>
          </div>
        </div>

        <div className="border-b border-gray-400 pl-3">
          <div className="my-1 px-3 py-1 border-l-4 border-teal-400">
            <div className="flex pb-2">
              <div className="flex-1">
                <a href="service_details.html" className="text-sm grey-600 font-semibold uppercase hover:underline">Service Details</a>
              </div>
              <div>
                <a href="service_details.html" className="text-sm text-canfone-teal underline text-right pt-1">Modify</a>
              </div>
            </div>
            <Fragment>
              {service_address_confirmed &&
                <p className="text-xs grey-500"><i className="fas fa-check-circle text-canfone-teal px-1"></i>Address Confirmed</p>
              }

              {(!service_address_confirmed) &&
                <p className="text-sm grey-400">
                  Not Completed
                </p>
              }
            </Fragment>
          </div>
        </div>

        <div className="inline-flex pt-3 px-3 w-full">
          <h2 className="flex-1 text-base grey-800">Monthly Fee:</h2>
          <h2 className="text-base text-right grey-600">${total_monthly_fees.toFixed(2)}</h2>
        </div>
        <div className="inline-flex pb-2 px-3 w-full">
          <h2 className="flex-1 text-base grey-800">One-Time Cost:</h2>
          <h2 className="text-base text-right grey-600">${total_one_time_costs.toFixed(2)}</h2>
        </div>
        <div className="inline-flex pb-2 px-3 w-full">
          <h2 className="flex-1 text-xl font-semibold grey-800">Total:</h2>
          <h2 className="text-xl text-right text-canfone-teal font-semibold">${(total_monthly_fees + total_one_time_costs).toFixed(2)}</h2>
        </div>
      </div>
      <div className="mt-2 mx-6 mb-4">
        <Button 
          variant="contained" 
          color="secondary" 
          size="small" 
          className={classes.next_btn}
          onClick={nextStep}>
          {(linktext) ?
            <Fragment>{linktext} <i className="far fa-arrow-alt-circle-right ml-3 text-2xl"></i></Fragment>
          :
            <Fragment>Next <i className="far fa-arrow-alt-circle-right ml-3 text-2xl"></i></Fragment>
          }
          
        </Button>
      </div>
    </div>
  );
}

export default OrderSheet;