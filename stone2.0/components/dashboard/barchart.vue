<template>
  <div>
    <div
      class="flex justify-between w-full rounded-t-lg text-sm text-left font-semibold text-grey-darker p-3 pr-4 bg-gray-100"
    >
      <div class="order-last bg-red-800">
        <select class="border">
          <option>Sales</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
      </div>
      <div>This Month</div>
    </div>
    <div class="p-2">
      <div class="grid grid-cols-12 gap-3 lg:gap-7 pt-12">
        <div class="bg-blue-900">
          <p class="h-20"></p>
        </div>
        <div class="bg-blue-900 jan"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900 jun"></div>
        <div class="bg-blue-900 july"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900 jan"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900"></div>
        <div class="bg-blue-900 jan"></div>
      </div>
      <hr />
      <div class="grid grid-cols-12 gap-3 lg:gap-12">
        <div class="text-gray-500 text-center"><small>Jan</small></div>
        <div class="text-gray-500 text-center"><small>Feb</small></div>
        <div class="text-gray-500 text-center"><small>Mar</small></div>
        <div class="text-gray-500 text-center"><small>Apr</small></div>
        <div class="text-gray-500 text-center"><small>May</small></div>
        <div class="text-gray-500 text-center"><small>Jun</small></div>
        <div class="text-gray-500 text-center"><small>Jul</small></div>
        <div class="text-gray-500 text-center"><small>Aug</small></div>
        <div class="text-gray-500 text-center"><small>Sep</small></div>
        <div class="text-gray-500 text-center"><small>Oct</small></div>
        <div class="text-gray-500 text-center"><small>Nov</small></div>
        <div class="text-gray-500 text-center"><small>Dec</small></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.july {
  margin-top: -30px;
}
.jun {
  margin-top: -10px;
}
.jan {
  margin-top: 40px;
}
</style>