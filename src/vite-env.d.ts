/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_NEWS_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
