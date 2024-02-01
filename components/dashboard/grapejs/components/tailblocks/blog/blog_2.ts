import processIcon from "../../processIcon";

const media = processIcon(
  `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="20" y="48" width="70" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="20" y="36" width="34" height="8" rx="2" fill="var(--main-100)"></rect><rect x="20" y="58" width="92" height="4" rx="2" fill="var(--base-500)"></rect><rect x="20" y="66" width="82" height="4" rx="2" fill="var(--base-500)"></rect><rect x="20" y="74" width="68" height="4" rx="2" fill="var(--base-500)"></rect><rect x="20" y="82" width="18" height="4" rx="2" fill="var(--main-500)"></rect><rect x="23" y="39" width="28" height="2" rx="1" fill="var(--main-500)"></rect><path d="M121.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z" fill="var(--base-300)"></path><circle cx="27.5" cy="107.5" r="7.5" fill="var(--base-300)"></circle><path d="M39 110a1 1 0 011-1h19a1 1 0 010 2H40a1 1 0 01-1-1z" fill="var(--base-500)"></path><rect x="39" y="103" width="35" height="3" rx="1.5" fill="var(--solid-900)"></rect><rect x="144" y="48" width="70" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="144" y="36" width="34" height="8" rx="2" fill="var(--main-100)"></rect><rect x="144" y="58" width="92" height="4" rx="2" fill="var(--base-500)"></rect><rect x="144" y="66" width="82" height="4" rx="2" fill="var(--base-500)"></rect><rect x="144" y="74" width="68" height="4" rx="2" fill="var(--base-500)"></rect><rect x="144" y="82" width="18" height="4" rx="2" fill="var(--main-500)"></rect><rect x="147" y="39" width="28" height="2" rx="1" fill="var(--main-500)"></rect><path d="M245.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z" fill="var(--base-300)"></path><circle cx="151.5" cy="107.5" r="7.5" fill="var(--base-300)"></circle><path d="M163 110a1 1 0 011-1h19a1 1 0 010 2h-19a1 1 0 01-1-1z" fill="var(--base-500)"></path><rect x="163" y="103" width="35" height="3" rx="1.5" fill="var(--solid-900)"></rect></svg>`
);

export default {
  media: media,
  name: "blog_2",
  label: "blog_2",
  category: "Blog",
  content: ` <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
          </span>
        </a>
      </div>
          `,
};
