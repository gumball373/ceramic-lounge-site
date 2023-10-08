/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STRIPE_SECRET_KEY: string;
    readonly PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    readonly STRIPE_ENDPOINT_SECRET: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }