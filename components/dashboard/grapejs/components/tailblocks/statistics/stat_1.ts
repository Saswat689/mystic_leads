import processIcon from "../../processIcon";

export default {
  media: processIcon(
    `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="45" y="66" width="26" height="10" rx="5" fill="var(--solid-900)"></rect><rect x="43" y="80" width="30" height="4" rx="2" fill="var(--base-500)"></rect><rect x="95" y="66" width="26" height="10" rx="5" fill="var(--solid-900)"></rect><rect x="93" y="80" width="30" height="4" rx="2" fill="var(--base-500)"></rect><rect x="145" y="66" width="26" height="10" rx="5" fill="var(--solid-900)"></rect><rect x="143" y="80" width="30" height="4" rx="2" fill="var(--base-500)"></rect><rect x="195" y="66" width="26" height="10" rx="5" fill="var(--solid-900)"></rect><rect x="193" y="80" width="30" height="4" rx="2" fill="var(--base-500)"></rect></svg>`
  ),
  name: "stat_1",
  label: "stat_1",
  category: "Statistics",
  content: `
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>

          `,
};
