<template>
    <div class="sticky top-0 z-5 shadow bg-[#750606] text-white h-16 flex justify-center items-center sm:h-24">
        <button v-for="list in lists" :key="list.title"
            class="text-lg font-bold font-oswald px-4 py-2 m-2 duration-100 ease-linear hover:text-[#f1b8a4] hover:scale-x-95 sm:px-10 sm:py-3 sm:m-4 sm:text-2xl">
            <NuxtLink :to="`${list.page}`">{{ list.title }}</NuxtLink>
        </button>
    </div>
</template>
<script>
import AppHeaderJson from "../jsonconfig/AppHeader.json";
export default {
    data() {
        return {
            lists: AppHeaderJson.lists
        };
    }
}

</script>