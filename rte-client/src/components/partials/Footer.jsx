import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-50">
  <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div class="max-w-sm">
      <div class="mb-6 flex h-12 items-center space-x-2">
        <span class="text-2xl font-bold">Right Time<span class="text-blue-600">Entertainment</span>.</span>
      </div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="#">Home</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Songs</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Music Videos</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">News</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Albums</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Intrested in promotion , send a mail</div>
      <div class="flex flex-col">
        <div class="mb-4">
          <input type="email" class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
          <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="mx-auto  max-w-screen-xl  px-4 py-3 text-center text-gray-500 ">
      <div class="text-center">© 2023 Right Time Entertainment | All Rights Reserved</div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer