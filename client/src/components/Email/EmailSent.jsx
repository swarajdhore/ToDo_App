import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../Redux/Reducer/Email/email.action";

function EmailSent() {
  var { token } = useParams();
  var { id } = useParams();
  console.log(token);
  console.log(id);
  const dispatch = useDispatch();
  dispatch(verifyEmail());

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      * {\n        border: 0;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n      :root {\n        --hue: 223;\n        --bg: hsl(var(--hue), 90%, 20%);\n        --fg: hsl(var(--hue), 10%, 90%);\n        --primary: hsl(var(--hue), 90%, 55%);\n        --primary-dn: hsl(var(--hue), 90%, 45%);\n        font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));\n      }\n      body,\n      button {\n        font: 1em/1.5 Hind, sans-serif;\n      }\n      body {\n        background: var(--bg);\n        color: var(--fg);\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n      button {\n        animation: reappear 3s steps(1) forwards;\n        background-color: var(--primary);\n        border-radius: 0.2em;\n        color: hsl(0, 0%, 100%);\n        padding: 0.5em 1em;\n        transition: background-color 0.1s linear;\n        -webkit-appearance: none;\n        appearance: none;\n      }\n      button:focus,\n      button:hover {\n        background-color: var(--primary-dn);\n      }\n      button:focus {\n        outline: none;\n      }\n      button,\n      .check-spinner__worm-a,\n      .check-spinner__worm-b {\n        visibility: hidden;\n      }\n      .check-spinner {\n        margin-bottom: 3em;\n        overflow: visible;\n        width: 6.25em;\n        height: 6.25em;\n      }\n      .check-spinner__worm-a {\n        animation: worm-a 1.2s linear;\n      }\n      .check-spinner__worm-b {\n        animation: worm-b 1.2s 1.2s linear forwards;\n        stroke-dashoffset: 0.01;\n      }\n      .check-spinner__circle {\n        animation: circle 0.2s 2.3s cubic-bezier(0, 0, 0.42, 1.33) forwards;\n      }\n\n      /* Animations */\n      @keyframes worm-a {\n        from {\n          stroke-dashoffset: 36.1;\n          visibility: visible;\n        }\n        to {\n          stroke-dashoffset: -252.9;\n          visibility: visible;\n        }\n      }\n      @keyframes worm-b {\n        from {\n          animation-timing-function: linear;\n          stroke-dasharray: 0 0 72.2 341.3;\n          visibility: visible;\n        }\n        69.7% {\n          animation-timing-function: ease-out;\n          stroke-dasharray: 0 207 45 341.3;\n          visibility: visible;\n        }\n        to {\n          animation-timing-function: ease-out;\n          stroke-dasharray: 0 297 45 341.3;\n          visibility: visible;\n        }\n      }\n      @keyframes circle {\n        from {\n          r: 0;\n        }\n        to {\n          r: 50px;\n        }\n      }\n      @keyframes reappear {\n        from {\n          visibility: hidden;\n        }\n        to {\n          visibility: visible;\n        }\n      }\n    ",
        }}
      />
      <svg
        className="check-spinner"
        viewBox="0 0 100 100"
        width="100px"
        height="100px"
      >
        <defs>
          <linearGradient id="cs-grad-1" x1="0.5" y1={0} x2="0.5" y2={1}>
            <stop offset="0%" stopColor="hsl(0,0%,100%)" />
            <stop offset="100%" stopColor="hsl(0,0%,80%)" />
          </linearGradient>
          <linearGradient
            id="cs-grad-2a"
            x1="0.5"
            y1={0}
            x2="0.5"
            y2={1}
            gradientTransform="rotate(90,0.5,0.5)"
          >
            <stop offset="0%" stopColor="hsl(123,90%,55%)" />
            <stop offset="100%" stopColor="hsl(183,90%,25%)" />
          </linearGradient>
          <linearGradient id="cs-grad-2b" x1="0.5" y1={0} x2="0.5" y2={1}>
            <stop offset="0%" stopColor="hsl(123,90%,55%)" />
            <stop offset="100%" stopColor="hsl(183,90%,25%)" />
          </linearGradient>
        </defs>
        <circle
          className="check-spinner__circle"
          cx={50}
          cy={50}
          r={0}
          fill="url(#cs-grad-1)"
        />
        <circle
          className="check-spinner__worm-a"
          cx={50}
          cy={50}
          r={46}
          fill="none"
          stroke="url(#cs-grad-2a)"
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray="72.2 216.8"
          strokeDashoffset="36.1"
          transform="rotate(-90,50,50)"
        />
        <path
          className="check-spinner__worm-b"
          d="M 17.473 17.473 C 25.797 9.15 37.297 4 50 4 C 75.4 4 96 24.6 96 50 C 96 75.4 75.4 96 50 96 C 24.6 96 4 75.4 4 50 C 4 44.253 6.909 36.33 12.5 35 C 21.269 32.913 35 50 35 50 L 45 60 L 65 40"
          fill="none"
          stroke="url(#cs-grad-2b)"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 0 72.2 341.3"
        />
      </svg>
      <button id="replay" type="button" disabled>
        Your account has been verified
      </button>
      <a href="http://localhost:3000/dashboard">
        <button id="replay" type="button">
          Go to Dashboard
        </button>
      </a>
    </div>
  );
}

export default EmailSent;
