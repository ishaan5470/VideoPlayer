// src/components/VideoPlayer.js
import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ route }) => {
  const { video } = route.params;
  const videoPlayerRef = useRef(null);

  return (
    <View>
      <Text>{video.title}</Text>
      <Video
        ref={videoPlayerRef}
        source={{ uri: video.url }}
        style={{ width: '100%', height: 300 }}
        controls={true}
      />
    </View>
  );
};

export default VideoPlayer;
