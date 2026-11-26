import request from "supertest";
import { describe, expect, it } from "vitest";
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
