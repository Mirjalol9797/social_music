<template>
  <div>
    <button
      @click="open = !open"
      class="bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
    >
      <i class="fa-solid fa-bars fa-xl"></i>
    </button>

    <div
      v-show="open"
      class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
    >
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl text-center text-white font-bold">Menu</p>
        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Login"
          color="green"
          url="login"
        />

        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Register"
          color="green"
          url="register"
        />

        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Profile"
          color="green"
          url="/account/profile"
        />

        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Posts"
          color="green"
          url="/account/posts"
        />

        <RouterLinkButton
          @click="logout"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Logout"
          color="green"
        />

        <RouterLinkButton
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-4"
          btnText="Close"
          color="red"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RouterLinkButton from "../global/RouterLinkButton.vue";

const open = ref(false);
</script>
