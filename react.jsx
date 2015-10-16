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
      </table>
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
    ReactDOM.render( <CommentBox { ...data } />, document.getElementById('resulttable') );
  // }
};
