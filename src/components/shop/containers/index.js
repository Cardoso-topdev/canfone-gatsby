import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from "@reach/router"
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import TextField from '@material-ui/core/TextField';
// import moment from 'moment';
// import { purple } from '@material-ui/core/colors';

import { getPricing, getPromo } from '../actions';
import Hardware from '../components/hardware_products';
import Internet from '../components/internet_products';
import OrderReview from '../components/order_review';
import OrderSheet from '../components/order_sheet';
import Phone from '../components/phone_products';
import ServiceDetails from '../components/service_details';
import TV from '../components/tv_products';


class Shop extends Component {
  constructor(props) {
    super(props);
    // window.Shop = this;

    let date = new Date()
    const earliestInstallDate = date.setDate(date.getDate() + 7);

    this.state = {
      city: localStorage.getItem('city') || '',
      province: localStorage.getItem('province') || '',
      postal_code: localStorage.getItem('postal_code') || '',      
      service_address: localStorage.getItem('service_address') || '',
      customer_type: localStorage.getItem('customer_type') || 'RESIDENTIAL',
      OBD_hexuid: localStorage.getItem('OBD_hexuid') || '',

      internet_package_id: localStorage.getItem('internet_package_id') || '',
      internet_package_name: localStorage.getItem('internet_package_name') || '',
      internet_package_fee: parseInt(localStorage.getItem('internet_package_fee')) || 0,
      internet_package_speed: parseInt(localStorage.getItem('internet_package_speed')) || 0,
      service_contract: localStorage.getItem('service_contract') || '2YR',

      internet_hardware_id: parseInt(localStorage.getItem('internet_hardware_id')) || 0,
      internet_hardware_description: localStorage.getItem('internet_hardware_description') || '',
      internet_hardware_monthly_fee: parseFloat(localStorage.getItem('internet_hardware_monthly_fee')) || 0,
      internet_hardware_one_time_fee: parseFloat(localStorage.getItem('internet_hardware_one_time_fee')) || 0,

      tv_package_id: localStorage.getItem('tv_package_id') || 0,
      tv_package_name: localStorage.getItem('tv_package_name') || '',
      tv_package_fee: parseInt(localStorage.getItem('tv_package_fee')) || 0,
      tv_hardware_id:  parseInt(localStorage.getItem('tv_hardware_id')) || 0,
      tv_hardware_name: localStorage.getItem('tv_hardware_name') || '',
      tv_hardware_one_time_fee: parseFloat(localStorage.getItem('tv_hardware_one_time_fee')) || 0,

      phone_package_id: parseInt(localStorage.getItem('phone_package_id')) || 0,
      phone_package_name: localStorage.getItem('phone_package_name') || '',
      phone_package_fee: parseInt(localStorage.getItem('phone_package_fee')) || 0,
      phone_hardware_id:  parseInt(localStorage.getItem('phone_hardware_id')) || 0,
      phone_hardware_name: localStorage.getItem('phone_hardware_name') || '',
      phone_hardware_one_time_fee: parseFloat(localStorage.getItem('phone_hardware_one_time_fee')) || 0,

      modem: localStorage.getItem('modem') || '',
      modem_fee: localStorage.getItem('modem_fee') || '',
      has_active_service: localStorage.getItem('has_active_service') || '',
      phone_port: localStorage.getItem('phone_port') || '',
      phone_port_authorization: localStorage.getItem('phone_port_authorization') || '',
      selected_installation_date: localStorage.getItem('selected_installation_date') || 'ASAP',
      selected_installation_time: localStorage.getItem('selected_installation_time') || 'Any Time',
      promo_code_name: '',
      promo_code_message: '',
      promo_code_type: '',
      promo_code_value: 0,

      validation_pass_internet_hardware_option: true,
      validation_pass_port_number_option: true,
      validation_pass_authorized_to_port_number: true,
      verification_passed_service_status: true,
      _verification_passed_phone_port: true,

      //customer_info_modal_open: false,
      //customer_info_name: localStorage.getItem('customer_info_name') || '',
      //customer_info_phone: localStorage.getItem('customer_info_phone') || '',
    };

    this.updateServiceStatus = this.updateServiceStatus.bind(this);
    this.updatePhonePortOption = this.updatePhonePortOption.bind(this);
    this.updatePhonePortAuthorization = this.updatePhonePortAuthorization.bind(this);
    this.checkPromoCode = this.checkPromoCode.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.removePhonePackage = this.removePhonePackage.bind(this);
    this.removeTVPackage = this.removeTVPackage.bind(this);
    this.setDefaultInternetHardware = this.setDefaultInternetHardware.bind(this);
    this.selectInternetHardware = this.selectInternetHardware.bind(this);
    this.selectTVHardware = this.selectTVHardware.bind(this);
    this.selectPhoneHardware = this.selectPhoneHardware.bind(this);
    //this.setInstallationDate = this.setInstallationDate.bind(this);
    //this.setInstallationTime = this.setInstallationTime.bind(this);
    this.setServiceContract = this.setServiceContract.bind(this);
    this.setInternetPackage = this.setInternetPackage.bind(this);
    this.setPhonePackage = this.setPhonePackage.bind(this);
    this.setTVPackage = this.setTVPackage.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    //this.customerInfoModalClose = this.customerInfoModalClose.bind(this);
  }

