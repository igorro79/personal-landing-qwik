import { component$ } from "@builder.io/qwik";
// import { Image } from "@unpic/qwik";




export default component$(() => {
  return (
    //
    //  bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80')]
    // bg-[url('https://www.dddkursk.ru/image/planet/002095.1b.jpg')]
    // h-screen pt-24
    // https://kor.ill.in.ua/m/610x0/1629793.jpg
    // bg-[url('../../assets/images/fon.jpg')]
    <section class="  flex flex-col items-center justify-center   bg-fixed bg-center bg-cover bg-[url('../../assets/images/fon-02.jpg')] lg:bg-[url('../../assets/images/fon.jpg')]"
    // style="background-image: url('/images/fon.jpg')"
    >
       
        
       

      {/* </section>
    <section class=" bg-white dark:bg-black dark:text-white "> */}
      
     

      <div class="relative isolate px-6 pt-14 lg:px-8 bg-">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div> */}
        </div>
        <div class="  mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="dark:text-white  relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" class="font-semibold text-indigo-600">
                <span class="absolute inset-0" aria-hidden="true"></span>Read
                more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div class="  text-center">
            {/* text-gray-900 */}
            <h1 class="dark:text-white  text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p class="dark:text-white  mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
              </p>
               <div class="p-5 text-2xl text-white bg-slate-900 bg-opacity-50 rounded-xl">
          Welcome to my site!
              </div>
              {/* button */}
            <div
              
              class="mt-10 cursor-pointer flex items-center justify-center gap-x-6 transition-all ease-in-out"
            >
              {/* bg-indigo-600 hover:bg-indigo-500 */}
              {/* <a href="#"></a> */}
              <div
                class="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  
                bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </div>
              
            </div>
         

          </div>
        </div>

        {/* <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
        </div> */}
      </div>

     
    </section>
  );
});
