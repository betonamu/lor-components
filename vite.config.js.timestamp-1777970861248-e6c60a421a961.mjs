// vite.config.js
import { defineConfig } from "file:///C:/Users/Admin/Desktop/New%20folder/components2/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Admin/Desktop/New%20folder/components2/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { lingui } from "file:///C:/Users/Admin/Desktop/New%20folder/components2/node_modules/@lingui/vite-plugin/dist/index.cjs";
import svgr from "file:///C:/Users/Admin/Desktop/New%20folder/components2/node_modules/vite-plugin-svgr/dist/index.js";
import tailwindcss from "file:///C:/Users/Admin/Desktop/New%20folder/components2/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    outDir: "build"
  },
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {}]]
    }),
    lingui(),
    svgr({
      include: "**/*.svg"
    }),
    tailwindcss()
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXJcXFxcY29tcG9uZW50czJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlclxcXFxjb21wb25lbnRzMlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW4vRGVza3RvcC9OZXclMjBmb2xkZXIvY29tcG9uZW50czIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCB7IGxpbmd1aSB9IGZyb20gXCJAbGluZ3VpL3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3Qoe1xuICAgICAgICAgICAgcGx1Z2luczogW1tcIkBsaW5ndWkvc3djLXBsdWdpblwiLCB7fV1dLFxuICAgICAgICB9KSxcbiAgICAgICAgbGluZ3VpKCksXG4gICAgICAgIHN2Z3Ioe1xuICAgICAgICAgICAgaW5jbHVkZTogXCIqKi8qLnN2Z1wiLFxuICAgICAgICB9KSxcbiAgICAgICAgdGFpbHdpbmRjc3MoKSxcbiAgICBdLFxuICAgIGNzczoge1xuICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICBsb2NhbHNDb252ZW50aW9uOiBcImNhbWVsQ2FzZVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBcIi9zcmNcIiB9XSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVVLFNBQVMsb0JBQW9CO0FBQ3BXLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWM7QUFDdkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8saUJBQWlCO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxNQUFNO0FBQUEsTUFDRixTQUFTLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUN4QyxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDRCxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsRUFDaEI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLGtCQUFrQjtBQUFBLElBQ3RCO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsT0FBTyxDQUFDO0FBQUEsRUFDOUM7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
