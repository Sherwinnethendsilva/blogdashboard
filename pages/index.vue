<template>
  <!-- <div>
    <img src="../assets/images/homepageimage.png" class="min-h-screen min-w-full bg-cover" alt="Descriptive Alt Text">
  </div> -->
  <div :style="{ backgroundImage: `url(${homepageImage})` }" class="min-w-full min-h-[300px] bg-cover bg-center flex justify-center items-center">
    <div class="p-10 text-4xl text-red-500 font-oswald text-center font-medium sm:text-5xl"><h1>Nori's</h1><h1>Kitchen</h1></div>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan semper pellentesque. Donec a cursus nibh. Mauris vel libero sit amet urna pellentesque semper. Donec venenatis maximus aliquam. Nam tempor turpis ac tempor lacinia. Sed volutpat sed velit id aliquet. Sed et ex nec quam pulvinar consequat quis id nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at porttitor nisl. Suspendisse mi mauris, dapibus eget vestibulum sit amet, mattis in ligula. Fusce pulvinar lorem vel mauris malesuada, at bibendum leo tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan semper pellentesque. Donec a cursus nibh. Mauris vel libero sit amet urna pellentesque semper. Donec venenatis maximus aliquam. Nam tempor turpis ac tempor lacinia. Sed volutpat sed velit id aliquet. Sed et ex nec quam pulvinar consequat quis id nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at porttitor nisl. Suspendisse mi mauris, dapibus eget vestibulum sit amet, mattis in ligula. Fusce pulvinar lorem vel mauris malesuada, at bibendum leo tempus.</p>
</template>
  
<script>
import homepageImage from '../assets/images/homepageimage.png'
export default {
  name: 'IndexPage',
  data() {
    return {
      homepageImage: homepageImage
    };
  }
}
</script>
  