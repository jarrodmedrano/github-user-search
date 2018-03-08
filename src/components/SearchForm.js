import React, { Component } from "react";
import { Button, Form, Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";

class SearchForm extends Component {
  state = {
    searchTerm: "",
    serverResponse: []
  };

  async getData() {
    const res = await axios(
      `https://api.github.com/users/${this.state.searchTerm}`
    );
    const data = await res.data;
    this.setState({
      serverResponse: [...this.state.serverResponse, data]
    });
  }

  setSearchTerm = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };

  renderUsers = () => {
    const reversedSearch = [...this.state.serverResponse].reverse();
    return (
      <Card.Group>
        {reversedSearch.map((item, id) => {
          return (
            <Card key={item}>
              <Image src={item.avatar_url} />
              <Card.Content>
                <Card.Header>{item.login}</Card.Header>
                <Card.Meta>{item.location}</Card.Meta>
                <Card.Description>
                  <a href={item.html_url}>{item.login}</a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  <a href={item.followers_url}>Followers</a>
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  };

  render() {
    return (
      <Form>
        <Form.Group inline>
          <Form.Field inline width={8}>
            <input
              placeholder="Search"
              value={this.state.searchTerm}
              onChange={this.setSearchTerm}
            />
          </Form.Field>
          <Button primary onClick={() => this.getData()}>
            Search
          </Button>
        </Form.Group>
        {this.renderUsers()}
      </Form>
    );
  }
}

export default SearchForm;
