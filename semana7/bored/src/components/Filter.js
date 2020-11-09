import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: "Arial Black", Gadget, sans-serif;
    color: #FFF;
    margin: 2.5vh 2.5vh 2.5vh 0;
    width: 20vw;
    align-items: center;
    justify-content: center;
    background-color: #7E53D9;
`

const Select = styled.select`
    font-size: 20px;
    padding: 10px;
    border-radius:5px;
    width: 85%;
`

class Filter extends React.Component {

    state = {
        option: ""
    }

    onChangeSelect = (event) => {
        this.setState({ option: event.target.value })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.option !== this.state.option) {
          this.props.getActivityByType(this.state.option)
        }
    }

    render(){
        
        return (
            <Container>
                <h2>Filter by type</h2>
                <Select onChange={this.onChangeSelect}>
                    <option value={'education'}>Education</option>
                    <option value={'recreational'}>Recreational</option>
                    <option value={'social'}>Social</option>
                    <option value={'diy'}>Diy</option>
                    <option value={'charity'}>Charity</option>
                    <option value={'cooking'}>Cooking</option>
                    <option value={'relaxation'}>Relaxation</option>
                    <option value={'music'}>Music</option>
                    <option value={'busywork'}>Busywork</option>
                </Select>
            </Container>
        );
    }
}
  
export default Filter;
  