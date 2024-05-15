import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'src/setupTests.js',
    },
})

function stubNextAssetImport() {
    return {
        name: 'stub-next-asset-import',
        transform(_code, id) {
            if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
                const imgSrc = path.relative(process.cwd(), id);
                return {
                    code: `export default { src: '${imgSrc}', height: 1, width: 1 }`,
                };
            }
        },
    };
}