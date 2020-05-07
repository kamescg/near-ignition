/* --- Global --- */
import { useEffect, useState } from "react";
import { withThreeBox } from "3box-system";
import { hooks } from "3box-system";

import { FormThreadPost } from "./FormThreadPost";

/**
 * @name ThreadPosts
 * @param props
 */
export const ThreadPosts = ({ space, thread, sx, ...props }) => {
  const [threadPosts, setThreadPosts] = useState([]);
  const threadHook = hooks.useOpenConfidentialThread(space, thread);

  useEffect(() => {
    threadHook.openThread();
  }, []);

  useEffect(() => {
    if (threadHook.thread) {
      threadHook.thread.getPosts().then((posts) => {
        setThreadPosts(posts);
      });
    }
  }, [threadHook.thread]);

  return (
    <>
      <Atom.Heading>
        {space} {thread} Posts
      </Atom.Heading>
      <Atom.Flex column>
        {threadPosts.map((post) => (
          <Post {...post} />
        ))}
      </Atom.Flex>
      <FormThreadPost thread={threadHook.thread} />
    </>
  );
};

const Post = (props) => {
  return <Atom.Flex></Atom.Flex>;
};
