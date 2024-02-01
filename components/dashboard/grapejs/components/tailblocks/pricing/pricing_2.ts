import processIcon from "../../processIcon";

export default {
  media: processIcon(
    `<svg viewBox="0 0 266 150" fill="none"><path fill="var(--solid)" d="M0 0h266v150H0z"></path><rect x="110" y="20" width="46" height="5" rx="2.5" fill="var(--solid-900)"></rect><rect x="87" y="29" width="92" height="4" rx="2" fill="var(--base-500)"></rect><rect x="106" y="37" width="55" height="4" rx="2" fill="var(--base-500)"></rect><rect x="50" y="57" width="167" height="11" rx="1" fill="var(--base-200)"></rect><rect x="55" y="61" width="39" height="3" rx="1.5" fill="var(--solid-900)"></rect><rect x="55" y="121" width="19" height="3" rx="1.5" fill="var(--main-500)"></rect><rect x="108" y="61" width="24" height="3" rx="1.5" fill="var(--solid-900)"></rect><rect x="145" y="61" width="30" height="3" rx="1.5" fill="var(--solid-900)"></rect><rect x="188" y="61" width="20" height="3" rx="1.5" fill="var(--solid-900)"></rect><rect x="55" y="74" width="26" height="2" rx="1" fill="var(--base-500)"></rect><rect x="108" y="74" width="12" height="2" rx="1" fill="var(--base-500)"></rect><path d="M216.5 82a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="var(--base-300)"></path><rect x="145" y="74" width="13" height="2" rx="1" fill="var(--base-500)"></rect><rect x="188" y="74" width="20" height="2" rx="1" fill="var(--base-500)"></rect><rect x="55" y="89" width="39" height="2" rx="1" fill="var(--base-500)"></rect><rect x="108" y="89" width="17" height="2" rx="1" fill="var(--base-500)"></rect><path d="M216.5 97a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="var(--base-300)"></path><rect x="145" y="89" width="18" height="2" rx="1" fill="var(--base-500)"></rect><rect x="188" y="89" width="13" height="2" rx="1" fill="var(--base-500)"></rect><rect x="55" y="104" width="33" height="2" rx="1" fill="var(--base-500)"></rect><rect x="108" y="104" width="14" height="2" rx="1" fill="var(--base-500)"></rect><path d="M216.5 112a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="var(--base-300)"></path><rect x="182" y="119" width="31" height="10" rx="2" fill="var(--main-500)"></rect><rect x="145" y="104" width="18" height="2" rx="1" fill="var(--base-500)"></rect><rect x="188" y="104" width="20" height="2" rx="1" fill="var(--base-500)"></rect></svg>`
  ),
  name: "pricing_2",
  label: "pricing_2",
  category: "Pricing",
  content: `
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3">5 Mb/s</td>
            <td class="px-4 py-3">15 GB</td>
            <td class="px-4 py-3 text-lg text-gray-900">Free</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>

          `,
};
