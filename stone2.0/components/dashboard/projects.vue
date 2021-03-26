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
      <div>Projects</div>
    </div>
    <ul>
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex flex-nowrap">
          <div class="w-full p-2">
            <p>Flowychart Editor</p>
            <p class="text-gray-400"><small>Enigm</small></p>
          </div>

          <div class="w-full pt-4 pr-4">
            <div class="bg-gray-100 w-full rounded-lg h-1">
              <div class="bg-yellow-400 w-1/2 rounded-lg h-1"></div>
            </div>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex flex-nowrap">
          <div class="w-full p-2">
            <p>Landing Page</p>
            <p class="text-gray-400"><small>Giddify</small></p>
          </div>

          <div class="w-full pt-4 pr-4">
            <div class="bg-gray-100 w-full rounded-lg h-1">
              <div class="bg-red-400 w-1/4 rounded-lg h-1"></div>
            </div>
          </div>
        </div>
      </li>
      <hr />
      <li class="text-sm text-left font-regular text-grey-darker">
        <div class="flex flex-nowrap">
          <div class="w-full p-2">
            <p>Strand App</p>
            <p class="text-gray-400"><small>Mondemi</small></p>
          </div>

          <div class="w-full pt-4 pr-4">
            <div class="bg-gray-100 w-full rounded-lg h-1">
              <div class="bg-blue-400 w-1/2 border rounded-lg h-1"></div>
            </div>
          </div>
        </div>
      </li>
      <hr />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>