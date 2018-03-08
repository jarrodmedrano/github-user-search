import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";

class Layout extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "10px" }}>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
