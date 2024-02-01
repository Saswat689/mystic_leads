import processIcon from "../../processIcon";

export default {
  media: processIcon(
    `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="133" y="86" width="29" height="10" rx="2" fill="var(--main-500)"></rect><rect x="168" y="86" width="29" height="10" rx="2" fill="var(--base-400)"></rect><rect x="133" y="64" width="104" height="4" rx="2" fill="var(--base-500)"></rect><rect x="133" y="53" width="72" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="133" y="72" width="97" height="4" rx="2" fill="var(--base-500)"></rect><path d="M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="var(--base-500)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  ),
  name: "hero_1",
  label: "hero_1",
  category: "Hero",
  content: `
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>

          `,
};