  componentDidMount() {

    const order_started = localStorage.getItem('order_started')
    const now = new Date()

    if (order_started) {
      // Check if order_started is within TTL > 1HR?
      if (now.getTime() > order_started + 3600) {

      } else {
        // Reset to initial values

      }
    } else {
      // Set initial values

    }

    // Set some initial localStorage
    localStorage.setItem('promo_code', '');

    let address = {
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postal_code,
      service_address: this.state.service_address,
      OBD_hexuid: this.state.OBD_hexuid
    }
    // Retrieve pricing info
    console.log("Initiated call for pricing...")
    this.props.actions.getPricing(address);
  }

  componentDidUpdate(prevProps) {
    // Pop up Customer Info modal if customer_info_name or customer_info_phone missing form localStorage
    /*
    {
    console.log("componentDidUpdate")
    
    if (this.state.customer_info_modal_open === false) {
      if (this.state.customer_info_name === '' || this.state.customer_info_phone === '') {
        this.setState({
          customer_info_modal_open: true
        })
      }
    }
    */

    //console.log("In componentDidUpdate:", prevProps.packages.hexuid);
    //console.log("In componentDidUpdate:", this.props.packages.hexuid);
    if (this.props.packages.hexuid !== prevProps.packages.hexuid) {
      if (this.props.packages.hexuid === null) {
        localStorage.setItem('OBD_hexuid', '');
      } else {
        localStorage.setItem('OBD_hexuid', this.props.packages.hexuid);
      }
    }
    if (this.props.promo !== prevProps.promo) {
      console.log("NEW UPDATE");
      if (this.props.promo.code !== '') {
        this.setState({
          promo_code_name: this.props.promo.code,
          promo_code_message: this.props.promo.message,
          promo_code_type: this.props.promo.promotype,
          promo_code_value: this.props.promo.value,
        })
        localStorage.setItem('promo_code', this.props.promo.code);
      }
    }
  }

  customerInfoModalOpen() {
    this.setState({
      customer_info_modal_open: true
    })
  }

  customerInfoModalClose() {
    this.setState({
      customer_info_modal_open: false
    })
  }


  checkPromoCode(promocode) {
    // API call to check promo code
    console.log(promocode)
    this.props.actions.getPromo(promocode);
    // If code is valid
    // Set promo_code_name
    
    // Set promo_value_one_time or promo_value_monthly

  }

