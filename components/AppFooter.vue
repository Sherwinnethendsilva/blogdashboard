<template>
    <div class="shadow bg-[#750606] text-white h-16 flex justify-center items-center sm:h-24">
        <h1 class="px-4 text-xs sm:text-xl">Our Socials </h1>
        <div v-for="list in socials" :key="list.title"
            class="px-4 py-2 m-2 duration-100 ease-linear items-center hover:text-[#f1b8a4] hover:scale-x-95 sm:px-10 sm:py-3 sm:m-4 flex flex-col">
            <img :src="list.image" :alt="list.title" width="30">
            <div class="hidden sm:text-xs sm:block">{{ list.title }}</div>
        </div>
    </div>
</template>
<script>
import AppFooterJson from "../jsonconfig/AppFooter.json";
export default {
    data() {
        return {
            socials: AppFooterJson.socials,
        };
    },
}

</script>