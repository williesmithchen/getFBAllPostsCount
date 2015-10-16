var CommentBox = React.createClass({
  render: function() {
    return (
      <table className="commentBox">
        <caption>Result Table: {this.props.id}</caption>
        <tr>
          <th>id</th>
          <th>message</th>
          <th>type</th>
        </tr>
        <CommentList />
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
    var data = {
      id: "{this.props.id}",
      message: "{this.props.message}"
    };
    return (
      <div>
        <p>{this.props.id}</p>
        <CommentBox ...data />
      </div>
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==");

  // if(_data) {
    var data = {
      id: "test",
      message: "testtest"
    };
    ReactDOM.render( <Comment ...data />, document.getElementById('resulttable') );
  // }
};
