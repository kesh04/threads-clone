import * as React from 'react';
import { Thread } from '../types/threads';
import { Text, View } from './Themed';
import { PostHeading, BottomIcons, PostFooter } from './ThreadsItem';

export default function ThreadItem(thread: Thread): JSX.Element {
  return (

    <View>
      <Text>
        {thread.author.username}
      </Text>
      <View>
        <PostHeading
          name={thread.author.name}
          verified={thread.author.verified}
          createdAt={thread.createdAt} />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
            placeholder={blurhash}
            contentFit="cover"
            transition={500} />
        )}
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </View>
  );

}
