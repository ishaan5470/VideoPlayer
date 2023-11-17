// src/components/VideoList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const videos = [
  { id: '1', title: 'Video 1', url: 'https://www.youtube.com/watch?v=tFwuE6QrwNQ&list=PLivfVBKXLkx_1VKrqHv4K6sKIoWTEVlJ9&index=5&ab_channel=Code%26bird' },
  { id: '2', title: 'Video 2', url: 'https://www.youtube.com/watch?v=tFwuE6QrwNQ&list=PLivfVBKXLkx_1VKrqHv4K6sKIoWTEVlJ9&index=5&ab_channel=Code%26bird' },
  // Add more videos
];

const VideoList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', { video: item })}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default VideoList;
