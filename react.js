var CommentBox = React.createClass({
  render: function() {
    return (
      <table className="commentBox">
        <caption>Result Table</caption>
        <CommentList />
      </table>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <tr className="commentList">
        <CommentItemTh />
        <CommentItemTd />
      </tr>
    );
  }
});

var CommentItemTh = React.createClass({
  render: function() {
    return (
      <th>{this.props.id}</th>
    );
  }
});

var CommentItemTd = React.createClass({
  render: function() {
    return (
      <td>{this.props.message}</td>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <CommentBox />
    );
  }
});

window.ReactRender = function(_data) {
  if(_data) {
    var data = {
      id: "test",
      message: "testtest"
    };
    ReactDOM.render( <Comment { ...data } />, document.getElementById('resulttable') );
  }
};
