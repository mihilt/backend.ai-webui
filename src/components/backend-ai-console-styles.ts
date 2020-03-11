import {css} from 'lit-element';

export const BackendAiConsoleStyles =
  // language=CSS
  css`
    .site-name {
      text-align: center;
      margin-left: 0;
      margin-right: auto;
      line-height: 16px;
      font-size: 16px;
      font-weight: 100;
      color: var(--general-sidebar-topbar-color, #efefef);
      font-family: var(--general-font-family);
    }

    .site-name > .bold {
      font-weight: 400;
    }

    .mini-ui .site-name,
    .mini-ui #sidebar-navbar-footer {
      display: none;
    }

    .drawer-menu {
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      will-change: transform;
      background-color: var(--general-sidebar-background-color, #fafafa);
    }

    .drawer-menu .portrait-bar {
      padding-left: 0 !important;
      background-color: transparent;
      color: var(--general-sidebar-topbar-color);
      height: 80px;
    }

    .drawer-menu h3 {
      height: 12px;
      font-size: 12px;
      font-weight: 400;
      padding: 5px 15px 10px 15px;
      margin: 0;
      display: block;
      color: var(--general-sidebar-h3-color);
      border-top: var(--general-sidebar-h3-border-color);
    }

    .drawer-menu,
    mwc-list.sidebar,
    .drawer-menu footer,
    #sidebar-navbar-footer {
      background-color: var(--sidebar-background-color, var(--general-sidebar-background-color, #fafafa));
    }

    mwc-list.sidebar {
      cursor: pointer;
      color: var(--general-sidebar-color, #eeeeee);
    }

    mwc-list.sidebar mwc-list-item {
      --mdc-theme-primary: var(--general-sidebar-selected-color, #eeeeee);
      --mdc-theme-text-primary-on-background: var(--general-sidebar-color, #eeeeee);
      --mdc-list-item-graphic-margin: 15px;
      height: 48px;
    }

    mwc-list.sidebar mwc-list-item[selected] {
      color: var(--general-sidebar-selected-color, #eeeeee);
      background: var(--general-sidebar-selected-background-color, #23252b);
      border-left: var(--general-sidebar-selected-border-left);
      padding-left: 11px;
      border-right: 0;
      padding-right: 11px;
      font-weight: 900;
    }

    .mini-ui mwc-list.sidebar mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    #app-body {
      --mdc-drawer-background-color: var(--sidebar-background-color, var(--general-sidebar-background-color, #fafafa));
      --mdc-drawer-border-left: 0;
      --mdc-drawer-border-right: 0;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    .drawer-menu footer {
      bottom: 0;
      color: var(--general-sidebar-footer-color, #aaaaaa);
      background-color: var(--general-sidebar-background-color);
      margin: 0;
      padding-bottom: 5px;
      font-size: 10px;
    }

    .drawer-menu footer a {
      color: var(--general-sidebar-footer-color, #aaaaaa) !important;
    }

    .page {
      display: none;
    }

    .page[active] {
      display: block;
    }

    wl-progress-spinner {
      --progress-spinner-size: 48px;
      --progress-spinner-stroke-width: 12px;
      width: 48px;
      height: 48px;
      position: fixed;
      top: calc(50vh - 24px);
    }

    @media screen and (max-width: 899px) {
      wl-progress-spinner {
        left: calc(50% - 24px);
      }
    }

    @media screen and (min-width: 900px) {
      wl-progress-spinner {
        left: calc(50% + 71px);
      }
    }

    .draggable {
      -webkit-user-select: none !important;
      -webkit-app-region: drag !important;
    }

    .drawer-menu footer {
      width: 190px;
    }

    mwc-tab {
      color: #ffffff;
    }

    wl-select {
      --input-bg: transparent;
      --input-color: rgb(221, 221, 221);
      --input-color-disabled: rgb(221, 221, 221);
      --input-label-color: rgb(221, 221, 221);
      --input-label-font-size: 10px;
      --input-padding-left-right: 0;
      width: 135px;
      --input-border-style: 0;
      --input-font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
    }

    wl-dialog wl-textfield {
      --input-font-family: 'Quicksand', Roboto, Noto, sans-serif;
      --input-color-disabled: #222222;
      --input-label-color-disabled: #222222;
      --input-label-font-size: 12px;
      --input-border-style-disabled: 1px solid #cccccc;
    }

    mwc-list-item {
      font-family: 'Quicksand', Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", AppleSDGothic, "Apple SD Gothic Neo", NanumGothic, "NanumGothicOTF", "Nanum Gothic", "Malgun Gothic", sans-serif;
      font-weight: 400;
    }

    a.email:hover {
      color: #29b6f6;
    }

    mwc-menu.user-menu {
      --mdc-theme-surface: #f1f1f1;
      --mdc-menu-item-height: auto;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    mwc-menu.user-menu mwc-list-item {
      font-size: 16px;
    }

    mwc-menu.user-menu mwc-list-item mwc-icon {
      --mdc-icon-size: 16px;
    }

    .mini-ui .full-menu {
      display: none;
      margin: 0 !important;
    }

    .sidebar-footer {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      line-height: 16px;
      font-size: 12px;
      font-weight: 100;
      font-family: var(--general-font-family);
    }

    .portrait-canvas {
      margin-left: 16px;
      padding-right: 5px;
    }

    .mini-ui .portrait-canvas {
      margin-left: 8px;
      padding-right: 0;
    }

    #main-panel-toolbar-buttons paper-icon-button {
      min-width: 40px;
    }

    .drawer-menu::-webkit-scrollbar {
      display: none !important;
    }

    #portrait-bar {
      height: 48px;
    }

    #main-toolbar {
      background-color: var(--general-menu-background-color);
      color: var(--general-menu-color);
      z-index: 1;
      overflow: visible;
    }

    #main-toolbar h2 {
      margin: 0 0 0 15px;
      font-weight: 300;
    }

    #sidebar-navbar-footer {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0 !important; /* Workaround to prevent miscalculated height */
      text-align: center;
      height: 45px;
      border-top: 1px solid #eeeeee;
      background-color: var(--general-navbar-footer-background-color);
      color: var(--general-sidebar-navbar-footer-color);
    }

    #sidebar-navbar-footer:before {
      content: "";
      position: absolute;
      top: -1px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba(214, 214, 214, 0.4);
    }

    @supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
      #main-toolbar {
        /*-webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);*/
      }

      #sidebar-navbar-footer {
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
        border: 0px none;
      }

      #sidebar-navbar-footer:before {
        content: "";
        position: absolute;
        top: -1px;
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(214, 214, 214, 0.4);
      }
    }

    @media screen and (max-width: 449px) {
      #sidebar-navbar-footer {
        border-top: 1px solid #eeeeee;
        background-color: var(--general-navbar-footer-background-color);
        color: var(--general-sidebar-navbar-footer-color);
      }
    }

    @media screen and (min-width: 450px) {
      #sidebar-navbar-footer {
        border-top: 1px solid var(--general-sidebar-background-color);
        background-color: var(--general-sidebar-background-color);
        color: var(--general-sidebar-color);
      }
    }
  `;
