import React from "react";
import Image from "next/image";
import Img from "../../../public/viet.jpeg";

const Footer = () => {
    return (
        <footer class="flex flex-col items-center justify-between px-4 py-12 mx-auto max-w-7xl md:flex-row">
            <p class="mb-8 text-sm text-center text-gray-500 md:text-left md:mb-0">© Copyright 2024 Nagarjun. All Rights Reserved.</p>
            <div class="flex items-center space-x-6">
                <a href="https://www.linkedin.com/in/nagarjun-selvaprabhu/" target="_blank">
                    <span class="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="7.025 7.025 497.951 497.95" class="w-5 h-5" aria-hidden="true">
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)">
                            <stop offset="0" stop-color="#2489be" />
                            <stop offset="1" stop-color="#0575b3" />
                        </linearGradient>
                        <path
                            d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                            fill="url(#a)"
                        />
                    </svg>
                </a>
                <a href="https://github.com/nagarjun-selvaprabhu" target="_blank">
                    <span class="sr-only">Github</span>
                    <svg class="w-5 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509.0-9.974 4.465-9.974 9.974.0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481.0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93.0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64.0.0.837-.269 2.742 1.021.798-.221 1.649-.332 2.496-.336.849.004 1.701.115 2.496.336 1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675.0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846.0 1.334-.012 2.41-.012 2.737.0.267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;