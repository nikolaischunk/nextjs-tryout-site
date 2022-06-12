// import { setCookies, getCookies, removeCookies } from 'cookies-next';

// setCookies('key', 'value', options);
// getCookies(options); // => { 'name1': 'value1', name2: 'value2' }
// removeCookies(name, options);

// const Cookie_banner = () => {
//     return (
//         <div class="cookie_banner">
//             {/* Check if there is a cookie existent with the name "cookie_accepted"
//         If it does not exist show a banner with a cookie message and a accept and deny button and a link to your privacy policy.
//         If you click on accept set a cookie with the name "cookie_accepted" */}
//             {
//                 !getCookies('cookie_accepted') &&
//                 <div>
//                     <p>
//                         This website uses cookies.
//                     </p>
//                     <button onClick={() => {
//                         setCookies('cookie_accepted', true);
//                     }}>
//                         Accept
//                     </button>
//                     <button onClick={() => {
//                         removeCookies('cookie_accepted');
//                     }}>
//                         Deny
//                     </button>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Cookie_banner;