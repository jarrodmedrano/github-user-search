import React, { Component } from "react";
import Layout from "../src/components/Layout";
import SearchForm from "../src/components/SearchForm";

class Index extends Component {
  render() {
    return (
      <Layout>
        <h2>Search Github Users</h2>
        <SearchForm />
      </Layout>
    );
  }
}

export default Index;
