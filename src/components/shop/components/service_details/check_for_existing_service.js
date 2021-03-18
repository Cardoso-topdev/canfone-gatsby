import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Alert, AlertTitle } from '@material-ui/lab';
import { GATSBY_IMGS } from "utils/imgloader"

const useStyles = makeStyles(theme => ({
  alert_root: {
    width: '100%',
    borderRadius: 0,
    '& > *': {
      borderRadius: 0,
    },
  },  
  formControl: {
    width: '75%',
  },
  radio_btns: {
    alignItems: 'flex-start',
    paddingTop: '0',
    '& after': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function CheckForExistingService({order_data, updateServiceStatus}) {
  const classes = useStyles();

  const [show_ISP_drop_form, setISPDropFormViewble] = React.useState(order_data.has_active_service || false);
  const [show_current_provider_form, setCurrentProviderFormViewable] = React.useState(false);

  const [has_active_service, setServiceStatus] = React.useState(order_data.has_active_service || '');
  const handleServiceStatusChange = (event) => {
    setServiceStatus(event.target.value);
    updateServiceStatus(event.target.value); // For validation when ordersheet next is clicked
    setCurrentPovider('')
    if (typeof window !== 'undefined')
      localStorage.setItem('current_provider', '');
    if (event.target.value === 'YES') {
      setCurrentProviderFormViewable(true);
      setISPDropFormViewble(false);
      setDropType('');
      if (typeof window !== 'undefined')
        localStorage.setItem("existing_drop", '');
    } else {
      setCurrentProviderFormViewable(false);
      setISPDropFormViewble(true);
    }
  };

  const [current_provider, setCurrentPovider] = React.useState((typeof window !== 'undefined') ? (localStorage.getItem('current_provider') || '') : '');
  const handleCurrentProviderChange = (event) => {
    setCurrentPovider(event.target.value);
    if (typeof window !== 'undefined')
      localStorage.setItem('current_provider', event.target.value);
  }

  const [drop_type, setDropType] = React.useState((typeof window !== 'undefined') ? (localStorage.getItem('existing_drop') || '') : '');
  const handleDropTypeChange = (event) => {
    setDropType(event.target.value);
    if (typeof window !== 'undefined')
      localStorage.setItem("existing_drop", event.target.value);
  }

  // const [age, setAge] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className={clsx("mb-6 mx-6 pb-6 border border-gray-600 shadow-md", !order_data.verification_passed_service_status && 'border-red-600')}>
      {(order_data.verification_passed_service_status) ?
        null
        :
        <div className={classes.alert_root}>
          <Alert severity="error" variant="filled">
            <AlertTitle>Error</AlertTitle>
            We're missing a selection here.
          </Alert>
        </div>
      }
      <div className="px-6">
        <h2 className="text-xl md:text-2xl font-semibold pt-2 grey-750">Does this address currently have active Internet service?</h2>
        <FormControl component="fieldset">
          <RadioGroup aria-label="has_active_service" name="has_active_service" value={has_active_service} onChange={handleServiceStatusChange}>
            <div className="md:flex md:content-start px-0 md:px-10 pt-6 pb-5">
              <div className="md:w-1/2 px-1 md:px-3 pt-3 md:pt-0">
                <FormControlLabel value={'NO'} className={classes.radio_btns} control={<Radio style={{ paddingTop: 0 }} />} label="No, there is no service at this location." />
              </div>
              <div className="md:w-1/2 align-top px-1 md:px-3">
                <FormControlLabel value={'YES'} className={classes.radio_btns} control={<Radio style={{ paddingTop: 0 }} />} label="Yes, this location has Internet service but I want to switch to Canfone." />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
        {show_ISP_drop_form &&
          <div className="pt-2 pb-4 px-2 md:px-12 border-t border-gray-400">
            <h2 className="text-base font-semibold pt-3 pb-6 grey-600">Please indicate whether there is a pre-existing ISP drop point at this location:</h2>
            <FormControl component="fieldset">
              <RadioGroup aria-label="network-drop" name="network-drop" value={drop_type} onChange={handleDropTypeChange}>
                <div className="flex justify-between mx-4">
                  <div className="mx-4 text-center">
                    <img src={GATSBY_IMGS["img/network-drop-cable.png"]} className="border border-gray-500 mb-2" alt="" />
                    <FormControlLabel 
                      value="Cable" 
                      control={<Radio />} 
                      labelPlacement="top" 
                      label="Cable" 
                    />
                  </div>

                  <div className="mx-4 text-center">
                    <img src={GATSBY_IMGS["img/network-drop-dsl.png"]} className="border border-gray-500 mb-2" alt="" />
                    <FormControlLabel 
                      value="DSL" 
                      control={<Radio />} 
                      labelPlacement="top" 
                      label="DSL" 
                    />
                  </div>

                  <div className="mx-4 text-center">
                    <img src={GATSBY_IMGS["img/network-drop-none.png"]} className="border border-gray-500 mb-2" alt="" />
                    <FormControlLabel 
                      value="None" 
                      control={<Radio />} 
                      labelPlacement="top" 
                      label="None" 
                    />
                  </div>

                  <div className="mx-4 text-center">
                    <img src={GATSBY_IMGS["img/network-drop-unknown.png"]} className="border border-gray-500 mb-2" alt="" />
                    <FormControlLabel 
                      value="Unknown" 
                      control={<Radio />} 
                      labelPlacement="top" 
                      label="Unknown" 
                    />
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        }
        {show_current_provider_form &&
          <div className="pt-2 pb-4 px-2 md:px-16 border-t border-gray-400">
            <h2 className="text-base font-semibold pt-2 mb-6 grey-600">Who is the current service provider?</h2>
            <div className="pb-4">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel 
                  id="current-provider-form-label" 
                  color="secondary"
                >
                  Current Provider
                </InputLabel>
                <Select
                  labelId="current-provider"
                  id="current-provider"
                  color="secondary"
                  value={current_provider}
                  onChange={handleCurrentProviderChange}
                  label="Current Provider"
                >
                  <MenuItem value={'Cogeco'}>Cogeco</MenuItem>
                  <MenuItem value={'Eastlink'}>Eastlink</MenuItem>
                  <MenuItem value={'MTS'}>MTS</MenuItem>
                  <MenuItem value={'Rogers'}>Rogers</MenuItem>
                  <MenuItem value={'Shaw'}>Shaw</MenuItem>
                  <MenuItem value={'Telus'}>Telus</MenuItem>
                  <MenuItem value={'Videotron'}>Videotron</MenuItem>
                  <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default CheckForExistingService;