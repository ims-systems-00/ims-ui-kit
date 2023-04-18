import React, { useState } from "react";
import { Activity, Button, Input, TextEditor } from "../../index";

function ReplyActivity(props) {
  const [activityState, setActivityState] = useState({
    liked: false,
    likeCount: 0,
    loved: false,
    loveCount: 0,
    reply: "",
  });
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleLike = () => {
    setActivityState((prevState) => ({
      ...prevState,
      liked: !prevState.liked,
      likeCount: prevState.liked
        ? prevState.likeCount - 1
        : prevState.likeCount + 1,
    }));
  };

  const handleLove = () => {
    setActivityState((prevState) => ({
      ...prevState,
      loved: !prevState.loved,
      loveCount: prevState.loved
        ? prevState.loveCount - 1
        : prevState.loveCount + 1,
    }));
  };

  const handleReply = () => {
    setShowReplyForm(true);
  };

  const handleReplyChange = (event) => {
    setActivityState({ ...activityState, reply: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(activityState.reply);
    setActivityState({ ...activityState, reply: "" });
    setShowReplyForm(false);
  };

  return (
    <div className="">
      <p>{props.activity}</p>
      <Button onClick={handleLove} className="border-0">
        {activityState.loved ? (
          <span>❤️ {activityState.loveCount}</span>
        ) : (
          <span>❤️ {activityState.loveCount}</span>
        )}
      </Button>
      <Button onClick={handleLike} className="border-0">
        {activityState.liked ? <span>👍Liked</span> : <span>👍 Like </span>}
      </Button>
      <Button className="border-0" onClick={handleReply}>
        💬 Reply
      </Button>
      {showReplyForm && (
        <form onSubmit={handleSubmit}>
          <Activity
            type="reply"
            name="Abdullah Al Rafee"
            avatar="https://fastly.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM"
            activity={
              <TextEditor
                type="text"
                value={activityState.reply}
                onChange={handleReplyChange}
              />
            }
          />
          <Button type="submit">Reply</Button>
        </form>
      )}
    </div>
  );
}

export default ReplyActivity;
