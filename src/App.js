import React from "react";
import { connect } from "react-redux";
import { tripAction } from "./redux/tripAction";
import loadingGif from "./assets/loading.svg";
import { TripItem } from "./tripItem/tripItem";
import { StyledTripWrapper, StyledAppContainer } from "./App.styled";

class App extends React.Component {
  componentDidMount() {
    this.props.tripAction();
  }

  render() {
    const { data, fetchTripRequest } = this.props;

    return (
      <StyledAppContainer>
        {fetchTripRequest ? (
          <img src={loadingGif} alt="loading" />
        ) : (
            <StyledTripWrapper>
              {data.trips.map(trip => (
                <TripItem key={trip.trip_id} tripData={trip} />
              ))}
            </StyledTripWrapper>
          )}
      </StyledAppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    fetchTripRequest: state.fetchTripRequest
  };
};

const mapDispatchToProps = {
  tripAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
