import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        index: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./login.html"),
        cartproducts: resolve(__dirname, "./cartproducts.html"),
        pay: resolve(__dirname, "./pay.html"),
        productDetail: resolve(__dirname, "./productDetail.html"),
        shops: resolve(__dirname, "./shops.html")
      }
    }
  }
});
