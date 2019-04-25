// @flow
import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import throttle from "lodash/throttle";
import { connect } from "react-redux";
import { withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps";

import {
  AutoSelect,
  Div,
  FormComponent,
  FormInput,
  globals,
  Icon,
  Notification,
  Option,
  Select as FormSelect,
  StateAddressVicinityContainer,
  Summary,
  Tooltip,
  WizardWrapper
} from "../components/index";
import AutocompleteInput from "./Autocomplete";
import { sortAddress, getAddressValue } from "./utils";
import markerLogo from "./marker.svg";
import { mapStateToProps, UPDATE_ALL_FIELDS, State } from "./reducers";
const { siteText } = globals;
export const HelpBlock = styled.div`
  margin-top: 8px;
`;
const WorldIcon = styled.div`
  margin-top: 19px;
  & i {
    font-size: 65px;
  }
`;

export const FindableAddress = () => (
  <Tooltip icon="lightbulb-o">
    <h3>Use a findable address</h3>
    <Summary>
      <span>
        Please use an address that is findable in the map so clients can find
        you.
      </span>
      <br />
    </Summary>
    <WorldIcon>
      <Icon name="globe" />
    </WorldIcon>
  </Tooltip>
);
export const IconStyle = styled.div`
  cursor: pointer;
  margin-top: 21px;
  margin-bottom: 20px;
  ${siteText} font-size: 17px;
  line-height: 22px;
  font-size: 18px;
  padding-top: 14px;
  & > i {
    font-size: 21px;
    color: #36b37e;
    margin-right: 10px;
  }
`;
export const FaSpinner = styled.div`
  height: 100%;
  & > i {
    display: block;
    width: 80px;
    height: 80px;
    margin: 150px auto;
    animation: fa-spin 2s infinite linear;
  }
`;
type MapProps = {
  customErrorMessages: Function,
  fieldHasError: Function,
  updateField: Function,
  updateStateAndVicinity: Function,
  errorMessageForField: Function,
  states: Array<string>,
  ...State
};
const MapComponent = props => {
  const marker = props.marker;
  const onDragEnd = ({ latLng }) => {
    const latitude = latLng.lat();
    const longitude = latLng.lng();
    props.onDragEnd({ latitude, longitude });
  };
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={marker}
      onClick={props.onMapClick}
    >
      <Marker
        position={marker}
        defaultAnimation={2}
        draggable={true}
        icon={markerLogo}
        onDragEnd={onDragEnd}
      />
      <Circle
        center={marker}
        radius={500}
        options={{
          fillColor: `#36D37E`,
          fillOpacity: 0.29,
          strokeColor: `#36D37E`,
          strokeOpacity: 1,
          strokeWeight: 2
        }}
      />
    </GoogleMap>
  );
};
const MAP = withScriptjs(withGoogleMap(MapComponent));
class MapForm extends React.Component<MapProps> {
  onInputBlur = e => {
    this.props.updateField(e.target.value, "address");
  };
  render() {
    const { states } = this.props;
    const state = this.props;
    return (
      <form>
        <FormComponent label="Street Address">
          <AutocompleteInput
            value={state.address}
            placeDataResult={state.updateStateAndVicinity}
          >
            <FormInput
              type="text"
              onBlur={this.onInputBlur}
              placeholder="e.g. Saint John Street, Gowon Estate, Ipaja"
            />
          </AutocompleteInput>
        </FormComponent>
        <StateAddressVicinityContainer>
          <FormComponent label="State" noColumn>
            <FormSelect
              noColumn
              value={state.state}
              onChange={val => state.updateField(val, "state")}
              className="select"
            >
              <Option value="">State</Option>
              {states.map((state, index) => (
                <Option key={"states_" + index} value={state}>
                  {state}
                </Option>
              ))}
            </FormSelect>
          </FormComponent>
          <FormComponent label="Vicinity" noColumn>
            <AutoSelect
              value={state.vicinity}
              promptText="Create Option "
              placeholder="Vicinity..."
              onChange={value => {
                if (!!value) {
                  state.updateField(value, "vicinity");
                }
              }}
              items={["apple", "pear", "orange", "grape", "banana"]}
            />
          </FormComponent>

          <FormComponent label={`Where in [${state.vicinity}]?`} noColumn>
            <AutoSelect
              value={state.area}
              promptText="Create Option "
              placeholder="Type your city"
              onChange={value => {
                if (!!value) {
                  state.updateField(value, "area");
                }
              }}
              items={["apple", "pear", "orange", "grape", "banana"]}
            />
          </FormComponent>
        </StateAddressVicinityContainer>
        {/* {fieldHasError("state") ||
        fieldHasError("vicinity") ||
        fieldHasError("area") ? (
          <Column className="c-errmessage">
            <ErrorBlock>
              {customErrorMessages("state", "vicinity", "area")}
            </ErrorBlock>
          </Column>
        ) : null} */}
        <FormComponent>
          {state.display_error ? (
            <Notification
              icon
              customIcon={
                state.hasError() ? "check-circle" : "exclamation-circle"
              }
              className={state.hasError() ? "success" : "error"}
              style={{
                fontSize: 18,
                paddingLeft: 15,
                textAlign: "left",
                display: "flex"
              }}
            >
              <span style={{ color: "#484848" }}>
                {state.getErrorMessage()}
              </span>
            </Notification>
          ) : null}
          {this.props.children}
        </FormComponent>
      </form>
    );
  }
}
class AddressPage extends React.Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.state = {
      address: "",
      latitude: null,
      longitude: null,
      state: "",
      vicinity: "",
      area: "",
      geocodedAddress: false,
      display_error: false,
      customErrorMessage: ""
    };
  }
  onChange = address => {
    this.setState(state => ({ ...state, address }));
  };
  onDragend = ({ latitude, longitude }) => {
    // this.setState(state=>({...state, latitude,longitude}))
    this.geocoder = new window.google.maps.Geocoder();
    this.geocoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        if (status === "OK") {
          console.log(results);
          this.updateStateAndVicinity(results[0]);
        }
      }
    );
  };
  updateField = (value, key) => {
    this.setState(state => {
      const result = { ...state, [key]: value, display_error: true };
      if (["state", "vicinity", "address"].indexOf(key) > -1) {
        throttle(
          () => {
            this.geocodeStateAndVicinity(state);
          },
          1000,
          { trailing: true }
        )();
      }
      return result;
    });
  };
  geocodingAction(address, onSuccess, onError = () => {}) {
    if (this.geocoder === undefined) {
      this.geocoder = new window.google.maps.Geocoder();
    }
    this.geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        if (results.length > 0) {
          onSuccess(results);
        }
      }
      if (status === "ZERO_RESULTS") {
        onError();
      }
    });
  }
  geocodeStateAndVicinity(state) {
    let address = `${state.vicinity} ${state.state}`.trim();
    if (this.geocoder === undefined) {
      this.geocoder = new window.google.maps.Geocoder();
    }
    const onSuccess = results => {
      const first_location = results[0].geometry.location;
      this.updateLatitudeAndLongitude(
        first_location.lat(),
        first_location.lng()
      );
    };
    const onError = () => {
      let newAddress = `${state.vicinity} ${state.state}`.trim();
      this.geocodingAction(newAddress, onSuccess);
    };
    if (state.vicinity && state.state && state.vicinity.length > 2) {
      this.geocodingAction(address, onSuccess, onError);
    }
  }
  updateLatitudeAndLongitude = (latitude, longitude) => {
    this.setState(state => {
      const result = {
        ...state,
        latitude,
        longitude,
        geocodedAddress: true,
        customErrorMessage: ""
      };
      this.node.panTo(new window.google.maps.LatLng(latitude, longitude));

      return result;
    });
  };
  updateStateAndVicinity = data => {
    console.log(data);
    this.setState(state => {
      let address = data.name || getAddressValue(data.address_components);
      let components = sortAddress(data.address_components);
      let latitude = data.geometry.location.lat();
      let longitude = data.geometry.location.lng();
      let result = {
        ...state,
        ...components,
        latitude,
        longitude,
        address,
        geocodedAddress: true
      };
      this.node.panTo(new window.google.maps.LatLng(latitude, longitude));
      return result;
    });
  };
  addressError = () => {
    const { area, vicinity } = this.state;

    return !!area === false || !!vicinity === false || area === vicinity;
  };
  getErrorMessage = () => {
    const { geocodedAddress } = this.state;
    let errorMessage = geocodedAddress
      ? "Nice! We found you on the map"
      : "Problemo! We couldn’t find you on the map. Drag the pointer to a close location";
    if (this.state.customErrorMessage) return this.state.customErrorMessage;
    if (this.addressError()) {
      errorMessage =
        "Please ensure you input an area and it isn't the same with the vicinity.";
    }
    return errorMessage;
  };
  hasError = () => {
    const { geocodedAddress } = this.state;
    const address_error = this.addressError();
    if (address_error) return false;
    return geocodedAddress;
  };
  previousPage = () => {
    this.props.navigateTo(0, "", "personal-info");
  };
  nextPage = () => {
    const { address, state, vicinity, area, latitude, longitude } = this.state;
    if (!this.hasError() === false) {
      this.props.dispatch({
        type: UPDATE_ALL_FIELDS,
        value: {
          address,
          state,
          vicinity,
          area,
          latitude,
          longitude
        }
      });
      this.props.navigateTo(0, 20, "location", "qualifications");
    }
  };

  render() {
    const lat = this.state.latitude || 6.5244;
    const lng = this.state.longitude || 3.3792;
    const getProgress = () => {
      const progress = this.props.progressBar.reduce(
        (sum, value) => sum + value,
        0
      );
      return progress;
    };
    return (
      <WizardWrapper
        nextButtonText="Add Education and Work"
        showNextScreen={!this.hasError()}
        goToNextScreen={this.nextPage}
        showPreviousScreen={true}
        goToPreviousScreen={this.previousPage}
        title="Basic profile"
        progress={getProgress()}
      >
        <Column xs={12} sm={12} md={12} lg={8}>
          <Column>
            <Div>
              <h2>Where are you located?</h2>
              <p>
                Enter the address where you will be taking lessons from. We use
                this to connect you to clients who need your services around
                your area.
              </p>
            </Div>
          </Column>
          <MAP
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&region=NG&key=AIzaSyDAvNoFgRj4cp8OztTW8YD87C6-uMXsMHQ"
            loadingElement={
              <FaSpinner>
                <Icon name="spinner" />
              </FaSpinner>
            }
            containerElement={
              <MapForm
                updateField={this.updateField}
                updateStateAndVicinity={this.updateStateAndVicinity}
                states={this.props.states}
                hasError={this.hasError}
                getErrorMessage={this.getErrorMessage}
                {...this.state}
              />
            }
            mapElement={<div style={{ height: `400px` }} />}
            onMapLoad={e => {
              this.node = e;
            }}
            onMapClick={() => {}}
            onDragEnd={this.onDragend}
            marker={{ lat, lng }}
            onMarkerRightClick={() => {}}
          />
        </Column>
        <Column md={4}>
          <FindableAddress />
        </Column>
      </WizardWrapper>
    );
  }
}

export default connect(mapStateToProps)(AddressPage);
