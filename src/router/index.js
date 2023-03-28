import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";

// profile
import AccountView from "@/views/AccountView";
import ProfileSection from "@/views/account/ProfileSection";
import EditProfile from "@/views/account/EditProfile";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  // profile
  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "profileSection",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "editProfile",
        component: EditProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
