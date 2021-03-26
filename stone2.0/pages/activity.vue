<template>
  <div
    class="w-full grid grid-cols-2 lg:grid-cols-12 gap-4 px-9 py-9 rounded-lg"
  >
    <contacts></contacts>

    <chat-window></chat-window>
  </div>
</template>

<script>
import contacts from "../components/conversation/contacts";
import chatWindow from "../components/conversation/chatWindow";
export default {
  components: {
    chatWindow,
    contacts,
  },
};
</script>

<style  scoped>
.user {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 16px;
  top: calc(50% - 40px / 2 - 32px);
}
</style>