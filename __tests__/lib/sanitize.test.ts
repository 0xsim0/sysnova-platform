import { describe, it, expect } from "vitest";
import { sanitizeHeader, escapeHtml } from "@/lib/email";

describe("sanitizeHeader", () => {
  it("entfernt Carriage Return", () => {
    expect(sanitizeHeader("Name\rInjection")).toBe("NameInjection");
  });
  it("entfernt Newline", () => {
    expect(sanitizeHeader("Name\nInjection")).toBe("NameInjection");
  });
  it("entfernt Tab", () => {
    expect(sanitizeHeader("Name\tInjection")).toBe("NameInjection");
  });
  it("entfernt CRLF-Kombination", () => {
    expect(sanitizeHeader("Subject\r\nBcc: evil@example.com")).toBe(
      "SubjectBcc: evil@example.com"
    );
  });
  it("trimmt führende/nachfolgende Leerzeichen", () => {
    expect(sanitizeHeader("  Hello  ")).toBe("Hello");
  });
  it("lässt normalen Text unverändert", () => {
    expect(sanitizeHeader("Anfrage von Max Mustermann")).toBe(
      "Anfrage von Max Mustermann"
    );
  });
  it("gibt leeren String zurück bei leerem Input", () => {
    expect(sanitizeHeader("")).toBe("");
  });
});

describe("escapeHtml", () => {
  it("escaped &", () => {
    expect(escapeHtml("Tom & Jerry")).toBe("Tom &amp; Jerry");
  });
  it("escaped <", () => {
    expect(escapeHtml("<script>")).toBe("&lt;script&gt;");
  });
  it("escaped >", () => {
    expect(escapeHtml("a > b")).toBe("a &gt; b");
  });
  it("escaped Anführungszeichen", () => {
    expect(escapeHtml('"quoted"')).toBe("&quot;quoted&quot;");
  });
  it("escaped vollständige XSS-Payload", () => {
    expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe(
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;"
    );
  });
  it("lässt normalen Text unverändert", () => {
    expect(escapeHtml("Hallo Welt")).toBe("Hallo Welt");
  });
  it("gibt leeren String zurück bei leerem Input", () => {
    expect(escapeHtml("")).toBe("");
  });
});
