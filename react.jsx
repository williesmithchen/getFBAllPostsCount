
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

    console.log({this.props});
    console.log('{this.props}');
    console.log(JSON.parse({this.props});
    console.log(JSON.parse('{this.props}');

    console.log("==CommentBox==");

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
      id: "id",
      message: "testtest",
      type: "type"
    };
    ReactDOM.render( <CommentBox { ...data } />, document.getElementById('resulttable') );
  // }
};
