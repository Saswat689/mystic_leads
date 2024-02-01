import processIcon from "../../processIcon";

const media = processIcon(
  `<svg fill="none" viewBox="0 0 266 150"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="113" y="117" width="40" height="10" rx="2" fill="var(--main-500)"></rect><rect x="63" y="81" width="140" height="30" rx="2" fill="var(--base-400)"></rect><rect x="63" y="65" width="66" height="10" rx="2" fill="var(--base-400)"></rect><rect x="135" y="65" width="68" height="10" rx="2" fill="var(--base-400)"></rect><rect x="90" y="24" width="86" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="80" y="33" width="106" height="4" rx="2" fill="var(--base-500)"></rect><rect x="85" y="41" width="97" height="4" rx="2" fill="var(--base-500)"></rect></svg>`
);

export default {
  media,
  name: "contact_1",
  label: "contact_1",
  category: "Contact",
  content: `
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
          `,
};
