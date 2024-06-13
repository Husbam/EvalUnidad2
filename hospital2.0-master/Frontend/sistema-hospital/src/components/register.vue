<template>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Crea una cuenta
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                O
                <router-link to="/">
                <a href="#"
                    class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Inicia sesion con tu cuenta
                </a>
                </router-link>
            </p>
        </div>
      
        <div class="flex flex-col md:flex-row justify-center items-center">
            
            <div class="w-max md:w-1/4 p-4">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <usuario></usuario>
                </div>
            </div>
            <div class="w-max md:w-1/8 p-4">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <personas></personas>
                    
                </div>
            </div>
        </div>

</template>

<script>
    import personas from './registerPersona.vue'
    import usuario from './registerUser.vue'

    export default{
        components:{
            personas,
            usuario
        }
    }
</script>