  nextStep() {
    console.log("Next step, y'all");
    // Determine the current path
    let re = /\/\w\w\/\w/;
    let pathArray = re.exec(window.location.href)
    let current_path = null
    if (pathArray != null) {
      current_path = pathArray[0].replace('#modify','');
    }

    // Run input validaton
    let validation_error = false;
    switch (current_path) {
      case 'internet':
        console.log('Validating interent');
        break;
      case 'tv':
        console.log('Validating tv');
        // Set localStorage 'tv_package_id' to 0 if no selection made
        if (localStorage.getItem('tv_package_id') === null) {
          localStorage.setItem('tv_package_id', 0);
        }
        break;
      case 'phone':
        if (this.state.phone_package_id > 0 && this.state.phone_port === '') {
          this.setState({
            validation_pass_port_number_option: false
          })
          validation_error = true;
        }
        console.log("this.state.phone_port:", this.state.phone_port)
        if (this.state.phone_port === 'YES') {
          // Verify account ownership
          if (this.state.validation_pass_authorized_to_port_number !== true) {
            console.log("this.state.validation_pass_authorized_to_port_number:", this.state.validation_pass_authorized_to_port_number)
            validation_error = true;
            console.log("authorized_to_port_number validation error")
          }
        }
        // Set localStorage 'phone_package_id' to 0 if no selection made
        if (localStorage.getItem('phone_package_id') === null) {
          localStorage.setItem('phone_package_id', 0);
        }
        if (localStorage.getItem('phone_port') === null) {
          localStorage.setItem('phone_port', 'NO');
        }
        break;
      case 'hardware':
        if (this.state.internet_hardware_id === 0) {
          this.setState({
            validation_pass_internet_hardware_option: false
          })
          validation_error = true;
        }
        break;
      case 'service_details':     
        if (this.state.has_active_service === '') {
          this.setState({
            verification_passed_service_status: false
          })
          validation_error = true;
        }

        console.log('validation_error:', validation_error);
        break;
      default:
        console.log('Vaidated');
    }

    // Next Step Decision Tree
    if (!validation_error) {
      if (current_path === 'internet') {
        window.location = "tv"
      } else if (current_path === 'tv') {
        window.location = "phone"
      } else if (current_path === 'phone') {
        window.location = "hardware"
      } else if (current_path === 'hardware') {
        window.location = "service_details"
      } else if (current_path === 'service_details') {
        window.location = "order_review"    
      } else if (current_path === 'order_review') {
        window.location = "thanks"
      } else {
        window.location = "index"
      }
    }
  }

  removePhonePackage() {
    this.setState({
      phone_package_id: 0,
      phone_package_name: '',
      phone_package_fee: 0,
      phone_hardware_id: 0,
      phone_hardware_name: '',
      phone_hardware_one_time_fee: 0,
      phone_port: ''
    })
    // Update localstorage & TTL
    localStorage.setItem('phone_package_id', 0);
    localStorage.setItem('phone_package_name', '');
    localStorage.setItem('phone_package_fee', 0);
    localStorage.setItem('phone_hardware_id', 0);
    localStorage.setItem('phone_hardware_name', '');
    localStorage.setItem('phone_hardware_one_time_fee', 0);
    localStorage.setItem('phone_port', '');
  }

  removeTVPackage() {
    this.setState({
      tv_package_id: 0,
      tv_package_name: '',
      tv_package_fee: 0,
      tv_hardware_id: 0,
      tv_hardware_name: '',
      tv_hardware_one_time_fee: 0,
    })
    // Update localstorage & TTL 
    localStorage.setItem('tv_package_id', 0);
    localStorage.setItem('tv_package_name', '');
    localStorage.setItem('tv_package_fee', 0);
    localStorage.setItem('tv_hardware_id', 0);
    localStorage.setItem('tv_hardware_name', '');
    localStorage.setItem('tv_hardware_one_time_fee', 0);
  }

  setDefaultInternetHardware() {
    // Rent to own Modem and FREE WiFi Router
    // If this.props.packages.hardware hsa bee loaded
    if (this.props.packages.hardware) {
      let hardware = this.props.packages.hardware.find(option => option.description === "Rent to own Modem and FREE WiFi Router");
      console.log("Set Default Internet Hardware:", hardware.id)
      this.setState({
        internet_hardware_id: hardware.id,
        internet_hardware_description: hardware.description,
        internet_hardware_monthly_fee: hardware.monthly_fee,
        internet_hardware_one_time_fee: hardware.initial_cost
      })
  
      // Update localstorage & TTL
      localStorage.setItem('internet_hardware_id', hardware.id);
      localStorage.setItem('internet_hardware_description', hardware.description);
      localStorage.setItem('internet_hardware_monthly_fee', hardware.monthly_fee);
      localStorage.setItem('internet_hardware_one_time_fee', hardware.initial_cost);
    }
  }

