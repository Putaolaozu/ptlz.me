import React from "react";
import CommentList from "./CommentList";

const CommentSection = () => {
  return (
    <section>
      <form className="flex flex-col justify-center items-center">
        <textarea
          name="comment"
          id="comment"
          cols={40}
          rows={5}
          placeholder="Say something"
          className="rounded p-1 w-full max-w-3xl"
        />
        <button type="submit" className="commit_btn">
          Submit
        </button>
      </form>
      <CommentList comments={[]} />
    </section>
  );
};

export default CommentSection;
