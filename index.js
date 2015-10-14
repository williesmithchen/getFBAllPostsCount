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
        <CommentItem />
      </tr>
    );
  }
});

var CommentItem = React.createClass({
  render: function() {
    return (
      <th className="id">
        {this.props.id}
      </th>
      <td className="message">
        {this.props.message}
      </td>
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
