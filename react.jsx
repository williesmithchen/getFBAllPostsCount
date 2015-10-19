
var Comment = React.createClass({
  render: function() {

    console.log("==Comment==");

    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.message}</td>
        <td>{this.props.type}</td>
      </tr>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {

    var data = this.props;

    console.log("==CommentBox==");

    return (
      <table className="commentBox">
        <caption>Result Table: {this.props.id}</caption>
        <tr>
          <th>id</th>
          <th>message</th>
          <th>type</th>
        </tr>
        <Comment { ...data } />
      </table>
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==");

  if(_data) {

    ReactDOM.render( <CommentBox { ..._data } />, document.getElementById('resulttable') );

  }
};
