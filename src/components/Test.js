import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default () => (
  <Query
    query={gql`
      {
        allProducts(count: 25) {
          id
          name
          price
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allProducts.map(({ id, name, price }) => (
        <div key={id}>
          <p>Product name: {name}</p>
          <p>Product price: {price}</p>
        </div>
      ));
    }}
  </Query>
);