<template>
  <div class="w-11/12">
    <ReadHistory />
    <GoalHistory />
    <Recommend />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";
import ReadHistory from "./ReadHistory.vue";
import GoalHistory from "./GoalHistory.vue";
import Recommend from "./Recommend.vue";
import moment from "moment";
export default {
  components: {
    Card,
    ReadHistory,
    GoalHistory,
    Recommend,
  },
  data() {
    return {
      isDrawerOpen: false,
      modal1: false,
      displayModal: false,
      moment,
    };
  },
  computed: {
    ...mapGetters(["getUserBooks", "getUserGoals", "getBookData"]),
  },
  async created() {
    let res = await this.$store.dispatch("get", {
      endpoint: `/books/`,
      auth: true,
    });
    if (!!res) {
      this.$store.commit("set", {
        type: "userBooks",
        data: res,
      });
    }
  },
};
</script>
