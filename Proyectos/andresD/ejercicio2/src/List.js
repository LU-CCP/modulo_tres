import React, { Component } from 'react';

// const List = () => null;

class List extends Component {
  render() {
    const { likes, dislikes } = this.props;

    return (
      <div>
        <h1>Menus</h1>
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
      </div>
    );
  }
}

export default List;
