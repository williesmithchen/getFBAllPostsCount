
var Comment = React.createClass({
  render: function() {

    if(false && this.props.data.length <= 1000) {
      console.log("==Comment==", typeof(this.props.data), this.props.data);

      console.log("display", this.props.data, this.props.data.key,
      this.props.data.id, this.props.data.type, this.props.data.message, this.props.data.link);
    }else{
      console.log("==Comment==", typeof(this.props.data), this.props.data.length);
    }

    return (
      <tr>
        <td>{this.props.data.key}</td>
        <td>
          <a href={'https://www.facebook.com/'+this.props.data.id} target="_blank">{this.props.data.id}</a>
        </td>
        <td>{this.props.data.type}</td>
        <td>
          <p>{this.props.data.message}</p>
          <p>
            <a className="link" href={this.props.data.link} target="_blank">{this.props.data.link}</a>
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
        <thead>
          <tr>
            <th>No:</th>
            <th>Id</th>
            <th>Type</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(function(item, index){
            item.key = index + 1;
            return (
              <Comment data={ item } />
            );
          })}
        </tbody>
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
