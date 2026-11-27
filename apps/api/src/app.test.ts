import request from "supertest";
import { afterEach, describe, expect, it } from "vitest";
import { createApp } from "./app";

describe("GET /api/health", () => {
  it("returns ok", async () => {
    const res = await request(createApp()).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("GET /api/status", () => {
  it("returns the status document", async () => {
    const res = await request(createApp()).get("/api/status");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true, maintenance: false, version: 2, message: null });
  });
});

describe("GET /api/version", () => {
  const original = process.env.APP_VERSION;
  afterEach(() => {
    if (original === undefined) delete process.env.APP_VERSION;
    else process.env.APP_VERSION = original;
  });

  it("returns a non-empty version string", async () => {
    delete process.env.APP_VERSION;
    const res = await request(createApp()).get("/api/version");
    expect(res.status).toBe(200);
    expect(typeof res.body.version).toBe("string");
    expect(res.body.version.length).toBeGreaterThan(0);
  });

  it("prefers APP_VERSION when set", async () => {
    process.env.APP_VERSION = "9.9.9-override";
    const res = await request(createApp()).get("/api/version");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ version: "9.9.9-override" });
  });
});
