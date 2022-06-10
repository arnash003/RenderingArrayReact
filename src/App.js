import React from "react";
import "./styles.css";

export default class FetchRandomUser extends React.Component {
  state ={
    loading: true,
    people: []
  };

  async componentDidMount () {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({people: data.results, loading: false});
  }

  render () {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    if (!this.state.people.length) {
      return <div>didn't get a person</div>
    }
    
    return (
      <div>
        {this.state.people.map(person => (
          <div key={person.login.uuid}>
             <div>{person.name.title}</div>
             <div>{person.name.first}</div>
             <div>{person.name.last}</div>
             <img src={person.picture.large} />
             </div>
        ))}
        </div>
    );
  }
}

  // The first thing that occurs upon refresh is the component loads via "loading..."
  // Next ComponentDIdMount gets called and we fetch the data and get the data from response
  // The component loads twice. Once for the initial loading and the second time with the person.
  // Conditionally rendering components 
  //Mapping through the array of each person we get and displaying it with JSX 