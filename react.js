var CommentBox = React.createClass({
  render: function() {

    return (
      <table className="commentBox">
        <caption>Result Table: {this.props.data.id}</caption>
        <tr>
          <th>id</th>
          <th>message</th>
          <th>type</th>
        </tr>
      </table>
    );
  }
});

/*var CommentList = React.createClass({
  render: function() {
    return (
      <tr className="commentList">
        <CommentItemID />
        <CommentItemMessage />
        <CommentItemType />
      </tr>
    );
  }
});

var CommentItemID = React.createClass({
  render: function() {
    return (
      <td>{this.props.id}</td>
    );
  }
});

var CommentItemMessage = React.createClass({
  render: function() {
    return (
      <td>{this.props.message}</td>
    );
  }
});

var CommentItemType = React.createClass({
  render: function() {
    return (
      <td>{this.props.type}</td>
    );
  }
});*/

var Comment = React.createClass({
  render: function() {
    var _data = {this.props.data};
    console.log(_data, {this.props.data});
    return (
      <CommentBox { ...{this.props.data} } />
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==");

  // if(_data) {
    var data = { id: "test", message: "testtest" };
    ReactDOM.render( <Comment { ...data } />, document.getElementById('resulttable') );
  // }
};
