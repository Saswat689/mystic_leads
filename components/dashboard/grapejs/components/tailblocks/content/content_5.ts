import processIcon from "../../processIcon";

const media = processIcon(
  `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><path d="M128 44.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z" fill="var(--base-400)"></path><rect x="20" y="69" width="70" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="20" y="78" width="92" height="5" rx="2.5" fill="var(--solid-900)"></rect><path d="M144 60a2 2 0 012-2h75a2 2 0 110 4h-75a2 2 0 01-2-2zM144 68a2 2 0 012-2h88a2 2 0 110 4h-88a2 2 0 01-2-2zM144 76a2 2 0 012-2h60a2 2 0 110 4h-60a2 2 0 01-2-2z" fill="var(--base-500)"></path><path d="M190 89a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z" fill="var(--main-500)"></path><rect x="144" y="84" width="40" height="10" rx="2" fill="var(--main-500)"></rect></svg>`
);

export default {
  media,
  name: "content_5",
  label: "content_5",
  category: "Content",
  content: `
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
    </div>
  </div>

          `,
};
