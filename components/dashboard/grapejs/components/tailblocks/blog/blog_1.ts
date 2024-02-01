import processIcon from "../../processIcon"

const media = `<svg viewBox="0 0 266 150" width="100" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="20.5" y="43.5" width="67" height="62" rx="1.5" fill="var(--solid)" stroke="var(--base-400)"></rect><path d="M48.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556H48.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L61 64.334m-8.556-5.056a1.167 1.167 0 11-2.333 0 1.167 1.167 0 012.333 0z" stroke="var(--base-500)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 88a1 1 0 011-1h48a1 1 0 110 2H27a1 1 0 01-1-1zM26 93a1 1 0 011-1h40a1 1 0 110 2H27a1 1 0 01-1-1z" fill="var(--base-500)"></path><path d="M26 98a1 1 0 011-1h11a1 1 0 110 2H27a1 1 0 01-1-1z" fill="var(--main-500)"></path><path d="M26 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="var(--solid-900)"></path><rect x="99.5" y="43.5" width="67" height="62" rx="1.5" fill="var(--solid)" stroke="var(--base-400)"></rect><path d="M127.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" stroke="var(--base-500)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M105 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM105 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="var(--base-500)"></path><path d="M105 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="var(--main-500)"></path><path d="M105 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="var(--solid-900)"></path><rect x="178.5" y="43.5" width="67" height="62" rx="1.5" fill="var(--solid)" stroke="var(--base-400)"></rect><path d="M206.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" stroke="var(--base-500)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M184 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM184 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="var(--base-500)"></path><path d="M184 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="var(--main-500)"></path><path d="M184 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="var(--solid-900)"></path></svg>`

export default {
  media: processIcon(media),
  name: "blog_1",
  label: "blog_1",
  category: "Blog",
  content: `<div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  </div>
          `
}
