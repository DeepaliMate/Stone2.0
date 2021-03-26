<template>
  <div
    class="rounded-lg border bg-white col-span-12 lg:col-span-9 md:col-span-9 sm:col-span-12"
  >
    <div class="row-span-6">
      <img class="lg:px-9 rounded" src="/bear.png" />
    </div>

    <ul v-for="(convo, i) in oldConv" :key="i">
      <li class="p-1 mb-1">
        <div class="flex flex-nowrap">
          <div class="p-1 w-10">
            <img :src="`/users/${convo.pic}.svg`" width="300" height="169" />
          </div>

          <div class="w-full pt-1 pr-4">
            <span class="text-sm text-left font-regular text-grey-darker">
              <p class="font-medium">
                {{ convo.name }}
                <sub class="text-gray-400">{{ convo.time }} </sub>
              </p></span
            >
            <span class="text-sm text-left font-regular text-grey-darker">
              <p class="font-regulsr">
                {{ convo.msg }}
              </p></span
            >
          </div>
        </div>
      </li>
    </ul>
    <div class="pb-10"></div>
    <hr />

    <div class="pt-10">
      <ul v-for="(conv, i) in newConv" :key="i">
        <li class="p-1 mb-1">
          <div class="flex flex-nowrap">
            <div class="p-1 w-10">
              <img :src="`/users/${conv.pic}.svg`" width="300" height="169" />
            </div>

            <div class="w-full pt-1 pr-4">
              <span class="text-sm text-left font-regular text-grey-darker">
                <p class="font-medium">
                  {{ conv.name }}
                  <sub class="text-gray-400">{{ conv.time }} </sub>
                </p></span
              >
              <span class="text-sm text-left font-regular text-grey-darker">
                <p class="font-regulsr">
                  {{ conv.msg }}
                </p></span
              >
              <div class="w-full" v-if="conv.file">
                <img :src="`${conv.file}.png`" />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>
    <div class="w-full flex">
      <input
        class="flex flex-1 sm:w-64 rounded border border-gray-300 pl-4 px-8"
        type="text"
        placeholder="Message..."
      />
      <span class="flex flex-2 text-gray-300">+</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldConv: [
        {
          pic: "Camilla",
          name: "Camilla Tunney",
          time: "11.48",
          msg:
            "Hehe, meeting with Manu in a moment. We’ll probably need an hour or so to get this fixed.",
        },
        {
          pic: "Felix",
          name: "Felix Levan ",
          time: "11:52",
          msg: "Cool, I’ll let Market know.",
        },
      ],
      newConv: [
        {
          pic: "Camilla",
          name: "Camilla Tunney  ",
          time: "16:31",
          msg:
            "Finally done with Manu. Got the fps to be twice as smooth using the smo function instead. All links are now anchored as well.",
        },
        {
          pic: "Camilla",
          name: "Camilla Tunney ",
          time: "16:32",
          msg: "Done!.",
          file: "file",
        },
        {
          pic: "Felix",
          name: "Felix Levan ",
          time: "17:05",
          msg:
            "Looks awesome, thx! I’ll make sure Ernie pushes this asap. Market will be like.. super-duper happy.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>