<template>
  <div class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm" id="HomeView">
    <div class="border-b">

      <div class="flex items-center justify-between px-4 my-3">
        <IconComeponent  iconString="trash" iconColor="#636363" text="Delete Seleted" hoverColor="hover:bg-gray-200" />
        <div class="text-xs text-gray-500">
          1-50 of 153
        </div>

      </div>


    </div>
    <div>
      <MessageRow
      from="hasan@gmail.com"
      subject="testing"
      body="this is a test body"
      time="Jun 20 15:15"
      
      />
      <MessageRow
      from="hasan@gmail.com"
      subject="testing"
      body="this is a test body"
      time="Jun 20 15:15"
      
      />      <MessageRow
      from="hasan@gmail.com"
      subject="testing"
      body="this is a test body"
      time="Jun 20 15:15"
      
      />      <MessageRow
      from="hasan@gmail.com"
      subject="testing"
      body="this is a test body"
      time="Jun 20 15:15"
      
      />      <MessageRow
      from="hasan@gmail.com"
      subject="testing"
      body="this is a test body"
      time="Jun 20 15:15"
      
      />
    </div>
  </div>
</template>

<script setup>

  import IconComeponent from '@/components/IconComeponent.vue';
  import MessageRow from '@/components/MessageRow.vue';

</script>
