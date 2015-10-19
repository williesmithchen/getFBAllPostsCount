
var Comment = React.createClass({
  render: function() {

    console.log("==Comment==");

    console.log("display", this.props, this.props.key, this.props.id, this.props.type, this.props.message, this.props.link);

    return (
      <tr>
        <td>{this.props.key}</td>
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
        <caption>Result Table</caption>
        <tr>
          <th>No:</th>
          <th>id</th>
          <th>type</th>
          <th>message</th>
        </tr>
        {data.map(function(result, index) {
          return <Comment { ...result } key={ index } />;
        })}
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
