<template>
  <div>
    <div
      class="flex justify-between w-full rounded-t-lg text-sm text-left uppercase font-semibold text-grey-darker p-3 pr-4 bg-gray-100"
    >
      <div class="order-last">
        <select class="border">
          <option>Sort</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
        <span class=""> <button class="w-6 h-6 bg-gray-300">+</button></span>
      </div>
      <div>Tasks</div>
    </div>
    <ul>
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 bg-gray-600"
              /><span class="ml-2 text-black font-medium">
                Send prototype to team</span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">today</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#575BDE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-medium text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 bg-gray-600"
              /><span class="ml-2 text-black font-medium"
                >Review content with copywriter</span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">today</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-medium text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600 bg-gray-600"
              /><span class="ml-2 text-black font-medium"
                >Optimize hero images</span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">today</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-medium text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              /><span class="ml-2 text-black font-medium">
                Add loading screen after sign up</span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">yesterday</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#575BDE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                checked
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              /><span class="ml-2 text-gray-500">
                <s>Get file structure ready for cms</s></span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">16 July</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                checked
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              /><span class="ml-2 text-gray-500">
                <s>Update style guide with new colors</s>
              </span></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">14 July</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                checked
                type="checkbox"
                class="form-checkbox h-5 w-5 text-gray-600"
              /><span class="ml-2 text-gray-500">
                <s>Update style guide with new colors</s></span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">22 June</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                checked
                class="form-checkbox h-5 w-5 text-gray-600"
              /><span class="ml-2 text-gray-500">
                <s>Fix footer on mobile</s></span
              ></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">28 June</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex p-1">
          <div class="w-full p-2 flex flex-6">
            <label class="inline-flex items-center">
              <input
                checked
                type="checkbox"
                class="form-checkbox h-5 w-5 text-green-500 bg-gray-900"
              /><span class="ml-2 text-gray-500">
                <s>Mobile navigation not working in ie</s>
              </span></label
            >
          </div>

          <div class="w-1/2 pt-2 text-center">24 June</div>
          <div class="pr-2 pt-2 flex-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM12 16.216L16.944 19.2L15.632 13.576L20 9.792L14.248 9.304L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216Z"
                fill="#ECECEE"
              />
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>