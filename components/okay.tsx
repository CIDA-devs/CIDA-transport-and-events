import React from "react";

function about() {
  return (
    <div>
      <div className="w-full object-cover">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="#333333"></rect>
          <path
            d="M0 418L21.5 418.7C43 419.3 86 420.7 128.8 419.5C171.7 418.3 214.3 414.7 257.2 410C300 405.3 343 399.7 385.8 399C428.7 398.3 471.3 402.7 514.2 396.2C557 389.7 600 372.3 642.8 378.5C685.7 384.7 728.3 414.3 771.2 424.7C814 435 857 426 878.5 421.5L900 417L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#fff"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default about;