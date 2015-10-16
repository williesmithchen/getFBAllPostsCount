var CommentBox = React.createClass({
  render: function() {
    var _data = JSON.parse('{this.props.data}');
    console.log("CommentBox", _data);
    return (
      <table className="commentBox">
        <caption>Result Table: Level 1 :{this.props.data.id}-message:{this.props.data.message}</caption>
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
    var _data = JSON.parse('{this.props.data}');
    console.log("Comment", _data);
    return (
      <div>
        <p>Level 1 :{this.props.data.id}-message:{this.props.data.message}</p>
        <CommentBox data={this.props.data} />
      <div>
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==");

  // if(_data) {
    var data = { id: "td", message: "test" };
    ReactDOM.render( <Comment { ...data } />, document.getElementById('resulttable') );
  // }
};
