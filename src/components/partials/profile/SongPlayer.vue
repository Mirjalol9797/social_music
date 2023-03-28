<template>
  <div class="bg-green-500 rounded">
    <div id="aplayer"></div>
  </div>
</template>

<script setup>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { onMounted } from "vue";

onMounted(() => {
  thePlayer();
});

const thePlayer = () => {
  new APlayer({
    container: document.getElementById("aplayer"),
    audio: [
      {
        name: "First",
        artist: "artist",
        url: "/music/1.mp3",
        cover: "cover.jpg",
      },
      {
        name: "Second",
        artist: "artist",
        url: "/music/2.mp3",
        cover: "cover.jpg",
      },
    ],
  });
};
</script>
