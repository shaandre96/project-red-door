import * as React from 'react';

export const SearchIcon = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        viewBox="0 0 24 24"
        className={`w-auto h-[25px] ${className}`}
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
    </svg>
);

export const Logo = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fill="#d31717"
        stroke="#d31717"
        viewBox="0 0 492.5 492.5"
        className={`w-auto h-[25px] ${className}`}
        {...props}
    >
        <path d="M184.646 0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422V37.5L184.646 0zm38.292 263.129c-6.997 0-12.67-7.381-12.67-16.486 0-9.104 5.673-16.485 12.67-16.485s12.67 7.381 12.67 16.485c0 9.105-5.673 16.486-12.67 16.486z" />
    </svg>
);
