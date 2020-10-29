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
  background-color: #CDCDCD;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const Content = styled.div`
    flex-grow: 1;
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
        activityData: null
    }
    
    getActivity = () => {
        const baseUrl = "http://www.boredapi.com/api/activity/"
        axios.get(baseUrl).then((response)=> {
            this.setState({ activityData: response.data })
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
                    <button onClick={this.getActivity}>Sugest me an activity</button>
                    <Content>
                        {activityInfos}   
                    </Content>          
                </ActivitiesContainer>
                <Filter getActivityByType={this.getActivityByType}/>
            </MainContainer>
        );
    }
}
  
export default Activities;