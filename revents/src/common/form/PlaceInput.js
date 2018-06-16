import React from 'react';
import { Form, Label, Segment } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete';

const style = {
  autocompleteContainer: {
    zIndex: '100'
  }
};

class PlaceInput extends React.Component {
  state = {
    address: '',
    scriptLoaded: false
  };
  handleChange = (address) => this.setState({address});
  handleScriptLoaded = () => this.setState({scriptLoaded: true});
  renderFormField = ({ getInputProps, suggestions, getSuggestionItemProps }) => {
    <Form.Field>
      {suggestions.map((suggestion) => (
        <div {...getSuggestionItemProps(suggestion)} style={{cursor: 'pointer'}}>
        {suggestion.description}
        </div>
      ))}
    </Form.Field>
  }
  render() {
    const {input, value, width, onSelect, onChange, placeholder, options, meta: {touched, error}} = this.props;
    return(
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9xXWDg0V3q9bc0M2Jhsyks6R4qTJlNaA&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded &&
        <PlacesAutocomplete
          value={this.state.address}
          inputProps={{...input, placeholder}}
          options={options}
          onSelect={onSelect}
          onChange={this.handleChange}
          style={style}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
         <div>
           <input
             {...getInputProps({
              placeholder
             })}
            />
           <Segment.Group suggestions={suggestions}>
             {suggestions.map((suggestion) => (
             <Segment {...getSuggestionItemProps(suggestion)} style={{cursor: 'pointer'}}>
               {suggestion.description}
             </Segment>
             ))}
           </Segment.Group>
         </div>
         )}
        </PlacesAutocomplete>}
      </Form.Field>
    //   <div>
    //     <Script
    //        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9xXWDg0V3q9bc0M2Jhsyks6R4qTJlNaA&libraries=places"
    //        onLoad={this.handleScriptLoaded}
    //     />
    //     {this.state.scriptLoaded &&
    //     <PlacesAutocomplete
    //       value={this.state.address}
    //       inputProps={{...input, placeholder}}
    //       options={options}
    //       onSelect={onSelect}
    //       onChange={this.handleChange}
    //       style={style}
    //     >
    //     {this.renderFormField()}
    //   </PlacesAutocomplete>}
    // </div>
    )
  }
};

export default PlaceInput;