  selectInternetHardware(e) {
    console.log("selectInternetHardware(e):", e)
    let hardware = this.props.packages.hardware.find(option => option.id === e.target.value);

    this.setState({
      internet_hardware_id: hardware.id,
      internet_hardware_description: hardware.description,
      internet_hardware_monthly_fee: hardware.monthly_fee,
      internet_hardware_one_time_fee: hardware.initial_cost
    })

    // Update localstorage & TTL
    localStorage.setItem('internet_hardware_id', hardware.id);
    localStorage.setItem('internet_hardware_description', hardware.description);
    localStorage.setItem('internet_hardware_monthly_fee', hardware.monthly_fee);
    localStorage.setItem('internet_hardware_one_time_fee', hardware.initial_cost);
  }

  selectPhoneHardware(e) {
    let hardware = this.props.packages.hardware.find(option => option.id === parseInt(e.currentTarget.value));

    this.setState({
      phone_hardware_id: hardware.id,
      phone_hardware_name: hardware.name,
      phone_hardware_one_time_fee: hardware.initial_cost,
    })
    // Update localstorage & TTL
    localStorage.setItem('phone_hardware_id', hardware.id);
    localStorage.setItem('phone_hardware_name', hardware.name);
    localStorage.setItem('phone_hardware_one_time_fee', hardware.initial_cost);
  }

  selectTVHardware(e) {
    let hardware = this.props.packages.hardware.find(option => option.id === parseInt(e.currentTarget.value));
    console.log("tv hardware:", hardware)
    this.setState({
      tv_hardware_id: hardware.id,
      tv_hardware_name: hardware.name,
      tv_hardware_one_time_fee: hardware.initial_cost,
    })
    // Update localstorage & TTL
    localStorage.setItem('tv_hardware_id', hardware.id);
    localStorage.setItem('tv_hardware_name', hardware.name);
    localStorage.setItem('tv_hardware_one_time_fee', hardware.initial_cost);
  }

  /*
  setInstallationDate(date, preference) {
    let moment_obj = moment(date);

    switch (preference) {
      case 'FIRST':
        localStorage.setItem('selected_installation_date', moment_obj.format('YYYY-MM-DD'));
        this.setState({
          selected_installation_date: moment_obj.format('YYYY-MM-DD'),
          installation_dates_accepted: false
        });
        break;
      case 'SECOND':
        localStorage.setItem('second_installation_date', moment_obj.format('YYYY-MM-DD'));
        this.setState({
          second_installation_date: moment_obj.format('YYYY-MM-DD'),
          installation_dates_accepted: false
        });
        break;
      case 'THIRD':
        localStorage.setItem('third_installation_date', moment_obj.format('YYYY-MM-DD'));
        this.setState({
          third_installation_date: moment_obj.format('YYYY-MM-DD'),
          installation_dates_accepted: false
        });
        break;
    }
  }
  */

  /*
  setInstallationTime(time, preference) {
    // Time change, reset
    localStorage.setItem('installation_dates_accepted', 'NO');

    switch (preference) {
      case 'FIRST':
        localStorage.setItem('selected_installation_time', time);
        this.setState({
          selected_installation_time: time,
          installation_dates_accepted: false
        });
        break;
      case 'SECOND':
        localStorage.setItem('second_installation_time', time);
        this.setState({
          second_installation_time: time,
          installation_dates_accepted: false
        });
        break;
      case 'THIRD':
        localStorage.setItem('third_installation_time', time);
        this.setState({
          third_installation_time: time,
          installation_dates_accepted: false
        });
        break;
    }
  }
  */

  addBaseInternetPackage(option) {
    // Triggered if the customer chooses a TV package without previousy selecting an Interent package
    // this.props.packages.internet has only those packages available to the customer based on their provided address
    let internet_package = [];
    console.log('No Internet package has been selected')
    if (option === 'PHONE') {
      internet_package = this.props.packages.internet.find((item) => item.download_speed >= 5) || this.props.packages.internet[0];
    } else {
      internet_package = this.props.packages.internet.find((item) => item.download_speed >= 10) || this.props.packages.internet[1];
    }
    
    // Default fee is the No Contract fee
    let fee = internet_package.residential_no_contract;
    if (this.state.customer_type === 'RESIDENTIAL') {
      if (this.state.service_contract === '2YR') {
        fee = internet_package.residential_two_year;
      }
    } else {
      if (this.state.service_contract === 'NONE') {
        fee = internet_package.business_no_contract;
      } else {
        fee = internet_package.business_two_year;
      }
    }

    this.setState({
      internet_package_id: internet_package.id,
      internet_package_name: internet_package.title,
      internet_package_fee: fee,
      internet_package_speed: internet_package.download_speed
    })
    
    // Update localstorage & TTL
    localStorage.setItem("internet_package_id", internet_package.id);
    localStorage.setItem("internet_package_name", internet_package.title);
    localStorage.setItem("internet_package_fee", fee);
    localStorage.setItem("internet_package_speed", internet_package.download_speed);
    localStorage.setItem("service_contract", this.state.service_contract);
  }

