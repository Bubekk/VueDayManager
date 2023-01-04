<template>
  <router-view />
</template>


<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: rgb(18, 17, 20);
  /* background: linear-gradient(-45deg, red, blue, green, purple);
  background-size: 200% 200%;
  animation: gradient 30s ease infinite;
  height: 100vh; */
  /* background-image: url(./assets/forest-1.jpg);
  background-repeat: no-repeat;
  background-size: cover; */
  background: linear-gradient(235deg, #BABC4A 0%, #000000 100%), 
  linear-gradient(235deg, #0026AC 0%, #282534 100%), 
  linear-gradient(235deg, #00FFD1 0%, #000000 100%), 
  radial-gradient(120% 185% at 25% -25%, #EEEEEE 0%, #EEEEEE 40%, #7971EA calc(40% + 1px), #7971EA 50%, #393E46 calc(50% + 1px), #393E46 70%, #222831 calc(70% + 1px), #222831 100%), 
  radial-gradient(70% 140% at 90% 10%, #F5F5C6 0%, #F5F5C6 30%, #7DA87B calc(30% + 1px), #7DA87B 60%, #326765 calc(60% + 1px), #326765 80%, #27253D calc(80% + 1px), #27253D 100%);
background-blend-mode: overlay, lighten, overlay, color-burn, normal;
background-clip: border-box;
}

/* @keyframes gradient {
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} */
</style>
