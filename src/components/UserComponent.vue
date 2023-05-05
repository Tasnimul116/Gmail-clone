<template>
    <div id="UserComponent">
        <img
        data-tooltip-target="tooltip-no-arrow-user"
        data-tooltip-placement="bottom"
        class="rounded-full w-8 cursor-pointer"
        
        src ="https:/via.placeholder.com/40"
        
        @click="openMenu = !openMenu">

    </div>

    <div
        v-show="!openMenu"
        id = "tooltip-no-arrow-user"
        role = "tooltip"
        class=" inline-block 
                absolute 
                invisible 
                text-xs 
                z-10 
                py-1 
                px-2 
                font-medium 
             text-white
                rounded-sm 
                shadow-sm 
                opacity-0.5 
                tooltip
                bg-gray-600
                delay-150" >

    <div>Google Account</div>
        <div class="text-gray-300">
            Tasnimul
        </div>
        <div class="text-gray-300">
            hasan@gmail.com
        </div>

        <div v-show="!openMenu" class="absolute z-10 w-80 right-2 bg-white top-14 rounded-lg">
            <div class="w-full flex justify-center">
                <img

                    class="rounded-full w-20 mt-4"
                    src ="https:/via.placeholder.com/70">
            </div>


            <div class="text-gray-700 w-full flex justify-center mt-2 text-lg">
                Tasnimul

            </div>
            <div class="text-gray-700 w-full flex justify-center mt-2 text-sm pb-4 border-b">

                hasan@gmail.com

            </div>

            <div class="flex justify-center my-5">
                <button
                class="bg-transparent text-xs hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border bprder-gray-300 rounded"
                >
                    Sign out of Gamil
                </button>

            </div>

        </div>




    </div>
</template>



<script setup>
    import {ref} from 'vue'

    let openMenu = ref(false)

</script>