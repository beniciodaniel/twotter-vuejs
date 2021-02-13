<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>

        <div class="user-profile__follower-count">
          <strong>Followers:</strong>
          {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>

    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      >
        {{ twoot.content }}
      </TwootItem>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { users } from "../assets/users";
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    console.log(users[userId.value], "USERRRR");

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    });

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }

    return {
      state,
      addTwoot,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 50px 5%;
  gap: 50px;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      padding: 0 10px;
      margin-right: auto;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .user-profile__create-twoot {
      display: flex;
      flex-direction: column;
      padding-top: 20px;

      &.--exceeded textarea {
        color: red;
        border: 2px solid red;
      }
    }
  }

  .user-profile__twoots-wrapper {
    display: grid;
    gap: 10px;
    margin-bottom: auto;
  }
}
</style>