  // Triggered by the customer when they make a selection
  setInternetPackage(e) {
    let internet_package = this.props.packages.internet.find((item) => item.id === parseInt(e.currentTarget.value));

    // Default fee is the No Contract fee
    let fee = internet_package.residential_no_contract;
    if (this.state.customer_type === 'RESIDENTIAL') {
      if (this.state.service_contract === '2YR') {
        fee = internet_package.residential_two_year;
      }
    } else {
      if (this.state.service_contract === 'NONE') {
        fee = internet_package.business_no_contract;
      } else {
        fee = internet_package.business_two_year;
      }
    }

    this.setState({
      internet_package_id: internet_package.id,
      internet_package_name: internet_package.title,
      internet_package_fee: fee,
      internet_package_speed: internet_package.download_speed
    })
    
    // Update localstorage & TTL
    localStorage.setItem("internet_package_id", internet_package.id);
    localStorage.setItem("internet_package_name", internet_package.title);
    localStorage.setItem("internet_package_fee", fee);
    localStorage.setItem("internet_package_speed", internet_package.download_speed);
    localStorage.setItem("service_contract", this.state.service_contract);

    // Reset Internet Hardware - localStorage & local state
    console.log("Resetting Internet Hardware...")
    localStorage.removeItem('internet_hardware_id');
    localStorage.removeItem('internet_hardware_description');
    localStorage.removeItem('internet_hardware_monthly_fee');
    localStorage.removeItem('internet_hardware_one_time_fee');
    this.setState({
      internet_hardware_id: 0,
      internet_hardware_description: '',
      internet_hardware_monthly_fee: 0,
      internet_hardware_one_time_fee: 0
    });
  }

  setPhonePackage(e) {
    let phone_package = this.props.packages.phone.find((item) => item.id === parseInt(e.currentTarget.value));
    let hardware = this.props.packages.hardware.find(option => option.name === 'Grandstream GS-HT801');
    // If no Internet package has been set, add a phone level plan
    if (this.state.internet_package_id === '') {
      this.addBaseInternetPackage('PHONE')
    }

    this.setState({
      phone_package_id: phone_package.id,
      phone_package_name: phone_package.title,
      phone_package_fee: phone_package.price,
      phone_hardware_id: hardware.id,
      phone_hardware_name: hardware.name,
      phone_hardware_one_time_fee: hardware.initial_cost,
    })
    // Update localstorage & TTL
    localStorage.setItem('phone_package_id', phone_package.id);
    localStorage.setItem('phone_package_name', phone_package.title);
    localStorage.setItem('phone_package_fee', phone_package.price);
    localStorage.setItem('phone_hardware_id', hardware.id);
    localStorage.setItem('phone_hardware_name', hardware.name);
    localStorage.setItem('phone_hardware_one_time_fee', hardware.initial_cost);

  }

  setServiceContract(e) {
    // Update selected package pricing, if selected, to align with service package
    let internet_package = this.props.packages.internet.find((item) => item.id === parseInt(this.state.internet_package_id));
    let fee = 0;
    console.log("typeof internet_package:", typeof internet_package)
    if(typeof internet_package !== "undefined") {
      console.log("internet_package:", internet_package)
      fee = internet_package.residential_no_contract;
      if (this.state.customer_type === 'RESIDENTIAL') {
        if (e.currentTarget.value === '2YR') {
          console.log("1")
          fee = internet_package.residential_two_year;
        } else {
          console.log("2")
          fee = internet_package.residential_no_contract
        }
      } else {
        if (e.currentTarget.value === 'NONE') {
          console.log("3")
          fee = internet_package.business_no_contract;
        } else {
          console.log("4")
          fee = internet_package.business_two_year;
        }
      }
    }

    this.setState({
      internet_package_fee: fee,
      service_contract: e.currentTarget.value
    })
    localStorage.setItem("service_contract", e.currentTarget.value);
    localStorage.setItem("internet_package_fee", fee);
  }

