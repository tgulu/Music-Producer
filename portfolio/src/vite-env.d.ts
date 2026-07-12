/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SMTP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
