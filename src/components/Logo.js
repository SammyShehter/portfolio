import Link from "next/link"
const Logo = ({className}) => {
    return (
        <div className={`flex items-center justify-center mt-1 ${className}`}>
            <Link
                href="/"
                className={`w-20 h-16  flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent md:text-base md:h-8 text-dark dark:text-light`}
            >
                <svg viewBox="0 0 40 16.417460365900915">
                    <g
                        transform="translate(-0.31746031746031744, -12.10888938298301) scale(0.31746031746031744)"
                        fill="currentColor"
                    >
                        <g xmlns="http://www.w3.org/2000/svg">
                            <path d="M90.716,58.23c0.106-0.063,0.225-0.094,0.345-0.102l-0.651-8.221l-15.451,8.898l7.379,4.248L90.716,58.23z"></path>
                            <polygon points="38.218,79.959 37.434,89.857 63.781,74.688 55.426,70.053  "></polygon>
                            <path d="M38.148,49.908l-0.65,8.221c0.119,0.01,0.239,0.039,0.347,0.102l8.789,5.061h0.001l44.49,26.566l-0.785-9.898   L38.148,49.908z"></path>
                            <path d="M99.914,63.055l7.379-4.248L91.84,49.908l-0.65,8.221c0.119,0.008,0.239,0.039,0.348,0.102L99.914,63.055z"></path>
                            <path d="M64.904,53.248l8.394,4.613l17.184-9.895c0.138-0.17,0.341-0.289,0.579-0.309c0.285-0.021,0.547,0.104,0.712,0.313   l17.581,10.121c0.014,0.008,0.025,0.02,0.037,0.027c0.026,0.018,0.05,0.033,0.074,0.053c0.02,0.016,0.039,0.035,0.059,0.055   c0.018,0.018,0.036,0.037,0.053,0.057c0.02,0.023,0.036,0.049,0.053,0.074c0.009,0.014,0.02,0.023,0.038,0.061   c0.014,0.027,0.025,0.055,0.036,0.082c0.01,0.021,0.02,0.047,0.026,0.07c0.008,0.025,0.013,0.051,0.018,0.078   c0.006,0.025,0.012,0.053,0.014,0.078c0.003,0.027,0.002,0.053,0.002,0.08c0,0.025,0.001,0.051-0.002,0.078   c-0.002,0.025-0.008,0.053-0.014,0.078c-0.005,0.027-0.01,0.053-0.018,0.078c-0.007,0.023-0.017,0.047-0.026,0.07   c-0.011,0.027-0.022,0.055-0.047,0.105c-0.005,0.01-0.014,0.016-0.02,0.023c-0.027,0.045-0.059,0.086-0.096,0.125   c-0.012,0.014-0.021,0.025-0.035,0.037c-0.046,0.043-0.096,0.084-0.158,0.119L91.537,69.777c-0.128,0.074-0.271,0.109-0.412,0.109   s-0.283-0.035-0.409-0.109L37.458,38.143L1.573,58.801l35.857,19.713l16.318-9.395l-7.517-4.17l-8.388,4.828   c-0.127,0.074-0.269,0.111-0.41,0.111s-0.284-0.037-0.411-0.111c-0.815-0.451-16.51-9.107-17.285-9.568   c-0.514-0.305-1.114-0.572-1.021-1.271c0.111-0.842,1.209-1.262,1.861-1.637c2.014-1.16,4.028-2.318,6.042-3.479   c2.295-1.322,9.075-5.225,10.17-5.855c0.138-0.17,0.341-0.289,0.579-0.309c0.285-0.021,0.547,0.104,0.713,0.313l53.053,30.545   l35.863-19.709L91.125,38.15L64.904,53.248z"></path>
                            <polygon points="127,58.807 91.91,79.949 91.126,89.857 127,69.203  "></polygon>
                            <path d="M21.266,58.807l7.381,4.248l8.377-4.824c0.107-0.063,0.226-0.092,0.346-0.102l-0.651-8.221L21.266,58.807z"></path>
                            <polygon points="1,58.807 1,69.203 37.154,89.857 36.229,79.949  "></polygon>
                        </g>
                    </g>
                </svg>
            </Link>
        </div>
    )
}

export default Logo
