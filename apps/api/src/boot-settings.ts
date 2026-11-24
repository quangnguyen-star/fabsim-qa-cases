// Boot settings: tolerate a missing global appSettings object instead of crashing at startup.
const settings = (globalThis as unknown as { appSettings?: { greeting?: string } }).appSettings;
export const greeting: string = settings?.greeting ?? "hello";
console.log(`greeting: ${greeting}`);
