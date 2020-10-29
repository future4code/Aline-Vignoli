import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filter from './Filter';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ActivitiesContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 2.5vh;
  background-color: rgba(22, 30, 218, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const ActivityButton = styled.button`
	background-color:#44C767;
	border-radius:5px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#FFF;
	font-family: "Arial Black", Gadget, sans-serif;
	font-size:17px;
    font-weight: bold;
	padding:16px 31px;
	text-decoration:none;
    &:hover {
	background-color:#3EA359;
    
    &:active {
	position:relative;
	top:1px;
    }
}
`

const InfosTittle = styled.h4`
    margin-bottom: 0;
`

const StyledP = styled.p`
    margin-top: 5px;
    padding: 1em;
    border-radius: 5px;
    background-color: #FFF;
`

class Activities extends React.Component {

    state = {
        firstTime: true,
        activityData: null
    }
    
    getActivity = () => {
        const baseUrl = "http://www.boredapi.com/api/activity/"
        axios.get(baseUrl).then((response)=> {
            this.setState({ firstTime: false, activityData: response.data })
        })
    }
    
    getActivityByType = (type) => {
        const baseUrl = `http://www.boredapi.com/api/activity?type=${type}`
        axios.get(baseUrl).then((response)=> {
          this.setState({ activityData: response.data })
        }).catch (error => {
          console.log(error.message)
        })
    }

    render(){
        const activityInfos = (
            this.state.activityData &&
            <div>
                <InfosTittle>Activity</InfosTittle>
                <StyledP>{this.state.activityData.activity}</StyledP>
                <InfosTittle>Type</InfosTittle>
                <StyledP>{this.state.activityData.type}</StyledP>
                <InfosTittle>Number of participants</InfosTittle>
                <StyledP>{this.state.activityData.participants}</StyledP>
                <InfosTittle>Price</InfosTittle>
                <StyledP>{this.state.activityData.price}</StyledP>
            </div>
        )

        return (
            <MainContainer>
                <ActivitiesContainer>
                <ActivityButton 
                    onClick={this.getActivity}>{this.state.firstTime ? "TELL ME WHAT TO DO" : "WHAT ELSE?"}
                </ActivityButton>
                    {activityInfos}        
                </ActivitiesContainer>
                <Filter getActivityByType={this.getActivityByType}/>
            </MainContainer>
        );
    }
}
  
export default Activities;