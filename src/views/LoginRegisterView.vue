<script setup lang="ts">
import { ref } from "vue";
import {
  UserApi,
  type LoginPostRequest,
} from "../lib/apis/generated/apis/UserApi";
const username = ref<string>("");
const password = ref<string>("");
const userApi = new UserApi();
const loginresult = ref<string>("");
const login = () => {
  const accountdata: LoginPostRequest = {
    username: username.value,
    password: password.value,
  };
  userApi
    .loginPost(accountdata)
    .then(() => (loginresult.value = "ログインに成功しました"));
};
</script>

<template>
  <dl>
    <dt>ユーザー名</dt>
    <dd><input type="text" v-model="username" /></dd>
  </dl>
  <dl>
    <dt>パスワード</dt>
    <dd><input type="password" v-model="password" /></dd>
  </dl>
  <button @click="login">ログイン/ユーザー登録</button>
  <p>{{ loginresult }}</p>
</template>

<style module lang="scss"></style>

