import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
import Head from "next/head";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "10px" }}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>

        <Form>
          <Form.Field>
            <label>Search Github Users</label>
            <input placeholder="users" />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default App;
