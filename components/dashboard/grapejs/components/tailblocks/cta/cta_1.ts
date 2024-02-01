import processIcon from "../../processIcon";

const media = processIcon(
  `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><path d="M41.692 86a2 2 0 012-2H114.4a2 2 0 010 4H43.692a2 2 0 01-2-2z" fill="var(--base-500)"></path><rect x="59" y="104" width="40" height="10" rx="2" fill="var(--main-500)"></rect><path d="M35 94a2 2 0 012-2h83a2 2 0 110 4H37a2 2 0 01-2-2z" fill="var(--base-500)"></path><path d="M68.889 63H89.11A2.889 2.889 0 0092 60.111V39.89A2.889 2.889 0 0089.111 37H68.89A2.889 2.889 0 0066 39.889V60.11A2.889 2.889 0 0068.889 63zm0 0l15.889-15.889L92 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="var(--base-500)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="56" y="73" width="46" height="5" rx="2.5" fill="var(--solid-900)"></rect><path d="M150.692 86a2 2 0 012-2h70.707a2 2 0 010 4h-70.707a2 2 0 01-2-2z" fill="var(--base-500)"></path><rect x="168" y="104" width="40" height="10" rx="2" fill="var(--main-500)"></rect><path d="M144 94a2 2 0 012-2h83a2 2 0 110 4h-83a2 2 0 01-2-2z" fill="var(--base-500)"></path><path d="M177.889 63h20.222A2.889 2.889 0 00201 60.111V39.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00175 39.889V60.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L201 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="var(--base-500)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="165" y="73" width="46" height="5" rx="2.5" fill="var(--solid-900)"></rect></svg>`
);

export default {
  media,
  name: "cta_1",
  label: "cta_1",
  category: "CTA",
  content: `
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>

          `,
};
