import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {
  render() {
    const { data: { loading, team } } = this.props;

    console.log(team);

    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {team._id}
            {/* {team.history.lineup.map(team => (
              <li key={team.id}>
                {team.name}
              </li>
            ))} */}
          </ul>
        )}
      </main>
    );
  }
}

export default graphql(
  gql`{
    team {
      _id
      # if you dont request history this will work fine
      history {
        lineup
      }
    }
  }`,
)(App)
