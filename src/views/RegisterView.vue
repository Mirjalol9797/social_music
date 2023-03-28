<template>
  <div id="Register">
    <!-- <TopNavigation /> -->
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-black p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">
            Let's get rocking!
          </h1>

          <div class="mb-4">
            <TextInput
              label="First Name"
              :labelColor="false"
              placeholder="John"
              inputType="text"
              v-model:input="firstName"
              error="Text error"
            />
          </div>

          <div class="mb-4">
            <TextInput
              label="Last Name"
              :labelColor="false"
              placeholder="Doe"
              inputType="text"
              v-model:input="lastName"
              error="text"
            />
          </div>

          <div class="mb-4">
            <TextInput
              label="Email"
              :labelColor="false"
              placeholder="john.doe@m.com"
              inputType="text"
              v-model:input="email"
              error="errors.email ? errors.email[0] : ''"
            />
          </div>

          <div class="mb-4">
            <TextInput
              label="Password"
              :labelColor="false"
              placeholder="password123?"
              inputType="password"
              v-model:input="password"
              error="errors.password ? errors.password[0] : ''"
            />
          </div>

          <div class="mb-4">
            <TextInput
              label="Confirm Password"
              :labelColor="false"
              placeholder="password123?"
              inputType="password"
              v-model:input="confirmPassword"
            />
          </div>

          <button
            class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide"
            type="submit"
            @click="register"
          >
            Register
          </button>
        </div>

        <p class="text-center text-md text-gray-900">
          Already have an account?
          <router-link
            :to="{ name: 'login' }"
            class="text-blue-500 no-underline hover:underline"
          >
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from "../components/global/TextInput.vue";

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
</script>
