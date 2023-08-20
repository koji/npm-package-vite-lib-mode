# npm-package-vite-lib-mode

installed plugins
- @vitejs/plugin-react
- vite-plugin-dts

`vite.config.ts`
```ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MySampleLibrary',
      fileName: 'index',
      formats: ['es', 'umd'], // es module and umd
    },
  },
  plugins: [react(), dts()],
})
```


## build package

```shell
pnpm run build
```

The build is going well, you will see the following files in `dist`
- index.js
- index.d.ts
- index.umd.js
