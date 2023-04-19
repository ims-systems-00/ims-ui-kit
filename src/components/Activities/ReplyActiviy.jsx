import React, { useState } from "react";
import { Activity, Button, Input, TextEditor } from "../../index";
import SingleReply from "./SingleReply";
import ActivityActions from "./ActivityActions";

function ReplyActivity(props) {
  const [activityState, setActivityState] = useState({
    liked: false,
    likeCount: 0,
    loved: false,
    loveCount: 0,
    reply: "",
  });
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replies, setReplies] = useState([]);

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
    const newReply = activityState.reply;
    setReplies([...replies, newReply]);
    setActivityState({ ...activityState, reply: "" });
    setShowReplyForm(false);
  };

  return (
    <div className="py-1">
      <ActivityActions
        handleLike={handleLike}
        handleLove={handleLove}
        handleReply={handleReply}
        activityState={activityState}
      />
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
          <Button
            className="btn-link-secondary ps-5"
            color="link"
            type="submit"
          >
            Reply
          </Button>
          <Button className="btn-link-danger" color="link" type="submit">
            Cancel
          </Button>
        </form>
      )}
      {replies.length > 0 &&
        replies.map((reply, index) => (
          <SingleReply
            key={index}
            type="reply"
            name="Abdullah Al Rafee"
            subHeading="Commented 5minitues ago"
            avatar="https://fastly.picsum.photos/id/19/200/300.jpg?hmac=znGSIxHtiP0JiLTKW6bT7HlcfagMutcHfeZyNkglQFM"
            activity={
              <p>
                {
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis odio aspernatur fugiat eos quo neque vel incidunt dolores sunt totam magni nam eveniet ullam, soluta ab repellat iusto autem possimus eius? Sed sint ut corporis amet quidem provident dicta, alias laborum officiis, optio,"
                }
              </p>
            }
            footer={
              <ActivityActions
                handleLike={handleLike}
                handleLove={handleLove}
                handleReply={handleReply}
                activityState={activityState}
              />
            }
          />
        ))}
    </div>
  );
}

export default ReplyActivity;
