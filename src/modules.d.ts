declare global {
  interface Window {
    // tests can set a different storage key
    RWNS_LOCAL_STORAGE_KEY: string;
  }
}

// must show that this is a module file
export {};
