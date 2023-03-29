<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <CropperModal
      v-if="showModal"
      :minAspectRatioProp="{ width: 8, height: 8 }"
      :maxAspectRatioProp="{ width: 8, height: 8 }"
      @croppedImageData="setCroppedImageData"
      @showModal="showModal = false"
    />

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="First Name"
          placeholder="John"
          v-model:input="firstName"
          inputType="text"
          error="errors.first_name ? errors.first_name[0] : ''"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Last Name"
          placeholder="Doe"
          v-model:input="lastName"
          inputType="text"
          error="errors.last_name ? errors.last_name[0] : ''"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
          label="Location"
          placeholder="Madrid, ES"
          v-model:input="location"
          inputType="text"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
          label="Profile Image"
          btnText="Update Profile Image"
          @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage label="Cropped Image" :image="image" />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <TextArea
          label="Description"
          placeholder="Please enter some information here!!!"
          v-model:description="description"
          error="errors.last_name ? errors.last_name[0] : ''"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-8 mb-6">
      <div class="w-full px-3">
        <SubmitFormButton btnText="Update Profile" @submit="updateUser" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TextInput from "@/components/global/TextInput.vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import TextArea from "@/components/global/TextArea.vue";
import SubmitFormButton from "@/components/global/SubmitFormButton.vue";
import CropperModal from "@/components/global/CropperModal.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";

const showModal = ref(false);
const firstName = ref(null);
const lastName = ref(null);
const location = ref(null);
const description = ref(null);
// const ImageData = ref(null);
const image = ref(null);

const setCroppedImageData = (data) => {
  // ImageData = data;
  image.value = data.imageUrl;
};

function updateUser(status) {
  console.log(status);
}
</script>
