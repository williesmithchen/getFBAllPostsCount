
var Comment = React.createClass({
  render: function() {

    console.log("==Comment==");

    console.log("display", {this.props.id}, {this.props.type}, {this.props.message}, {this.props.link});

    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.type}</td>
        <td>
          <p>{this.props.message}</p>
          <p>{this.props.link}</p>
        </td>
      </tr>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {

    var data = this.props;

    console.log("==CommentBox==", this.props);

    return (
      <table className="commentBox">
        <caption>Result Table: {this.props.id}</caption>
        <tr>
          <th>id</th>
          <th>type</th>
          <th>message</th>
        </tr>
        <Comment { ...data } />
      </table>
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==", _data);

  if(_data) {

    ReactDOM.render( <CommentBox { ..._data } />, document.getElementById('resulttable') );

  }
};
