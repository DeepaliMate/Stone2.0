<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-indigo-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="h-12 w-12"
            viewBox="0 0 512 512"
            fill="norene"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
              fill="#4C51BF"
              stroke="#4C51BF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
              fill="white"
            />
          </svg>

          <span class="text-white text-2xl mx-2 font-semibold"
            >Deepali <sub class="">MATE</sub></span
          >
        </div>
      </div>

      <nav class="mt-10">
        <p class="text-gray-400 pl-7"><small>MAIN</small></p>
        <router-link
          class="flex items-center duration-200 px-6 py-1 border-l-4"
          :class="[$route.name === 'dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <fa icon="th-large"></fa>

          <span class="mx-4 text-white">Home</span>
        </router-link>

        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="bars"></fa>
          <span class="mx-4 text-white">Activity</span>
        </router-link>

        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="folder"></fa>
          <span class="mx-4 text-white">Projects</span>
        </router-link>

        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="check-double"></fa>
          <span class="mx-4 text-white">Tasks</span>
        </router-link>
        <p class="text-gray-400 pl-7"><small>PEOPLE</small></p>
        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="user-friends"></fa>
          <span class="mx-4 text-white">Customers</span>
        </router-link>

        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'activity' ? activeClass : inactiveClass]"
          to="/activity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
              fill="white"
            />
          </svg>

          <span class="mx-4 text-white">Conversations</span>
        </router-link>

        <p class="text-gray-400 pl-7"><small>ACCOUNT</small></p>
        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="user-circle"></fa>
          <span class="mx-4 text-white">Users</span>
        </router-link>
        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <fa icon="cog" class="white"></fa>
          <span class="mx-4 text-white">Settings</span>
        </router-link>
        <p class="text-gray-400 pl-7"><small>MISC</small></p>
        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.14 15.86 2 12 2ZM12.88 15.75H11.13V14H12.88V15.75ZM12.88 12.88H11.13C11.13 10.04 13.75 10.26 13.75 8.5C13.75 7.54 12.96 6.75 12 6.75C11.04 6.75 10.25 7.54 10.25 8.5H8.5C8.5 6.57 10.07 5 12 5C13.93 5 15.5 6.57 15.5 8.5C15.5 10.69 12.88 10.91 12.88 12.88Z"
              fill="white"
            />
          </svg>

          <span class="mx-4 text-white">Empty State</span>
        </router-link>
        <router-link
          class="flex items-center duration-200 py-1 px-6 border-l-4"
          :class="[$route.name === 'temp' ? activeClass : inactiveClass]"
          to="/temp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
              fill="white"
            />
          </svg>
          <span class="mx-4 text-white">Onboarding</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      // isOpen: false,
      activeClass:
        "bg-gray-600 text-gray-500 bg-opacity-25 text-gray-100 border-red-900",
      inactiveClass:
        "border-gray-900 text-white  hover:bg-opacity-25 hover:text-gray-500",
    };
  },
};
</script>

<style  scoped>
</style>