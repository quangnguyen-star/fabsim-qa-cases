// sim-matrix start-crash: reads a settings object nobody set, so boot dies with a TypeError.
const settings = (globalThis as unknown as { appSettings: { greeting: string } }).appSettings;
export const greeting: string = settings.greeting;
console.log(`greeting: ${greeting}`);
