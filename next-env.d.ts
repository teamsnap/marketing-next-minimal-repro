/// <reference types="next" />
/// <reference types="next/types/global" />

// Monkey patch center element needed for return to sports iframe hack
declare namespace JSX {
  interface IntrinsicElements {
    center: any;
    'video-js': any;
  }
}

// Monkey patch to allow particlesJS on the window obj for return to sports
declare namespace globalThis {
  interface Window {
    particlesJS: any;
    dataLayer: any;
    BSN: any;
    TSChat: {
      startLink: Function;
      startLinkState: boolean;
    };
    SnapABug: any;
    chatVarExp: any;
    gaData: any;
    chatVar: Object;
    SnapEngage: any;
    StatusPage: any;
    clientID: string;
    Beacon: Function;
    ga: { getAll: Function };
    YT: {
      get: Function;
    };
  }
  interface Element {
    checkValidity: Function;
    reportValidity: Function;
    name: string;
    style: any;
    contentWindow: any;
    disabled: any; // temporary, for URLBuilder()
    innerText: any; // temporary, for URLBuilder()
    value: any; // temporary, for URLBuilder()
    src: any;
    async: boolean;
    dataset: any;
    pause: Function;
    play: Function;
  }
  interface HTMLElement {
    value: any; // temporary, for URLBuilder()
    setSelectionRange: any; // temporary, for URLBuilder()
    select: any; // temporary, for URLBuilder()
  }
  interface HTMLScriptElement {
    onreadystatechange: any;
  }
  interface EventTarget {
    getAttribute: any;
  }
}
