import React from "react";
import {
  StyledTripItemGroup,
  StyledTripLabel,
  StyledTripContent,
  StyledTripItem,
  StyledTripImg
} from "./tripItem.styled";
import { convertSecondToHours, convertToLongDate } from "../helpers";
import tripImg from "../assets/trip_img.jpg";

export const TripItem = ({ tripData }) => {
  return (
    <StyledTripItem>
      <StyledTripItemGroup>
        <StyledTripImg src={tripImg} alt="trip-placeholder" />
      </StyledTripItemGroup>
      <StyledTripItemGroup>
        <StyledTripLabel>Duration</StyledTripLabel>
        <StyledTripContent>
          {convertSecondToHours(tripData.duration)}
        </StyledTripContent>
      </StyledTripItemGroup>
      <StyledTripItemGroup>
        <StyledTripLabel>Distance</StyledTripLabel>
        <StyledTripContent>{tripData.distance} km</StyledTripContent>
      </StyledTripItemGroup>
      <StyledTripItemGroup>
        <StyledTripLabel>Start Time</StyledTripLabel>
        <StyledTripContent>
          <div>{convertToLongDate(tripData.start_time).time}</div>
          <div>{convertToLongDate(tripData.start_time).date}</div>
        </StyledTripContent>
      </StyledTripItemGroup>
      <StyledTripItemGroup>
        <StyledTripLabel>End Time</StyledTripLabel>
        <StyledTripContent>
          <div>{convertToLongDate(tripData.start_time).time}</div>
          <div>{convertToLongDate(tripData.start_time).date}</div>
        </StyledTripContent>
      </StyledTripItemGroup>
    </StyledTripItem>
  );
};
