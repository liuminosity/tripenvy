var React = require('react');
var GoogleMap = require('./mappy');
var NavBar = require('./NavBar');
var MapModal = require('./MapModal');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var HomePage = React.createClass({

  // triggerModal: function openModal() {
  //   this.props.openModal();
  // },

  render: function() {
    var cities = [];
    for (var key in this.props.allData) {
      cities.push(this.props.allData[key]);
    }
    console.log('this is cities', cities);

    return (
      <div>
        <NavBar />
        <GoogleMap openModal={this.props.openModal} cities={cities}/>
        <MapModal 
          showModal={this.props.showModal} 
          close={this.props.closeModal} 
          toggleActivities={this.props.toggleActivities}
          showActivities={this.props.showActivities}
          cities={cities}
          selectedCityIndex={this.props.selectedCityIndex}
          showMoreInfo={this.props.showMoreInfo}
          toggleMoreInfo={this.props.toggleMoreInfo}
          selectedExperienceIndex={this.props.selectedExperienceIndex}/>
      </div>
    );
  }

});

module.exports = HomePage;
