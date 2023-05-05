<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div id="TopMenu" class="flex items-center p-2">
      <div class="logo-section flex justify-start items-center px-3.5">

        <IconComponent iconString="menu" iconColor="#636363" text="Main menu" hoverColor="hover:bg-gray-200"
          class="-ml-2 mr-2" />

        <img width="107" src="../../../public/img/GmailLogo.png" alt="" />
      </div>
      <div class="flex w-full justify-between">
        <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
          <IconComponent iconString="magnify" iconColor="#636363" text="Search" hoverColor="hover:bg-gray-300" />
          <input placeholder="Search mail" class="
              w-full 
              h-10 
              bg-gray-200 
              border-transparent 
              border-none 
              focus:ring-0 
              outline-none 
              placeholder-gray-900
            " type="text" />
          <IconComponent iconString="tune" iconColor="#636363" text="Show search options"
            hoverColor="hover:bg-gray-300" />
        </div>

        <div class="flex w-32 justify-between items-center ml-6">
          <IconComponent iconString="cog" iconColor="#636363" text="Settings" hoverColor="hover:bg-gray-200" />
          <IconComponent iconString="apps" iconColor="#636363" text="Google apps" hoverColor="hover:bg-gray-200" />

          <UserComponent />

        </div>
      </div>
    </div>

    <div class="flex w-full justify-between">
      <div id="SideMenu" class="side-menu">
        <div 
        @click="newMessageOpen = !newMessageOpen"
        
        class="
            flex
            items-center
            justify-center
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            w-36
            h-8
            mt-2
            rounded-2xl
            ml-2
            p-7
            cursor-pointer
            text-white
          ">
          <PencilOutline :size="25" class="mr-4" />
          <span class="text-sm">Compose</span>
        </div>

        <div class="my-5"></div>

        <router-link to="/email">
          <div class="
              flex
              side-menu-item
              justify-between
              px-6
              py-1.5
              bg-blue-100
              rounded-r-full
            ">


            <div class="flex items-center">
              <InboxIcon :size="17" />
              <div class="text-sm pl-4 font-semibold">Inbox</div>
            </div>

            <div class="text-xs font-semibold">22</div>
          </div>
        </router-link>


        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <StarOutlineIcon :size="17" />
            <div class="text-sm pl-4">Starred</div>
          </div>
        </div>

        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <ClockOutlineIcon :size="17" />
            <div class="text-sm pl-4">Snoozed</div>
          </div>
        </div>

        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <SendOutlineIcon :size="17" />
            <div class="text-sm pl-4">Sent</div>
          </div>
        </div>

        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <FileOutlineIcon :size="17" />
            <div class="text-sm pl-4">Drafts</div>
          </div>
        </div>
      </div>

      <!-- this is where the page changes -->
      <router-view />
      <!-- this is where the page changes -->

      <div class="m-4">
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleCalendar.png" alt="">
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleKeep.png" alt="">
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleTasks.png" alt="">
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleContacts.png" alt="">
        </div>

        <div class="w-6 flex mb-7 border border-gray-300" />

        <div class="w-6 h-6 flex justify-center mb-7">
          <PlusIcon />

        </div>

      </div>
    </div>

    <div 
      v-if="newMessageOpen"
      id="NewMessageSection" class="  absolute 
      bottom-0 
      
      right-0 
      mr-20 
      rounded-t-lg 
      shadow-2xl 
      bg-white">

      <div class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-200">


        <div>New Message</div>
        <CloseIcon @click="newMessageOpen = false" class="cursor-pointer" :size="19" />

      </div>

      <div class="relative flex items-center px-3.5 py-2">

        <div class="text-sm text-gray-700 mr-8">
          To
        </div>
        <input type="text" class="w-full border-transparent border-none focus:ring-0 outline-none" />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0">

        </div>

      </div>

      <div class="relative flex items-center px-3.5 py-2">

        <div class="text-sm text-gray-700">
          Subject
        </div>
        <input type="text" class="w-full border-transparent border-none focus:ring-0 outline-none" />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0">

        </div>

      </div>


      <div class="m-1">
        <textarea rows="14" style="resize:none" class="w-full border-transparent border-none focus:ring-0 outline-none"></textarea>

      </div>

      <div class="p-4 mt-2">
        <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white text-sm font-bold py-2 px-4 rounded-full items-center ">

            Send Message
        </button>


      </div>

    </div>

  </div>
</template>
  


<script setup>
import {ref} from 'vue'
import IconComponent from '@/components/IconComeponent.vue'
import UserComponent from '@/components/UserComponent.vue';
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue';
import InboxIcon from 'vue-material-design-icons/Inbox.vue';
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";
import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";
import PlusIcon from "vue-material-design-icons/Plus";
import CloseIcon from "vue-material-design-icons/Close";

let newMessageOpen = ref(false)

</script>


<style lang="scss">
#EmailView {
  .logo-section {
    min-width: 250px;
  }

  .input-width {
    max-width: 700px
  }

  .side-menu {
    width: 300px;
  }

  .side-menu-item {
    width: 250px;
  }


}

#NewMessageSection {
  width: 560px;
  height: 570px;

}
</style>