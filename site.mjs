import { mountToolkitHeader, mountToolkitFooter } from "./toolkit-common/toolkit.mjs";

mountToolkitHeader(document.querySelector("#toolkit-header"));
mountToolkitFooter(document.querySelector("#toolkit-footer"), {
  githubUrl: "https://github.com/KihiraLove/kihiras-toolkit"
});