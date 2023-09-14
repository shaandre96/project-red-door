'use client';

import Link from 'next/link';
import { SearchIcon, Logo } from './Icons';

const CustomLink = ({ href, title, className = '' }) => {
    return (
        <Link href={href} className={`${className} relative group text-sm`}>
            {title}

            <span
                className={`h-[1px] inline-block w-0 bg-dark 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="w-full px-4 py-4 font-medium flex items-center justify-between shadow-lg z-[10]">
            <Link
                href="/"
                target={'_blank'}
                className="flex items-center justify-center"
            >
                <Logo className="mr-1" />
                <span className="px-0 mr-4 text-primary text-sm">
                    Red Door Project
                </span>
            </Link>
            <nav className="flex items-center justify-between">
                <CustomLink href="#Hero" title="Find help" className="mr-4" />
                <CustomLink
                    href="#Services"
                    title="Find resources"
                    className="mx-4"
                />
                <CustomLink href="#About" title="Learn more" className="ml-4" />
                <form>
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Search
                    </label>
                    <div class="relative mx-4">
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-2 focus:border-primary focus:border-solid"
                            placeholder="Search..."
                            required
                        />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                </form>
                <p className="text-primary text-sm">中国</p>
            </nav>
        </header>
    );
};

export default NavBar;
