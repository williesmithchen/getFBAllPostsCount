
var Comment = React.createClass({
  render: function() {

    console.log("==Comment==", typeof(this.props.data), this.props.data);

    console.log("display", this.props.data, this.props.data.key,
      this.props.data.id, this.props.data.type, this.props.data.message, this.props.data.link);

    return (
      <tr>
        <td>{this.props.data.key}</td>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.type}</td>
        <td>
          <p>{this.props.data.message}</p>
          <p>
            <a href={this.props.data.link}>{this.props.data.link}</a>
          </p>
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
          item.key = index;
          return (
            <Comment data={ item } />
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
