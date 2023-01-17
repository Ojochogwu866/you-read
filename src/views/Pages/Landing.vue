<template>
  <div class="w-full flex p-10 items-center">
    <div class="w-1/2">
      <div class="text-left text-6xl font-extrabold">
        Read Better <span class="text-boxColor">&</span><br />
        Cover more Books<br />
        Easily
      </div>
      <div class="flex items-center py-2 mt-6">
        <div class="border-b-4 w-100 absolute border-boxColor"></div>
        <div class="border-r-8 border-parentText"></div>
        <div class="z-50 gap-6 flex justify-center items-center">
          <div class="bg-boxbg cursor-pointer hover:shadow-typeBox p-2 text-sm">
            Set reading plan
          </div>
          <div class="bg-boxbg cursor-pointer hover:shadow-typeBox p-2 text-sm">
            Join/Create a team
          </div>
          <div class="cursor-pointer bg-boxbg hover:shadow-typeBox p-2 text-sm">
            Set Book Goals
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2">
      <div class="">
        <img
          src="@/assets/Images/undraw_reading_re_29f8.svg"
          alt="a lady reading"
        />
      </div>
    </div>
  </div>
</template>
