import processIcon from "../../processIcon";

export default {
  media: processIcon(
    `<svg fill="none" viewBox="0 0 266 150"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><path stroke="var(--base-300)" d="M266 38.5H0"></path><rect x="217" y="14" width="29" height="10" rx="2" fill="var(--base-400)"></rect><circle cx="29" cy="19" r="9" fill="var(--main-500)"></circle><rect x="150.132" y="17" width="16.604" height="4" rx="2" fill="var(--solid-900)"></rect><rect x="171.264" y="17" width="16.604" height="4" rx="2" fill="var(--solid-900)"></rect><rect x="192.396" y="17" width="16.604" height="4" rx="2" fill="var(--solid-900)"></rect><rect x="129" y="17" width="16.604" height="4" rx="2" fill="var(--solid-900)"></rect></svg>`
  ),
  name: "header_1",
  label: "header_1",
  category: "Header",
  content: `<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
          `,
};