  setTVPackage(e) {
    let tv_package = this.props.packages.tv.find((item) => item.id === parseInt(e.currentTarget.value));
    // If no Internet package has been set, add a TV level plan
    console.log('setTVPackage')
    if (this.state.internet_package_id === '') {
      this.addBaseInternetPackage('TV')
    }

    this.setState({
      tv_package_id: tv_package.id,
      tv_package_name: tv_package.title,
      tv_package_fee: tv_package.price,
    })
    // Update localstorage & TTL
    localStorage.setItem('tv_package_id', tv_package.id);
    localStorage.setItem('tv_package_name', tv_package.title);
    localStorage.setItem('tv_package_fee', tv_package.price);
  }

  updateAddress() {
    //console.log("Update address called from within React");
    window.updateServiceAddress();
  }
  
  /*
  updateCurrentServiceProvider(provider) {
    // Set localStorage value for active service provider
    localStorage.setItem("current_service_provider", provider);
  }
  */

  updateServiceStatus(val) {
    let has_active_service = 'NO';
    if (val === 'YES') {
      has_active_service = 'YES';
    }
    this.setState({
      has_active_service: has_active_service,
      verification_passed_service_status: true
    })
    // Set localStorage value
    localStorage.setItem("has_active_service", has_active_service);
  }

  updatePhonePortOption(val) {
    let phone_port = 'NO';
    if (val === 'YES') {
      phone_port = 'YES';
    }
    this.setState({
      phone_port: phone_port,
      validation_pass_port_number_option: true
    })
    // Set localStorage value
    localStorage.setItem("phone_port", phone_port);
  }

  updatePhonePortAuthorization(authorization) {
    console.log("updatePhonePortAuthorization:", authorization)
    let phone_port_authorization = 'NO';
    if (authorization === true) {
      phone_port_authorization = 'YES';
      this.setState({
        phone_port_authorization: phone_port_authorization,
        validation_pass_authorized_to_port_number: true
      })
    } else {
      this.setState({
        phone_port_authorization: phone_port_authorization,
        validation_pass_authorized_to_port_number: false
      })
    }
    // Set localStorage value
    localStorage.setItem("phone_port_authorization", phone_port_authorization);
  }


