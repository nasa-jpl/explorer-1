export const BasePlaceholderTemplate = () => {
  return `
  <div class="BasePlaceholder">
    <div class="border-bottom grid w-full grid-cols-12 mb-10">
      <div class="col-span-9 pr-5">
        <div
          class="bg-gray-light-mid animate-loading w-64 h-4 rounded-lg"
        ></div>
        <div
          class="bg-gray-light-mid animate-loading w-56 h-4 mt-5 rounded-lg"
        ></div>
        <div
          class="bg-gray-light-mid animate-loading pr-14 w-full h-4 mt-6 rounded-lg"
        ></div>
        <div
          class="bg-gray-light-mid animate-loading pr-14 w-5/6 h-4 mt-3 rounded-lg"
        ></div>
        <div
          class="bg-gray-light-mid animate-loading pr-14 w-1/2 h-4 mt-3 rounded-lg"
        ></div>
        <div
          class="bg-gray-light-mid animate-loading pr-14 w-30 h-4 mt-4 rounded-lg"
        ></div>
      </div>
      <div class="flex justify-end col-span-3">
        <div class="animate-loading h-38 w-38 rounded-none"></div>
      </div>
    </div>
    <hr class="text-gray-light-mid mb-10" />
  </div>
  `
}
