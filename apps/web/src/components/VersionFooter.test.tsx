import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import VersionFooter from "./VersionFooter";

describe("VersionFooter", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows the fetched version", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ version: "1.2.3" }))),
    );
    render(<VersionFooter />);
    expect(await screen.findByText("v1.2.3")).toBeInTheDocument();
  });

  it("renders nothing visible when the fetch fails", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("boom", { status: 500 }));
    vi.stubGlobal("fetch", fetchMock);
    render(<VersionFooter />);
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    expect(screen.getByTestId("version-footer")).toBeEmptyDOMElement();
  });
});