  // This function is attached to the global scope so it can be triggered from an external address lookup click event
  innerfunc() {
    console.log("Running innerfunc()!")
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#ee3832',
          dark: '#cc302b'
        },
        secondary: {
          main: '#119cb0',
          dark: '#0f8294'
        },
      },
    });

    let internet_packages = [];
    let phone_packages = [];
    let tv_packages = [];
    let hardware = [];

    if (this.props.packages.internet !== undefined) {
      internet_packages = this.props.packages.internet
    }

    if (this.props.packages.phone !== undefined) {
      phone_packages = this.props.packages.phone
    }

    if (this.props.packages.tv !== undefined) {
      tv_packages = this.props.packages.tv
    }

    if (this.props.packages.hardware !== undefined) {
      hardware = this.props.packages.hardware
      //console.log('hardware:', hardware)
    }

    const order_data = {
      internet_package_fee: this.state.internet_package_fee,
      internet_package_id: this.state.internet_package_id,
      internet_package_name: this.state.internet_package_name,
      internet_package_speed: this.state.internet_package_speed,
      province: this.state.province,
      service_address: this.state.service_address,
      service_contract: this.state.service_contract,
      customer_type: this.state.customer_type,
      tv_package_id: this.state.tv_package_id,
      tv_package_name: this.state.tv_package_name,
      tv_package_fee: this.state.tv_package_fee,
      phone_package_id: this.state.phone_package_id,
      phone_package_name: this.state.phone_package_name,
      phone_package_fee: this.state.phone_package_fee,
      internet_hardware_id: this.state.internet_hardware_id,
      internet_hardware_description: this.state.internet_hardware_description,
      internet_hardware_monthly_fee: this.state.internet_hardware_monthly_fee,
      internet_hardware_one_time_fee: this.state.internet_hardware_one_time_fee,
      tv_hardware_id: this.state.tv_hardware_id,
      tv_hardware_name: this.state.tv_hardware_name,
      tv_hardware_one_time_fee: this.state.tv_hardware_one_time_fee,
      phone_hardware_id: this.state.phone_hardware_id,
      phone_hardware_name: this.state.phone_hardware_name,
      phone_hardware_one_time_fee: this.state.phone_hardware_one_time_fee,
      has_active_service: this.state.has_active_service,
      phone_port: this.state.phone_port,
      selected_installation_date: this.state.selected_installation_date,
      selected_installation_time: this.state.selected_installation_time,
      promo_code_name: this.state.promo_code_name,
      promo_code_message: this.state.promo_code_message,
      promo_code_type: this.state.promo_code_type,
      promo_code_value: this.state.promo_code_value,

      verification_passed_service_status: this.state.verification_passed_service_status,
      validation_pass_port_number_option: this.state.validation_pass_port_number_option,
      validation_pass_authorized_to_port_number: this.state.validation_pass_authorized_to_port_number,
      validation_pass_internet_hardware_option: this.state.validation_pass_internet_hardware_option
    }

    return (
      <ThemeProvider theme={theme}>
        {/*<Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.customer_info_modal_open}
          onClose={this.customerInfoModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.customer_info_modal_open}>
            <div className=" w-10/12 md:w-1/2 shadow rounded-lg bg-white mx-auto pb-6 mt-24 md:mt-48">
              <div className="bg-canfone-teal rounded-t-lg text-white">
                <div className="p-3">
                  <h2 className="text-2xl font-semibold pt-2 text-center">Great, let's get started on your order!</h2>
                  <p className="py-3 px-6 lg:px-24 text-sm text-center">Please enter your name and phone number.</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-white px-4 pt-4">
                  <form noValidate autoComplete="off">
                    <div className="px-4">
                      <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                      />
                    </div>
                    <div className="py-2 px-4">
                      <TextField
                        id="phone"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        color="secondary"
                      />
                    </div>
                  </form>
                  <div className="text-right mr-4 mt-3">
                    <button 
                      className="bg-canfone-teal hover:bg-canfone-teal-dark text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                      type="button">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>*/}

        <div className="lg:flex">
          <div className="lg:flex-1 px-3">
            <Router>
              <Internet 
                path="internet"
                packages={internet_packages}
                order_data={order_data}
                setInternetPackage={this.setInternetPackage}
                setServiceContract={this.setServiceContract}
              />
              <TV 
                path="tv" 
                packages={tv_packages}
                order_data={order_data}
                setTVPackage={this.setTVPackage}
              />
              <Phone 
                path="phone" 
                packages={phone_packages}
                order_data={order_data}
                setPhonePackage={this.setPhonePackage}
                updatePhonePortOption={this.updatePhonePortOption}
                updatePhonePortAuthorization={this.updatePhonePortAuthorization}
              />
              <Hardware 
                path="hardware" 
                hardware_options={hardware}
                order_data={order_data}
                selectInternetHardware={this.selectInternetHardware}
                selectTVHardware={this.selectTVHardware}
                selectPhoneHardware={this.selectPhoneHardware}
              />
              <ServiceDetails 
                path="service_details"
                order_data={order_data}
                //setInstallationDate={this.setInstallationDate}
                //setInstallationTime={this.setInstallationTime}
                updateAddress={this.updateAddress}
                updateServiceStatus={this.updateServiceStatus}
                //updatePhonePortOption={this.updatePhonePortOption}
              />
              <OrderReview 
                path="order_review"
                order_data={order_data}
                checkPromoCode={this.checkPromoCode}
                setDefaultInternetHardware={this.setDefaultInternetHardware}
              />
            </Router>
          </div>
          <div className="md:ml-0 md:pr-3">
            <OrderSheet
              order_data={order_data}
              removePhonePackage={this.removePhonePackage}
              removeTVPackage={this.removeTVPackage}
              nextStep={this.nextStep}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return { 
    packages: state.packages,
    promo: state.promo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPricing: bindActionCreators(getPricing, dispatch),
      getPromo: bindActionCreators(getPromo, dispatch),
    }
  };
}

Shop.propTypes = {
  height: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
