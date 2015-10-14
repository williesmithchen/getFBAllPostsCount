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
        <Comment />
      </tr>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <th className="commentAuthor">
        {this.props.id}
      </th>
      <td className="comment">
        {this.props.children}
      </td>
    );
  }
});
