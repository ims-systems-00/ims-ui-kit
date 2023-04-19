import React, { useState } from "react";
import { Button } from "../../index";

const ActivityActions = (props) => {
  const { activityState, handleLike, handleLove, handleReply } = props;
  return (
    <div className="py-3">
      <p>{props.activity}</p>
      <Button onClick={handleLove} className="border-0" size="sm">
        {activityState.loved ? (
          <span>❤️ {activityState.loveCount}</span>
        ) : (
          <span>❤️ {activityState.loveCount}</span>
        )}
      </Button>
      <Button
        onClick={handleLike}
        className="border-0 btn-link-secondary shadow-none"
        color="link"
        size="sm"
      >
        {activityState.liked ? <span>👍Liked</span> : <span>👍 Like </span>}
      </Button>
      <Button
        className="border-0 btn-link-secondary shadow-none"
        color="link"
        size="sm"
        onClick={handleReply}
      >
        💬 Reply
      </Button>
    </div>
  );
};

export default ActivityActions;
