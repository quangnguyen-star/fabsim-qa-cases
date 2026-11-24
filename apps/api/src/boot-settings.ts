const settings = (globalThis as unknown as { appSettings?: { greeting?: string } }).appSettings;
export const greeting: string = settings?.greeting ?? "hello";
console.log(`greeting: ${greeting}`);
