<template>
  <div
    class="rounded-lg border bg-white lg:col-span-3 md:col-span-3 hidden md:block lg:block"
  >
    <div class="col-span-0 lg:col-span-12 md:col-span-12">
      <ul v-for="(user, i) in users" :key="i">
        <li class="p-1 mb-1">
          <div class="flex flex-nowrap">
            <div class="p-1 w-10">
              <img v-bind:src="`/users/${user.fname}.svg`" />
            </div>

            <div class="w-full pt-1 pr-4">
              <span class="text-sm text-left font-regular text-grey-darker"
                >{{ user.fname }}{{ user.lname }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          fname: "Camilla",
          lname: "Tunney",
        },
        {
          fname: "Alise",
          lname: "Stoke",
        },
        {
          fname: "Camilla",
          lname: "Fager",
        },
        {
          fname: "Laureen",
          lname: "Deangelis",
        },
        {
          fname: "Winston",
          lname: "Lanni",
        },
        {
          fname: "Manuel",
          lname: "Kriz",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>