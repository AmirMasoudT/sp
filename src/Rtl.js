import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

// Create RTL cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugin: [prefixer, rtlPlugin],
});

const Rtl = ({ children }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default Rtl;
