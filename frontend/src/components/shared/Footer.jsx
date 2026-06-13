import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-t-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Job Hunt</h2>
                        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://facebook.com"
                            className="hover:text-gray-400"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.408 24 24 23.408 24 22.676V1.324C24 .592 23.408 0 22.676 0z" />
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com"
                            className="hover:text-gray-400"
                            aria-label="Twitter"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com"
                            className="hover:text-gray-400"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
