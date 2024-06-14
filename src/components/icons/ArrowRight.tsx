const ArrowRight = () => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="22"
          fill="none"
          viewBox="0 0 20 22"
        >
          <g filter="url(#filter0_d_36_9491)">
            <path
              fill="#fff"
              d="M4.667 7.333v1.334h8L9 12.333l.947.947L15.227 8l-5.28-5.28L9 3.667l3.667 3.666h-8z"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_36_9491"
              width="24"
              height="24"
              x="-2"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_36_9491"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_36_9491"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      );
}

export default ArrowRight