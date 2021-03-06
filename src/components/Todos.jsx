import React, { PureComponent } from "react";
import { Checkbox, Input, Icon } from "antd";
import "./Todos.less";

class Todos extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [...props.items]
    };
  }

  handlePress = e => {
    console.log(e.target.value);

    const { items } = this.state;
    items.push({
      title: e.target.value,
      completed: false
    });

    this.setState({
      items: [...items]
    });
  };

  handleDelete(e, item, idx) {
    let { items } = this.state;

    this.setState({
      items: items.filter((item, index) => index !== idx)
    });
  }

  render() {
    const { title } = this.props;
    const { items } = this.state;

    return (
      <div className="Todos">
        <h2>{title}</h2>

        <Input onPressEnter={this.handlePress} />

        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <Icon
                className="icon"
                type="delete"
                onClick={e => this.handleDelete(e, item, idx)}
              />
              <Checkbox className="title" defaultChecked={item.completed}>
                {" "}
                {item.title}
              </Checkbox>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
