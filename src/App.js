import React from 'react';

import { connect } from 'react-redux'
import { addFeature, removeFeature } from '../src/actions/action'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

const App = (props) => {

  const addFeature = item => {
    props.addFeature(item)
  };

  const removeFeature = item => {
    props.removeFeature(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures  addFeature={addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


export default connect(mapStateToProps, {addFeature, removeFeature}) (App);
