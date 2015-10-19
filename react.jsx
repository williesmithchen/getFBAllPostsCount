
var Comment = React.createClass({
  render: function() {

    console.log("==Comment==", typeof(this.props), this.props);

    console.log("display", this.props.key, this.props.data,
      this.props.data.id, this.props.data.type, this.props.data.message, this.props.data.link);

    return (
      <tr>
        <td>{this.props.key}</td>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.type}</td>
        <td>
          <p>{this.props.data.message}</p>
          <p>{this.props.data.link}</p>
        </td>
      </tr>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {

    console.log("==CommentBox==", typeof(this.props), this.props);

    return (
      <table className="commentBox">
        <caption>Result Table</caption>
        <tr>
          <th>No:</th>
          <th>id</th>
          <th>type</th>
          <th>message</th>
        </tr>
        {this.props.data.map(function(item, index){
          return (
            <Comment data={ item } key={ index } />
          );
        })}
      </table>
    );
  }
});

window.ReactRender = function(_data) {

  console.log("==ReactRender==", typeof(_data), _data);

  if(_data) {

    ReactDOM.render( <CommentBox { ..._data } />, document.getElementById('resulttable') );

  }
};
