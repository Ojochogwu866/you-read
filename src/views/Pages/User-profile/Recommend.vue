<template>
  <div class="w-full flex justify-start items-start gap-4 mt-8">
    <div class="w-1/2 p-3 rounded-md border border-gray-400 text-left">
      <div class="text-[14px] font-bold">Your followers</div>
      <p class="text-xs leading-5">
        You have people following your book review comment profile. Check out
        followers list, and share your profile to friends to check out your
        reviews.
      </p>
      <div class="mt-2 flex">
        <div
          class="flex justify-around rounded items-center px-4 py-2 bg-[#CBD5E0]"
        >
          <span class="text-sm">View Followers</span>
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ea893728=""
            width="15"
            height="15"
          >
            <path
              fill="currentColor"
              d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-3 rounded-md border border-gray-400 text-left">
      <div class="text-[14px] font-bold">Reviews & Comments</div>
      <p class="text-xs leading-5">
        Comment on books you've read by adding a review. Your review will be
        featured under our review section, and your followers will get to see
        them.
      </p>
      <div class="">
        <form class="space-y-2 mt-3">
          <input
            placeholder="Book Title"
            v-model="book_title"
            class="w-full text-xs bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <input
            v-model="review"
            class="w-full text-xs bg-transparent border border-gray-400 text-black outline-none p-2 rounded-sm"
          />
          <textarea
            placeholder="Review"
            class="w-full min-h-[150px] text-xs bg-transparent border border-gray-400 text-black outline-none p-2 rounded"
          />
          <button
            class="w-full rounded-sm px-4 py-2 font-medium bg-boxColor text-white text-sm outline-none hover:shadow-typeBox"
            type="submit"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
