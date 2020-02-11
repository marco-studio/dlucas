import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import stitcher from "../images/stitcher.png";
import overcast from "../images/overcast.png";
import pocket from "../images/pocketcasts.png";
import beaker from "../images/beaker.svg";
import youtube from "../images/youtube.svg";

const WhereToListenSmall = () => {
  const data = useStaticQuery(graphql`
    query SitePodQuery {
      site {
        siteMetadata {
          apple
          google
          spotify
          stitcher
          overcast
          pocket
          castbox
          castro
          podbean
          youtube
          beaker
        }
      }
    }
  `);
  return (
    <>
      <ul className="flex justify-center mt-8">
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.apple}>
            <svg viewBox="0 0 300 300">
              <defs>
                <linearGradient
                  id="a"
                  x1="458.9"
                  x2="456.36"
                  y1="303.81"
                  gradientTransform="translate(-309.21)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#822cbe" offset="0" />
                  <stop stop-color="#d772fb" offset="1" />
                </linearGradient>
              </defs>
              <rect width="300" height="300" ry="66.74" fill="url(#a)" />
              <path
                d="M140.84 262.64c-8.95-3.2-10.87-7.55-14.54-33.04-4.27-29.63-5.2-47.97-2.73-53.78 3.28-7.7 12.18-12.07 24.63-12.12 12.35-.05 21.33 4.36 24.63 12.12 2.48 5.8 1.55 24.15-2.72 53.78-2.9 20.7-4.5 25.93-8.5 29.45-5.5 4.87-13.3 6.22-20.7 3.6zm-38.23-30.4c-30.9-15.2-50.7-40.92-57.9-75.14-1.8-8.83-2.1-29.9-.4-38 4.5-21.75 13.1-38.76 27.4-53.8 20.6-21.72 47.1-33.2 76.6-33.2 29.2 0 55.6 11.27 75.7 32.34 15.3 15.9 23.9 32.73 28.3 54.9 1.5 7.38 1.5 27.5.1 35.8-4.6 26.24-19.2 50.14-40.5 66.2-7.6 5.74-26.2 15.76-29.2 15.76-1.1 0-1.2-1.14-.7-5.75.9-7.4 1.8-8.94 6-10.7 6.7-2.8 18.1-10.92 25.1-17.94 12.1-12 21-27.7 25.1-44.2 2.6-10.3 2.3-33.2-.6-43.8-9.1-33.7-36.6-59.9-70.3-66.9-9.8-2-27.6-2-37.5 0-34.1 7-62.3 34.5-70.9 69.1-2.3 9.4-2.3 32.3 0 41.7 5.7 22.9 20.5 43.9 39.9 56.4 3.8 2.5 8.4 5.1 10.3 5.9 4.2 1.8 5.1 3.3 5.9 10.7.5 4.5.4 5.8-.7 5.8-.7 0-5.8-2.2-11.2-4.8zm.4-40.68c-10.4-8.3-19.6-23.02-23.4-37.46-2.3-8.72-2.3-25.3.1-34 6.3-23.48 23.6-41.68 47.6-50.23 8.2-2.9 26.4-3.55 36.5-1.32 34.8 7.75 59.5 42.6 54.7 77.17-1.9 13.93-6.7 25.37-15.2 36-4.2 5.37-14.4 14.38-16.2 14.38-.3 0-.6-3.4-.6-7.54V181l5.2-6.2c19.6-23.48 18.2-56.28-3.2-77.8-8.3-8.38-17.9-13.3-30.3-15.57-8-1.48-9.7-1.48-18.1-.1-12.75 2.08-22.63 7.02-31.4 15.7-21.5 21.3-22.9 54.27-3.3 77.77l5.16 6.2v7.6c0 4.2-.33 7.6-.74 7.6-.4 0-3.3-2-6.4-4.5zm34.7-40.83c-8.9-4.14-13.7-11.95-13.8-22.13 0-9.15 5.1-17.13 13.9-21.8 5.6-2.94 15.5-2.94 21.1.02 6.1 3.17 11.1 9.32 13 15.74 5.8 19.72-15.1 37-34 28.17z"
                fill="#fff"
              />
              <circle cx="149.89" cy="129.67" r="24.94" fill="#fff" />
              <path
                d="m152.28 164.27c1.73 0.23 5.17 0.68 8.35 1.7 3.2 1 6.1 2.57 8.36 4.18 2.2 1.6 3.8 3.26 4.8 5.28s1.5 4.42 1.8 8.35c0.2 3.94 0.2 9.4-0.7 19.6-0.9 10.17-2.7 25.08-4.1 34.63-1.4 9.6-2.4 13.8-3.7 16.9-1.3 3.2-3 5.3-4.9 6.8s-4.1 2.4-6.2 2.9-4 0.5-5.8 0.5-3.5 0-5.8-0.5-5.3-1.4-7.5-3.2c-2.3-1.8-3.8-4.4-5-7.8s-2.1-7.5-3.3-15.7-2.8-20.4-3.8-29.7-1.4-15.7-1.48-20c-0.1-4.3 0.1-6.43 0.6-8.5 0.5-2 1.3-3.9 2.4-5.5s2.54-3 4-4.1c1.43-1.1 2.9-1.9 4.66-2.52 1.74-0.7 3.83-1.3 6.4-1.8 2.6-0.5 5.6-1 7.14-1.2 1.54-0.23 1.54-0.23 3.26 0z"
                fill="#fff"
              />
            </svg>
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.youtube}>
            <img src={youtube} alt="spotify" />
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.google}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g fill="none">
                <path
                  d="M64 238.545v34.91c0 17.673-14.327 32-32 32s-32-14.327-32-32v-34.91c0-17.673 14.327-32 32-32s32 14.327 32 32z"
                  fill="#0066d9"
                />
                <path
                  d="M448.013 239.455a32.6 32.6 0 0 1-.013-.91c0-17.673 14.327-32 32-32s32 14.327 32 32c0 .304-.004.608-.013.91H512v34.909h-.013c-.48 17.252-14.618 31.09-31.987 31.09s-31.506-13.838-31.987-31.09H448v-34.91h.013z"
                  fill="#4285f4"
                />
                <path
                  d="M174.545 343.273v34.909c0 17.673-14.326 32-32 32s-32-14.327-32-32v-34.91c0-17.672 14.327-32 32-32s32 14.328 32 32zM174.545 133.818V248h-.008c-.386 17.337-14.562 31.273-31.992 31.273S110.94 265.337 110.554 248h-.009V133.818c0-17.673 14.327-32 32-32s32 14.327 32 32z"
                  fill="#ea4335"
                />
                <path
                  d="M337.455 168.727c0 17.673 14.326 32 32 32s32-14.327 32-32v-34.909c0-17.673-14.327-32-32-32s-32 14.327-32 32z"
                  fill="#34a853"
                />
                <path
                  d="M224 66.91c0 17.672 14.327 32 32 32s32-14.328 32-32V32c0-17.673-14.327-32-32-32s-32 14.327-32 32zM224 445.09c0-17.672 14.327-32 32-32s32 14.328 32 32V480c0 17.673-14.327 32-32 32s-32-14.327-32-32z"
                  fill="#fab908"
                />
                <path
                  d="M337.455 264.727c0-17.673 14.326-32 32-32s32 14.327 32 32v113.455c0 17.673-14.327 32-32 32s-32-14.327-32-32z"
                  fill="#34a853"
                />
                <path
                  d="M288 162.91v186.18c0 17.674-14.327 32-32 32s-32-14.326-32-32V162.91c0-17.674 14.327-32 32-32s32 14.326 32 32z"
                  fill="#fab908"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.spotify}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 168 168"
            >
              <path
                fill="#1ED760"
                d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <ul className="flex justify-center mt-6">
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.overcast}>
            <img src={overcast} alt="apple" />
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.castbox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 291.319 291.319"
            >
              <g>
                <path
                  style={{ fill: "#FF7700" }}
                  d="M72.83,218.485h18.207V103.832c-6.828,1.93-12.982,5.435-18.207,10.041   C72.83,113.874,72.83,218.485,72.83,218.485z M36.415,140.921v77.436l1.174,0.127h17.033v-77.682H37.589   C37.589,140.803,36.415,140.921,36.415,140.921z M0,179.63c0,14.102,7.338,26.328,18.207,33.147V146.52   C7.338,153.329,0,165.556,0,179.63z M109.245,218.485h18.207v-109.6c-5.444-3.396-11.607-5.635-18.207-6.5V218.485z    M253.73,140.803h-10.242c0.519-3.168,0.847-6.382,0.847-9.705c0-32.182-25.245-58.264-56.388-58.264   c-16.896,0-31.954,7.775-42.287,19.955v125.695h108.07c20.747,0,37.589-17.388,37.589-38.855   C291.319,158.182,274.477,140.803,253.73,140.803z"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.castro}>
            <svg viewBox="0 0 34 34" version="1.1">
              <defs>
                <linearGradient
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#00CCBF" offset="0%" />
                  <stop stop-color="#00B265" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#151515" offset="0%" />
                  <stop stop-color="#353535" offset="100%" />
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="c2icon-copy">
                  <path
                    d="M11.8538809,6.640625e-05 L22.1461191,6.640625e-05 C25.5594004,6.640625e-05 27.2659082,6.640625e-05 29.1031699,0.580955078 C31.1089375,1.31102539 32.6889746,2.8910625 33.4191113,4.89689648 C33.9999336,6.73402539 33.9999336,8.44059961 33.9999336,11.8538809 L33.9999336,22.1461191 C33.9999336,25.5594004 33.9999336,27.2659082 33.4191113,29.1031699 C32.6889746,31.1089375 31.1089375,32.6889746 29.1031699,33.4189785 C27.2659082,33.9999336 25.5594004,33.9999336 22.1461191,33.9999336 L11.8538809,33.9999336 C8.44059961,33.9999336 6.73402539,33.9999336 4.89689648,33.4189785 C2.8910625,32.6889746 1.31102539,31.1089375 0.580955078,29.1031699 C6.640625e-05,27.2659082 6.640625e-05,25.5594004 6.640625e-05,22.1461191 L6.640625e-05,11.8538809 C6.640625e-05,8.44059961 6.640625e-05,6.73402539 0.580955078,4.89689648 C1.31102539,2.8910625 2.8910625,1.31102539 4.89689648,0.580955078 C6.73402539,6.640625e-05 8.44059961,6.640625e-05 11.8538809,6.640625e-05 L11.8538809,6.640625e-05"
                    id="path-1"
                    fill="url(#linearGradient-1)"
                  />
                  <path
                    d="M17.0166016,2.22460938 C25.185998,2.22460938 31.8085937,8.84069727 31.8085937,17.0020586 C31.8085937,25.1634531 25.185998,31.779541 17.0166016,31.779541 C8.84720508,31.779541 2.22460938,25.1634531 2.22460938,17.0020586 C2.22460938,8.84069727 8.84720508,2.22460938 17.0166016,2.22460938 Z"
                    id="path-2"
                    fill="url(#linearGradient-2)"
                  />
                  <path
                    d="M23.1715645,25.4293437 L20.6914902,21.9926543 C22.249082,20.8536211 23.2608809,19.0139023 23.2608809,16.9378105 C23.2608809,13.4801035 20.455084,10.6770957 16.9939238,10.6770957 C13.5327969,10.6770957 10.727,13.4801035 10.727,16.9378105 C10.727,19.023 11.7476973,20.8697578 13.316877,22.0075957 L10.8349434,25.4469414 C8.19662305,23.5391895 6.47985547,20.4378184 6.47985547,16.9354531 C6.47985547,11.1359961 11.1859336,6.43459961 16.991168,6.43459961 C22.7964023,6.43459961 27.5024805,11.1359961 27.5024805,16.9354531 C27.5024805,20.4270937 25.7961387,23.5201309 23.1715645,25.4293437 Z M17.0144766,14.4014238 C18.4110664,14.4014238 19.5432598,15.5324883 19.5432598,16.9276836 C19.5432598,18.3229121 18.4110664,19.4539434 17.0144766,19.4539434 C15.6178535,19.4539434 14.4856934,18.3229121 14.4856934,16.9276836 C14.4856934,15.5324883 15.6178535,14.4014238 17.0144766,14.4014238 Z"
                    id="path-3"
                    fill="#FFFFFF"
                  />
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="w-8 ml-6 mr-6">
          <a href={data.site.siteMetadata.pocket}>
            <img src={pocket} alt="spotify" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default WhereToListenSmall;
