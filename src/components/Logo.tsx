export default function Logo() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      {/* Hunter silhouette */}
      <path
        d="M30 5C16.7452 5 6 15.7452 6 29C6 42.2548 16.7452 53 30 53C43.2548 53 54 42.2548 54 29C54 15.7452 43.2548 5 30 5ZM30 47C19.5066 47 11 38.4934 11 28C11 17.5066 19.5066 9 30 9C40.4934 9 49 17.5066 49 28C49 38.4934 40.4934 47 30 47Z"
        fill="#611f69"
      />
      {/* Bow */}
      <path
        d="M30 15C25.5817 15 22 18.5817 22 23C22 27.4183 25.5817 31 30 31C34.4183 31 38 27.4183 38 23C38 18.5817 34.4183 15 30 15ZM30 27C27.7909 27 26 25.2091 26 23C26 20.7909 27.7909 19 30 19C32.2091 19 34 20.7909 34 23C34 25.2091 32.2091 27 30 27Z"
        fill="#611f69"
      />
      {/* Arrow */}
      <path
        d="M35 23L40 18M40 18L35 13M40 18H25"
        stroke="#611f69"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 